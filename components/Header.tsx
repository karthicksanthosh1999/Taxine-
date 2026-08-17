"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { pages } from "@/data/data";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#F8F9FA]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ========================= */}
        {/* DESKTOP / MAIN HEADER */}
        {/* ========================= */}

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="
              shrink-0
              font-serif
              text-2xl
              font-semibolde
              tracking-wide
              text-[#D4AF37]
              transition-opacity
              duration-300
              hover:opacity-80
              sm:text-3xl
            "
          >
            <Image src="/logo.webp" alt="" width={150} height={150} />
          </Link>

          {/* ========================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ========================= */}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-10">
              {pages.map((item, index) => (
                <li key={`${item.title}-${index}`}>
                  <Link
                    href="#"
                    className="
                      relative
                      py-2
                      text-sm
                      font-medium
                      text-[#1A2B3C]
                      transition-colors
                      duration-300
                      hover:text-[#D4AF37]
                    "
                  >
                    {item.title}

                    {/* Hover underline */}
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-[#D4AF37]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ========================= */}
          {/* DESKTOP CTA */}
          {/* ========================= */}

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917975904980"
              className="
                hidden
                xl:flex
                items-center
                gap-2
                text-sm
                font-medium
                text-[#1A2B3C]
                transition-colors
                duration-300
                hover:text-[#D4AF37]
              "
            >
              <Phone size={16} strokeWidth={1.7} />
              +91 79759 04980
            </a>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                bg-[#1A2B3C]
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-black
              "
            >
              Free Consultation
            </Link>
          </div>

          {/* ========================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ========================= */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="
              flex
              size-10
              items-center
              justify-center
              text-[#1A2B3C]
              transition-colors
              duration-300
              hover:text-[#D4AF37]
              lg:hidden
            "
          >
            {isOpen ? (
              <X size={25} strokeWidth={1.7} />
            ) : (
              <Menu size={25} strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* ========================= */}
        {/* MOBILE MENU */}
        {/* ========================= */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden lg:hidden"
            >
              <nav className="border-t border-gray-200 py-4">
                <ul className="flex flex-col">

                  {pages.map((item, index) => (
                    <motion.li
                      key={`${item.title}-${index}`}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href="#"
                        onClick={() => setIsOpen(false)}
                        className="
                          block
                          border-b
                          border-gray-100
                          px-2
                          py-3
                          text-sm
                          font-medium
                          text-[#1A2B3C]
                          transition-colors
                          duration-300
                          hover:text-[#D4AF37]
                        "
                      >
                        {item.title}
                      </Link>
                    </motion.li>
                  ))}

                  {/* Mobile CTA */}
                  <li className="pt-4">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        bg-[#1A2B3C]
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        transition-colors
                        duration-300
                        hover:bg-[#D4AF37]
                        hover:text-black
                      "
                    >
                      Book Free Consultation
                    </Link>
                  </li>

                  {/* Mobile Phone */}
                  <li className="pt-4 pb-2">
                    <a
                      href="tel:+917975904980"
                      className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        font-medium
                        text-[#1A2B3C]
                        transition-colors
                        hover:text-[#D4AF37]
                      "
                    >
                      <Phone size={16} />
                      +91 79759 04980
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;