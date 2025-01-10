import { ExpenseType } from './expense'

export type UserType = {
  id: number;
  name: string;
  email: string;
  expenses: ExpenseType[];
};
