"use client";

import React from "react";
import { motion } from "framer-motion";
import { ADVANCED_FEATURES } from "@/app/lib/constants";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function AdvancedFeaturesSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        badge="Advanced"
        title="Built for the Future of Property Management"
        subtitle="Cutting-edge capabilities that put you ahead of the competition."
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {ADVANCED_FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          // Create a bento-style layout with varying sizes
          const isLarge = i === 0 || i === 3 || i === 7;
          const spanClass = isLarge ? "xl:col-span-2" : "";

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl p-6 overflow-hidden cursor-default
                bg-white dark:bg-white/[0.03]
                border border-gray-100 dark:border-white/5
                hover:border-indigo-200 dark:hover:border-indigo-500/20
                transition-all duration-500
                ${spanClass}
              `}
            >
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[1px] rounded-2xl bg-white dark:bg-gray-950" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-indigo-500/20" />
              </div>

              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 flex items-center justify-center mb-4
                  group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-indigo-500/20 dark:group-hover:to-purple-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Subtle glow */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
