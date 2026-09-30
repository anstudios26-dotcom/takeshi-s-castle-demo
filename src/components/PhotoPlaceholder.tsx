import React, { useState, useEffect } from "react";

interface PhotoPlaceholderProps {
  src: string;
  label: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  enableHoverEffect?: boolean;
  objectPosition?: string;
  width?: number | string;
  height?: number | string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  src,
  label,
  alt,
  aspectRatio,
  className = "",
  priority = false,
  enableHoverEffect = false,
  objectPosition,
  width,
  height,
}) => {
  const [hasError, setHasError] = useState(!src);
  const [isDev, setIsDev] = useState(false);
  const [userSrc, setUserSrc] = useState<string | null>(null);

  useEffect(() => {
    setHasError(!src);
  }, [src]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDev(window.location.search.includes("dev=1"));
    }
  }, []);

  const effectiveSrc = userSrc || src;

  return (
    <div
      className={`group relative overflow-hidden bg-ink/[0.06] rounded-none ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!hasError && effectiveSrc ? (
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={effectiveSrc}
            alt={alt || label}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            style={objectPosition ? { objectPosition } : undefined}
            className={`h-full w-full object-cover rounded-none ${
              enableHoverEffect
                ? "transition-transform duration-700 ease-out group-hover:scale-[1.03] group-hover:translate-x-1.5"
                : ""
            }`}
          />

          {/* Small ink label sliding up on hover if enabled */}
          {enableHoverEffect && (
            <div className="pointer-events-none absolute bottom-0 left-0 p-4 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="bg-cream/90 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-ink backdrop-blur-xs">
                {label}
              </span>
            </div>
          )}
        </div>
      ) : (
        /* Calm Fallback Placeholder (Flat ink-at-6% fill, thin ink-at-20% inner frame, label bottom-left) */
        <div className="relative flex h-full w-full flex-col justify-between p-4 sm:p-5 bg-ink/[0.06]">
          {/* Thin ink-at-20% inner frame */}
          <div className="pointer-events-none absolute inset-3 sm:inset-4 border border-ink/20" />

          {/* Top-right path target indicator */}
          <div className="relative z-10 flex justify-end">
            <span className="text-[11px] text-ink/40 tracking-wider font-mono">
              {src || "FALLBACK"}
            </span>
          </div>

          {/* Bottom-left label in small text */}
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/70">
              {label}
            </p>
          </div>

          {/* Hidden dev upload helper behind ?dev=1 only */}
          {isDev && (
            <div className="relative z-20 mt-2">
              <label className="inline-block cursor-pointer bg-ink/10 px-2 py-1 text-[10px] text-ink/80 hover:bg-ink/20">
                <span>Upload dev test photo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setUserSrc(URL.createObjectURL(file));
                      setHasError(false);
                    }
                  }}
                />
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
