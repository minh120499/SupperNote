import { EnglishUnitPage } from '@/pages/english/EnglishUnitPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/knowledges/english/$unit')({
  component: EnglishUnitPage,
})
