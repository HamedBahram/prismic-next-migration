import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import { createClient } from '@/prismicio'
import { PageDocument } from '@/prismicio-types'

// export async function generateMetadata() {
//   const client = createClient()

//   const page = await client.getByUID('page', 'home').catch(() => notFound())

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//     type: 'website',
//     openGraph: {
//       title: page.data.meta_title,
//       description: page.data.meta_description
//     }
//   }
// }

type Props = {
  page: PageDocument
}

export default function Home({ page }: Props) {
  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  )
}

export async function getStaticProps() {
  const client = createClient()
  const page = await client.getByUID('page', 'home')

  return {
    props: {
      page
    }
  }
}
