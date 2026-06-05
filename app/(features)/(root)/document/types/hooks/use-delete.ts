import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteDocumentType } from "../services/document-types.service";


const useDeleteDocumentType = () => {
    const queryClient = useQueryClient();

    const deleteFn = async ({ id }: { id: string }) => {
        const res = await deleteDocumentType(`${id}`)
        return res
    }

    const { mutate: mutateDeleteDocumentType } = useMutation({
        mutationFn: deleteFn,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["document_types"],
            })
            toast.success("Document type deleted successfully")
        },
        onError: (error) => {
            toast.error(error instanceof Error ? error.message : String(error), { duration: 3000 })
        },
    })

    return {
        mutateDeleteDocumentType
    }
}

export default useDeleteDocumentType