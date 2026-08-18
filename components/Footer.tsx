"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    label: "Income Tax",
    href: "/services/income-tax",
  },
  {
    label: "GST",
    href: "/services/gst",
  },
  {
    label: "Audit",
    href: "/services/audit",
  },
  {
    label: "Compliance",
    href: "/services/compliance",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#192D41] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Main Footer */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            grid
            grid-cols-1
            gap-10
            py-14
            sm:py-16
            lg:grid-cols-[1.2fr_0.8fr_1.2fr]
            lg:gap-16
            lg:py-20
          "
        >
          {/* ================================= */}
          {/* BRAND */}
          {/* ================================= */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block">
              <h2
                className="
                  font-serif
                  text-2xl
                  font-semibold
                  tracking-wide
                  text-[#D4AF37]
                  sm:text-3xl
                "
              >
                   <Image src="/logo.webp" alt="" width={150} height={150} />
              </h2>
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-[#91A5BB]
                sm:leading-7
              "
            >
              Fluent Tax Network. Providing expert accounting, taxation,
              and business compliance services in Bangalore since over a
              decade.
            </p>
          </motion.div>

          {/* ================================= */}
          {/* SERVICES */}
          {/* ================================= */}

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            aria-label="Footer navigation"
          >
            <ul className="space-y-4">
              <h1 className="text-xl font-semibold text-white tracking-wider">Quick Links</h1>
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.08,
                  }}
                >
                  <Link
                    href={service.href}
                    className="
                      text-sm
                      text-[#91A5BB]
                      transition-colors
                      duration-300
                      hover:text-[#D4AF37]
                    "
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* ================================= */}
          {/* CONTACT */}
          {/* ================================= */}


          <motion.div
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
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="text-sm text-[#91A5BB]"
            >
            <h1 className="text-xl font-semibold text-white tracking-wider">Address</h1>
            {/* Address */}
            <p className="max-w-md leading-6">
              No.524, 50 Feet Main Road, Near 15F Bus Stop,
              <br className="hidden sm:block" />
              Bangalore – 560111
            </p>

            {/* Phone */}
            <a
              href="tel:+917975904980"
              className="
                mt-4
                block
                w-fit
                transition-colors
                duration-300
                hover:text-[#D4AF37]
              "
            >
              +91 79759 04980
            </a>

            {/* Email */}
            <a
              href="mailto:taxinetaxconsultants@gmail.com"
              className="
                mt-4
                block
                w-fit
                break-all
                transition-colors
                duration-300
                hover:text-[#D4AF37]
              "
            >
              taxinetaxconsultants@gmail.com
            </a>
          </motion.div>
        </motion.div>

        {/* ================================= */}
        {/* DIVIDER */}
        {/* ================================= */}

        <div className="h-px w-full bg-white/10" />

        {/* ================================= */}
        {/* COPYRIGHT */}
        {/* ================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="
            flex
            min-h-27.5
            items-center
            justify-center
            sm:justify-start
          "
        >
          <p className="text-sm text-[#91A5BB]">
            © {new Date().getFullYear()} Taxine Tax Consultants. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}