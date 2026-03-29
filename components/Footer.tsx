"use client";

import { Logo } from "./Logo";

const INSTAGRAM_URL = "https://instagram.com/getsignl";

interface FooterProps {
  appStoreUrl: string | null;
}

export function Footer({ appStoreUrl }: FooterProps) {
  return (
    <footer
      className="relative px-6 pt-16 pb-8"
      style={{
        backgroundColor: "#05080E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Logo />
            <p
              className="font-dm text-sm"
              style={{ color: "#8A95A0" }}
            >
              Find the Signal.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-col gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-sm transition-colors w-fit"
              style={{ color: "#8A95A0" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#40B3A2")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8A95A0")}
            >
              @getsignl ↗
            </a>
            <a
              href="#"
              className="font-dm text-sm transition-colors w-fit"
              style={{ color: "#8A95A0" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#F4F2EE")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8A95A0")}
            >
              Privacy Policy
            </a>
          </div>

          {/* Right: Copyright + App Store */}
          <div className="flex flex-col gap-3">
            <p className="font-dm text-sm" style={{ color: "#8A95A0" }}>
              © 2025 Signl. All rights reserved.
            </p>
            {appStoreUrl ? (
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm text-sm transition-colors w-fit"
                style={{ color: "#40B3A2" }}
              >
                Download on App Store ↗
              </a>
            ) : (
              <span
                className="font-dm text-sm"
                style={{ color: "rgba(138,149,160,0.4)" }}
              >
                App Store link coming soon
              </span>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="font-dm"
            style={{ fontSize: 11, color: "rgba(138,149,160,0.45)", lineHeight: 1.6 }}
          >
            Signl is not a medical device. Consult a healthcare provider before making
            significant dietary changes.
          </p>
        </div>
      </div>
    </footer>
  );
}
