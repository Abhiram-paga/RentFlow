"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/app/lib/constants";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <SectionHeading
        badge="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about RentFlow. Can't find what you're looking for? Contact us."
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "bg-white dark:bg-white/[0.03] border-indigo-200 dark:border-indigo-500/20 shadow-lg shadow-indigo-500/5"
                  : "bg-white dark:bg-white/[0.02] border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex items-center justify-between w-full text-left px-6 py-5 cursor-pointer"
              >
                <span className={`text-base font-semibold pr-4 ${
                  isOpen ? "text-indigo-600 dark:text-indigo-400" : "text-gray-900 dark:text-white"
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  isOpen
                    ? "bg-indigo-100 dark:bg-indigo-500/10"
                    : "bg-gray-100 dark:bg-white/5"
                }`}>
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  ) : (
                    <Plus className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
