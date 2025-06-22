'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function RevealImagePolygon({ src, alt, loading }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.45 })

  return (
    <div className='relative h-auto w-full overflow-hidden rounded-lg' ref={ref}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        className='h-auto w-full object-cover'
        initial={{
          opacity: 0,
          transform: 'translateY(-10px) rotateY(20deg)',
          clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                transform: 'translateY(0px) rotateY(0deg)',
                clipPath: 'polygon(0.0138% 0.0138%, 0.0138% 99.9862%, 99.9862% 99.9862%, 99.9862% 0.0138%)',
              }
            : {}
        }
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          willChange: 'clip-path, transform, opacity',
        }}
      />
    </div>
  )
}
