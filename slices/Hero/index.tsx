import Button from '@/components/Button'
import Copy from '@/components/Copy'
import Heading from '@/components/Heading'
import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'

const Hero = ({ slice }: any): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='relative overflow-hidden'
    >
      <div className='container relative z-10 flex flex-col items-center py-16 text-center lg:py-24'>
        {slice.primary.pre_title && (
          <span className='text-primary-purple text-md mb-4 font-bold'>
            {slice.primary.pre_title}
          </span>
        )}
        <Heading field={slice.primary.title} size='3xl' className='max-w-4xl' />
        <Copy
          field={slice.primary.description}
          muted
          className='mt-6 max-w-2xl'
          size='lg'
        />
        {slice.items.length > 0 && (
          <div className='mt-8'>
            {slice.items.map((item: any, index: number) => (
              <Button
                key={index}
                field={item.link}
                style={item.style}
                className='inline-block'
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      <PrismicNextImage
        field={slice.primary.background}
        className='absolute inset-0 h-full w-full object-cover object-center'
      />
    </section>
  )
}

export default Hero
