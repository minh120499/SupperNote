import { createFileRoute } from '@tanstack/react-router'
import { KnowledgesCreatePage } from '@/pages/knowledges/KnowledgesCreatePage'

export const Route = createFileRoute('/knowledges/programming/create')({
  component: KnowledgesCreatePage,
})
