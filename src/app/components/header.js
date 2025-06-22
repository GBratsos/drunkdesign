'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Modal from './modal'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between px-4 py-6 md:py-12'>
        <Image src='/logo.svg' width='150' height='19' loading='eager' alt='Drunk Design Studio' />
        <div className='flex w-full max-w-[130px] items-center justify-between md:max-w-[260px]'>
          <p className='cursor-pointer text-xl font-semibold' onClick={() => setIsOpen(!isOpen)}>
            <span className='hidden hover:underline md:inline-block'>(!)</span>
            <svg
              className='inline-block md:hidden'
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='23'
              fill='none'
            >
              <path
                fill='#fff'
                d='M2.976 23c-.96-1.49-1.7-3.21-2.22-5.16C.252 15.874 0 13.76 0 11.5s.252-4.374.756-6.34c.52-1.982 1.26-3.702 2.22-5.16h2.902a23.048 23.048 0 0 0-2.195 5.529C3.228 7.396 3 9.387 3 11.5s.228 4.112.683 5.996c.471 1.867 1.203 3.702 2.195 5.504H2.976ZM11.773 14.522l-.586-11.5h3.61l-.61 11.5h-2.414Zm1.22 5.873c-.57 0-1.042-.188-1.415-.565a1.851 1.851 0 0 1-.561-1.351c0-.525.187-.967.56-1.327.374-.377.846-.566 1.415-.566.57 0 1.033.189 1.39.566.358.36.537.802.537 1.327 0 .524-.179.974-.537 1.351-.357.377-.82.565-1.39.565ZM23.024 23h-2.902c1.008-1.802 1.74-3.637 2.195-5.504.472-1.884.707-3.883.707-5.996 0-2.113-.235-4.104-.707-5.971C21.862 3.645 21.13 1.802 20.122 0h2.902c.976 1.458 1.716 3.178 2.22 5.16.504 1.966.756 4.08.756 6.34s-.252 4.374-.756 6.34C24.74 19.79 24 21.51 23.024 23Z'
              />
            </svg>
          </p>
          <Link
            href='https://www.instagram.com/drunkdesign.gr/'
            target='_blank'
            rel='noopener noreferer'
            className='text-xl font-semibold'
          >
            <span className='hidden hover:underline md:inline-block'>instagram</span>
            <svg
              className='inline-block md:hidden'
              xmlns='http://www.w3.org/2000/svg'
              width='27'
              height='27'
              fill='none'
            >
              <path
                fill='#fff'
                d='M13.503 6.578a6.91 6.91 0 0 0-6.92 6.922 6.91 6.91 0 0 0 6.92 6.922 6.91 6.91 0 0 0 6.92-6.922 6.91 6.91 0 0 0-6.92-6.922Zm0 11.422a4.508 4.508 0 0 1-4.5-4.5c0-2.482 2.018-4.5 4.5-4.5s4.5 2.018 4.5 4.5-2.024 4.5-4.5 4.5Zm8.818-11.706a1.61 1.61 0 0 1-1.614 1.615 1.615 1.615 0 1 1 1.614-1.615Zm4.584 1.64c-.102-2.164-.596-4.08-2.18-5.658C23.146.697 21.23.203 19.069.095 16.84-.032 10.16-.032 7.93.095 5.775.197 3.86.69 2.275 2.27.691 3.848.203 5.764.095 7.927c-.127 2.23-.127 8.91 0 11.14.102 2.163.596 4.079 2.18 5.657 1.585 1.579 3.494 2.073 5.656 2.181 2.229.127 8.909.127 11.138 0 2.162-.102 4.078-.596 5.656-2.18 1.578-1.58 2.072-3.495 2.18-5.658.127-2.23.127-8.905 0-11.134Zm-2.88 13.525a4.556 4.556 0 0 1-2.565 2.566c-1.777.705-5.993.543-7.957.543-1.964 0-6.186.156-7.957-.543A4.556 4.556 0 0 1 2.98 21.46c-.705-1.778-.542-5.995-.542-7.959 0-1.964-.157-6.187.542-7.959a4.556 4.556 0 0 1 2.566-2.566c1.777-.705 5.993-.542 7.957-.542 1.964 0 6.186-.157 7.957.542 1.18.47 2.09 1.38 2.566 2.566.705 1.778.542 5.995.542 7.959 0 1.964.163 6.187-.542 7.959Z'
              />
            </svg>
          </Link>
          <Link
            href='mailto:info@drunkdesign.gr'
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
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  )
}
