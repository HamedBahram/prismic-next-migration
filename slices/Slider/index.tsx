import { Content, asText } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Heading from '@/components/Heading'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import { type Swiper as SwiperRef } from 'swiper'
import 'swiper/css'
import { PrismicNextImage } from '@prismicio/next'
import Copy from '@/components/Copy'

/**
 * Props for `Slider`.
 */
export type SliderProps = SliceComponentProps<Content.SliderSlice>

/**
 * Component for "Slider" Slices.
 */
const Slider = ({ slice }: SliderProps): JSX.Element => {
  const thumbsSwiper = useRef<SwiperRef>()
  const [activeSlide, setActiveSlide] = useState(0)
  const [instance, setInstance] = useState<SwiperClass | null>(null)

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='py-16 lg:py-24'
    >
      <div className='pointer-events-none relative z-10 grow'>
        <div className='absolute inset-0 -right-6 bg-gradient-to-r from-white to-transparent lg:-right-8' />
      </div>
      <div className='container'>
        <Heading field={slice.primary.title} size='2xl' className='max-w-lg' />
        <div className='border-gray-EE border-b'>
          <Swiper
            slidesPerGroup={1}
            slideToClickedSlide={true}
            watchSlidesProgress={true}
            slidesPerView='auto'
            allowTouchMove={false}
            onSwiper={swiper => {
              thumbsSwiper.current = swiper
            }}
            style={{ overflow: 'visible' }}
            className='thumb-swiper mt-8 w-[100px] md:mt-16'
          >
            {slice.items.map((item, index) => (
              <SwiperSlide key={index}>
                <PaginationBullet
                  index={index}
                  item={item}
                  activeSlide={activeSlide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Swiper
          onSwiper={setInstance}
          slidesPerView={1}
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper.current }}
          className='tab-swiper mt-8 first:mt-0 2xl:mt-14'
          navigation={{
            prevEl: '.tab-swiper-nav .prev',
            nextEl: '.tab-swiper-nav .next',
            disabledClass: 'tab-swiper-nav-disabled'
          }}
          onSlideChange={swiper => {
            setActiveSlide(swiper.activeIndex)
          }}
        >
          {slice.items.map((item, index) => (
            <SwiperSlide key={index} className={`video-slide-${index}`}>
              <div className='grid w-full grid-cols-12 items-start gap-6'>
                <div className='relative col-span-12 overflow-hidden rounded-xl md:col-span-8'>
                  <div className='border-gray-EE absolute -inset-0.5 rounded-[14px] border-4' />
                  <PrismicNextImage
                    field={item.image}
                    className='aspect-[206/105] object-cover'
                  />
                </div>
                <Copy
                  field={item.description}
                  muted
                  className='col-span-12 md:col-span-4 md:pb-16'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='mt-6 md:grid md:grid-cols-12 md:gap-6'>
          <div className='tab-swiper-nav relative z-10 flex gap-2 md:col-span-4 md:col-start-9 md:-mt-16'>
            <button
              aria-label='Previous'
              className='prev border-gray-15 bg-gray-15 disabled:text-gray-15 h-10 w-10 rounded-full border-2 text-white transition-all disabled:bg-transparent disabled:opacity-25'
            >
              <ChevronIcon className='mx-auto h-6 w-6 rotate-90' />
            </button>
            <button
              aria-label='Next'
              className='next border-gray-15 bg-gray-15 disabled:text-gray-15 h-10 w-10 rounded-full border-2 text-white transition-all disabled:bg-transparent disabled:opacity-25'
            >
              <ChevronIcon className='mx-auto h-6 w-6 -rotate-90' />
            </button>
          </div>
        </div>
      </div>
      <div className='pointer-events-none relative z-10 grow'>
        <div className='absolute inset-0 -left-6 bg-gradient-to-l from-white to-transparent lg:-left-8' />
      </div>
    </section>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M8 10L12 14L16 10'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='square'
      />
    </svg>
  )
}

const PaginationBullet = ({
  index,
  item,
  activeSlide
}: {
  index: number
  item: any
  activeSlide: number
}) => (
  <button className='relative mr-4 pb-8 md:mr-20 lg:pb-16'>
    <h3
      className={clsx(
        'font-headings text-xl-tight sm:text-3xl-tight font-medium tracking-tight lg:text-4xl 2xl:text-5xl',
        {
          'text-gray-15': index === activeSlide,
          'text-gray-A4': index !== activeSlide
        }
      )}
    >
      {asText(item.title)}
    </h3>
    {index === activeSlide && (
      <motion.div
        className='bg-primary-green pointer-events-none absolute -bottom-px -mb-px h-[3px] w-full rounded-full'
        layoutId='box'
        transition={{ type: 'spring', stiffness: 70, duration: 1000 }}
      />
    )}
  </button>
)

export default Slider
