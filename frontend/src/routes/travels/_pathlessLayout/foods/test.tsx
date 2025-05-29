import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/travels/_pathlessLayout/foods/test')({
  component: TestPage,
})

function TestPage() {
  return <div>🍜 This is the Test Page</div>
}
