import { Button, Card, Flex, Grid, TextInput, Textarea } from '@mantine/core'
import { modals } from '@mantine/modals'
import { IconPlus, IconTrash } from '@tabler/icons-react'
import { useForm } from '@tanstack/react-form'

import type { EnglishVocabularie } from '@/types/KnowledgeEnglish'

const initWord = {} as EnglishVocabularie

export const VocabularyModal = () => {
  const form = useForm({
    defaultValues: {
      words: [initWord],
    },
    onSubmit: ({ value }) => {
      handleSubmitWords(value)
    },
  })

  const { Field, handleSubmit } = form

  const handleSubmitWords = (value: { words: Array<EnglishVocabularie> }) => {
    console.log(value)
    modals.closeAll()
  }

  return (
    <>
      <Field name="words" mode="array">
        {({ state, pushValue, removeValue }) => (
          <>
            <Flex direction="column" gap="sm">
              {state.value.map((_, index) => (
                <Card
                  key={index}
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                >
                  <Grid>
                    <Grid.Col span={6}>
                      <Field
                        name={`words[${index}].word`}
                        children={field => (
                          <TextInput
                            label="Word"
                            placeholder="Enter word"
                            data-autofocus
                            withAsterisk
                            value={field.state.value}
                            onChange={e => field.handleChange(e.target.value)}
                          />
                        )}
                      />
                    </Grid.Col>

                    <Grid.Col span={6}>
                      <Field
                        name={`words[${index}].meaning`}
                        children={field => (
                          <TextInput
                            label="Meaning"
                            placeholder="Meaning of word"
                            withAsterisk
                            value={field.state.value}
                            onChange={e => field.handleChange(e.target.value)}
                          />
                        )}
                      />
                    </Grid.Col>

                    <Grid.Col span={12}>
                      <Field
                        name={`words[${index}].definition`}
                        children={field => (
                          <TextInput
                            label="Definition"
                            placeholder="Definition of word"
                            value={field.state.value}
                            onChange={e => field.handleChange(e.target.value)}
                          />
                        )}
                      />
                    </Grid.Col>

                    <Grid.Col span={12}>
                      <Field
                        name={`words[${index}].example`}
                        children={field => (
                          <Textarea
                            label="Example"
                            placeholder="Enter example"
                            value={field.state.value}
                            onChange={e => field.handleChange(e.target.value)}
                          />
                        )}
                      />
                    </Grid.Col>

                    {state.value.length > 1 && (
                      <Grid.Col span={12}>
                        <Flex justify="end">
                          <Button
                            variant="subtle"
                            onClick={() => removeValue(index)}
                            color="red"
                          >
                            <IconTrash />
                          </Button>
                        </Flex>
                      </Grid.Col>
                    )}
                  </Grid>
                </Card>
              ))}
            </Flex>

            <Button.Group mt="sm">
              <Button variant="outline" onClick={() => pushValue(initWord)}>
                <IconPlus />
              </Button>
              <Button fullWidth onClick={handleSubmit}>
                Submit
              </Button>
            </Button.Group>
          </>
        )}
      </Field>
    </>
  )
}
