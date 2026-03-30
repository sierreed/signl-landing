"use client";

import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://instagram.com/getsignl";
const EASE_OUT = [0.4, 0, 0.2, 1] as const;

export function Hero() {
  const scrollToSignup = () => {
    document.getElementById("beta-signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 grid-overlay overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
      {/* Radial teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(64,179,162,0.26) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto pt-24 pb-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="text-xs font-space tracking-[0.25em] px-3 py-1.5 rounded"
            style={{
              color: "#40B3A2",
              border: "1px solid rgba(64,179,162,0.28)",
              backgroundColor: "rgba(64,179,162,0.06)",
            }}
          >
            BODY INTELLIGENCE
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.15 }}
          className="font-bebas leading-display mb-6"
          style={{
            fontSize: "clamp(72px, 12vw, 148px)",
            color: "#F4F2EE",
          }}
        >
          YOUR BODY HAS
          <br />
          A <span style={{ color: "#40B3A2" }}>SIGNAL.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.3 }}
          className="font-dm mb-3 max-w-xl mx-auto"
          style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "#8A95A0",
            lineHeight: 1.5,
          }}
        >
          Most apps record your data.
          <br />
          Signl interprets it.
        </motion.p>

        {/* Who it's for */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.38 }}
          className="font-dm mb-10 max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(13px, 1.8vw, 16px)",
            color: "#8A95A0",
            lineHeight: 1.6,
          }}
        >
          Built for people trying to lose fat, build muscle, or finally understand why progress stalled.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <button
            onClick={scrollToSignup}
            className="w-full sm:w-auto px-8 py-4 rounded font-dm font-semibold text-base transition-opacity hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: "#40B3A2", color: "#05080E" }}
          >
            Request Beta Access
          </button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded font-dm font-semibold text-base text-center transition-colors"
            style={{
              color: "#40B3A2",
              border: "1px solid rgba(64,179,162,0.5)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(64,179,162,0.08)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            Follow @getsignl ↗
          </a>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.6 }}
          className="font-dm"
          style={{ fontSize: 12, color: "#8A95A0" }}
        >
          Free · iOS · TestFlight · Request access. We send invites in batches. Early users shape the product.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div
            className="w-px h-8"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(64,179,162,0.5))",
            }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "rgba(64,179,162,0.5)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
