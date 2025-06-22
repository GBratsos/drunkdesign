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

export default function TopPack() {
  return (
    <section className='top-pack container mx-auto my-14 px-4 lg:my-40'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2'>
        <div className='row-span-2 mx-auto mb-14 md:mb-0'>
          <RevealImagePolygon src='/drunkdesign-art.webp' alt='Cool product' loading='eager' />
        </div>
        <motion.div
          className='flex items-center justify-center'
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          variants={IMAGE_VARIANTS}
        >
          <Image src='/alcon.webp' width='394' height='67' alt='Alcon logo' loading='lazy' className='mb-14 md:mb-0' />
        </motion.div>
        <div className='mx-auto mb-14 md:mb-0'>
          <RevealImagePolygon src='/boleta-beer.webp' alt='Boleta Beer Bottle' loading='lazy' />
        </div>
      </div>
      <div className='grid grid-cols-1 items-center justify-between gap-x-4 md:grid-cols-2 md:px-[24px] lg:px-[62px]'>
        <Image
          src='/bratsaki-eu.webp'
          width='380'
          height='553'
          alt='Bratsaki - George Bratsos website'
          loading='lazy'
          className='mx-auto'
        />
        <motion.div
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          variants={IMAGE_VARIANTS}
        >
          <Image
            src='/BreadBox-logo.webp'
            width='395'
            height='210'
            alt='Bread Box logo'
            loading='lazy'
            className='mx-auto hidden md:inline-block'
          />
        </motion.div>
      </div>
      <video
        controls
        preload='metadata'
        playsInline
        className='mb-14 w-full cursor-pointer shadow-lg md:mb-0'
        onMouseOver={(e) => e.target.play()}
        onMouseOut={(e) => e.target.pause()}
      >
        <source src='/drunk-2013-2020.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <motion.div
        className='md:hidden'
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.8 }}
        variants={IMAGE_VARIANTS}
      >
        <Image
          src='/BreadBox-logo.webp'
          width='395'
          height='210'
          alt='Bread Box logo'
          loading='lazy'
          className='mx-auto'
        />
      </motion.div>
    </section>
  )
}
