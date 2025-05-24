import { createFileRoute } from '@tanstack/react-router'
import { EnglishEditPage } from '@/pages/english/EnglishEditPage'

export const Route = createFileRoute('/knowledges/english/$unit/edit')({
  component: EnglishEditPage,
})
