import Heading from '@/components/Heading'
import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { SliceComponentProps } from '@prismicio/react'

const Logos = ({ slice }: any): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='bg-gray-F7'
    >
      <div className='container py-16 text-center md:text-left lg:py-24'>
        <Heading field={slice.primary.title} size='sm' />
        <div className='mt-12 flex flex-col flex-wrap items-center gap-x-24 gap-y-12 md:flex-row lg:justify-between'>
          {slice.items.map((item: any, index: number) => (
            <PrismicNextImage
              key={index}
              field={item.logo}
              className='max-w-[100px] xl:max-w-[150px]'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos
