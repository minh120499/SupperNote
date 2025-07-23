import { createFileRoute } from '@tanstack/react-router'

import { ExpensesCreatePage } from '@/pages/expenses/ExpensesCreatePage'

export const Route = createFileRoute('/expenses/create')({
  component: ExpensesCreatePage,
})
