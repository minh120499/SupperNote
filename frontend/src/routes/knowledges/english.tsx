import { EnglishSideBar } from '@/components/english/EnglishSideBar'
import { Box } from '@/components/ui/Box'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Button, Card, Input } from 'antd'
import { createRef, useEffect, useRef, useState } from 'react'
import Highlighter from 'react-highlight-words'
import styled from 'styled-components'

export const Route = createFileRoute('/knowledges/english')({
  component: RouteComponent,
})

function RouteComponent() {
  const [search, setSearch] = useState('')
  // const matchRefs = useRef<(any | null)[]>([])
  // const [activeIndex, setActiveIndex] = useState(0)

  // const text =
  //   "The dog is chasing the cat. Or perhaps they're just playing dog?"

  // const matches = text.match(new RegExp(search, 'gi')) || []
  // const matchCount = matches.length

  // const handleNext = () => {
  //   console.log(activeIndex)

  //   setActiveIndex((prev) => {
  //     if (prev > matchCount) {
  //       return 1
  //     }
  //     return prev + 1
  //   })
  // }

  // const handlePrev = () => {
  //   setActiveIndex((prev) => (prev - 1 + matches.length) % matches.length)
  // }

  // // useEffect(() => {
  // //   setActiveIndex(0)
  // //   matchRefs.current = []
  // // }, [search])

  // useEffect(() => {
  //   const el = matchRefs.current[activeIndex]
  //   if (el) {
  //     el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  //   }
  // }, [activeIndex, search])

  let matchCounter = 0

  return (
    <StyledRoot>
      {/* <Button onClick={handlePrev} disabled={matches.length === 0}>
        Prev
      </Button>
      <Button onClick={handleNext} disabled={matches.length === 0}>
        Next
      </Button>
      <Input
        value={search}
        onChange={(value) => setSearch(value.target.value)}
      />
      <Highlighter
        searchWords={[search]}
        autoEscape={true}
        textToHighlight={'text'}
        highlightTag={({ children }) => {
          const ref = createRef<any>()
          const isActive = matchCounter === activeIndex

          matchRefs.current[matchCounter] = ref.current

          const el = (
            <mark
              ref={ref}
              style={{
                backgroundColor: isActive ? 'orange' : 'yellow',
                padding: '0 2px',
              }}
            >
              {children}
            </mark>
          )

          matchCounter++
          return el
        }}
      /> */}

      <EnglishSideBar />
      <Outlet />
    </StyledRoot>
  )
}

const StyledRoot = styled.div`
  display: flex;
  gap: 24px;
  padding: 20px;
`
