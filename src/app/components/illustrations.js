import { ImageError } from 'next/dist/server/image-optimizer'
import Image from 'next/image'

export default function Illustrations() {
  return (
    <section className='illustrations container mx-auto px-4'>
      <div className='mb-14 flex justify-center md:mb-0 md:justify-end'>
        <Image src='/gaiatech.webp' width='378' height='80' alt='Melis Block Illustration' loading='lazy' />
      </div>
      <Image src='/melis-block.webp' width='839' height='515' alt='Melis Block Illustration' loading='lazy' />
      <div className='mt-14 flex flex-col items-center gap-4 md:mt-24 md:flex-row md:justify-between'>
        <Image src='/tooth.webp' width='322' height='446' alt='Tooth Illustration' loading='lazy' />
        <Image
          src='/mouth.webp'
          width='278'
          height='278'
          alt='Mouth Illustration'
          loading='lazy'
          className='mt-14 md:mt-0'
        />
        <Image
          src='/toothbrush.webp'
          width='322'
          height='445'
          alt='Toothbrush Illustration'
          loading='lazy'
          className='mt-14 md:mt-0'
        />
      </div>
    </section>
  )
}
