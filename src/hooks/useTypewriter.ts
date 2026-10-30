import { useState, useEffect } from 'react'

interface TypewriterOptions {
  speed?: number
  startDelay?: number
}

export function useTypewriter(
  text: string,
  options: TypewriterOptions = {}
): { displayed: string; done: boolean } {
  const { speed = 38, startDelay = 600 } = options
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    let intervalId: ReturnType<typeof setInterval>
    let currentIndex = 0

    setDisplayed('')
    setDone(false)

    timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++
          setDisplayed(text.slice(0, currentIndex))
        } else {
          setDone(true)
          clearInterval(intervalId)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}
