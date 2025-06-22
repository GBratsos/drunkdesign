import Image from 'next/image'
import Awards from './components/awards'
import Footer from './components/footer'
import BottomPack from './components/bottomPack'
import Illustrations from './components/illustrations'
import TopPack from './components/topPack'
import OilPack from './components/oilPack'
import MiddlePack from './components/middlePack'
import Header from './components/header'
import BackToTop from './components/backToTop'

export default function Home() {
  return (
    <>
      <main>
        <BackToTop />
        <Header />
        <div className='container mx-auto mt-10 px-4 lg:mt-[72px]'>
          <h1 className='inline text-[26px] font-bold md:text-[50px]'>
            We are a <i className='font-normal'>creative studio</i> formed by a <u>visual communication designer</u> and
            a <u>developer</u>.{' '}
          </h1>
          <h2 className='inline text-[26px] font-bold md:text-[50px]'>
            We <i className='font-normal'>specialize</i> in visual identity, product and packaging design, websites,
            social media content, and video production delivering integrated branding and digital presence solutions.
          </h2>
        </div>
        <TopPack />
        <OilPack />
        <MiddlePack />
        <Illustrations />
        <BottomPack />
        <section className='container mx-auto px-4'>
          <Image src='/pavlos-biratsis-tailor.webp' width='1091' height='663' alt='Sartoria Biratsis' loading='lazy' />
        </section>
        <section className='relative container mx-auto my-14 flex items-center justify-between gap-4 px-4 lg:my-40'>
          <h3 className='text-2xl hover:underline md:text-[40px]'>
            <a
              href='mailto:info@drunkdesign.gr'
              className='before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0'
            >
              <strong>
                Have a <u>project</u>?
              </strong>{' '}
              <i>Get in touch</i> <strong>with us today!</strong>
            </a>
          </h3>
          <svg
            className='hidden md:inline-block'
            xmlns='http://www.w3.org/2000/svg'
            width='128'
            height='81'
            fill='none'
          >
            <path stroke='#fff' strokeWidth='2' d='M86.359 80.283 126 40.642 86.359 1M0 41.49h124.58' />
          </svg>
          <svg className='inline-block md:hidden' xmlns='http://www.w3.org/2000/svg' width='80' height='51' fill='none'>
            <path stroke='#fff' strokeWidth='2' d='M53.46 50.08 78 25.54 53.46 1M0 26.064h77.121' />
          </svg>
        </section>
        <Awards />
      </main>
      <Footer textColor='text-white' svgColor='#fff' marginClasses='mt-14 mb-6 md:mt-40 md:mb-12 md:my-6' />
    </>
  )
}
