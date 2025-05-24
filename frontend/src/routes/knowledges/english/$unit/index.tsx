import { createFileRoute } from '@tanstack/react-router'
import { EnglishUnitPage } from '@/pages/english/EnglishUnitPage'

export const Route = createFileRoute('/knowledges/english/$unit/')({
  component: EnglishUnitPage,
})
