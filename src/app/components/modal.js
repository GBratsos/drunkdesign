import Image from 'next/image'
import Footer from './footer'
import Link from 'next/link'

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 bg-white'>
      <div className='absolute top-0 right-0 bottom-0 left-0'> </div>
      <div className='relative z-40 flex h-screen flex-col justify-between pt-6'>
        <div className='container mx-auto flex items-center justify-between gap-4 px-4'>
          <Image src='logo.svg' width='326' height='46' alt='Parallel Lines Studio' loading='lazy' />
          <div className='flex items-center'>
            <Link className='text-foreground text-[19px] font-semibold hover:underline mr-14' href='mailto:info@plstudio.gr'>
              email
            </Link>
            <button onClick={onClose} className='text-foreground cursor-pointer text-5xl hover:text-gray-700'>
              &times;
            </button>
          </div>
        </div>
        <div className='container mx-auto px-4'>
          <h4 className='text-foreground text-3xl font-bold lg:text-[32px] mt-16'>
            Η νέα μας ιστοσελίδα βρίσκεται  <u>υπό κατασκευή</u>.
          </h4>
          <p className='text-foreground mt-8 mb-24 text-2xl leading-[1.2] font-bold lg:text-[32px]'>
            Βρισκόμαστε στη διαδικασία σχεδιασμού και ανάπτυξης της πλήρους ψηφιακής παρουσίας του γραφείου μας. Στο μεταξύ, μπορείτε να περιηγηθείτε σε ένα σύντομο <i>portfolio</i> με επιλεγμένα έργα.
          </p>
          <p className='text-foreground text-[40px] mt-72 mb-20'>
            <b>Have a project?</b> Get in <Link href='mailto:info@plstudio.gr' target='_blank' rel='noopener noreferer'><u>touch with us</u></Link> today!
          </p>
        </div>
        <Footer textColor='text-foreground' marginClasses='mt-4' svgColor='#333' />
      </div>
    </div>
  )
}
