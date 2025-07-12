import { useQuery } from '@tanstack/react-query'
import { fetchPersonalExpenses } from '@/api/personalExpenseApi'

export const ExpensesListPage = () => {
  const { data: personalExpenses } = useQuery({
    queryKey: [],
    queryFn: fetchPersonalExpenses,
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  console.log(personalExpenses)

  return <div>fdasdf</div>
}
