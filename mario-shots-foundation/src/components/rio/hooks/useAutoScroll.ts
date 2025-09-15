// src/components/rio/hooks/useAutoScroll.ts
import { useEffect, useRef } from "react";

export function useAutoScroll(deps: unknown[]) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return endRef;
}
