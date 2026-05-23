"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "indigo",
  delay = 0,
}: GlassCardProps) {
  const glowMap: Record<string, string> = {
    indigo: "hover:shadow-indigo-500/20",
    purple: "hover:shadow-purple-500/20",
    emerald: "hover:shadow-emerald-500/20",
    blue: "hover:shadow-blue-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`
        group relative rounded-2xl
        bg-white/70 dark:bg-white/5
        backdrop-blur-xl
        border border-gray-200/50 dark:border-white/10
        shadow-lg shadow-gray-200/50 dark:shadow-none
        hover:shadow-2xl
        ${glowMap[glowColor] || glowMap.indigo}
        transition-all duration-500
        p-6
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
