export const LOAN_TYPES = [
  'Flexi-Loan',
  'Business Loan',
  'Cash Advance',
  'RLS',
  'CBILS',
] as const;

export type TLoanType = (typeof LOAN_TYPES)[number];

export type TApplication = {
  id: number;
  first_name: string;
  last_name: string;
  loan_amount: number;
  loan_type: TLoanType;
  email: string;
  company: string;
  date_created: Date;
  expiry_date: Date;
  avatar: string;
  loan_history: TLoanHistory[];
};

export type TLoanHistory = {
  loan_started: Date;
  loan_ended: Date;
  principle: number;
  interest_rate: number;
  interest: number;
};

export type TApplicationDBRow = {
  applications: TApplication[];
};
