"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, User } from "lucide-react";

const expertise = [
  {
    title: "Direct Taxation",
    description: "Income Tax Planning & Return Filing",
  },
  {
    title: "GST & Indirect Taxation",
    description: "Registration, Returns & Compliance",
  },
  {
    title: "Audit Services",
    description: "Tax Audits, LLP Audits & Company Audits",
  },
];

export default function FounderSection() {
  return (
    <section className="w-full bg-[#f8f8f8] py-16 sm:py-20 lg:py-24">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          gap-10
          px-5
          sm:px-8
          lg:flex-row
          lg:items-center
          lg:gap-14
        "
      >
        {/* Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            relative
            w-full
            overflow-hidden
            rounded-sm
            shadow-xl
            lg:w-[48%]
          "
        >
          <img
            src="/founder.jpg"
            alt="Founder and Proprietor"
            className="
              h-105
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              hover:scale-[1.02]
              sm:h-120
              lg:h-113.75
            "
          />

          {/* Bottom Gradient */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-36
              bg-gradient-to-t
              from-black/75
              via-black/30
              to-transparent
            "
          />

          {/* Founder Name */}
          <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
            <h3
              className="
                font-serif
                text-2xl
                font-bold
                text-white
                sm:text-3xl
              "
            >
              Praveen Dorairaj
            </h3>

            <p className="mt-1 text-sm font-medium text-[#D4AF37]">
              Proprietor & Founder
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.15,
          }}
          className="w-full lg:w-[52%]"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
            flex items-baseline gap-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#D4AF37]
              sm:text-xs
            "
          >
            <User />
            Expert Leadership
          </motion.p>

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
              lg:text-[38px]
            "
          >
            Meet Our Founder
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-[#253448]
              sm:text-[15px]
              sm:leading-7
            "
          >
            <span className="font-semibold">
              Praveen Dorairaj
            </span>{" "}
            is the Proprietor & Founder with over{" "}
            <span className="font-semibold">5+ years of experience</span> in
            Direct Taxation, Indirect Taxation, Tax Audits, Private Limited
            Company Audits and LLP Audits.
          </p>

          {/* Expertise */}
          <div className="mt-6 space-y-5">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.12,
                }}
                className="group flex items-start gap-3"
              >
                {/* Icon */}
                <CheckCircle2
                  size={18}
                  strokeWidth={1.8}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#D4AF37]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {/* Text */}
                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-[#092b4c]
                      sm:text-[15px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      leading-5
                      text-gray-600
                      sm:text-sm
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
            className="mt-7"
          >
            <Link
              href="/contact"
              className="
                inline-flex
                h-11
                items-center
                justify-center
                bg-[#092b4c]
                px-7
                text-xs
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-[#D4AF37]
                hover:text-black
                hover:shadow-lg
                sm:text-sm
              "
            >
              Book Free Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}