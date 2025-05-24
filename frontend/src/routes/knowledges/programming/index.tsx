import { createFileRoute } from '@tanstack/react-router'
import { KnowledgesHomePage } from '@/pages/knowledges/KnowledgesHomePage'

export const Route = createFileRoute('/knowledges/programming/')({
  component: KnowledgesHomePage,
})
