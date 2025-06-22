'use client'

import Image from 'next/image'
import RevealImagePolygon from './revealEffect'
import { motion } from 'framer-motion'

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

export default function OilPack() {
  return (
    <section className='oil-pack container mx-auto px-4'>
      <div className='grid grid-cols-1 items-center md:grid-cols-2 lg:justify-between'>
        <RevealImagePolygon src='/salih-oil-package.webp' alt='Salih Oil Package' loading='lazy' className='mx-auto' />
        <motion.div
          className='mt-14 md:mt-0'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          variants={IMAGE_VARIANTS}
        >
          <Image src='/salih-logo.webp' width='215' height='215' alt='Salih logo' loading='lazy' className='mx-auto' />
        </motion.div>
      </div>
      <h3 className='my-14 text-center text-[26px] font-bold md:my-40 md:text-left md:text-[50px]'>
        Design isn’t just <i className='font-normal'>pretty pictures</i>.<br />
        It’s <i className='text-normal'>meaningful</i> visual communication.
      </h3>
      <RevealImagePolygon src='/karidis-giftbox.webp' alt='Karidis Giftbox' loading='lazy' className='mx-auto' />
    </section>
  )
}
