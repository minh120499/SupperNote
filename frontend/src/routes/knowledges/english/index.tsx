import { EnglishHomePage } from '@/pages/english/EnglishHomePage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/knowledges/english/')({
  component: EnglishHomePage,
})
