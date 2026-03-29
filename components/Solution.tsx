"use client";

import { motion } from "framer-motion";
import { PhoneFrame } from "./PhoneFrame";

const features = [
  {
    title: "Knows Your Metabolism",
    body: "Most apps don't know your metabolism. Signl figures it out.",
  },
  {
    title: "Weekly Recalibration",
    body: "Adjusts to real compliance, not perfect logging.",
  },
  {
    title: "Pattern Intelligence",
    body: "Reads what's actually moving your body comp.",
  },
];

export function Solution() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
      {/* Subtle teal glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(64,179,162,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
              className="mb-6"
            >
              <span
                className="inline-flex items-center text-xs font-space tracking-[0.2em] px-3 py-1.5 rounded"
                style={{
                  color: "#40B3A2",
                  border: "1px solid rgba(64,179,162,0.28)",
                  backgroundColor: "rgba(64,179,162,0.06)",
                }}
              >
                BUILT DIFFERENT
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 }}
              className="font-bebas leading-display mb-8"
              style={{
                fontSize: "clamp(52px, 7vw, 86px)",
                color: "#F4F2EE",
              }}
            >
              FIND THE SIGNAL.
              <br />
              NOT THE NOISE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const, delay: 0.2 }}
              className="font-dm leading-relaxed mb-10"
              style={{ fontSize: 20, color: "#8A95A0" }}
            >
              Signl doesn&apos;t just log your meals.
              <br />
              It builds a behavioral baseline, runs a weekly analysis,
              and tells you exactly what to adjust — with a confidence rating.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col gap-3"
            >
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
                  }}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.035)",
                    border: "1px solid rgba(64,179,162,0.18)",
                  }}
                >
                  <span
                    className="font-dm font-semibold text-sm shrink-0"
                    style={{ color: "#40B3A2" }}
                  >
                    →
                  </span>
                  <div>
                    <p
                      className="font-dm font-semibold text-sm mb-0.5"
                      style={{ color: "#F4F2EE" }}
                    >
                      {f.title}
                    </p>
                    <p
                      className="font-dm text-sm leading-relaxed"
                      style={{ color: "#8A95A0" }}
                    >
                      {f.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Phone frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const, delay: 0.15 }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneFrame
              src="/images/weekly-review.png"
              alt="Weekly Review screen showing body composition adjustment"
              width={280}
              height={607}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
