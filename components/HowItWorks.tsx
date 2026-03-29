"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#40B3A2" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="#40B3A2" strokeWidth="1.5" />
        <circle cx="20" cy="9" r="1.5" fill="#40B3A2" />
      </svg>
    ),
    title: "Log Your Intake",
    body: "Describe your meal or snap a photo. Signl estimates from there. No barcode scanning. No database rabbit holes.",
  },
  {
    num: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="18" width="4" height="6" rx="1" fill="#40B3A2" opacity="0.5" />
        <rect x="10" y="12" width="4" height="12" rx="1" fill="#40B3A2" opacity="0.75" />
        <rect x="16" y="7" width="4" height="17" rx="1" fill="#40B3A2" />
        <path d="M22 10 L22 4 M22 4 L19 7 M22 4 L25 7" stroke="#40B3A2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Signl Reads the Pattern",
    body: "Every entry builds your behavioral baseline. The system watches what's actually happening — not what you planned.",
  },
  {
    num: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#40B3A2" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3" fill="#40B3A2" />
        <path d="M14 5 L14 2" stroke="#40B3A2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.2 7.8 L23.3 5.7" stroke="#40B3A2" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M23 14 L26 14" stroke="#40B3A2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Weekly Signal",
    body: "Every Monday, Signl runs your analysis and surfaces one clear adjustment. Increase. Hold. Reduce. With a confidence rating.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(64,179,162,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="mb-4"
        >
          <span
            className="text-xs font-space tracking-[0.2em]"
            style={{ color: "#40B3A2" }}
          >
            HOW IT WORKS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 }}
          className="font-dm font-bold mb-20"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "#F4F2EE",
          }}
        >
          Three steps. Zero guesswork.
        </motion.h2>

        {/* Steps container */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px z-0">
            <motion.div
              className="h-full"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(64,179,162,0.35) 20%, rgba(64,179,162,0.35) 80%, transparent 100%)",
                transformOrigin: "left center",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] as const, delay: 0.3 }}
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
                  },
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="flex items-center justify-center w-24 h-24 rounded-full mb-6"
                  style={{
                    backgroundColor: "rgba(64,179,162,0.06)",
                    border: "1px solid rgba(64,179,162,0.18)",
                  }}
                >
                  {step.icon}
                </div>

                <span
                  className="block font-space text-xs mb-3"
                  style={{ color: "rgba(64,179,162,0.5)" }}
                >
                  STEP {step.num}
                </span>
                <h3
                  className="font-dm font-bold text-xl mb-3"
                  style={{ color: "#F4F2EE" }}
                >
                  {step.title}
                </h3>
                <p
                  className="font-dm text-sm leading-relaxed max-w-xs"
                  style={{ color: "#8A95A0" }}
                >
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
