import { Box, Text } from '@mantine/core'
import { createFileRoute } from '@tanstack/react-router'

import { useRef, useState } from 'react'

import image4K_0 from './image0.png'
import image4K_1 from './image1.png'

let lastScrollTop = 0

export const Route = createFileRoute('/test/')({
  component: RouteComponent,
})

const images = [image4K_0, image4K_1]

function RouteComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollBoxRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const [pageYOffset, setPageYOffset] = useState(0)
  const [offset, setOffset] = useState(0)
  const [scaleOut, setScaleOut] = useState(0)

  window.addEventListener('scroll', event => {
    console.log(event, lastScrollTop)
    const currentScroll = window.pageYOffset

    setPageYOffset(currentScroll)

    const scaleOut = currentScroll / 100 // Tỷ lệ thu phóng theo cuộn chuột
    setOffset(Math.floor(scaleOut))
    setScaleOut(scaleOut)
    // if (imageRef.current?.style.scale) {
    //   imageRef.current.style.scale = String(1 + scaleOut) // Tăng kích thước ảnh khi cuộn xuống
    // }
  })

  window.addEventListener('wheel', (event: WheelEvent) => {
    console.log(event)
  })

  return (
    <Box h={5000} ref={containerRef} pos="relative">
      <Box
        pos="sticky"
        top={46.4}
        display={'flex'}
        style={{ gap: 12, zIndex: 1 }}
        ref={scrollBoxRef}
      >
        <Box
          style={{
            transition: 'all 0.6s ease-out',
            width: 1280,
            height: 720,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            ref={imageRef}
            src={images[offset]}
            style={{
              position: 'absolute',
              transition: 'all 0.6s ease-out',
              top: 0,
              left: 0,
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              scale: 1 + scaleOut,
              opacity: 1,
            }}
          />
          <img
            ref={imageRef}
            src={images[offset + 1]}
            style={{
              position: 'absolute',
              transition: 'all 0.6s ease-out',
              top: 0,
              left: 0,
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              scale: 1 + scaleOut,
              opacity: 0,
            }}
          />
        </Box>
        <Text>{pageYOffset.toFixed(0)}</Text>
        <Text>{(pageYOffset % 100).toFixed(0)}</Text>
        <Text>scale : {offset}</Text>
      </Box>
    </Box>
  )
}
