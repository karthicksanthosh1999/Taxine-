'use client';
import React from 'react'
import {motion} from 'framer-motion';

const SeconHeader = ({title, description}: {title:string, description: string}) => {
  return (
<section className="bg-[#2E7D32] text-white py-12 px-4 overflow-hidden">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    className="md:text-5xl text-4xl font-bold text-center tracking-wide"
  >
    {title}
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut",
    }}
    className="mt-4 text-center md:text-xl text-sm max-w-2xl mx-auto"
  >
    {description}
  </motion.p>
</section>
  )
}

export default SeconHeader