import apiClient from './apiClient'
import type { PersonalExpenses } from './models/PersonalExpense'

export default class PersonalExpenseApi {

  static async fetchPersonalExpenses () {
    const res = await apiClient.get<PersonalExpenses[]>('/api/personal_expense')
    return res.data
}

  static async createPersonalExpense(values: PersonalExpenses) {
    const res = await apiClient.post('/api/personal_expense', values)
    return res.data
  }
}