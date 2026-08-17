"use client";

import { motion } from "framer-motion";
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Search,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Address",
    content: (
      <p className="mt-2 text-sm leading-6 text-gray-600">
        No.524, 50 Feet Main Road,
        <br />
        Near 15F Bus Stop,
        <br />
        Bangalore – 560111
      </p>
    ),
  },
  {
    icon: Clock3,
    title: "Hours",
    content: (
      <div className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    ),
  },
  {
    icon: Mail,
    title: "Contact",
    content: (
      <div className="mt-2 space-y-1 text-sm leading-6 text-gray-600">
        <p>
          Email:{" "}
          <a
            href="mailto:taxinetaxconsultants@gmail.com"
            className="transition-colors hover:text-[#D4AF37]"
          >
            taxinetaxconsultants@gmail.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a
            href="tel:+917975904980"
            className="transition-colors hover:text-[#D4AF37]"
          >
            +91 79759 04980
          </a>
        </p>
      </div>
    ),
  },
];

export default function GoogleMap() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Small heading */}
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#D4AF37]
              sm:text-xs
              flex text-center gap-3
              justify-center
            "
          >
            <Search size={15} />
            Find Us
          </p>

          {/* Main heading */}
          <h2
            className="
              mt-3
              font-serif
              text-3xl
              font-bold
              text-[#172c40]
              sm:text-4xl
            "
          >
            Visit Our Location
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-gray-500
              sm:text-base
              sm:leading-7
            "
          >
            Visit our office in Bangalore for professional tax, accounting,
            GST and compliance services.
          </p>

          {/* Gold line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mx-auto mt-5 h-0.5 bg-[#D4AF37]"
          />
        </motion.div>

        {/* ================================= */}
        {/* CONTENT */}
        {/* ================================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-8
            lg:mt-16
            lg:grid-cols-2
            lg:gap-12
          "
        >

          {/* ================================= */}
          {/* GOOGLE MAP */}
          {/* ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{
              y: -4,
            }}
            className="
              group
              overflow-hidden
              rounded-lg
              border
              border-gray-200
              bg-white
              shadow-sm
              transition-shadow
              duration-300
              hover:shadow-lg
            "
          >
            <div className="relative h-[350px] sm:h-[420px] lg:h-full lg:min-h-[480px]">

              {/* Map overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  z-10
                  border-2
                  border-transparent
                  transition-colors
                  duration-300
                  group-hover:border-[#D4AF37]/40
                "
              />

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                title="Our office location"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* ================================= */}
          {/* INFORMATION */}
          {/* ================================= */}

          <div className="flex flex-col justify-center">

            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    group
                    border-b
                    border-gray-200
                    px-1
                    py-6
                    first:pt-0
                    last:border-b-0
                  "
                >
                  <div className="flex gap-4">

                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 3,
                      }}
                      className="
                        flex
                        size-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-sm
                        border
                        bg-[#D4AF37]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:bg-[#D4AF37]
                        group-hover:border-[#172c40]
                      "
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />
                    </motion.div>

                    {/* Text */}
                    <div>
                      <h3
                        className="
                          font-serif
                          text-lg
                          font-semibold
                          text-[#172c40]
                        "
                      >
                        {item.title}
                      </h3>

                      {item.content}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Direction Button */}

            <motion.a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
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
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-6
                inline-flex
                w-fit
                items-center
                justify-center
                bg-[#172c40]
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-colors
                duration-300
                hover:bg-[#D4AF37]
                hover:text-white
              "
            >
              Get Directions
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}