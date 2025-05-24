import { createFileRoute } from '@tanstack/react-router'
import { EnglishHomePage } from '@/pages/english/EnglishHomePage'

export const Route = createFileRoute('/knowledges/english/')({
  component: EnglishHomePage,
})
