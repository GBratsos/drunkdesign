export default function Footer({ textColor, marginClasses, svgColor }) {
  return (
    <footer className={`${marginClasses} md:grid-cols-auto container mx-auto px-4 pb-12 text-[24px]`}>
      <div className='border-t-2 border-[#1C1C1B] grid grid-cols-2 items-center gap-8 md:grid-flow-col lg:justify-between pt-8'>

        <p className={`${textColor} font-bold `} >

          PLStudio<br/><br/>
          <a className='hover:underline font-medium' href='mailto:info@plstudio.gr'>
            info@plstudio.gr
          </a>
        </p>
        <p className={`${textColor} text-right`}>
          Πατριάρχη Γρηγορίου Ε’ 14<br/>
          221 32, Τρίπολη, Αρκαδίας<br/>
          <a className={`${textColor} hover:underline`} href='tel:+302714001193'>
            (+30) 2714 001193
          </a>
        </p>
      </div>
    </footer>
  )
}
