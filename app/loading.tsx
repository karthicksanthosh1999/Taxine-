"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import loadingPng from '@/public/loading.png'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-9999 flex min-h-screen items-center justify-center overflow-hidden bg-[#080a09]">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff1a]/10 blur-[140px]" />

      <div className="relative flex w-full max-w-md flex-col items-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative"
        >
          {/* Logo glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [0.9, 1.08, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-[#00ff1a]/30 blur-[50px]"
          />

          <Image
            src={loadingPng}
            alt="Logo"
            width={300}
            height={300}
            priority
            className="relative h-auto w-45 object-contain drop-shadow-[0_0_25px_rgba(0,255,26,0.7)] sm:w-55"
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-10"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-center text-sm font-medium tracking-[0.45em] text-white/70"
          >
            LOADING...
          </motion.p>
        </motion.div>

        {/* Progress bar */}
        <div className="mt-6 h-1.25 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="relative h-full rounded-full bg-[#00ff1a]"
          >
            {/* Moving shine */}
            <motion.div
              animate={{
                x: ["-100%", "400%"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-20 bg-linear-to-r from-transparent via-white/80 to-transparent blur-sm"
            />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-7 flex w-full items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-linear-to-r from-transparent to-[#00ff1a]/70" />

          <span className="whitespace-nowrap text-[10px] tracking-[0.4em] text-white/35">
            POWERING PERFORMANCE
          </span>

          <div className="h-px w-16 bg-linear-to-l from-transparent to-[#00ff1a]/70" />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;