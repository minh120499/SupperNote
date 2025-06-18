import { createFileRoute } from '@tanstack/react-router'
import { KnowledgesHomePage } from '@/pages/knowledges/KnowledgeHomePage'
import { LinkComponent } from '@/components/ui/LinkComponent'

export const Route = createFileRoute('/knowledges/english/')({
  component: () => (
    <>
      <KnowledgesHomePage category="english" />
      <LinkComponent to="/knowledges/english/vocabularies">
        Vocabularies
      </LinkComponent>
    </>
  ),
})
