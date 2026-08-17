"use client";

import { motion, useInView } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarCheck,
  CircleCheckBig,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  {
    value: 500,
    suffix: "+",
    label: "HAPPY CLIENTS",
    icon: User,
  },
  {
    value: 10,
    suffix: "+",
    label: "YEARS EXPERIENCE",
    icon: CalendarCheck,
  },
  {
    value: 50,
    suffix: "+",
    label: "SERVICES OFFERED",
    icon: BriefcaseBusiness,
  },
  {
    value: 98,
    suffix: "%",
    label: "CLIENT SATISFACTION",
    icon: CircleCheckBig,
  },
];

function AnimatedNumber({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const incrementTime = 30;
    const increment = value / (duration / incrementTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function NumberCount() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.4,
  });

  return (
    <section
      ref={sectionRef}
      className="w-full border-b border-white/10 bg-[#092B4C]"
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-2
          md:grid-cols-4
        "
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                flex
                flex-col
                items-center
                justify-center
                px-4
                py-10
                text-center
                transition-colors
                duration-300
                md:py-12
              "
            >
              {/* Icon */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.2,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                className="
                  mb-5
                  flex
                  items-center
                  justify-center
                  text-[#C9A52F]
                "
              >
                <Icon
                  size={38}
                  strokeWidth={1.5}
                  className="
                    opacity-80
                    transition-all
                    duration-300
                    group-hover:text-white
                    group-hover:opacity-100
                  "
                />
              </motion.div>

              {/* Number */}
              <div
                className="
                  font-serif
                  text-4xl
                  font-medium
                  leading-none
                  text-[#C9A52F]
                  sm:text-5xl
                "
              >
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  start={isInView}
                />
              </div>

              {/* Label */}
              <p
                className="
                  mt-3
                  text-xs
                  font-medium
                  tracking-[0.08em]
                  text-white
                  sm:text-sm
                "
              >
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}