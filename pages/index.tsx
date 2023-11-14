import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <section className='py-24'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>Prismic Next Migration</h1>
        </div>
      </section>
    </main>
  )
}
