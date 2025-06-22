'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import RevealImagePolygon from './revealEffect'

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

export default function MiddlePack() {
  return (
    <section className='middle-pack container mx-auto my-14 px-4 lg:my-40'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div>
          <div className='mx-auto mb-14 md:mb-0'>
            <RevealImagePolygon src='/atrotos.webp' alt='Atrotos' loading='lazy' />
          </div>
          <motion.div
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
            variants={IMAGE_VARIANTS}
          >
            <Image
              src='/arcadia-network.webp'
              width='378'
              height='64'
              alt='Arcadia Network logo'
              loading='lazy'
              className='mx-auto mb-14 md:my-[192px] md:mb-0'
            />
          </motion.div>
        </div>
        <div>
          <motion.div
            className='mb-14 md:mt-10 md:mb-0'
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0.8 }}
            variants={IMAGE_VARIANTS}
          >
            <Image
              src='/lapalma-beauty-house.webp'
              width='395'
              height='83'
              alt='La Palma Beauty House logo'
              loading='lazy'
              className='mx-auto'
            />
          </motion.div>
          <Image
            src='/greek-wine-bottle.webp'
            width='380'
            height='553'
            alt='Greek wine bottle'
            loading='lazy'
            className='mx-auto md:mt-52 md:mr-16 md:ml-auto'
          />
        </div>
      </div>
      <RevealImagePolygon src='/troupis-moschofilero.webp' alt='Troupis moschofilero' loading='lazy' />
    </section>
  )
}
