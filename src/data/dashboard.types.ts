export interface DashboardDataset {
  sales: SalesDataset[];
  users: UserDataset[];
  summary: SummaryDataset;
  transactions: TransactionDataset[];
}
export interface SalesDataset {
  name: string;
  sales: number;
}
export interface UserDataset {
  name: string;
  users: number;
}
export interface SummaryDataset {
  revenue: string;
  totalUsers: string;
  growth: string;
  orders: string;
}

export type TransactionDataset = {
  id: string;
  customer: string;
  status: string;
  amount: number;
  statusColor?: string;
};

export type DatasetWrapper<T> = Record<string, T>;
