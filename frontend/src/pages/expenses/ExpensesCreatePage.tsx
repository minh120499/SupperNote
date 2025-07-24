import {
  Button,
  NumberInput,
  SegmentedControl,
  TagsInput,
  TextInput,
} from '@mantine/core'
import { useForm } from '@tanstack/react-form'

import { CategoryApi } from '@/api/CategoryApi'
import {
  ExpenseType,
  type PersonalExpenses,
} from '@/api/models/PersonalExpense'
import PersonalExpenseApi from '@/api/PersonalExpenseApi'
import { useMutation, useQuery } from '@tanstack/react-query'

export const ExpensesCreatePage = () => {
  const form = useForm({
    defaultValues: {
      title: '',
      amount: 0,
      category: [],
      type: ExpenseType.EXPENSE,
      description: '',
    } as unknown as PersonalExpenses,
    onSubmit: ({ value }) => {
      handleSubmit(value)
    },
  })

  const handleSubmit = (values: PersonalExpenses) => {
    console.log(values)
  }

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: CategoryApi.getCategories,
  })

  const { mutate: createPersonalExpense, isPending } = useMutation({
    mutationFn: (values: PersonalExpenses) => {
      return PersonalExpenseApi.createPersonalExpense(values)
    },
  })

  const { Field } = form

  return (
    <div>
      <Field
        name="title"
        children={field => {
          return (
            <TextInput
              label="Title"
              placeholder="Enter title"
              withAsterisk
              value={field.state.value}
              onChange={event => field.handleChange(event.target.value)}
            />
          )
        }}
      />

      <Field
        name="amount"
        children={field => {
          return (
            <NumberInput
              label="Amount"
              placeholder="Enter amount"
              withAsterisk
              value={field.state.value}
              onChange={value => field.handleChange(Number(value))}
            />
          )
        }}
      />

      <Field
        name="type"
        children={field => {
          return (
            <SegmentedControl
              data={Object.values(ExpenseType)}
              value={field.state.value}
              onChange={value => field.handleChange(value as ExpenseType)}
            />
          )
        }}
      />

      <Field
        name="category"
        children={field => {
          return (
            <TagsInput
              label="Category"
              placeholder="Enter category"
              withAsterisk
              value={field.state.value}
              data={categories?.map(category => category.title) ?? []}
              onChange={field.handleChange}
            />
          )
        }}
      />

      <Field
        name="description"
        children={field => {
          return (
            <TextInput
              label="Description"
              placeholder="Enter description"
              value={field.state.value}
              onChange={event => field.handleChange(event.target.value)}
            />
          )
        }}
      />

      <Button onClick={form.handleSubmit}>Add</Button>
    </div>
  )
}
