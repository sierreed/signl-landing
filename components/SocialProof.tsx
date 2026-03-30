"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    body: "Finally an app that doesn't make me feel like a failure for missing Wednesday.",
    author: "Beta Tester",
    goal: "Fat Loss Goal",
  },
  {
    body: "The weekly adjustment is the feature every other app is missing.",
    author: "Beta Tester",
    goal: "Body Recomposition",
  },
  {
    body: "It actually told me I was eating too little. No other app has ever said that.",
    author: "Beta Tester",
    goal: "Muscle Building Goal",
  },
];

export function SocialProof() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
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
            EARLY SIGNAL
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 }}
          className="font-dm font-bold mb-16"
          style={{ fontSize: "clamp(24px, 3.5vw, 38px)", color: "#F4F2EE" }}
        >
          What beta testers are saying.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
              }}
              className="flex flex-col text-left p-6 rounded-xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p
                className="font-dm text-base leading-relaxed mb-6 flex-1"
                style={{ color: "#F4F2EE" }}
              >
                &ldquo;{q.body}&rdquo;
              </p>
              <footer>
                <span
                  className="block font-dm font-semibold text-sm"
                  style={{ color: "#F4F2EE" }}
                >
                  — {q.author}
                </span>
                <span
                  className="block font-space text-xs mt-1"
                  style={{ color: "#40B3A2" }}
                >
                  {q.goal}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
