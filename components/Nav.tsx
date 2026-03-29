"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Logo";

const INSTAGRAM_URL = "https://instagram.com/getsignl";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("beta-signup")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#05080E" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(64,179,162,0.15)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-5">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors"
            style={{ color: "#8A95A0" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "#F4F2EE")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "#8A95A0")
            }
          >
            Instagram ↗
          </a>
          <button
            onClick={scrollToForm}
            className="px-4 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-90 active:scale-[0.98]"
            style={{
              backgroundColor: "#40B3A2",
              color: "#05080E",
            }}
          >
            Request Beta
          </button>
        </div>
      </div>
    </nav>
  );
}
