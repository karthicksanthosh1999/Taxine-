"use client";

import {
  FileText,
  Receipt,
  SearchCheck,
  Building2,
  Calculator,
  Lightbulb,
  BriefcaseBusiness,
  BadgeCheck,
} from "lucide-react";

import { motion, Variants } from "framer-motion";

interface Service {
  id?: string,
  category: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

const services: Service[] = [
  {
    category: "TAXATION",
    id:"#incomeTaxServices",
    title: "Income Tax Services",
    description:
      "Complete income tax planning, preparation, and filing services for individuals, businesses, and corporates.",
    icon: FileText,
    features: [
      "Individual ITR Filing (All Slabs)",
      "Corporate Tax Return Preparation",
      "Tax Planning & Optimization",
      "TDS Return Filing",
      "International Taxation",
    ],
  },
  {
    category: "GST",
    title: "GST Compliance",
    description:
      "End-to-end GST services from registration to filing and advisory for all business types.",
    icon: Receipt,
    features: [
      "Online GST Registration",
      "Monthly / Quarterly GST Returns",
      "GST Reconciliation",
      "GSTR-4 & E-Way Bill",
      "GST Advisory & Audit",
    ],
  },
  {
    category: "AUDIT",
    title: "Audit & Assurance",
    description:
      "Thorough audit services ensuring compliance, transparency, and accuracy in financial reporting.",
    icon: SearchCheck,
    features: [
      "Statutory Audits",
      "Internal Audits",
      "Tax Audit (Sec 44AB)",
      "Audit of Trust",
      "Certification Services",
    ],
  },
  {
    category: "REGISTRATION",
    title: "Business Registration",
    description:
      "Fast and hassle-free company and business registration services for all entity types.",
    icon: Building2,
    features: [
      "Private Limited Company",
      "LLP Registration",
      "Partnership Firm Registration",
      "Proprietorship Setup",
      "MSME/Udyam Registration",
    ],
  },
  {
    category: "ACCOUNTING",
    title: "Accounting & Bookkeeping",
    description:
      "Accurate and up-to-date financial records to keep your business financially healthy and audit-ready.",
    icon: Calculator,
    features: [
      "Accounting & Bookkeeping",
      "Payroll Accounting",
      "LLP Accounting",
      "Financial Accounts Preparation",
      "Company Annual Compliance",
    ],
  },
  {
    category: "ADVISORY",
    title: "Business & Legal Advisory",
    description:
      "Strategic consulting, legal support, and financial advisory to help your business grow with confidence.",
    icon: Lightbulb,
    features: [
      "Startup Advisory Services",
      "Debt Settlement Consulting",
      "Power of Attorney",
      "Trust & Estate Planning",
      "Property Dispute Litigation",
    ],
  },
  {
    category: "LICENSING",
    title: "Business Licenses & Registrations",
    description:
      "Complete assistance for obtaining mandatory business licenses and registrations required for smooth business operations.",
    icon: BadgeCheck,
    features: [
      "FSSAI License Registration",
      "Shop & Establishment License",
      "Import Export Code (IEC)",
      "GMP / Trade License",
      "Professional Tax Registration",
    ],
  },
  {
    category: "CONSULTING",
    title: "Management Consultancy Services",
    description:
      "Strategic business consulting and operational guidance to help organizations improve efficiency and achieve growth.",
    icon: BriefcaseBusiness,
    features: [
      "Business Process Consulting",
      "Financial Management Advisory",
      "Strategic Growth Strategy",
      "Compliance Management",
      "Corporate Restructuring Support",
    ],
  },
];

/* --------------------------------
   Container Animation
--------------------------------- */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* --------------------------------
   Card Animation
--------------------------------- */

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* --------------------------------
   Feature Animation
--------------------------------- */

const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-green-200
        bg-white
        p-5
        transition-colors
        duration-300
        hover:border-green-400
        hover:shadow-[0_12px_35px_rgba(34,197,94,0.12)]
      "
    >
      {/* Animated background glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-green-100
          opacity-0
          blur-2xl
        "
        whileHover={{
          opacity: 0.7,
          scale: 1.5,
        }}
        transition={{
          duration: 0.4,
        }}
      />

      <div className="relative z-10">
        {/* Category */}

        <motion.span
          whileHover={{
            scale: 1.05,
          }}
          className="
            inline-flex
            rounded-full
            bg-green-50
            px-2.5
            py-1
            text-xs
            font-semibold
            tracking-[0.15em]
            text-green-700
          "
        >
          {service.category}
        </motion.span>

        {/* Icon */}

        <motion.div
          whileHover={{
            scale: 1.12,
            rotate: 5,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          className="
            mt-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-green-50
            transition-colors
            duration-300
            group-hover:bg-[#2E7D32]
          "
        >
          <Icon
            size={19}
            strokeWidth={2}
            className="text-green-700 group-hover:text-white"
          />
        </motion.div>

        {/* Title */}

        <motion.h3
          className="
            mt-4
            text-lg
            font-semibold
            text-[#173b2a]
            transition-colors
            duration-300
            group-hover:text-green-700
          "
        >
          {service.title}
        </motion.h3>

        {/* Description */}

        <p className="mt-2 text-[15px] leading-5 text-gray-500">
          {service.description}
        </p>

        {/* Features */}

        <motion.ul
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.06,
              },
            },
          }}
          className="mt-4 space-y-2"
        >
          {service.features.map((feature) => (
            <motion.li
              key={feature}
              variants={featureVariants}
              className="
                flex
                items-start
                gap-2
                text-[10px]
                leading-4
                text-gray-600
              "
            >
              <motion.span
                whileHover={{
                  scale: 1.5,
                }}
                className="
                  mt-[5px]
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-green-600
                "
              />

              <span className="text-sm">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="service" className="bg-[#f9fbf8] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Cards */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              service={service}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}