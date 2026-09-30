import React from "react";

interface ToriiIconProps {
  className?: string;
  color?: string; // Tailwind color class or hex
}

export const ToriiIcon: React.FC<ToriiIconProps> = ({
  className = "w-6 h-6",
}) => {
  return (
    <svg
      viewBox="0 0 48 42"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top curved lintel (Kasagi) with upswept ends */}
      <path d="M1 9.5C9 8 39 8 47 9.5C48 9.7 48 6.5 45 6.2C36 5.3 12 5.3 3 6.2C0 6.5 0 9.3 1 9.5Z" />
      {/* Upper bar (Shimaki) */}
      <rect x="4" y="11" width="40" height="2.8" rx="0.5" />
      {/* Lower bar (Nuki) */}
      <rect x="6" y="18" width="36" height="2.5" rx="0.5" />
      {/* Center pillar tie (Gakuzuka) */}
      <rect x="23" y="13.8" width="2" height="4.2" />
      {/* Left post (Hashira) */}
      <polygon points="10,40 14,40 13.2,13.8 11.2,13.8" />
      {/* Right post (Hashira) */}
      <polygon points="34,40 38,40 36.8,13.8 34.8,13.8" />
      {/* Left base plate (Nemaki) */}
      <rect x="8.5" y="38.5" width="7" height="3" rx="0.5" />
      {/* Right base plate (Nemaki) */}
      <rect x="32.5" y="38.5" width="7" height="3" rx="0.5" />
    </svg>
  );
};
