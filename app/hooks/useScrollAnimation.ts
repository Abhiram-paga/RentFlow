"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface UseScrollAnimationOptions {
  once?: boolean;
  margin?: string;
  amount?: number | "some" | "all";
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { once = true, margin = "-100px", amount = 0.3 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as any, amount });

  return { ref, isInView };
}
