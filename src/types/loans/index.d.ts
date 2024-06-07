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
  amount :  number | string,
  group : number | string | null,
  interest_rate :  number | string,
  interest_amount :  number | string,
  application_fee :  number | string,
  total_loan_debt :  number | string,
  date_of_disbursement :  number | string,
  expiry_date :  number | string,
  collateral :  number | string,
  request_date :  number | string,
  repayment_period : number | string,
  repayment_period_type :  number | string,
}

export interface LoanResponse {
  payload: any;
  message: string;
  error: string[]
}
