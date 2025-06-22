import Image from 'next/image'
import Footer from './footer'

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm'>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#c2c2c2]/70'> </div>
      <div className='relative z-40 flex h-dvh flex-col justify-between py-6 md:py-12'>
        <div className='container mx-auto flex items-center justify-between gap-4 px-4'>
          <Image src='logo-black.webp' width='150' height='19' alt='Drunk Design logo' loading='lazy' />
          <button onClick={onClose} className='text-background cursor-pointer text-5xl hover:text-gray-700'>
            &times;
          </button>
        </div>
        <div className='container mx-auto px-4 py-10'>
          <h4 className='text-background text-3xl font-bold lg:text-5xl'>
            Our <i className='font-normal'>new</i> website is currently <u>under construction</u>.
          </h4>
          <p className='text-background mt-20 mb-32 text-2xl leading-[1.2] font-bold lg:text-[42px]'>
            We are in the <i className='font-normal'>process</i> of <u>designing</u> and <u>developing</u> the{' '}
            <u>full digital presence of our studio</u>. In the meantime, you can browse a{' '}
            <i className='font-normal'>short portfolio</i> featuring selected projects. Thank you for your <u>trust</u>{' '}
            and continued <u>support</u> over the years!
          </p>
          <p className='text-background text-xl leading-[1.2] font-bold lg:text-[32px]'>
            Stay <i className='font-normal'>creatively</i> <u>drunk</u>.
          </p>
        </div>
        <Footer textColor='text-background' marginClasses='mt-4' svgColor='#333' />
      </div>
    </div>
  )
}
