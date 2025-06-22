import Image from 'next/image'

export default function OilPack() {
  return (
    <section className='oil-pack container mx-auto px-4'>
      <div className='grid grid-cols-1 items-center md:grid-cols-2 lg:justify-between'>
        <Image
          src='/salih-oil-package.webp'
          width='505'
          height='505'
          alt='Salih Oil Package'
          loading='lazy'
          className='mx-auto mb-14 md:mb-0'
        />
        <Image src='/salih-logo.webp' width='215' height='215' alt='Salih logo' loading='lazy' className='mx-auto' />
      </div>
      <h3 className='my-14 text-center text-[26px] font-bold md:my-40 md:text-left md:text-[50px]'>
        Design isn’t just <i className='font-normal'>pretty pictures</i>.<br />
        It’s <i className='text-normal'>meaningful</i> visual communication.
      </h3>
      <Image
        src='/karidis-giftbox.webp'
        width='1090'
        height='614'
        alt='Karidis Giftbox'
        loading='lazy'
        className='mx-auto'
      />
    </section>
  )
}
