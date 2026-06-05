
import useDeleteClient from "@/app/(features)/(root)/clients/hooks/use-delete";
import useDeleteDocumentType from "@/app/(features)/(root)/document/types/hooks/use-delete";


export function useDeleteByMenuType(type: string) {
  const deleteClient = useDeleteClient();
  const deleteDocumentType = useDeleteDocumentType();
  
  switch (type) {
    case "client":
      return deleteClient.mutateDeleteClient;
    case "document-type":
      return deleteDocumentType.mutateDeleteDocumentType;
    default:
      return undefined;
  }
}
