"use client";

import React from "react";
import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/app/lib/constants";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function HowItWorksSection() {
  return (
    <SectionWrapper className="bg-gray-50/50 dark:bg-white/[0.02]">
      <SectionHeading
        badge="How It Works"
        title="Get Started in 5 Simple Steps"
        subtitle="From setup to full management in minutes. No technical knowledge required."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Connecting line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-200 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-indigo-500/20 md:-translate-x-px" />

        {HOW_IT_WORKS_STEPS.map((step, i) => {
          const Icon = step.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"} ml-12 md:ml-0`}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className={`text-sm text-gray-500 dark:text-gray-500 leading-relaxed ${isEven ? "md:text-right" : ""}`}>
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* Step Number */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25"
                >
                  <span className="text-lg font-bold text-white">{i + 1}</span>
                </motion.div>
              </div>

              {/* Empty spacer for opposite side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
