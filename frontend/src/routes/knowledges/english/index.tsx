import { createFileRoute } from '@tanstack/react-router'

import { LinkComponent } from '@/components/ui/LinkComponent'
import { KnowledgesHomePage } from '@/pages/knowledges/KnowledgeHomePage'

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
