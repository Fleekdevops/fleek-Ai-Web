import Typewriter from '@/components/Typewriter'
import Reveal from '@/components/motion/Reveal'

type Props = {
  eyebrow?: string
  words: string[]
  lead?: string
  align?: 'center' | 'left'
  className?: string
}

export default function SectionHeading({ eyebrow, words, lead, align = 'center', className = '' }: Props) {
  const centered = align === 'center'
  return (
    <Reveal className={`${centered ? 'text-center' : 'text-left'} mb-14 ${className}`}>
      {eyebrow ? (
        <span className="inline-block text-primary font-semibold text-sm tracking-[0.18em] uppercase mb-3">{eyebrow}</span>
      ) : null}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.08] ${centered ? 'mx-auto' : ''}`}>
        <Typewriter words={words} className="gradient-text" />
      </h2>
      {lead ? (
        <p className={`text-gray text-lg mt-4 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>{lead}</p>
      ) : null}
    </Reveal>
  )
}
