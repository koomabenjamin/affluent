export type Endpoint = string;

export type MemberPayload = Member[];

export interface MemberResponse {
  payload: any;
  message: string;
  error: string[]
}

export interface Member {
  id: number;
  name: string;
  email: string;
  groups: object[];
  created_at: string;
  updated_at: string;
}

export interface MemberRequest {
  first_name: string
  last_name: string
  name: string
  phone_number: string
  username: string
  email: string
  password: string
  password_confirmation: string
  country: string
  state: string
  city: string
}