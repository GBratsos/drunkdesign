'use client'

import Image from 'next/image'

export default function TopPack() {
  return (
    <section className='top-pack container mx-auto my-14 px-4 lg:my-40'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2'>
        <div className='row-span-2 mx-auto'>
          <Image
            src='/drunkdesign-art.webp'
            width='505'
            height='693'
            alt='Alcon logo'
            loading='lazy'
            className='mb-14 md:mb-0'
          />
        </div>
        <div className='flex items-center justify-center'>
          <Image src='/alcon.webp' width='394' height='67' alt='Alcon logo' loading='lazy' className='mb-14 md:mb-0' />
        </div>
        <div className='mx-auto'>
          <Image
            src='/boleta-beer.webp'
            width='505'
            height='505'
            alt='Boleta Beer Bottle'
            loading='lazy'
            className='mb-14 md:mb-0'
          />
        </div>
      </div>
      <div className='grid grid-cols-1 items-center justify-between gap-4 md:grid-cols-2 md:px-[24px] lg:px-[62px]'>
        <Image
          src='/bratsaki-eu.webp'
          width='380'
          height='553'
          alt='Bratsaki - George Bratsos website'
          loading='lazy'
          className='mx-auto'
        />
        <Image
          src='/BreadBox-logo.webp'
          width='395'
          height='210'
          alt='Bread Box logo'
          loading='lazy'
          className='mx-auto hidden md:inline-block'
        />
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
      <Image
        src='/BreadBox-logo.webp'
        width='395'
        height='210'
        alt='Bread Box logo'
        loading='lazy'
        className='mx-auto md:hidden'
      />
    </section>
  )
}
