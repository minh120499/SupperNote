import apiClient from "./apiClient"
import type { Category } from "./models/Category"

export class CategoryApi {
  static async getCategories() {
    const res = await apiClient.get<Category[]>('/api/categories')
    return res.data
  }
}

