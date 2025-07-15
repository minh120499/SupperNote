import apiClient from './apiClient'
import type { PersonalExpenses } from './models/PersonalExpense'

export const fetchPersonalExpenses = async () => {
  const res = await apiClient.get<PersonalExpenses[]>('/api/personal_expense')
  return res.data
}
