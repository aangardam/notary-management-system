export interface IDocumentType {
  id: string;
  code: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}
  
export interface IBodyRequest {
    full_name: string;
    code: string;
    name: string;
    description: string;
}