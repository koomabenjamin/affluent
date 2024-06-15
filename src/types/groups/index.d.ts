export interface Group {
  account_number: string | number;
  contract_end_date: string | number | null;
  contract_start_date: string;
  created_at: string;
  created_by: string;
  description: string;
  email: string;
  members: string[] | object[];
  id: number;
  initial_account_balance: string | number;
  name: string | number;
  phone_number: string | number;
  status: number;
  updated_at: string;
  updated_by: string | null;
}