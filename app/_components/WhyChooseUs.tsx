"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  FileCheck2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Expert Chartered Accountants",
    description:
      "Our team consists of qualified CAs with years of specialised experience in taxation, auditing, and corporate compliance.",
  },
  {
    icon: FileCheck2,
    title: "Zero Missed Deadlines",
    description:
      "We track all regulatory deadlines for you — no penalties, no interest, no stress. Timely compliance is our promise.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent, Fixed Pricing",
    description:"No hidden charges. Clear scope and pricing upfront so you always know what you're paying for.",
  },
  {
    icon: Headphones,
    title: "Personalised Service",
    description:"You get a dedicated relationship manager who understands your business — not a call center ticket number.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const;

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.7,
          }}
          className="mb-14 text-center"
        >
          {/* Eyebrow */}
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#D4AF37]
              sm:text-xs
            "
          >
            Why Choose Us
          </p>

          {/* Heading */}
          <h2
            className="
              mt-3
              font-serif
              text-3xl
              font-bold
              leading-tight
              text-[#092b4c]
              sm:text-4xl
              md:text-[40px]
            "
          >
            Why Taxine <span className="text-[#2E7D32]">Tax Stands Apart</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-gray-600
              sm:text-base
              sm:leading-7
            "
          >
            We combine deep expertise with personal attention to deliver results that protect your finances and grow your business.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* ================================= */}
          {/* LEFT FEATURES */}
          {/* ================================= */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="space-y-9"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{
                    x: 6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                  "
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      border
                      bg-[#D4AF37]
                      text-white
                      transition-all
                      duration-300
                      group-hover:border-[#D4AF37]
                      group-hover:bg-[#D4AF37]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                    />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-[#092b4c]
                        transition-colors
                        duration-300
                        group-hover:text-[#D4AF37]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-xl
                        text-sm
                        leading-6
                        text-gray-600
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================================= */}
          {/* RIGHT IMAGE */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="group relative"
          >
            {/* Image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-lg
                shadow-xl
              "
            >
              <img
                src="/whychoose.jpg"
                alt="Professional accounting and tax services"
                className="
                  h-105
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                  sm:h-125
                  lg:h-140
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#092b4c]/50
                  via-transparent
                  to-transparent
                  opacity-70
                "
              />
            </div>

            {/* Decorative Border */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="
                pointer-events-none
                absolute
                -bottom-4
                -right-4
                z-0
                h-full
                w-full
                rounded-lg
                border-2
                border-[#D4AF37]/30
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}