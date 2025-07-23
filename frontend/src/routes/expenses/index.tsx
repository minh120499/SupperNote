import { createFileRoute } from '@tanstack/react-router'

import { ExpensesListPage } from '@/pages/expenses/ExpensesListPage'

export const Route = createFileRoute('/expenses/')({
  component: ExpensesListPage,
})

// function RouteComponent() {
//   return <div>Hello "/expenses/"!</div>
// }
