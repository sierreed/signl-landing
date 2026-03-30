"use client";

import { motion } from "framer-motion";

const goals = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 4C14 4 20 10 20 16C20 19.3 17.3 22 14 22C10.7 22 8 19.3 8 16C8 13 10 10 10 10C10 10 11 14 14 14C14 14 12 11 14 4Z"
          stroke="#40B3A2"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="17" r="2" fill="#40B3A2" opacity="0.5" />
      </svg>
    ),
    title: "Fat Loss",
    body: "Stop guessing your deficit. Signl figures out what's actually working week by week.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="16" width="4" height="8" rx="1" fill="#40B3A2" opacity="0.4" />
        <rect x="10" y="10" width="4" height="14" rx="1" fill="#40B3A2" opacity="0.7" />
        <rect x="16" y="5" width="4" height="19" rx="1" fill="#40B3A2" />
        <path d="M22 8 L22 4 M22 4 L19 7 M22 4 L25 7" stroke="#40B3A2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Muscle Gain",
    body: "Building requires eating enough. Signl tells you when to push and when to hold.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M4 18 L11 18 L15 10 L24 10"
          stroke="#40B3A2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="11" cy="18" r="2" fill="#40B3A2" opacity="0.4" />
        <circle cx="15" cy="10" r="2.5" fill="#40B3A2" />
      </svg>
    ),
    title: "Plateau",
    body: "Stuck for weeks? Signl reads the pattern and surfaces the adjustment you've been missing.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="9" y="5" width="10" height="18" rx="5" stroke="#40B3A2" strokeWidth="1.5" />
        <line x1="9" y1="14" x2="19" y2="14" stroke="#40B3A2" strokeWidth="1.5" />
        <circle cx="14" cy="10" r="1.5" fill="#40B3A2" opacity="0.5" />
        <circle cx="14" cy="18" r="1.5" fill="#40B3A2" opacity="0.25" />
      </svg>
    ),
    title: "Navigating GLP-1s",
    body: "Appetite suppression changes everything. Signl reads what's actually happening to your body, not what you planned to eat.",
  },
];

export function WhoItsFor() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="mb-4 text-center"
        >
          <span
            className="text-xs font-space tracking-[0.2em]"
            style={{ color: "#40B3A2" }}
          >
            WHO IT&apos;S FOR
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 }}
          className="font-bebas leading-display mb-14 text-center"
          style={{
            fontSize: "clamp(52px, 7vw, 86px)",
            color: "#F4F2EE",
          }}
        >
          BUILT FOR YOUR GOAL.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {goals.map((g) => (
            <motion.div
              key={g.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
              }}
              className="flex gap-4 p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(64,179,162,0.18)",
              }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                style={{
                  backgroundColor: "rgba(64,179,162,0.08)",
                  border: "1px solid rgba(64,179,162,0.2)",
                }}
              >
                {g.icon}
              </div>
              <div>
                <p
                  className="font-dm font-semibold text-base mb-1"
                  style={{ color: "#F4F2EE" }}
                >
                  {g.title}
                </p>
                <p
                  className="font-dm text-sm leading-relaxed"
                  style={{ color: "#8A95A0" }}
                >
                  {g.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
