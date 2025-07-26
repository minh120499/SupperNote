import apiClient from './apiClient'
import type { PersonalExpensesRequest, PersonalExpensesResponse } from './models/PersonalExpense'

export default class PersonalExpenseApi {

  static async fetchPersonalExpenses () {
    const res = await apiClient.get<PersonalExpensesResponse[]>('/api/personal_expense')
    return res.data
}

  static async createPersonalExpense(values: PersonalExpensesRequest) {
    const res = await apiClient.post('/api/personal_expense', values)
    return res.data
  }
}