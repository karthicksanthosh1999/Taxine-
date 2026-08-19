"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ServiceSectionProps {
  title?: string;
  description?: string;
  services?: string[];
}

const defaultServices = [
  "Business Registrations",
  "Accounting & Bookkeeping",
  "GST & Tax Compliance",
  "Statutory Audit",
  "Tax Planning & Advisory",
  "Corporate Compliance",
  "Financial Consulting",
  "Regulatory Certifications",
];

export default function MiniServices({
  title = "Comprehensive Financial Services",
  description = "We offer a wide range of professional services designed to meet the diverse needs of our clients, from individuals and startups to established businesses.",
  services = defaultServices,
}: ServiceSectionProps) {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              text-4xl
              font-bold
              tracking-tight
              text-[#071D3A]
              sm:text-5xl
            "
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-[#24446A]
              sm:text-lg
            "
          >
            {description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-[#24446A]
              sm:text-lg
            "
          >
            Our services are tailored to support you at every stage of your
            business journey, ensuring compliance, efficiency, and growth.
          </motion.p>

          {/* BUTTON */}
          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-9
              inline-flex
              items-center
              gap-6
              rounded-lg
              px-5
              py-3.5
              text-base
              font-semibold
              text-white
              shadow-sm
              transition-colors
              duration-300
              bg-primary
              hover:bg-primaryGreen
              "
          >
            Explore Our Services

            <ArrowRight
              size={20}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>

        {/* RIGHT SERVICE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            rounded-2xl
            bg-white
            px-8
            py-8
            shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            sm:px-10
            sm:py-9
          "
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              text-2xl
              font-bold
              text-[#071D3A]
            "
          >
            Our Service Areas:
          </motion.h3>

          <div className="mt-7 space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.08,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  text-base
                  text-[#24446A]
                "
              >
                <CheckCircle2
                  size={23}
                  strokeWidth={2}
                  className="shrink-0 text-[#FF6B00]"
                />

                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}