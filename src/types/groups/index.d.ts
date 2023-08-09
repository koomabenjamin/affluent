export interface CreateGroupModalProps {
  open?: boolean | undefined;
}

export interface GroupCreationResponse {
  message: string;
  errors?: object;
  status?: string;
  data?: object | any;
}

export interface GroupCreationResponseError {
  email?: string,
  name?: string,
}

export interface GroupCreationRequest {
  name: string;
  description: string;
  email: string;
  phone_number: string,
  account_number: string;
  initial_account_balance: string;
  contract_start_date: string;
  contract_end_date: string;
  status: number;
}