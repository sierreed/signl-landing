"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";

const rows = [
  {
    other: "Targets built for the average person",
    signl: "Figures out your actual metabolism",
  },
  {
    other: "Same targets forever",
    signl: "Recalibrates weekly based on real data",
  },
  {
    other: "Broken streak = start over",
    signl: "Missed days are data, not failure",
  },
  {
    other: "Searching 'Banana' and seeing 400 options",
    signl: "Describe your meal. Done.",
  },
  {
    other: "No idea why you're stuck",
    signl: "Confidence-rated weekly adjustment",
  },
];

export function Differentiators() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
          className="text-center mb-14"
        >
          <span
            className="text-xs font-space tracking-[0.2em]"
            style={{ color: "#8A95A0" }}
          >
            THE DIFFERENCE
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Other Apps column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="font-space text-sm tracking-[0.15em]"
                style={{ color: "#8A95A0" }}
              >
                EVERY OTHER APP
              </span>
            </div>

            {/* Rows */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {rows.map((row, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
                  }}
                  className="flex items-start gap-3 px-6 py-4"
                  style={{ borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : undefined }}
                >
                  <span
                    className="font-space text-sm shrink-0 mt-0.5"
                    style={{ color: "#E05C5C", opacity: 0.7 }}
                  >
                    ✗
                  </span>
                  <span className="font-dm text-sm" style={{ color: "#8A95A0" }}>
                    {row.other}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Signl column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "rgba(64,179,162,0.04)",
              border: "1px solid rgba(64,179,162,0.22)",
              boxShadow: "0 0 60px rgba(64,179,162,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="px-6 py-5 flex items-center gap-3"
              style={{ borderBottom: "1px solid rgba(64,179,162,0.15)" }}
            >
              <Logo />
            </div>

            {/* Rows */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
            >
              {rows.map((row, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
                  }}
                  className="flex items-start gap-3 px-6 py-4"
                  style={{
                    borderBottom: i < rows.length - 1 ? "1px solid rgba(64,179,162,0.08)" : undefined,
                  }}
                >
                  <span
                    className="font-space text-sm shrink-0 mt-0.5"
                    style={{ color: "#40B3A2" }}
                  >
                    ✓
                  </span>
                  <span className="font-dm text-sm" style={{ color: "#F4F2EE" }}>
                    {row.signl}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
