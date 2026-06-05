import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"
import { toast } from "sonner";
import { IDocument } from "../interfaces/document";
import { create, update } from "../services/document.service";

const schema = z.object({
    document_number: z.string().min(1, "Document number is required"),
    title: z.string().min(1, "Title is required"),
    client_id: z.string().min(1, "Client ID is required"),
    document_type_id: z.string().min(1, "Document type ID is required"),
    status: z.string().min(1, "Status is required"),
    notes: z.string().optional(),
})

const useDocument = (data?: IDocument, onClose?: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            document_number: data?.document_number || '',
            title: data?.title || '',
            client_id: data?.client_id || '',
            document_type_id: data?.document_type_id || '',
            status: data?.status || '',
            notes: data?.notes || '',
        },
    });

    let IdDocument: string | number = 0;
    if (data) {
        IdDocument = data.id;
    }
    // console.log(form.formState.errors)
    const handleSubmit = (data: z.infer<typeof schema>) => {
        // console.log(data)
        setIsLoading(true);
        const payload = {
            document_number: data.document_number,
            title: data.title,
            client_id: data.client_id,
            document_type_id: data.document_type_id,
            status: data.status,
            notes: data.notes,
        }

       
        actionDocument(payload)
        if (onClose) onClose();
    };

     const action = async (payload: any) => {
        let res;
        if (IdDocument != 0) { 
            res = await update(`${IdDocument}`, payload)
        } else {
            res = await create(payload)
        }
        
        return res
     }
    
    const { mutate: actionDocument } = useMutation({
        mutationFn: action,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["documents"],
            })
            let message = 'Document created successfully';
            if (IdDocument != 0) {
                message = 'Document updated successfully';
            }
            setIsLoading(false);
            toast.success(message)
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : String(error), { duration: 3000 })
        },
    })

    return {
        handleSubmit,
        form,
        isLoading
    }
}

export default useDocument