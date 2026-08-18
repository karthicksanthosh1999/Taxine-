'use client';

import { motion } from 'framer-motion';
import { MapPlus } from 'lucide-react';

const ClientReview = () => {
    const testimonials = [
        { 
            text: 'Taxine Tax Consultants handled our GST registration and monthly returns flawlessly. Their team is prompt, professional, and always available. Highly recommended for any business looking for reliable CA services in Bangalore.', 
            name: 'Rajesh Kumar', 
            role: 'Director, Tech Startup - Bangalore',
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200' 
        },
        { 
            text: 'I got my private limited company registered through them in less than a week. The process was smooth and they guided me through every single step. Praveen and his team are absolutely fantastic to work with!', 
            name: 'Anitha Rao', 
            role: 'Founder, Retail Business - Bangalore', 
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200' 
        },
        { 
            text: 'Filing my income tax return was always a headache until I found Taxine. Now I just share my documents and everything is done on time. Their tax planning advice has also helped me save significantly every year.', 
            name: 'Mohammed Irfan', 
            role: 'Senior IT Professional – Bangalore', 
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60' 
        },
        { 
            text: 'We shipped faster with PrebuiltUI, and the design quality never took a hit. The components feel reliable and polished.', 
            name: 'Sofia Martinez', 
            role: 'UI/UX designer', 
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop' 
        }
    ]


const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem = {
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
} as const;

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }
                `}
            </style>

            <section id='review' className="bg-zinc-100 py-16 px-4">
                <div className="max-w-6xl mx-auto">
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
            Client Review
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
            What Our <span className="text-[#29752D]">Client Say</span>
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
            Hundreds of businesses and individuals trust Taxine Tax Consultants for their financial needs.
          </p>
        </motion.div>
          <section className="w-full bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Grid */}
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-[auto_1fr_1fr]
          "
        >
          {/* ========================================= */}
          {/* FEATURE IMAGE CARD */}
          {/* ========================================= */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -60,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              relative
              mx-auto
              h-[420px]
              w-full
              max-w-sm
              overflow-hidden
              rounded-lg
              shadow-sm
              md:row-span-2
              md:mx-0
              md:h-full
              md:min-h-[560px]
              md:w-80
              lg:w-[350px]
            "
          >
            {/* Image */}
            <img
              src="/client.jpg"
              alt="Client testimonial"
              className="
                h-full
                w-full
                object-cover
                object-top
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Dark Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
              "
            />
            {/* Bottom Testimonial */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                rounded-b-lg
                bg-black/20
                p-5
                backdrop-blur-md
              "
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1.5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.7 + i * 0.08,
                        duration: 0.3,
                      }}
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                    >
                      <path
                        d="M7.435.693c.3-.922 1.603-.922 1.902 0l1.294 3.982a1 1 0 0 0 .951.691h4.188c.968 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.294 3.983c.3.921-.755 1.687-1.538 1.118l-3.388-2.462a1 1 0 0 0-1.176 0L4.41 15.856c-.784.57-1.838-.197-1.539-1.118l1.294-3.983a1 1 0 0 0-.363-1.118L.414 7.175c-.784-.569-.38-1.809.588-1.809H5.19a1 1 0 0 0 .95-.69z"
                        fill="#D4AF37"
                      />
                    </motion.svg>
                  ))}
              </div>

              <p className="text-sm leading-5 text-white">
                PrebuiltUI components helped us move faster without
                sacrificing design quality.
              </p>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* TESTIMONIAL CARDS */}
          {/* ========================================= */}

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              variants={cardItem}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                },
              }}
              className="
                group
                flex
                flex-col
                justify-between
                rounded-lg
                border
                border-gray-100
                bg-white
                p-5
                shadow-sm
                transition-shadow
                duration-300
                hover:shadow-lg
              "
            >
              <div>
                {/* Stars */}
                <div className="mb-4 flex gap-1.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
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
                        width="17"
                        height="17"
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

                {/* Testimonial */}
                <p className="text-sm leading-6 text-gray-600 italic">
                  {item.text}
                </p>
              </div>

              {/* User */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    size-11
                    rounded-full
                    object-cover
                    ring-2
                    ring-transparent
                    transition-all
                    duration-300
                    group-hover:ring-[#D4AF37]/40
                  "
                />

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

                </div>
            </section>
        </>
    )
}
export default ClientReview;