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

export default function ImageGroup({image1, alt1, image2, alt2, image3, alt3}) {
  return (
    <section className='container mx-auto px-4 '>
        <div className='grid mx-auto'>
            <motion.div
                className='flex items-center justify-center'
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true, amount: 0.8 }}
                variants={IMAGE_VARIANTS}
            >
                <Image src={image1} height='613' width='1090' alt={alt1} className='mx-auto' loading='lazy'/>
            </motion.div>
            <div className='grid my-10 grid-cols-2 gap-10 mx-auto'>
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.8 }}
                    variants={IMAGE_VARIANTS}
                >
                    <Image src={image2} alt={alt2} width='525' height='394' loading='lazy' />
                </motion.div>
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.8 }}
                    variants={IMAGE_VARIANTS}
                >
                    <Image src={image3} alt={alt3} width='525' height='394' loading='lazy' />
                </motion.div>
            </div>
        </div>
    </section>
  )
}
