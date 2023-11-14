import Button from "@/components/Button";
import Copy from "@/components/Copy";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <div className="container py-16 lg:py-24 relative z-10 text-center flex flex-col items-center">
        {slice.primary.pre_title && (
          <span className="text-primary-purple font-bold text-md mb-4">
            {slice.primary.pre_title}
          </span>
        )}
        <Heading field={slice.primary.title} size="3xl" className="max-w-4xl" />
        <Copy
          field={slice.primary.description}
          muted
          className="max-w-2xl mt-6"
          size="lg"
        />
        {slice.items.length > 0 && (
          <div className="mt-8">
            {slice.items.map((item, index) => (
              <Button
                key={index}
                field={item.link}
                style={item.style}
                className="inline-block"
              >
                {item.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      <PrismicNextImage
        field={slice.primary.background}
        className="w-full absolute inset-0 object-cover object-center h-full"
      />
    </section>
  );
};

export default Hero;
