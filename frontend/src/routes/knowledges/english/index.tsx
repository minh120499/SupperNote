import { createFileRoute } from '@tanstack/react-router'
import { KnowledgesHomePage } from '@/pages/knowledges/KnowledgeHomePage'

export const Route = createFileRoute('/knowledges/english/')({
  component: () => <KnowledgesHomePage category="english" />,
})
