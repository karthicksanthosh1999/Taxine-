"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Copy,
  Check,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  upiId: string;
  qrCodeUrl?: string;
}

const PaymentModal = ({
  isOpen,
  onClose,
  upiId,
  qrCodeUrl,
}: PaymentModalProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy UPI ID", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
className="
  fixed
  inset-0
  z-50
  flex
  items-center
  justify-center
  bg-black/60
  px-4
  backdrop-blur-sm
"
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
            "
          >
            {/* =================================
                HEADER
            ================================= */}

            <div
              className="
                bg-gradient-to-r
                from-[#092b4c]
                via-[#123f5f]
                to-[#2E7D32]
                px-5
                py-5
                text-white
                sm:px-6
              "
            >
              <button
                type="button"
                onClick={onClose}
                className="
                  absolute
                  right-4
                  top-4
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition
                  cursor-pointer
                  hover:bg-white/20
                "
              >
                <X size={18} />
              </button>

              <div className="pr-10">
                <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                  Secure Payment
                </p>

                <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                  Complete Your Payment
                </h2>

                <p className="mt-1 text-sm text-white/75">
                  Pay securely using any UPI app.
                </p>
              </div>
            </div>

            {/* =================================
                CONTENT
            ================================= */}

            <div className="p-5 sm:p-6">
              {/* =================================
                  QR CODE
              ================================= */}

              <div className="text-center">
                <p className="text-sm font-semibold text-[#092b4c]">
                  Scan & Pay
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Open your UPI app and scan the QR code
                </p>

                <div
                  className="
                    mx-auto
                    mt-4
                    flex
                    h-48
                    w-48
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    p-3
                    shadow-sm
                    sm:h-52
                    sm:w-52
                  "
                >
                  <img
                    src={qrCodeUrl}
                    alt="UPI Payment QR Code"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* =================================
                  DIVIDER
              ================================= */}

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-xs font-medium text-slate-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              {/* =================================
                  UPI ID
              ================================= */}

              <div>
                <p className="mb-2 text-xs font-medium text-slate-600">
                  Pay using UPI ID
                </p>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-2
                  "
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2E7D32]/10 text-[#2E7D32]">
                    <CreditCard size={17} />
                  </div>

                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-[#092b4c]">
                    {upiId}
                  </span>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="
                      flex
                      h-9
                      shrink-0
                      items-center
                      gap-1.5
                      rounded-lg
                      bg-white
                      px-3
                      text-xs
                      font-semibold
                      text-[#092b4c]
                      shadow-sm
                      ring-1
                      ring-slate-200
                      transition
                      hover:bg-slate-100
                    "
                  >
                    {copied ? (
                      <>
                        <Check
                          size={14}
                          className="text-[#2E7D32]"
                        />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
              {/* =================================
                  SECURITY MESSAGE
              ================================= */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-center
                "
              >
                <ShieldCheck
                  size={15}
                  className="text-[#2E7D32]"
                />

                <p className="text-[11px] text-slate-500">
                  Secure UPI payment • Your payment details are protected
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;