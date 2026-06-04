export interface IClient {
  id: string;
  full_name: string;
  identity_number: string;
  phone: string;
  email: string;
  address: string;
  created_at: string;
}

export interface IBodyRequest {
    full_name: string;
    identity_number: string;
    phone: string;
    email: string;
    address: string;
}