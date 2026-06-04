import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteClient } from "../services/client.service";

const useDeleteClient = () => {
    const queryClient = useQueryClient();

    const deleteFn = async ({ id }: { id: string }) => {
        const res = await deleteClient(`${id}`)
        return res
    }

    const { mutate: mutateDeleteClient } = useMutation({
        mutationFn: deleteFn,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["clients"],
            })
            toast.success("Client deleted successfully")
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : String(error), { duration: 3000 })
        },
    })

    return {
        mutateDeleteClient
    }
}

export default useDeleteClient