
import useDeleteClient from "@/app/(features)/(root)/clients/hooks/use-delete";


export function useDeleteByMenuType(type: string) {
  const deleteClient = useDeleteClient();
  
  switch (type) {
    case "client":
      return deleteClient.mutateDeleteClient;
    default:
      return undefined;
  }
}
