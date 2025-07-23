import { createFileRoute } from '@tanstack/react-router'

import { KnowledgeEditPage } from '@/pages/knowledges/KnowledgeEditPage'

export const Route = createFileRoute('/knowledges/english/$unit/edit')({
  component: KnowledgeEditPage,
})
