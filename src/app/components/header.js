'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './modal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-white sticky top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between px-4 py-6 md:py-6'>
        <Image src='/logo.svg' width='326' height='46' loading='eager' alt='Parallel Lines Studio' />
        <div className='text-foreground flex w-full max-w-[137px] items-center justify-between'>
          <Link
            href='mailto:info@plstudio.gr'
            target='_blank'
            rel='noopener noreferer'
            className='text-xl font-semibold'
          >
            <span className='hidden hover:underline md:inline-block'>email</span>
            <svg
              className='inline-block md:hidden'
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='24'
              fill='none'
            >
              <path
                fill='#fff'
                d='m0 23.271 2.646-11.635L0 0l29.09 11.636L0 23.272Zm2.796-20 1.673 7.365h16.736L2.795 3.27Zm1.673 9.365-1.673 7.363 18.41-7.363H4.468Z'
              />
            </svg>
          </Link>
          <div className='cursor-pointer ' onClick={() => setIsOpen(!isOpen)}>
            <svg
              className='inline-block '
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='23'
              fill='none'
            >
              <path
                fill='#000'
                d='M2.976 23c-.96-1.49-1.7-3.21-2.22-5.16C.252 15.874 0 13.76 0 11.5s.252-4.374.756-6.34c.52-1.982 1.26-3.702 2.22-5.16h2.902a23.048 23.048 0 0 0-2.195 5.529C3.228 7.396 3 9.387 3 11.5s.228 4.112.683 5.996c.471 1.867 1.203 3.702 2.195 5.504H2.976ZM11.773 14.522l-.586-11.5h3.61l-.61 11.5h-2.414Zm1.22 5.873c-.57 0-1.042-.188-1.415-.565a1.851 1.851 0 0 1-.561-1.351c0-.525.187-.967.56-1.327.374-.377.846-.566 1.415-.566.57 0 1.033.189 1.39.566.358.36.537.802.537 1.327 0 .524-.179.974-.537 1.351-.357.377-.82.565-1.39.565ZM23.024 23h-2.902c1.008-1.802 1.74-3.637 2.195-5.504.472-1.884.707-3.883.707-5.996 0-2.113-.235-4.104-.707-5.971C21.862 3.645 21.13 1.802 20.122 0h2.902c.976 1.458 1.716 3.178 2.22 5.16.504 1.966.756 4.08.756 6.34s-.252 4.374-.756 6.34C24.74 19.79 24 21.51 23.024 23Z'
              />
            </svg>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  )
}
