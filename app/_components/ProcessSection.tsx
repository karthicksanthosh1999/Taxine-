"use client";

import { motion } from "framer-motion";
import { MapPlus } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book Free Consultation",
    description:
      "Call us or fill our inquiry form. Our expert will contact you within 24 hours.",
  },
  {
    number: "02",
    title: "Share Documents",
    description:
      "We'll send a checklist. Share securely via WhatsApp, email, or in person.",
  },
  {
    number: "03",
    title: "We Handle Everything",
    description:
      "Our team processes filings with precision and keeps you updated.",
  },
  {
    number: "04",
    title: "Delivery & Support",
    description:
      "Receive documents on time. We stay available for follow-up queries.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="w-full bg-[#f8f9fa] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
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
              flex items-center gap-3
              justify-center
            "
          >
            <MapPlus />
            How It Works
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
            Our Simple <span className="text-[#29752D]">4-Step Process</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-[#253448]
              sm:text-base
              sm:leading-7
            "
          >
            Getting started is easy. We guide you through every step from
            first contact to complete compliance.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative mt-16 sm:mt-20">
          {/* Desktop Connecting Line */}
          <div
            className="
              absolute
              left-[12.5%]
              right-[12.5%]
              top-10.25
              hidden
              h-px
              bg-gray-300
              lg:block
            "
          />

          <div
            className="
              grid
              grid-cols-1
              gap-12
              sm:grid-cols-2
              lg:grid-cols-4
              lg:gap-6
            "
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Box */}
                <motion.div
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`
                    relative
                    z-10
                    flex
                    h-21
                    w-21
                    items-center
                    justify-center
                    rounded-lg
                    border-4
                    shadow-md
                    transition-all
                    duration-300
                    border-white
                    bg-[#e9eaeb]
                    text-[#092b4c]
                    group-hover:bg-[#172c40] 
                    group-hover:text-[#D4AF37]
                  `}
                >
                  <span
                    className="
                      font-serif
                      text-lg
                      font-semibold
                    "
                  >
                    {step.number}
                  </span>
                </motion.div>

                {/* Title */}
                <h3
                  className="
                    mt-7
                    font-serif
                    text-lg
                    font-semibold
                    leading-6
                    text-[#092b4c]
                    sm:text-xl
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    max-w-67.5
                    text-xs
                    leading-5
                    text-gray-600
                    sm:text-sm
                    sm:leading-6
                  "
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}