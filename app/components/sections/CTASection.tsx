"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/app/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-purple-400/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-400/10 blur-3xl"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/10 text-white/90 border border-white/20">
            <Sparkles className="w-4 h-4" />
            Start your free trial today
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            Start Managing Your PG{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">
              Digitally Today
            </span>
          </h2>

          <p className="text-lg text-indigo-100/80 max-w-2xl mx-auto mb-10">
            Join 500+ property managers who have already transformed their
            operations with RentFlow. Setup takes less than 5 minutes.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="!bg-white !text-indigo-600 hover:!bg-indigo-50 !shadow-xl !shadow-indigo-900/20 group !border-0"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="!bg-white/10 hover:!bg-white/20 !text-white !border-white/20"
            >
              Book a Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-indigo-200/60">
            No credit card required · 14-day free trial · Cancel anytime
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
