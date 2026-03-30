"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INSTAGRAM_URL = "https://instagram.com/getsignl";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!EMAIL_REGEX.test(email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "landing" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Something went wrong. Try again.");
      setStatus("error");
    }
  };

  return (
    <section
      id="beta-signup"
      className="relative py-20 px-6 overflow-hidden"
      style={{ backgroundColor: "#05080E" }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(64,179,162,0.32) 0%, transparent 65%)",
        }}
      />

      {/* Concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 480,
            height: 480,
            border: "1px solid rgba(64,179,162,0.10)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 720,
            height: 720,
            border: "1px solid rgba(64,179,162,0.06)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center">
        {/* Eyebrow */}
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
            LIMITED BETA
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] as const, delay: 0.1 }}
          className="font-bebas leading-display mb-5"
          style={{
            fontSize: "clamp(60px, 10vw, 96px)",
            color: "#F4F2EE",
          }}
        >
          FIND YOUR SIGNAL.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const, delay: 0.2 }}
          className="font-dm leading-relaxed mb-10"
          style={{ fontSize: 18, color: "#8A95A0" }}
        >
          Built for people done guessing.
          <br />
          Join the beta — limited spots available.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as const, delay: 0.3 }}
        >
          {status === "success" ? (
            <div
              className="flex items-center justify-center gap-3 py-5 px-6 rounded-xl font-dm"
              style={{
                backgroundColor: "rgba(64,179,162,0.1)",
                border: "1px solid rgba(64,179,162,0.3)",
                color: "#40B3A2",
                fontSize: 17,
              }}
            >
              <span>✓</span>
              <span>You&apos;re on the list. We&apos;ll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-4 rounded font-dm text-base outline-none transition-all"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border:
                      status === "error"
                        ? "1px solid rgba(224,92,92,0.6)"
                        : "1px solid rgba(255,255,255,0.1)",
                    color: "#F4F2EE",
                  }}
                  onFocus={(e) => {
                    if (status !== "error")
                      e.currentTarget.style.border = "1px solid rgba(64,179,162,0.5)";
                  }}
                  onBlur={(e) => {
                    if (status !== "error")
                      e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
                  }}
                  disabled={status === "loading"}
                  autoComplete="email"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="sm:whitespace-nowrap px-7 py-4 rounded font-dm font-semibold text-base transition-opacity hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                  style={{ backgroundColor: "#40B3A2", color: "#05080E" }}
                >
                  {status === "loading" ? "Joining…" : "Request Beta Access"}
                </button>
              </div>

              {status === "error" && errorMsg && (
                <p
                  className="font-dm text-sm mb-2 text-left"
                  style={{ color: "#E05C5C" }}
                >
                  {errorMsg}
                </p>
              )}

              <p className="font-dm text-xs" style={{ color: "rgba(138,149,160,0.6)" }}>
                Free · iOS · No spam. Ever.
              </p>
            </form>
          )}

          {/* Instagram fallback */}
          <p className="font-dm text-sm mt-6" style={{ color: "#8A95A0" }}>
            or{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#40B3A2" }}
              onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              DM us on Instagram →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
