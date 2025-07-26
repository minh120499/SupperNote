import {
  Button,
  NumberInput,
  SegmentedControl,
  TagsInput,
  TextInput,
} from '@mantine/core'
import { useForm } from '@tanstack/react-form'
import { useMutation, useQuery } from '@tanstack/react-query'

import { CategoryApi } from '@/api/CategoryApi'
import PersonalExpenseApi from '@/api/PersonalExpenseApi'
import type { ApiErrorResponse } from '@/api/apiClient'
import {
  ExpenseType,
  type PersonalExpensesRequest,
} from '@/api/models/PersonalExpense'
import { appRouter } from '@/main'
import NotificationsUtils from '@/utils/notifications'

const defaultValues: PersonalExpensesRequest = {
  title: '',
  amount: 0,
  type: ExpenseType.EXPENSE,
  category: '',
}

export const ExpensesCreatePage = () => {
  const form = useForm({
    defaultValues,
    onSubmit: ({ value }) => {
      handleSubmit(value)
    },
  })

  const handleSubmit = async (values: PersonalExpensesRequest) => {
    try {
      await createPersonalExpense(values)
      appRouter.navigate({
        to: '/expenses',
      })
    } catch (error: unknown) {
      const typedError = error as ApiErrorResponse
      NotificationsUtils.error(typedError.message)
    }
  }

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: CategoryApi.getCategories,
    refetchOnWindowFocus: false,
  })

  const { mutateAsync: createPersonalExpense, isPending } = useMutation({
    mutationFn: (values: PersonalExpensesRequest) => {
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
              value={field.state.value ? field.state.value.split(',') : []}
              maxTags={1}
              data={categories?.map(category => category.title) ?? []}
              onChange={value => field.handleChange(value.join(','))}
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

      <Button loading={isPending} onClick={form.handleSubmit}>
        Add
      </Button>
    </div>
  )
}
