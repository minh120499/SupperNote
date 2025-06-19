import {
  Button,
  ButtonGroup,
  Grid,
  Group,
  TextInput,
  Textarea,
} from '@mantine/core'
import { modals } from '@mantine/modals'
import { useForm } from '@tanstack/react-form'
import { IconPlus } from '@tabler/icons-react'
import type { EnglishVocabularie } from '@/types/KnowledgeEnglish'

export const VocabularyModal = () => {
  const form = useForm({
    defaultValues: [{}] as Array<EnglishVocabularie>,
    onSubmit: ({ value }) => {
      handleSubmit(value)
    },
  })

  const { Field, state, insertFieldValue } = form

  const handleSubmit = (value: Array<EnglishVocabularie>) => {}

  return (
    <>
      {state.values.map((_, index) => {
        return (
          <Grid key={index}>
            <Grid.Col span={6}>
              <Field
                name={`[${index}].word`}
                children={(field) => (
                  <TextInput
                    label="Word"
                    placeholder="Enter word"
                    data-autofocus
                    withAsterisk
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <Field
                name={`[${index}].meaning`}
                children={(field) => (
                  <TextInput
                    label="Meaning"
                    placeholder="Meaning of word"
                    withAsterisk
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Field
                name={`[${index}].definition`}
                children={(field) => (
                  <TextInput
                    label="Definition"
                    placeholder="Definition of word"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Field
                name={`[${index}].example`}
                children={(field) => (
                  <Textarea
                    label="Example"
                    placeholder="Enter example"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                )}
              />
            </Grid.Col>
          </Grid>
        )
      })}

      <Button.Group>
        <Button
          variant="subtle"
          onClick={() => insertFieldValue('', 1)}
          mt="md"
        >
          <IconPlus color="var(--mantine-color-red-text)" />
          {/* Add more */}
        </Button>
        <Button fullWidth onClick={() => modals.closeAll()} mt="md">
          Submit
        </Button>
      </Button.Group>
    </>
  )
}
