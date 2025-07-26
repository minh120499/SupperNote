import axios from 'axios';

export interface ApiErrorResponse {
  timestamp?: Date
  status?: number;
  errors?: string
  trace?: string
  message?: string
  path?: number
}

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor cho response error
apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.data) {
      return Promise.reject(error.response.data as ApiErrorResponse)
    }
    return Promise.reject({ message: 'Unknown error' } as ApiErrorResponse)
  }
)

export default apiClient
