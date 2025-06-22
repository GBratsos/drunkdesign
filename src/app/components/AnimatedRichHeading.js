'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import parse, { domToReact } from 'html-react-parser'

// Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// Token-based splitting: words, punctuation, spaces
function wrapTextToTokens(text) {
  const tokens = text.match(/[^\s]+|\s+/g)

  return tokens.map((token, i) => {
    const isSpace = /^\s+$/.test(token)
    return (
      <motion.span key={`token-${i}`} variants={wordVariants} className={isSpace ? undefined : 'inline'}>
        {token}
      </motion.span>
    )
  })
}

// Recursive parsing with HTML support
function recursiveParse(node, path = '') {
  if (typeof node === 'string') {
    return wrapTextToTokens(node)
  }

  if (Array.isArray(node)) {
    return node.map((child, i) => recursiveParse(child, `${path}-${i}`))
  }

  if (React.isValidElement(node)) {
    const children = recursiveParse(node.props.children, `${path}-child`)
    return React.cloneElement(node, { ...node.props, key: `element-${path}-${node.type}` }, children)
  }

  return null
}

function AnimatedBlock({ html, trigger, onComplete, index, isLast, showCursor }) {
  const hasCompleted = useRef(false)

  const parsed = parse(html, {
    replace: (node) => {
      if (node.type === 'tag') {
        const children = recursiveParse(domToReact(node.children), `b${index}`)
        const Tag = motion[node.name] || motion.div

        return (
          <Tag
            key={`block-${index}`}
            className={node.attribs?.class || ''}
            variants={containerVariants}
            initial='hidden'
            animate={trigger ? 'visible' : 'hidden'}
            onAnimationComplete={() => {
              if (!hasCompleted.current && trigger) {
                hasCompleted.current = true
                onComplete?.(index)
              }
            }}
          >
            {children}
            {isLast && showCursor && (
              <motion.span
                className='ml-1 inline-block animate-pulse'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
              >
                |
              </motion.span>
            )}
          </Tag>
        )
      }
    },
  })

  return <>{parsed}</>
}

export default function AnimatedRichHeading({ blocks }) {
  const [played, setPlayed] = useState(new Set([0]))
  const [isDone, setIsDone] = useState(false)

  const handleComplete = (i) => {
    if (i === blocks.length - 1) {
      setIsDone(true)
    }
    setPlayed((prev) => {
      if (prev.has(i + 1)) return prev
      const updated = new Set(prev)
      updated.add(i + 1)
      return updated
    })
  }

  return (
    <div className='space-y-6'>
      {blocks.map((html, i) => (
        <AnimatedBlock
          key={`animated-block-${i}`}
          index={i}
          html={html}
          trigger={played.has(i)}
          isLast={i === blocks.length - 1}
          showCursor={i === blocks.length - 1 && isDone}
          onComplete={handleComplete}
        />
      ))}
    </div>
  )
}
