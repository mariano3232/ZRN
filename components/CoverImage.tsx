"use client";

import { useEffect, useState } from "react";

function useMdBreakpoint() {
  const [isMd, setIsMd] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsMd(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isMd;
}

export function CoverImage({
  src,
  srcMd,
  fixedOnMd = false,
  className = "",
}: {
  src: string;
  srcMd?: string;
  fixedOnMd?: boolean;
  className?: string;
}) {
  const isMd = useMdBreakpoint();
  const resolved = isMd === null ? null : isMd && srcMd ? srcMd : src;
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const ready = resolved !== null && loadedSrc === resolved;

  useEffect(() => {
    if (!resolved) return;

    let cancelled = false;
    const img = new Image();
    const markReady = () => {
      if (!cancelled) setLoadedSrc(resolved);
    };

    img.onload = markReady;
    img.onerror = markReady;
    img.src = resolved;
    if (img.complete && img.naturalWidth > 0) markReady();

    return () => {
      cancelled = true;
    };
  }, [resolved]);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-gray-100 ${className}`} aria-busy={!ready}>
      {!ready ? (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <span className="size-10 animate-spin rounded-full border-2 border-white/25 border-t-[#A7CBF6]" />
        </div>
      ) : null}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        } ${fixedOnMd ? "md:bg-fixed" : ""}`}
        style={ready && resolved ? { backgroundImage: `url('${resolved}')` } : undefined}
      />
    </div>
  );
}
