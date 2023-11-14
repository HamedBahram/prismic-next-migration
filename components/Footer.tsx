import Logo from "@/assets/svg/logo.svg";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";

type Props = {
  layout: Content.LayoutDocument;
};

type ColumnProps = {
  title: Content.LayoutDocumentData["title_column_1"];
  items: Content.LayoutDocumentData["column_1"];
};

function FooterColumn({ title, items }: ColumnProps) {
  return (
    <div className="col-span-6 lg:col-span-3 row-span-1 flex flex-col">
      <Heading text={title} as="h3" size="md" className="mb-4" />
      {items.map((item, i) => (
        <PrismicNextLink
          field={item.link}
          key={i}
          className="block text-gray-EE opacity-75 mt-4 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-15 ring-gray-50 rounded-sm hover:opacity-100 hover:text-white transition-colors"
        >
          {item.label}
        </PrismicNextLink>
      ))}
    </div>
  );
}

export default function Footer({ layout }: Props) {
  return (
    <footer className="bg-gray-15 text-white py-16 2xl:py-20">
      <div className="container flex flex-col sm:grid sm:grid-cols-12 gap-4 gap-y-12 grid-rows-2 lg:grid-rows-1">
        <div className="col-span-6 lg:col-span-3 row-span-1 flex flex-col gap-4">
          <Link href="/" className="w-28 block">
            <Logo />
          </Link>
          <p className="text-gray-EE opacity-75">All rights reserved</p>
        </div>
        <FooterColumn
          title={layout.data.title_column_1}
          items={layout.data.column_1}
        />
        <FooterColumn
          title={layout.data.title_column_2}
          items={layout.data.column_2}
        />
        <FooterColumn
          title={layout.data.title_column_2}
          items={layout.data.column_2}
        />
      </div>
    </footer>
  );
}
