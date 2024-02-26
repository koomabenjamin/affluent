export type Endpoint = string;

export interface Loan {
  id: number;
  amount : number,
  member : number | string,
  group : number | string,
  interest_rate : number,
  interest_amount : number,
  application_fee : number,
  total_loan_debt : number,
  date_of_disbursement : string,
  expiry_date : string,
  collateral : string,
  request_date : string,
  repayment_period : number | string,
  repayment_period_type : string,
  created_by : string,
  updated_by : string,
}

export type LoanPayload = Loan[];

export interface LoanRequest {
  amount : number,
  member : number | string,
  group : number | string,
  interest_rate : number,
  interest_amount : number,
  application_fee : number,
  total_loan_debt : number,
  date_of_disbursement : string,
  expiry_date : string,
  collateral : string,
  request_date : string,
  repayment_period : number | string,
  repayment_period_type : string,
}

export interface LoanResponse {
  payload: any;
  message: string;
  error: string[]
}
