"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/app/lib/constants";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <SectionWrapper id="pricing" className="bg-gray-50/50 dark:bg-white/[0.02]">
      <SectionHeading
        badge="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Start free and scale as you grow. No hidden fees, no surprises."
      />

      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span className={`text-sm font-medium ${!isYearly ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
          Monthly
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative w-14 h-7 rounded-full transition-colors duration-300 cursor-pointer ${
            isYearly ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"
          }`}
        >
          <motion.div
            animate={{ x: isYearly ? 28 : 2 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md"
          />
        </button>
        <span className={`text-sm font-medium ${isYearly ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
          Yearly
        </span>
        {isYearly && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20"
          >
            Save 20%
          </motion.span>
        )}
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRICING_PLANS.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className={`relative rounded-2xl p-6 md:p-8 transition-all duration-500 ${
              plan.highlighted
                ? "bg-gradient-to-b from-indigo-600 to-purple-700 text-white shadow-2xl shadow-indigo-500/25 scale-[1.02] md:scale-105 z-10 border-0"
                : "bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 shadow-lg"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-white text-indigo-600 shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className={`text-xl font-bold mb-2 ${
                plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"
              }`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${
                plan.highlighted ? "text-indigo-100" : "text-gray-500 dark:text-gray-500"
              }`}>
                {plan.description}
              </p>
            </div>

            <div className="mb-6">
              {plan.monthlyPrice !== null ? (
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"
                  }`}>
                    ₹{isYearly ? plan.yearlyPrice?.toLocaleString("en-IN") : plan.monthlyPrice.toLocaleString("en-IN")}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? "text-indigo-200" : "text-gray-500"}`}>
                    /month
                  </span>
                </div>
              ) : (
                <div>
                  <span className={`text-4xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900 dark:text-white"
                  }`}>
                    Custom
                  </span>
                  <p className={`text-sm mt-1 ${plan.highlighted ? "text-indigo-200" : "text-gray-500"}`}>
                    Tailored to your needs
                  </p>
                </div>
              )}
            </div>

            <Button
              variant={plan.highlighted ? "secondary" : "primary"}
              size="lg"
              className={`w-full mb-8 ${
                plan.highlighted
                  ? "!bg-white !text-indigo-600 hover:!bg-indigo-50 !border-0 !shadow-lg"
                  : ""
              }`}
            >
              {plan.cta}
            </Button>

            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    plan.highlighted
                      ? "bg-white/20"
                      : "bg-indigo-50 dark:bg-indigo-500/10"
                  }`}>
                    <Check className={`w-3 h-3 ${
                      plan.highlighted ? "text-white" : "text-indigo-600 dark:text-indigo-400"
                    }`} />
                  </div>
                  <span className={`text-sm ${
                    plan.highlighted ? "text-indigo-100" : "text-gray-600 dark:text-gray-400"
                  }`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
