"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const NewsLetter = () => {
    const { push } = useRouter()
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-auto
          max-w-screen-xl
          overflow-hidden
          rounded-2xl
          bg-primary
          px-6
          py-8
          shadow-lg
          sm:px-8
          md:py-12
          md:px-12
          lg:px-16
          lg:py-14
        "
      >
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="flex-1"
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                  type: "spring",
                  stiffness: 180,
                }}
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                "
              >
                <Mail className="h-5 w-5 text-white" />
              </motion.div>

              <h2
                className="
                  text-2xl
                  font-extrabold
                  leading-8
                  tracking-tight
                  text-white
                  sm:text-3xl
                  sm:leading-9
                "
              >
                Need Professional Assistance?
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-4
                max-w-3xl
                text-base
                leading-7
                text-indigo-200
                sm:text-lg
                sm:leading-7
              "
            >
              Our team is ready to help you with tailored solutions for your business needs.
              developments.
            </motion.p>
          </motion.div>


            {/* BUTTON */}
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={()=>push('/contact')}
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-indigo-500
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition-colors
                duration-300
                hover:bg-indigo-400
                focus:outline-none
                focus:ring-4
                focus:ring-indigo-300/50
                sm:w-auto
                sm:text-base
              "
            >
              Get In Touch

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default NewsLetter;