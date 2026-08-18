"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Headphones,
  ShieldCheck,
  UsersRound,
  MapPin,
  ArrowDown,
} from "lucide-react";

const trustedItems = [
  {
    title: "MSME Registered",
    icon: BadgeCheck,
  },
  {
    title: "100% Confidential",
    icon: ShieldCheck,
  },
  {
    title: "On-Time Filing",
    icon: Clock3,
  },
  {
    title: "Dedicated Support",
    icon: Headphones,
  },
  {
    title: "Expert CAs",
    icon: UsersRound,
  },
  {
    title: "Based in Bangalore",
    icon: MapPin,
  },
];

export default function Hero() {
  return (
    <section
      id="#home"
      className="
        relative
        flex
        min-h-195
        w-full
        flex-col
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        md:min-h-screen
      "
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Main Hero Content */}
      <div
        className="
          relative
          z-10
          flex
          flex-1
          items-center
          justify-center
          px-5
          pb-20
          pt-24
          text-center
          text-white
          md:pb-32
          md:pt-20
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-4xl
            flex-col
            items-center
          "
        >
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-4
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[#D4AF37]
              sm:text-xs
            "
          >
            FLUENT TAX NETWORK · MSME CERTIFIED
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              max-w-3xl
              font-serif
              text-4xl
              font-bold
              leading-[1.08]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-[64px]
            "
          >
            Expert Tax & CA Services
            <br className="hidden sm:block" />
            <span className="sm:ml-2">You Can Trust</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-6
              max-w-2xl
              px-2
              text-sm
              leading-6
              text-white/90
              sm:mt-7
              sm:text-base
              sm:leading-7
              md:text-[17px]
            "
          >
            Comprehensive accounting, taxation, GST, and business registration
            services in Bangalore. Your trusted partner for financial
            compliance and growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="
              mt-7
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3
              sm:w-auto
              sm:flex-row
            "
          >
            {/* Primary Button */}
            <Link
              href="contact"
              className="
                flex
                h-12
                w-full
                min-w-47.5
                items-center
                justify-center
                border
                border-[#D4AF37]
                bg-[#2E7D32]
                px-6
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#c9a52f]
                hover:shadow-lg
                hover:shadow-[#D4AF37]/20
                sm:w-auto
              "
            >
              Book Free Consultation
            </Link>

            {/* Secondary Button */}
            <Link
              href="/services"
              className="
                group
                flex
                h-12
                w-full
                min-w-42.5
                items-center
                justify-center
                gap-2
                border
                border-[#D4AF37]/70
                bg-black/10
                px-6
                text-sm
                font-medium
                text-[#D4AF37]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-white
                sm:w-auto
              "
            >
              Explore Services

              <ArrowDown
                size={16}
                strokeWidth={1.8}
                className="
                  animate-bounce
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Trusted Section */}
      <div
        className="
          relative
          z-10
          w-full
          border-t
          border-white/10
          bg-black/15
          backdrop-blur-[2px]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-5
            py-7
            sm:px-8
            md:px-10
            md:py-8
          "
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center md:mb-7"
          >
            <h2
              className="
                font-serif
                text-lg
                font-medium
                text-gray-100
                sm:text-xl
              "
            >
              Trusted For
            </h2>

            <div className="mx-auto mt-2 h-0.5 w-10 bg-[#D4AF37]" />
          </motion.div>

          {/* Trust Items */}
          <div
            className="
              grid
              grid-cols-2
              gap-x-4
              gap-y-5
              sm:grid-cols-3
              md:grid-cols-6
              md:gap-4
            "
          >
            {trustedItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    flex
                    min-w-0
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    text-center
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      transition-all
                      duration-300
                      group-hover:border-[#D4AF37]/40
                      group-hover:bg-[#D4AF37]/10
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="
                        text-gray-300
                        transition-colors
                        duration-300
                        group-hover:text-[#D4AF37]
                      "
                    />
                  </div>

                  {/* Text */}
                  <span
                    className="
                      whitespace-nowrap
                      text-[11px]
                      font-medium
                      text-gray-300
                      transition-colors
                      duration-300
                      group-hover:text-[#D4AF37]
                      sm:text-xs
                    "
                  >
                    {item.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}