import { Button } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'

import PersonalExpenseApi from '@/api/PersonalExpenseApi'
import { appRouter } from '@/main'

export const ExpensesListPage = () => {
  const { data: personalExpenses } = useQuery({
    queryKey: [],
    queryFn: PersonalExpenseApi.fetchPersonalExpenses,
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  console.log(personalExpenses)

  const handleAddExpense = () => {
    appRouter.navigate({
      to: '/expenses/create',
    })
  }
  return (
    <div>
      <Button onClick={handleAddExpense}>Add</Button>
    </div>
  )
}
