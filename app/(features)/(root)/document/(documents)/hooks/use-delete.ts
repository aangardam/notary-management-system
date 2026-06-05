import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteDocument } from "../services/document.service";


const useDeleteDocument = () => {
    const queryClient = useQueryClient();

    const deleteFn = async ({ id }: { id: string }) => {
        const res = await deleteDocument(`${id}`)
        return res
    }

    const { mutate: mutateDeleteDocument } = useMutation({
        mutationFn: deleteFn,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["documents"],
            })
            toast.success("Document deleted successfully")
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : String(error), { duration: 3000 })
        },
    })

    return {
        mutateDeleteDocument
    }
}

export default useDeleteDocument