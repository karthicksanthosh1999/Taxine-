"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [circumference, 0]
  );

  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <a
  href="https://wa.me/917975904980"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  className="
    fixed
    z-50
    flex
    h-13
    w-13
    items-center
    justify-center
    rounded-full
    bg-[#25D366]
    text-white
    shadow-lg
    transition-all
    duration-300
    ease-out
    hover:scale-110
    hover:bg-[#20bd5a]
    hover:shadow-[0_10px_30px_rgba(37,211,102,0.45)]
    active:scale-95
    sm:right-5
    right-2
    bottom-[15%]
    sm:h-16
    sm:w-16
  "
>
  {/* WhatsApp Icon */}
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="
      h-7
      w-7
      transition-transform
      duration-300
      group-hover:rotate-6
      sm:h-8
      sm:w-8
    "
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.002 5.45-4.437 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.946L.057 24l6.304-1.654a11.875 11.875 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.821 11.821 0 00-3.478-8.416" />
  </svg>

  {/* Tooltip */}
  <span
    className="
      pointer-events-none
      absolute
      right-full
      mr-3
      whitespace-nowrap
      rounded-lg
      bg-[#092b4c]
      px-3
      py-2
      text-xs
      font-medium
      text-white
      opacity-0
      translate-x-2
      shadow-lg
      transition-all
      duration-300

      group-hover:opacity-100
      group-hover:translate-x-0

      hidden
      sm:block
    "
  >
    Chat with us on WhatsApp
  </span>
    </a>

    <motion.div
      className="fixed -right-3 bottom-0 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: showScroll ? 1 : 0, scale: showScroll ? 1 : 0 }}
      transition={{ duration: 0.3 }}>
      <div className="relative">
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#ccc"
            strokeWidth="3"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#D4AF37"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            style={{ strokeDashoffset }}
          />
        </svg>
        <button
          onClick={scrollToTop}
          className="absolute inset-0 flex items-center justify-center cursor-pointer">
          <MoveUp className="text-[#D4AF37] text-xl" />
        </button>
      </div>
    </motion.div>
    </>
  );
};

export default ScrollBar;
