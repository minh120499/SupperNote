import type { Category } from './Category'

export enum ExpenseType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export type PersonalExpensesRequest = {
  id?: number
  userId?: number
  title: string
  amount: number
  type: ExpenseType
  category: string
  description?: string
}

export type PersonalExpensesResponse = {
  id: number
  userId: number
  title: string
  amount: number
  type: ExpenseType
  category: Category
  description?: string
}
