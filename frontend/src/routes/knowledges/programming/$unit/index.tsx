import { createFileRoute } from '@tanstack/react-router'
import { KnowledgeDetailPage } from '@/pages/knowledges/KnowledgeDetailPage'

export const Route = createFileRoute('/knowledges/programming/$unit/')({
  component: () => <KnowledgeDetailPage category="programming" />,
})
