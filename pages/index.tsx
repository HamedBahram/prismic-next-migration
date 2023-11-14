import { SliceZone } from '@prismicio/react'
import { Content } from '@prismicio/client'
import { createClient } from '@/prismicio'

import { components } from '@/slices'
import Layout from '@/components/Layout'

type Props = {
  page: Content.PageDocument
  layout: Content.LayoutDocument
}

export default function Home({ page, layout }: Props) {
  return (
    <Layout page={page} layout={layout}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}

export async function getStaticProps() {
  const client = createClient()
  const page = await client.getByUID('page', 'home')
  const layout = await client.getSingle('layout')

  return {
    props: {
      page,
      layout
    }
  }
}
