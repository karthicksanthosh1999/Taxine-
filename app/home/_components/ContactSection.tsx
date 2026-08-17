"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  LockKeyhole,
} from "lucide-react";
import { useState } from "react";

const services = [
  "Income Tax Return Filing",
  "GST Registration & Filing",
  "Company Registration",
  "Accounting & Bookkeeping",
  "Audit & Certification",
  "Tax Planning & Advisory",
  "TDS Return Filing",
  "LLP Registration",
  "Startup Advisory",
  "Other Service",
];

const contactItems = [
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 79759 04980",
  },
  {
    icon: Mail,
    label: "EMAIL US",
    value: "taxinetaxconsultants@gmail.com",
  },
  {
    icon: MapPin,
    label: "OUR OFFICE",
    value:
      "No.524, 50 Feet Main Road, Near 15B Bus Stop, Ground Floor, Next To UK Collections, Bangalore – 560111",
  },
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="w-full bg-[#172c40] py-16 sm:py-20 lg:py-24">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-10
          px-5
          sm:px-8
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-16
          lg:px-10
        "
      >
        {/* ===================================== */}
        {/* LEFT CONTENT */}
        {/* ===================================== */}

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
            duration: 0.7,
            ease: "easeOut",
          }}
          className="pt-2 lg:pt-4"
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
            "
          >
            Get In Touch
          </p>

          {/* Heading */}
          <h2
            className="
              mt-3
              max-w-md
              font-serif
              text-3xl
              font-bold
              leading-[1.05]
              text-white
              sm:text-4xl
              lg:text-[40px]
            "
          >
            Ready to Sort Your <span className="text-[#2E7D32]">Taxes & Compliance?</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-lg
              text-sm
              leading-6
              text-white/65
              sm:text-[15px]
              sm:leading-7
            "
          >
            Fill in the form and our CA team will reach out within a few
            hours. First consultation is absolutely free — no obligations.
          </p>

          {/* Contact Information */}
          <div className="mt-8 space-y-5">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.12,
                  }}
                  className="group flex items-start gap-3"
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      bg-white/10
                      text-[#D4AF37]
                      transition-all
                      duration-300
                      group-hover:bg-[#D4AF37]
                      group-hover:text-[#172c40]
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <p
                      className="
                        text-[9px]
                        font-medium
                        tracking-[0.12em]
                        text-white/45
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className="
                        mt-1
                        max-w-sm
                        text-xs
                        font-medium
                        leading-5
                        text-white
                        sm:text-sm
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ===================================== */}
        {/* FORM CARD */}
        {/* ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            rounded-sm
            bg-[#f8f8f8]
            p-5
            shadow-xl
            sm:p-6
            lg:p-7
          "
        >
          {/* Form Header */}
          <div>
            <h3
              className="
                font-serif
                text-2xl
                font-semibold
                text-[#172c40]
                sm:text-[25px]
              "
            >
              Book Your Free Consultation
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Fill out the form below and we'll get back to you within 24
              hours.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-5 space-y-3"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-1 block text-base font-medium text-[#172c40]"
              >
                Full Name <span className="text-[#2E7D32]">*</span>
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                required
                className="
                  h-11
                  w-full
                  border
                  border-gray-300
                  bg-white
                  px-3
                  text-xs
                  text-gray-800
                  outline-none
                  transition-all
                  placeholder:text-gray-400
                  focus:border-[#D4AF37]
                  focus:ring-1
                  focus:ring-[#D4AF37]/30
                "
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-base font-medium text-[#172c40]"
                >
                  Phone Number <span className="text-[#2E7D32]">*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91"
                  required
                  className="
                    h-11
                    w-full
                    border
                    border-gray-300
                    bg-white
                    px-3
                    text-xs
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#D4AF37]
                    focus:ring-1
                    focus:ring-[#D4AF37]/30
                  "
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-base font-medium text-[#172c40]"
                >
                  Email Address <span className="text-[#2E7D32]">*</span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="
                    h-11
                    w-full
                    border
                    border-gray-300
                    bg-white
                    px-3
                    text-xs
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-[#D4AF37]
                    focus:ring-1
                    focus:ring-[#D4AF37]/30
                  "
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label
                htmlFor="service"
                className="mb-1 block text-base font-medium text-[#172c40]"
              >
                Select Service <span className="text-[#2E7D32]">*</span>
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                required
                className="
                  h-11
                  w-full
                  appearance-none
                  border
                  border-gray-300
                  bg-white
                  px-3
                  text-xs
                  text-gray-700
                  outline-none
                  transition-all
                  focus:border-[#D4AF37]
                  focus:ring-1
                  focus:ring-[#D4AF37]/30
                "
              >
                <option value="" disabled>
                  Select a service
                </option>

                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-base font-medium text-[#172c40]"
              >
                Message (Optional)
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help you?"
                className="
                  w-full
                  resize-none
                  border
                  border-gray-300
                  bg-white
                  px-3
                  py-3
                  text-xs
                  text-gray-800
                  outline-none
                  transition-all
                  placeholder:text-gray-400
                  focus:border-[#D4AF37]
                  focus:ring-1
                  focus:ring-[#D4AF37]/30
                "
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                flex
                h-11
                w-full
                items-center
                justify-center
                bg-[#172c40]
                text-xs
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:bg-[#D4AF37]
                hover:text-white
                disabled:cursor-not-allowed
                disabled:opacity-70
                cursor-pointer
              "
            >
              {isSubmitting ? "Sending..." : "Send Enquiry"}
            </motion.button>
          </form>

          {/* Privacy */}
          <div
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-1.5
              text-[10px]
              text-gray-500
            "
          >
            <LockKeyhole
              size={11}
              strokeWidth={1.8}
              className="text-[#D4AF37]"
            />

            <span>
              Your information is 100% safe and confidential.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}