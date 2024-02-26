export interface Collection {
  id: number;
  member: number;
  group: number;
  amount: number;
  period: string;
  payment_date: string;
  account_paid_from: string;
  account_paid_to: string;
  payment_method: string;
  payment_note: string;
  created_by?: number;
  updated_by?: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export type CollectionPayload = Collection[];

export interface CollectionRequest {
  group: string,
  member: string,
  period: string,
  amount: number,
  account_paid_from: number,
  account_paid_to: number,
  payment_method: string,
  payment_date: string,
  payment_note: string,
}

export interface CollectionResponse {
  payload: any;
  message: string;
  error: string[]
}
