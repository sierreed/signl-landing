export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="24"
        height="22"
        viewBox="0 0 24 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0" y="14" width="6" height="8" rx="1.5" fill="#40B3A2" />
        <rect x="9" y="8" width="6" height="14" rx="1.5" fill="#40B3A2" />
        <rect x="18" y="2" width="6" height="20" rx="1.5" fill="#40B3A2" />
      </svg>
      <div className="relative">
        <span
          className="font-dm"
          style={{
            fontWeight: 800,
            fontSize: "1.375rem",
            color: "#F4F2EE",
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Signl
        </span>
        <span
          className="absolute"
          style={{
            bottom: -4,
            left: 0,
            width: "0.65em",
            height: 2,
            backgroundColor: "#40B3A2",
            borderRadius: 1,
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
