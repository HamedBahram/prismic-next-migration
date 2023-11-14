import Logo from '@/assets/svg/logo.svg'
import Link from 'next/link'
import { PrismicNextLink } from '@prismicio/next'
import Heading from '@/components/Heading'
import { Content } from '@prismicio/client'
import Image from 'next/image'

type Props = {
  layout: Content.LayoutDocument
}

type ColumnProps = {
  title: Content.LayoutDocumentData['title_column_1']
  items: Content.LayoutDocumentData['column_1']
}

function FooterColumn({ title, items }: ColumnProps) {
  return (
    <div className='col-span-6 row-span-1 flex flex-col lg:col-span-3'>
      <Heading text={title} as='h3' size='md' className='mb-4' />
      {items.map((item: any, i: number) => (
        <PrismicNextLink
          field={item.link}
          key={i}
          className='text-gray-EE ring-offset-gray-15 mt-4 block rounded-sm opacity-75 ring-gray-50 ring-offset-2 transition-colors hover:text-white hover:opacity-100 focus:outline-none focus:ring-2'
        >
          {item.label}
        </PrismicNextLink>
      ))}
    </div>
  )
}

export default function Footer({ layout }: Props) {
  return (
    <footer className='bg-gray-15 py-16 text-white 2xl:py-20'>
      <div className='container flex grid-rows-2 flex-col gap-4 gap-y-12 sm:grid sm:grid-cols-12 lg:grid-rows-1'>
        <div className='col-span-6 row-span-1 flex flex-col gap-4 lg:col-span-3'>
          <Link href='/' className='block w-28'>
            <Image src={Logo} alt='logo' />
          </Link>
          <p className='text-gray-EE opacity-75'>All rights reserved</p>
        </div>
        <FooterColumn
          title={layout.data.title_column_1}
          items={layout.data.column_1}
        />
        <FooterColumn
          title={layout.data.title_column_2}
          items={layout.data.column_2}
        />
        <FooterColumn
          title={layout.data.title_column_2}
          items={layout.data.column_2}
        />
      </div>
    </footer>
  )
}
