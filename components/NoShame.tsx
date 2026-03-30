"use client";

import { motion } from "framer-motion";
import { PhoneFrame } from "./PhoneFrame";

export function NoShame() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
      {/* Teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(64,179,162,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <PhoneFrame
              src="/images/week-tracker.png"
              alt="Week tracker showing missed days with no guilt"
              width={270}
              height={585}
            />
          </motion.div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const }}
              className="mb-8"
            >
              <span
                className="inline-flex items-center text-xs font-space tracking-[0.2em] px-3 py-1.5 rounded"
                style={{
                  color: "#40B3A2",
                  border: "1px solid rgba(64,179,162,0.28)",
                  backgroundColor: "rgba(64,179,162,0.06)",
                }}
              >
                NO SHAME SPIRAL
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 }}
              className="font-bebas leading-display mb-8"
              style={{
                fontSize: "clamp(60px, 8vw, 100px)",
                color: "#F4F2EE",
              }}
            >
              LIFE HAPPENS.
              <br />
              <span style={{ color: "#40B3A2" }}>WE ADAPT.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const, delay: 0.2 }}
              className="font-dm leading-relaxed mb-8"
              style={{ fontSize: 18, color: "#8A95A0" }}
            >
              Miss a day. Miss three.
              <br />
              Signl reads your actual pattern — not your perfect week.
              <br />
              It adjusts. It doesn&apos;t punish.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const, delay: 0.3 }}
            >
              <span
                className="inline-flex items-center font-space text-xs tracking-[0.18em] px-4 py-2 rounded-full"
                style={{
                  color: "#40B3A2",
                  border: "1px solid rgba(64,179,162,0.35)",
                }}
              >
                NO STREAKS. NO GUILT.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
