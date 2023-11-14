import Logo from '@/assets/svg/logo.svg'
import Link from 'next/link'
import { PrismicNextLink } from '@prismicio/next'
import Button from '@/components/Button'
import MenuToggle from '@/components/MenuToggle'
import { useState } from 'react'
import { Content } from '@prismicio/client'
import clsx from 'clsx'
import Image from 'next/image'

type Props = {
  layout: Content.LayoutDocument
}

export default function Header({ layout }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <header className='sticky top-0 z-40 bg-white py-6 lg:py-0'>
      <span className='absolute bottom-0 left-0 z-20 w-full border-b border-[#EEEEEE] dark:border-[#505050]' />
      <nav className='container flex items-center justify-between'>
        <Link href='/' className='relative z-10 flex items-center lg:pr-8'>
          <Image src={Logo} alt='logo' className='h-7 w-auto' />
        </Link>
        <MenuToggle onClick={toggleMenu} isOpen={menuOpen} />
        <div
          className={clsx(
            'fixed bottom-0 right-0 flex grow flex-col overflow-auto border-l border-[#EEEEEE] bg-white duration-200 max-lg:transition-all lg:static lg:w-auto lg:flex-row lg:items-center lg:space-x-8 lg:border-none lg:p-0 lg:transition-opacity',
            menuOpen
              ? 'top-24 mr-0 w-full opacity-100'
              : 'pointer-events-none w-full opacity-0 lg:pointer-events-auto lg:mr-0 lg:w-auto lg:opacity-100'
          )}
        >
          <div className='container order-2 grow lg:order-1 lg:mx-0 lg:w-auto lg:px-0'>
            <ul className='flex flex-col lg:flex-row lg:items-center lg:justify-center'>
              {layout.data.navigation.map((item: any, i: number) => (
                <li
                  key={i}
                  className='dark:bg-gray-15 relative z-10 border-[#EEEEEE] bg-white last:border-b dark:border-[#505050] lg:border-none lg:px-3 lg:py-9'
                >
                  <PrismicNextLink
                    field={item.link}
                    className='flex w-full items-center border-t border-[#EEEEEE] py-4 font-medium underline-offset-8 focus:underline focus:outline-none lg:border-none lg:py-0'
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='dark:bg-gray-15 container relative z-10 order-1 flex flex-col justify-end bg-white p-6 sm:flex-row sm:items-center sm:gap-x-4 lg:order-2 lg:mx-0 lg:w-auto lg:max-w-none lg:p-0'>
            {layout.data.call_to_actions.map((item: any, i: number) => (
              <Button field={item.link} key={i} style={item.style}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
