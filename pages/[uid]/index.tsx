import { createClient } from '@/prismicio'
import { SliceZone } from '@prismicio/react'
import { Content } from '@prismicio/client'

import { components } from '@/slices'
import Layout from '@/components/Layout'

type Props = {
  page: Content.PageDocument
  layout: Content.LayoutDocument
}

export default function Page({ page, layout }: Props) {
  return (
    <Layout page={page} layout={layout}>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  )
}

export async function getStaticProps({ params, previewData }: any) {
  const client = createClient({ previewData })
  const page = await client.getByUID('page', params.uid)
  const layout = await client.getSingle('layout')

  if (!page) {
    return { notFound: true }
  }

  return {
    props: { page, layout }
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')

  return {
    paths: pages.map(page => ({
      params: { uid: page.uid === 'home' ? 'home' : page.uid }
    })),
    fallback: false
  }
}
