import Footer from './components/footer'
import Header from './components/header'
import AnimatedRichHeading from './components/AnimatedRichHeading'
import BackToTop from './components/backToTop'
import ImageGroup from './components/ImageGroup'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='container mx-auto'>
        <BackToTop />
        <Header />
        <div className='container mx-auto mt-10 px-4 lg:mt-[72px]'>
          <AnimatedRichHeading
            blocks={[
              `<h1 class='inline text-[26px] font-bold md:text-[32px]'>Η αρχιτεκτονική είναι μια και σίγουρα είναι μια τέχνη. Η τεχνική είναι το κύριο εργαλείο αυτής της τέχνης. </h1>`,
              `<h2 class='inline text-[26px] font-bold md:text-[32px]'>Ένα τεχνικό έργο δεν είναι πάντα ένα αρχιτεκτόνημα. Αλλά ένα αληθινό αρχιτεκτόνημα είναι σίγουρα και ένα άρτιο τεχνικό έργο. </h2>`,
              `<h3 class='inline text-[26px] font-bold md:text-[32px]'>Δεν υπάρχουν λοιπόν δύο κατευθύνσεις αλλά μόνο μια, ένας δρόμος που τον ανιχνεύει κανείς και τον ακολουθεί όπως μπορεί.</h3>`
              
            ]}
          />
        </div>
        <div className='mt-7 mb-10 md:mt-14 md:mb-20 max-w-[648px] ml-auto mr-0 px-4'>
          <p className=''>
                Απάντηση σε ερώτηση προς τον <b>Κυριάκο Κρόκο</b> (καταξιωμένο Έλληνα αρχιτέκτονα 1941-1998) για το αν η αρχιτεκτονική έχει <u>δύο κατευθύνσεις</u>, αυτή όπου η αρχιτεκτονική είναι <u>τέχνη</u> και η άλλη που είναι περισσότερο <u>τεχνική</u>.
          </p>
        </div>
        <ImageGroup image1="/plstudio-01-01.webp" alt1="Front" image2="/plstudio-01-02.webp" alt2="Garden" image3="/plstudio-01-03.webp" alt3="Rear" />
        <ImageGroup image1="/plstudio-02-01.webp" alt1="Front" image2="/plstudio-02-02.webp" alt2="Top" image3="/plstudio-02-03.webp" alt3="Rear" />
        <ImageGroup image1="/plstudio-03-01.webp" alt1="Market" image2="/plstudio-03-02.webp" alt2="Town Square" image3="/plstudio-03-03.webp" alt3="Front Night" />
        <ImageGroup image1="/plstudio-04-01.webp" alt1="Bedroom" image2="/plstudio-04-02.webp" alt2="Room" image3="/plstudio-04-03.webp" alt3="Bathroom" />

        <section className='relative container mx-auto flex items-center justify-between gap-4 px-4'>
          
          <p className='text-foreground text-[40px] mt-20 mb-20'>
              <b>Have a project?</b> Get in <Link href='mailto:info@plstudio.gr' target='_blank' rel='noopener noreferer'><u>touch with us</u></Link> today!
          </p>
        </section>
      </main>
      <Footer textColor='text-foreground' marginClasses='mt-4' svgColor='#333' />
    </>
  )
}
