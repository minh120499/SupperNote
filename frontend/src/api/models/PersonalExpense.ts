export enum ExpenseType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export type PersonalExpenses = {
  id: number
  userId: number
  title: string
  amount: number
  type: ExpenseType
  category: string[]
  description?: string
}
