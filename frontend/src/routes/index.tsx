import { createFileRoute } from '@tanstack/react-router'
import { HomePage } from '@/page/HomePage'

export const Route = createFileRoute('/')({
  component: HomePage,
})
