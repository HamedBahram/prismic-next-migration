import { isFilled } from "@prismicio/client";
import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";
import { PrismicRichText } from "@prismicio/react";
import clsx from "clsx";
import CheckIcon from "@/assets/svg/check.svg";
import { PrismicNextLink } from "@prismicio/next";

type Props = {
  className?: string;
  size?: VariantProps<typeof copyStyles>["size"];
  field?: any;
  muted?: VariantProps<typeof copyStyles>["muted"];
  text?: string;
  legal?: boolean;
  hero?: boolean;
};

const copyStyles = cva("font-copy", {
  variants: {
    size: {
      xs: "text-xs font-medium", // 12/-/-
      sm: "text-base font-medium print:text-[10px] print:text-justify", // 16/-/-
      md: "text-base 2xl:text-md font-medium print:text-[12px] print:text-justify", // 16/-/18
      lg: "text-base lg:text-md 2xl:text-xl font-medium print:text-[14px] print:text-justify", // 16/18/22
      xl: "text-2xl 2xl:text-3xl font-medium", // 24/-/28
    },
    muted: {
      true: "text-gray-50",
    },
  },
  defaultVariants: {
    size: "md",
    muted: false,
  },
});

export default function Copy({ className, size, field, muted, text }: Props) {
  if (isFilled.richText(field)) {
    return (
      <div className={cx(copyStyles({ size, muted }), className)}>
        <PrismicRichText
          field={field}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-3xl-tight lg:text-4xl 2xl:text-5xl font-medium font-headings tracking-tight print:mb-2 print:mt-8">
                {children}
              </h2>
            ),
            heading3: ({ children }) => (
              <h3 className="font-medium font-headings tracking-tight mb-6 mt-12 first:mt-0 text-2xl-tight lg:text-3xl-tight print:mb-2 print:mt-8 2xl:text-4xl">
                {children}
              </h3>
            ),
            heading4: ({ children }) => (
              <h4 className="text-xl-tight font-medium font-headings tracking-tight mb-6 mt-12 first:mt-0 print:mb-2 print:mt-8 2xl:2xl-tight">
                {children}
              </h4>
            ),
            heading5: ({ children }) => (
              <h5 className="text-md-tight 2xl:text-lg font-medium font-headings tracking-tight mb-6 mt-12 first:mt-0 print:mb-2 print:mt-8">
                {children}
              </h5>
            ),
            heading6: ({ children }) => (
              <h6 className="text-base-tight 2xl:md-tight font-medium font-headings tracking-tight mb-6 mt-12 first:mt-0 print:mb-2 print:mt-8">
                {children}
              </h6>
            ),
            paragraph: ({ children }) => (
              <p className="my-6 first:mt-0 last:mb-0 print:my-2">{children}</p>
            ),
            listItem: ({ children }) => (
              <li className="my-6 first:mt-0 last:mb-0 pl-9 relative print:my-2 print:pl-6">
                <CheckIcon className="absolute left-0 top-0.5 w-6 h-6 print:w-4 print:h-4 text-primary-purple" />
                {children}
              </li>
            ),
            hyperlink: ({ node, children, key }) => (
              <PrismicNextLink
                key={key}
                field={node.data}
                className="text-primary-purple hover:underline"
              >
                {children}
              </PrismicNextLink>
            ),
          }}
        />
      </div>
    );
  } else if (text) {
    return (
      <div className={cx(copyStyles({ size, muted }), className)}>
        <p>{text}</p>
      </div>
    );
  } else {
    return null;
  }
}
