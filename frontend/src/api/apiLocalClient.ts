import axios from 'axios'

const apiLocalClient = axios.create({
  baseURL: import.meta.env.VITE_API_LOCAL_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiLocalClient
