"use client";

import { motion } from "framer-motion";

const accusations = [
  {
    num: "01",
    title: "Streak at risk.",
    body: "When it breaks, so does the habit. Every time.",
  },
  {
    num: "02",
    title: "Generic targets.",
    body: "Built for nobody in particular. Definitely not you.",
  },
  {
    num: "03",
    title: "No adaptation.",
    body: "Just a log that watched you quit.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
};

export function Problem() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
      {/* Red gradient bleed from top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(224,92,92,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Eyebrow */}
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
              color: "#E05C5C",
              border: "1px solid rgba(224,92,92,0.3)",
              backgroundColor: "rgba(224,92,92,0.06)",
            }}
          >
            THE REAL PROBLEM
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 }}
          className="font-bebas leading-display mb-16"
          style={{
            fontSize: "clamp(60px, 8vw, 96px)",
            color: "#F4F2EE",
            maxWidth: 700,
          }}
        >
          Every app handed you
          <br />
          a spreadsheet.
          <br />
          And called it coaching.
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {accusations.map((item) => (
            <motion.div
              key={item.num}
              variants={cardVariants}
              className="rounded-xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(224,92,92,0.18)",
              }}
            >
              <span
                className="block font-space text-xs mb-4"
                style={{ color: "rgba(224,92,92,0.5)" }}
              >
                {item.num}
              </span>
              <h3
                className="font-dm font-bold text-xl mb-2"
                style={{ color: "#F4F2EE" }}
              >
                {item.title}
              </h3>
              <p className="font-dm text-sm leading-relaxed" style={{ color: "#8A95A0" }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
