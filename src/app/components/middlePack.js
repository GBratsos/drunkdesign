import Image from 'next/image'

export default function MiddlePack() {
  return (
    <section className='middle-pack container mx-auto my-14 px-4 lg:my-40'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div>
          <Image
            src='/atrotos.webp'
            width='505'
            height='428'
            alt='La Palma Beauty House logo'
            loading='lazy'
            className='mx-auto mb-14 md:mb-0'
          />
          <Image
            src='/arcadia-network.webp'
            width='378'
            height='64'
            alt='Arcadia Network logo'
            loading='lazy'
            className='mx-auto mb-14 md:my-[192px] md:mb-0'
          />
        </div>
        <div>
          <Image
            src='/lapalma-beauty-house.webp'
            width='395'
            height='83'
            alt='La Palma Beauty House logo'
            loading='lazy'
            className='mx-auto mt-10 mb-14 md:mb-0'
          />
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
      <Image
        src='/troupis-moschofilero.webp'
        width='1091'
        height='689'
        alt='Karidis Giftbox'
        loading='lazy'
        className='mx-auto'
      />
    </section>
  )
}
