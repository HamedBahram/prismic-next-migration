"use client";

import Logo from "@/assets/svg/logo.svg";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import Button from "@/components/Button";
import MenuToggle from "@/components/MenuToggle";
import { useState } from "react";
import { Content } from "@prismicio/client";
import clsx from "clsx";

type Props = {
  layout: Content.LayoutDocument;
};

export default function Header({ layout }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="top-0 z-40 sticky py-6 lg:py-0 bg-white">
      <span className="z-20 border-b w-full absolute bottom-0 left-0 border-[#EEEEEE] dark:border-[#505050]" />
      <nav className="container flex items-center justify-between">
        <Link href="/" className="relative flex items-center z-10 lg:pr-8">
          <Logo className="h-7 w-auto" title="Prismic Logotype" />
        </Link>
        <MenuToggle onClick={toggleMenu} isOpen={menuOpen} />
        <div
          className={clsx(
            "fixed grow overflow-auto bottom-0 max-lg:transition-all lg:transition-opacity duration-200 right-0 lg:w-auto lg:p-0 border-l lg:border-none flex flex-col lg:items-center lg:flex-row lg:static lg:space-x-8 bg-white border-[#EEEEEE]",
            menuOpen
              ? "opacity-100 w-full mr-0 top-24"
              : "opacity-0 w-full pointer-events-none lg:opacity-100 lg:pointer-events-auto lg:w-auto lg:mr-0"
          )}
        >
          <div className="order-2 lg:order-1 container lg:px-0 lg:mx-0 lg:w-auto grow">
            <ul className="flex flex-col lg:items-center lg:flex-row lg:justify-center">
              {layout.data.navigation.map((item, i) => (
                <li
                  key={i}
                  className="relative bg-white dark:bg-gray-15 border-[#EEEEEE] dark:border-[#505050] last:border-b lg:border-none z-10 lg:px-3 lg:py-9"
                >
                  <PrismicNextLink
                    field={item.link}
                    className="font-medium flex items-center border-t border-[#EEEEEE] w-full py-4 lg:py-0 lg:border-none underline-offset-8 focus:outline-none focus:underline"
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="container lg:mx-0 lg:w-auto lg:max-w-none justify-end order-1 lg:order-2 flex flex-col sm:flex-row sm:items-center sm:gap-x-4 p-6 lg:p-0 bg-white dark:bg-gray-15 relative z-10">
            {layout.data.call_to_actions.map((item, i) => (
              <Button field={item.link} key={i} style={item.style}>
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
