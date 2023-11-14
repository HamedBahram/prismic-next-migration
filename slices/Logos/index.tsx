import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Logos`.
 */
export type LogosProps = SliceComponentProps<Content.LogosSlice>;

/**
 * Component for "Logos" Slices.
 */
const Logos = ({ slice }: LogosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-gray-F7"
    >
      <div className="container py-16 lg:py-24 text-center md:text-left">
        <Heading field={slice.primary.title} size="sm" />
        <div className="flex flex-wrap flex-col md:flex-row items-center gap-x-24 gap-y-12 mt-12 lg:justify-between">
          {slice.items.map((item, index) => (
            <PrismicNextImage
              key={index}
              field={item.logo}
              className="max-w-[100px] xl:max-w-[150px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;
