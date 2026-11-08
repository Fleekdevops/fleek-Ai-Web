'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

type Props = {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
  loop?: boolean
  cursor?: boolean
}

export default function Typewriter({
  words,
  className,
  typingSpeed = 42,
  deletingSpeed = 22,
  pauseMs = 1550,
  loop = true,
  cursor = true,
}: Props) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!words.length) return
    if (reduce) {
      setText(words[0])
      setDone(true)
      return
    }
    if (done) return
    const current = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      if (!loop && index === words.length - 1) {
        setDone(true)
        return
      }
      timeout = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [words, index, text, deleting, typingSpeed, deletingSpeed, pauseMs, loop, done, reduce])

  const label = words[index % Math.max(words.length, 1)] ?? ''
  return (
    <span className={className} aria-label={label}>
      {text}
      {cursor && !done ? <span className="typewriter-caret" aria-hidden="true" /> : null}
    </span>
  )
}
