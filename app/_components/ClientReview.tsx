"use client";

import { motion, Variants } from "framer-motion";
import { MapPlus, Quote, ArrowUpRight } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Taxine Tax Consultants handled our GST registration and monthly returns flawlessly. Their team is prompt, professional, and always available. Highly recommended for any business looking for reliable CA services in Bangalore.",
    name: "Rajesh Kumar",
    role: "Director, Tech Startup - Bangalore",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    text: "I got my private limited company registered through them in less than a week. The process was smooth and they guided me through every single step. Praveen and his team are absolutely fantastic to work with!",
    name: "Anitha Rao",
    role: "Founder, Retail Business - Bangalore",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    text: "Filing my income tax return was always a headache until I found Taxine. Now I just share my documents and everything is done on time. Their tax planning advice has also helped me save significantly every year.",
    name: "Mohammed Irfan",
    role: "Senior IT Professional - Bangalore",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
  },
  {
    text: "We received excellent guidance throughout the entire process. The team was responsive, transparent, and made the complicated financial requirements very easy to understand.",
    name: "Sofia Martinez",
    role: "Business Consultant - Bangalore",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

/* --------------------------------
   Animation Variants
--------------------------------- */

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const cardContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
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

const ClientReview = () => {
  return (
    <>
      <section
        id="review"
        className="w-full bg-[#f8f9fa] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* =========================================
              SECTION HEADER
          ========================================== */}

          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
          >
            {/* Eyebrow */}

            <div className="flex items-center justify-center gap-2">
              <MapPlus
                size={16}
                strokeWidth={1.8}
                className="text-[#D4AF37]"
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D4AF37]
                  sm:text-xs
                "
              >
                Client Reviews
              </span>
            </div>

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
                md:text-[42px]
              "
            >
              What Our{" "}
              <span className="text-[#29752D]">
                Clients Say
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                leading-6
                text-[#526274]
                sm:text-base
                sm:leading-7
              "
            >
              Hundreds of businesses and individuals trust Taxine Tax
              Consultants for their financial and compliance needs.
            </p>
          </motion.div>

          {/* =========================================
              TESTIMONIAL GRID
          ========================================== */}

          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              grid
              grid-cols-1
              gap-5
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                variants={cardItem}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="
                  group
                  relative
                  flex
                  min-h-[330px]
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200/80
                  bg-white
                  p-6
                  shadow-[0_4px_20px_rgba(9,43,76,0.04)]
                  transition-shadow
                  duration-300
                  hover:border-slate-200
                  hover:shadow-[0_18px_45px_rgba(9,43,76,0.10)]
                  sm:p-7
                "
              >

                {/* =================================
                    TOP DECORATION
                ================================== */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    bg-gradient-to-r
                    from-[#29752D]
                    via-[#D4AF37]
                    to-[#29752D]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* =================================
                    QUOTE ICON
                ================================== */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#092b4c]/5
                    text-[#092b4c]/30
                    transition-all
                    duration-300
                    group-hover:bg-[#D4AF37]/10
                    group-hover:text-[#D4AF37]
                  "
                >
                  <Quote
                    size={17}
                    strokeWidth={2}
                  />
                </div>

                {/* =================================
                    STARS
                ================================== */}

                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.12 + i * 0.05,
                        duration: 0.25,
                      }}
                      width="16"
                      height="16"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M7.435.693c.299-.922 1.602-.922 1.902 0l1.294 3.982a1 1 0 0 0 .95.691h4.189c.968 0 1.371 1.24.588 1.81l-3.389 2.461a1 1 0 0 0-.363 1.118l1.294 3.983c.3.921-.755 1.687-1.539 1.118l-3.387-2.462a1 1 0 0 0-1.176 0L4.41 15.856c-.784.57-1.838-.197-1.539-1.118l1.294-3.983a1 1 0 0 0-.363-1.118L.414 7.175c-.784-.569-.38-1.809.588-1.809H5.19a1 1 0 0 0 .95-.69z"
                        fill="#D4AF37"
                      />
                    </motion.svg>
                  ))}
                </div>

                {/* =================================
                    REVIEW TEXT
                ================================== */}

                <div className="flex-1">
                  <p
                    className="
                      text-[14px]
                      leading-7
                      text-[#526274]
                      sm:text-[15px]
                    "
                  >
                    “{item.text}”
                  </p>
                </div>

                {/* =================================
                    DIVIDER
                ================================== */}

                <div className="my-6 h-px w-full bg-slate-100" />

                {/* =================================
                    CLIENT
                ================================== */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">
                    {/* Name */}

                    <div>
                      <h3
                        className="
                          text-sm
                          font-semibold
                          text-[#092b4c]
                        "
                      >
                        {item.name}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          leading-5
                          text-slate-500
                        "
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}

                  <motion.div
                    whileHover={{
                      x: 3,
                      y: -3,
                    }}
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:border-[#D4AF37]
                      group-hover:text-[#D4AF37]
                    "
                  >
                    <ArrowUpRight
                      size={15}
                    />
                  </motion.div>

                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* =========================================
              BOTTOM TRUST TEXT
          ========================================== */}

          <motion.div
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mt-10
              text-center
              sm:mt-12
            "
          >
            <p className="text-xs text-slate-500 sm:text-sm">
              Trusted by businesses and professionals across Bangalore
            </p>

            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-[#D4AF37]" />

              <span className="text-xs font-medium text-[#092b4c]">
                5.0
              </span>

              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-[#D4AF37]"
                  >
                    ★
                  </span>
                ))}
              </div>

              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ClientReview;