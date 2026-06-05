import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"
import { toast } from "sonner";
import { IDocumentType } from "../interfaces/document-type";
import { create, update } from "../services/document-types.service";

const schema = z.object({
    code: z.string().min(3),
    name: z.string().min(3),
    description: z.string().min(3),
})

const useDocumentType = (data?: IDocumentType, onClose?: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            code: data?.code || '',
            name: data?.name || '',
            description: data?.description || '',
        },
    });

    let IdDocumentTypes: string | number = 0;
    if (data) {
        IdDocumentTypes = data.id;
    }
    // console.log(form.formState.errors)
    const handleSubmit = (data: z.infer<typeof schema>) => {
        // console.log(data)
        setIsLoading(true);
        const payload = {
            code: data.code,
            name: data.name,
            description: data.description,
        }

       
        actionDocumentTypes(payload)
        if (onClose) onClose();
    };

     const action = async (payload: any) => {
        let res;
        if (IdDocumentTypes != 0) { 
            res = await update(`${IdDocumentTypes}`, payload)
        } else {
            res = await create(payload)
        }
        
        return res
     }
    
    const { mutate: actionDocumentTypes } = useMutation({
        mutationFn: action,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["document_types"],
            })
            let message = 'Document type created successfully';
            if (IdDocumentTypes != 0) {
                message = 'Document type updated successfully';
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

export default useDocumentType