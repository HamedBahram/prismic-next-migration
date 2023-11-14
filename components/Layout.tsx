import React from 'react'
import Head from 'next/head'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'
import { Content } from '@prismicio/client'

import Header from './Header'
import Footer from './Footer'

type Props = {
  page: Content.PageDocument
  layout: Content.LayoutDocument
  children: React.ReactNode
}

export default function Layout({ page, layout, children }: Props) {
  return (
    <>
      <Head>
        <title>{page.data.meta_title}</title>
        <meta name='description' content={page.data.meta_description} />
      </Head>

      <Header layout={layout} />
      <main className='flex grow flex-col'>{children}</main>
      <Footer layout={layout} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  )
}
