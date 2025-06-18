import { createFileRoute } from '@tanstack/react-router'
import { modals } from '@mantine/modals'
import { Button } from '@mantine/core'
import { VocabularyModal } from '@/components/english/VocabularyModal'

export const Route = createFileRoute('/knowledges/english/vocabularies')({
  component: RouteComponent,
})

function RouteComponent() {
  const handleAdd = () => {
    modals.open({
      title: 'Add new vocabulary',
      children: <VocabularyModal />,
    })
  }
  return (
    <div>
      Hello "/knowledges/english/vocabularies"!
      <Button onClick={handleAdd}>Add</Button>
    </div>
  )
}

// const Modal1 = <Modal opened>test</Modal>
