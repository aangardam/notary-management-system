export interface IDocument {
  id: string;
  document_number: string;
  title: string;
  client_id: string;
  document_type_id: string;
  status: string;
  notes: string;
  created_at: string;
  updated_at: string;
}
  
export interface IBodyRequest {
    document_number: string;
    title: string;
    client_id: string;
    document_type_id: string;
    status: string;
    notes: string;
}