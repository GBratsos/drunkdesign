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

export default function BottomPack() {
  return (
    <section className='container mx-auto my-14 px-4 lg:my-40'>
      <div className='grid grid-cols-1 items-center justify-between md:grid-cols-2 md:px-[24px] lg:px-[62px]'>
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          variants={IMAGE_VARIANTS}
        >
          <Image
            src='/boleta-logo.webp'
            width='154'
            height='292'
            alt='Boleta Cooperativa logo'
            loading='lazy'
            className='mx-auto mb-14 md:mb-0'
          />
        </motion.div>
        <Image
          src='/idtransfer-services.webp'
          width='380'
          height='553'
          alt='ID Transfer Services'
          loading='lazy'
          className='mx-auto'
        />
      </div>
      <video
        controls
        preload='metadata'
        playsInline
        className='w-full cursor-pointer shadow-lg'
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
      >
        <source src='/Karidis-Labels-1821.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
