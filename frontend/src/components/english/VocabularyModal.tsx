import { Button, Grid, TextInput, Textarea } from '@mantine/core'
import { modals } from '@mantine/modals'
import { useForm } from '@tanstack/react-form'
import type { EnglishVocabularie } from '@/types/KnowledgeEnglish'

export const VocabularyModal = () => {
  const form = useForm({
    defaultValues: {} as EnglishVocabularie,
    onSubmit: ({ value }) => {
      handleSubmit(value)
    },
  })

  const handleSubmit = (value: EnglishVocabularie) => {}

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            label="Your email"
            placeholder="Your email"
            data-autofocus
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Textarea
            label="Your email"
            placeholder="Your email"
            data-autofocus
          />
        </Grid.Col>
      </Grid>

      <Button fullWidth onClick={() => modals.closeAll()} mt="md">
        Submit
      </Button>
    </>
  )
}
