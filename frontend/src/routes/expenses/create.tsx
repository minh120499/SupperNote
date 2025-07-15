import { ExpensesCreatePage } from '@/pages/expenses/ExpensesCreatePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/expenses/create')({
  component: ExpensesCreatePage,
})
