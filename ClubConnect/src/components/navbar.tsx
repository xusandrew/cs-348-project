'use client'

import { HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/events', icon: HomeIcon },
  { name: 'Explore', href: '/explore', icon: BookOpenIcon },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      <header className='flex items-center w-full justify-between p-4 border-b border-gray-700'>
        <div className='flex items-center space-x-2'>
          <Link href='/'>
            <div className='flex items-center space-x-5'>
              <RabbitIcon className='h-6 w-6' />
              <h1 className='text-xl font-bold'>ClubsConnect</h1>
            </div>
          </Link>
        </div>
        <nav className='flex space-x-4'>
          {links.map((link) => {
            const LinkIcon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx('text-gray-500', { 'text-yellow-500': pathname === link.href })}
              >
                <div className='flex items-center space-x-2'>
                  <LinkIcon className='w-6' />
                  <p className='hidden md:block'>{link.name}</p>
                </div>
              </Link>
            )
          })}
        </nav>
      </header>
    </>
  )
}

function RabbitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M13 16a3 3 0 0 1 2.24 5' />
      <path d='M18 12h.01' />
      <path d='M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3' />
      <path d='M20 8.54V4a2 2 0 1 0-4 0v3' />
      <path d='M7.612 12.524a3 3 0 1 0-1.6 4.3' />
    </svg>
  )
}
