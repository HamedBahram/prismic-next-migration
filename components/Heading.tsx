import { PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import clsx from "clsx";

type HeadingProps = {
  as?: React.ElementType;
  className?: string;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "2xl-legal";
  field?: prismic.RTNode[];
  text?: string | null;
  children?: React.ReactNode;
};

const sizeCalculator = {
  xs: "text-base-tight 2xl:md-tight font-medium", // 16/-/18
  sm: "text-md-tight 2xl:text-lg font-medium", // 18/-/20
  md: "text-xl-tight 2xl:2xl-tight font-medium", // 22/-/24
  lg: "text-2xl-tight lg:text-3xl-tight 2xl:text-4xl font-medium", // 24/28/32
  xl: "text-3xl-tight lg:text-4xl 2xl:text-5xl font-medium", // 28/32/40
  "2xl-legal": "text-3xl-tight lg:text-4xl font-bold", // 28/32/40
  "2xl": "text-4xl lg:text-5xl 2xl:text-6xl font-bold", // 32/40/48
  "3xl": "text-6xl lg:text-7xl 2xl:text-8xl font-bold", // 48/56/64
};

export default function Heading({
  as: Comp = PrismicRichText,
  className,
  size,
  field,
  text,
  children,
}: HeadingProps) {
  if (field) {
    return (
      <Comp
        field={field}
        components={{
          heading1: ({ children }: any) => (
            <h1
              className={clsx(
                "font-headings tracking-tight",
                clsx(sizeCalculator[size], className)
              )}
            >
              {children}
            </h1>
          ),
          heading2: ({ children }: any) => (
            <h2
              className={clsx(
                "font-headings tracking-tight",
                clsx(sizeCalculator[size], className)
              )}
            >
              {children}
            </h2>
          ),
          heading3: ({ children }: any) => (
            <h3
              className={clsx(
                "font-headings tracking-tight",
                clsx(sizeCalculator[size], className)
              )}
            >
              {children}
            </h3>
          ),
          heading4: ({ children }: any) => (
            <h4
              className={clsx(
                "font-headings tracking-tight",
                clsx(sizeCalculator[size], className)
              )}
            >
              {children}
            </h4>
          ),
          heading5: ({ children }: any) => (
            <h5
              className={clsx(
                "font-headings tracking-tight",
                clsx(sizeCalculator[size], className)
              )}
            >
              {children}
            </h5>
          ),
          heading6: ({ children }: any) => (
            <h6
              className={clsx(
                "font-headings tracking-tight",
                clsx(sizeCalculator[size], className)
              )}
            >
              {children}
            </h6>
          ),
        }}
      />
    );
  } else {
    return (
      <Comp
        className={clsx(
          "font-headings tracking-tight",
          clsx(sizeCalculator[size], className)
        )}
      >
        {text ? text : children}
      </Comp>
    );
  }
}
