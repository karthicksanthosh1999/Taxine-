import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import loadingPng from '@/public/loading.png'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080a09] px-6">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff1a]/10 blur-[140px]" />

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/4 h-px w-1/3 bg-gradient-to-r from-transparent via-[#00ff1a]/20 to-transparent" />
      <div className="absolute right-0 top-3/4 h-px w-1/3 bg-gradient-to-l from-transparent via-[#00ff1a]/20 to-transparent" />

      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Logo */}
        <div className="relative mb-8">
          {/* Glow */}
          <div className="absolute inset-0 scale-75 rounded-full bg-[#00ff1a]/20 blur-[60px]" />

          <Image
            src={loadingPng}
            alt="Logo"
            width={180}
            height={180}
            priority
            className="relative h-auto w-27.5 object-contain drop-shadow-[0_0_25px_rgba(0,200,26,0.6)] sm:w-35"
          />
        </div>

        {/* 404 */}
        <h1 className="text-[100px] font-black leading-none tracking-tight text-white sm:text-[150px]">
          4
          <span className="text-primaryGreen">0</span>
          4
        </h1>

        {/* Heading */}
        <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md text-sm leading-6 text-white/50 sm:text-base">
          Looks like you've taken a wrong turn. The page you're looking for
          doesn't exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="
              group
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-primaryGreen
              hover:shadow-[0_0_25px_rgba(0,255,26,0.35)]
            "
          >
            <Home size={17} />

            Go Home
          </Link>

          <Link
            href={'/'}
            className="
              flex
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-white/10
              bg-white/[0.03]
              px-6
              py-3
              text-sm
              font-medium
              text-white/70
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-primary
              hover:bg-[#00ff1a]/5
              hover:text-primaryGreen
            "
          >
            <ArrowLeft size={17} />

            Go Back
          </Link>
        </div>

        {/* Bottom message */}
        <div className="mt-12 flex items-center gap-3">
          <span className="h-px w-12 bg-[#00ff1a]/30" />

          <span className="text-[10px] tracking-[0.35em] text-white/25">
            ERROR 404 • PAGE NOT FOUND
          </span>

          <span className="h-px w-12 bg-[#00ff1a]/30" />
        </div>
      </div>
    </main>
  );
}