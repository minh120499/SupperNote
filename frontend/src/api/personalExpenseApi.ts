import apiClient from './apiClient'

export const fetchPersonalExpenses = async () => {
  const res = await apiClient.get<any>('/api/personal_expense/json-string-alt')
  return res.data
}
