import { EnglishCreatePage } from '@/pages/english/EnglishCreatePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/knowledges/english/create')({
  component: EnglishCreatePage,
})
