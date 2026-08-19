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
    <section className="w-full bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div
          className="
            mt-12 h-full
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
              h-[500px]
            "
          >
            <div className="relative h-full">
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
        </div>
      </div>
      <div className="flex items-center justify-center">
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
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-colors
                duration-300
                bg-[#2E7D32]
                hover:bg-[#D4AF37]
              "
            >
              Get Directions
            </motion.a>
      </div>
    </section>
  );
}