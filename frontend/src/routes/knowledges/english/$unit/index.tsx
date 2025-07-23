import { createFileRoute } from '@tanstack/react-router'

import { KnowledgeDetailPage } from '@/pages/knowledges/KnowledgeDetailPage'

export const Route = createFileRoute('/knowledges/english/$unit/')({
  component: () => <KnowledgeDetailPage category="english" />,
})
