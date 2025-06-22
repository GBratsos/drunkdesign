'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const IMAGE_VARIANTS = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
}

export default function Illustrations() {
  return (
    <section className='illustrations container mx-auto px-4'>
      <motion.div
        className='mb-14 flex justify-center md:mb-0 md:justify-end'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        variants={IMAGE_VARIANTS}
      >
        <Image src='/gaiatech.webp' width='378' height='80' alt='Melis Block Illustration' loading='lazy' />
      </motion.div>
      <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        variants={IMAGE_VARIANTS}
      >
        <Image src='/melis-block.webp' width='839' height='515' alt='Melis Block Illustration' loading='lazy' />
      </motion.div>
      <div className='mt-14 flex flex-col items-center gap-4 md:mt-24 md:flex-row md:justify-between'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8, delay: 0.2 }}
          variants={IMAGE_VARIANTS}
        >
          <Image src='/tooth.webp' width='322' height='446' alt='Tooth Illustration' loading='lazy' />
        </motion.div>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8, delay: 0.4 }}
          variants={IMAGE_VARIANTS}
        >
          <Image
            src='/mouth.webp'
            width='278'
            height='278'
            alt='Mouth Illustration'
            loading='lazy'
            className='mt-14 md:mt-0'
          />
        </motion.div>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8, delay: 0.6 }}
          variants={IMAGE_VARIANTS}
        >
          <Image
            src='/toothbrush.webp'
            width='322'
            height='445'
            alt='Toothbrush Illustration'
            loading='lazy'
            className='mt-14 md:mt-0'
          />
        </motion.div>
      </div>
    </section>
  )
}
