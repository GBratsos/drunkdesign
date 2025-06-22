'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <a
      onClick={scrollToTop}
      aria-label='Back to top'
      className={`${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      } fixed right-4 bottom-12 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition-opacity duration-300 md:right-6 md:bottom-20 lg:right-8 lg:bottom-20 lg:h-16 lg:w-16`}
    >
      <svg className='hidden lg:inline-block' xmlns='http://www.w3.org/2000/svg' width='44' height='44' fill='none'>
        <path stroke='#252525' strokeWidth='2' d='M43 22.859 22 2 1 22.859M22 40.6V2.19' />
      </svg>
      <svg xmlns='http://www.w3.org/2000/svg' className='inline-block lg:hidden' width='27' height='26' fill='none'>
        <path stroke='#252525' strokeWidth='2' d='M25.355 13.55 13.5 1.773 1.645 13.55M13.5 23.565V1.88' />
      </svg>
    </a>
  )
}
