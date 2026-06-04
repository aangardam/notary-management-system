import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod"
import { IClient } from "../interfaces/client";
import { create, update } from "../services/client.service";
import { toast } from "sonner";

const schema = z.object({
    full_name: z.string().min(3),
    identity_number: z.string().min(3),
    phone: z.string().min(3),
    email: z.string().email(),
    address: z.string().min(3),
})

const useClient = (data?: IClient, onClose?: () => void) => {
    const [isLoading, setIsLoading] = useState(false);
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            full_name: data?.full_name || '',
            identity_number: data?.identity_number || '',
            phone: data?.phone || '',
            email: data?.email || '',
            address: data?.address || '',
        },
    });

    let IdClient: string | number = 0;
    if (data) {
        IdClient = data.id;
    }
    // console.log(form.formState.errors)
    const handleSubmit = (data: z.infer<typeof schema>) => {
        // console.log(data)
        setIsLoading(true);
        const payload = {
            full_name: data.full_name,
            identity_number: data.identity_number,
            phone: data.phone,
            email: data.email,
            address: data.address,
        }

        // console.log(payload)
        actionClient(payload)
        if (onClose) onClose();
    };

     const action = async (payload: any) => {
        let res;
        if (IdClient != 0) { 
            res = await update(`${IdClient}`, payload)
        } else {
            res = await create(payload)
        }
        
        return res
     }
    
    const { mutate: actionClient } = useMutation({
        mutationFn: action,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["clients"],
            })
            let message = 'Client created successfully';
            if (IdClient != 0) {
                message = 'Client updated successfully';
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

export default useClient