
import useDeleteClient from "@/app/(features)/(root)/clients/hooks/use-delete";
import useDeleteDocument from "@/app/(features)/(root)/document/(documents)/hooks/use-delete";
import useDeleteDocumentType from "@/app/(features)/(root)/document/types/hooks/use-delete";


export function useDeleteByMenuType(type: string) {
  const deleteClient = useDeleteClient();
  const deleteDocumentType = useDeleteDocumentType();
  const deleteDocument = useDeleteDocument();
  
  switch (type) {
    case "client":
      return deleteClient.mutateDeleteClient;
    case "document-type":
      return deleteDocumentType.mutateDeleteDocumentType;
    case "document":
      return deleteDocument.mutateDeleteDocument;
    default:
      return undefined;
  }
}
