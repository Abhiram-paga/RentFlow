"use client";

import React from "react";
import { motion } from "framer-motion";
import { FEATURES } from "@/app/lib/constants";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features">
      <SectionHeading
        badge="Features"
        title="Everything You Need to Manage Your PG"
        subtitle="A comprehensive suite of tools designed specifically for PG owners, hostel managers, and co-living operators."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {FEATURES.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl p-6
                bg-white dark:bg-white/[0.03]
                border border-gray-100 dark:border-white/5
                hover:border-indigo-200 dark:hover:border-indigo-500/20
                shadow-sm hover:shadow-xl hover:shadow-indigo-500/10
                transition-all duration-500 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 flex items-center justify-center mb-4
                  group-hover:from-indigo-100 group-hover:to-purple-100 dark:group-hover:from-indigo-500/20 dark:group-hover:to-purple-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
