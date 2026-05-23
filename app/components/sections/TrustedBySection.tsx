"use client";

import React from "react";
import { motion } from "framer-motion";
import { STATS } from "@/app/lib/constants";
import AnimatedCounter from "@/app/components/ui/AnimatedCounter";
import SectionWrapper from "@/app/components/ui/SectionWrapper";

const LOGOS = [
  "Urban Stay", "GreenNest", "CoLive", "StayEasy", "PGHub", "RoomCloud",
  "NestAway", "ZoloStays",
];

export default function TrustedBySection() {
  return (
    <SectionWrapper className="!py-12 md:!py-16 border-y border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
      {/* Trust text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-medium text-gray-500 dark:text-gray-500 mb-8 uppercase tracking-wider"
      >
        Trusted by 500+ property managers across India
      </motion.p>

      {/* Logo Marquee */}
      <div className="relative overflow-hidden mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent z-10" />
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center whitespace-nowrap"
        >
          {[...LOGOS, ...LOGOS, ...LOGOS].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 min-w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20 flex items-center justify-center">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">{name[0]}</span>
              </div>
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix || ""}
                suffix={stat.suffix}
              />
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
