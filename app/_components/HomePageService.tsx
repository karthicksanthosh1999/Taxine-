"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  FileText,
  Receipt,
  SearchCheck,
  Building2,
  Calculator,
  Lightbulb,
  BriefcaseBusiness,
  BadgeCheck,
  ArrowRight,
  Toolbox,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}
const services: Service[] = [
  {
    title: "Income Tax Services",
    description:
      "Complete income tax planning, preparation, and filing services for individuals, businesses, and corporates.",
    icon: FileText,
    link: "/services",
  },
  {
    title: "GST Compliance",
    description:
      "End-to-end GST services from registration to filing and advisory for all business types.",
    icon: Receipt,
    link: "/services",
  },
  {
    title: "Audit & Assurance",
    description:
      "Thorough audit services ensuring compliance, transparency, and accuracy in financial reporting.",
        icon: SearchCheck,
    link: "/services",
  },
  {
    title: "Business Registration",
    description:
      "Fast and hassle-free company and business registration services for all entity types.",
     icon: Building2,
    link: "/services",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate and up-to-date financial records to keep your business financially healthy and audit-ready.",
     icon: Calculator,
    link: "/services",
  },
  {
    title: "Business & Legal Advisory",
    description:
      "Strategic consulting, legal support, and financial advisory to help your business grow with confidence.",
     icon: Lightbulb,
    link: "/services",
  },
  {
    title: "Business Licenses & Registrations",
    description:
      "Complete assistance for obtaining mandatory business licenses and registrations required for smooth business operations.",
     icon: BadgeCheck,
    link: "/services",
  },
  {
    title: "Management Consultancy Services",
    description:
      "Strategic business consulting and operational guidance to help organizations improve efficiency and achieve growth.",
     icon: BriefcaseBusiness,
    link: "/services",
  },
];

/* --------------------------------
   Animation Variants
--------------------------------- */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function HomePageServices() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* --------------------------------
            Header
        --------------------------------- */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-12 text-center sm:mb-14"
        >
          {/* Badge */}
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
            <Toolbox />
            Our Services
          </p>

          {/* Heading */}
          <h2
            className="
              font-serif
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-[#071E3D]
              sm:text-4xl
              lg:text-[40px]
            "
          >
            
            Comprehensive <span className="text-[#29752D]">Financial Solutions</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-[#365979]
              sm:text-base
            "
          >
            From individual income tax to complex corporate compliance — we cover everything your business needs to stay legally compliant and financially healthy.
          </p>
        </motion.div>

        {/* --------------------------------
            Services Grid
        --------------------------------- */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-1
            gap-x-10
            gap-y-10
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="
                  group
                  min-h-55
                  rounded-xl
                  bg-white
                  p-5
                  transition-shadow
                  duration-300
                  hover:shadow-[0_12px_35px_rgba(7,30,61,0.08)]
                "
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: -3,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary
                    text-white
                    shadow-[0_5px_12px_rgba(8,115,165,0.20)]
                  "
                >
                  <Icon
                    size={25}
                    strokeWidth={1.8}
                  />
                </motion.div>

                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-base
                    font-bold
                    text-[#071E3D]
                    sm:text-[17px]
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    max-w-[320px]
                    text-sm
                    leading-6
                    text-[#365979]
                  "
                >
                  {service.description}
                </p>

                {/* Learn More */}
                <Link
                  href={service.link}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-[#0075B5]
                  "
                >
                  <span>Learn More</span>

                  <motion.span
                    className="inline-flex"
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <ArrowRight
                      size={16}
                      strokeWidth={1.8}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --------------------------------
            View All Services
        --------------------------------- */}

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
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <Link
              href="/services"
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
            View All Services

            <ArrowRight
              size={16}
              strokeWidth={1.8}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
