"use client";

import Image from "next/image";
import { useState } from "react";

interface PhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  label?: string;
}

export function PhoneFrame({
  src,
  alt,
  width = 270,
  height = 585,
  priority = false,
  label,
}: PhoneFrameProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative mx-auto" style={{ width, height }}>
      {/* Soft outer glow */}
      <div
        className="absolute inset-0 rounded-[44px] pointer-events-none"
        style={{
          boxShadow:
            "0 0 60px rgba(64,179,162,0.10), 0 0 100px rgba(64,179,162,0.05)",
        }}
      />

      {/* Frame border */}
      <div
        className="relative w-full h-full rounded-[44px] overflow-hidden"
        style={{
          border: "1.5px solid rgba(255,255,255,0.07)",
          backgroundColor: "#080C14",
        }}
      >
        {imgError ? (
          /* Placeholder UI when screenshot not yet available */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ backgroundColor: "#0A1018" }}
          >
            <div className="flex flex-col items-center gap-4 px-6 text-center">
              <svg
                width="32"
                height="30"
                viewBox="0 0 24 22"
                fill="none"
                opacity={0.25}
              >
                <rect x="0" y="14" width="6" height="8" rx="1.5" fill="#40B3A2" />
                <rect x="9" y="8" width="6" height="14" rx="1.5" fill="#40B3A2" />
                <rect x="18" y="2" width="6" height="20" rx="1.5" fill="#40B3A2" />
              </svg>
              <span
                className="font-space text-[10px] tracking-widest uppercase"
                style={{ color: "rgba(64,179,162,0.35)" }}
              >
                {label ?? "Screenshot coming"}
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            priority={priority}
            onError={() => setImgError(true)}
          />
        )}

        {/* Edge fades */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #05080E 0%, transparent 15%, transparent 80%, #05080E 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #05080E 0%, transparent 12%, transparent 88%, #05080E 100%)",
          }}
        />
      </div>
    </div>
  );
}
