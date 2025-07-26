import { Button, Flex, NumberFormatter, Paper, Text } from '@mantine/core'
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
      <Flex direction="column" gap="md" wrap="wrap">
        {personalExpenses?.map(expense => (
          <Paper withBorder key={expense.id}>
            <Text>Title: {expense.title || 'test'}</Text>
            <Text>
              Amount: <NumberFormatter value={expense.amount} />
            </Text>
            <Text>Type: {expense.type}</Text>
            <Text>Category: {expense.category.title}</Text>
            <Text>Description: {expense.description}</Text>
          </Paper>
        ))}
      </Flex>
      <Button onClick={handleAddExpense}>Add</Button>
    </div>
  )
}
