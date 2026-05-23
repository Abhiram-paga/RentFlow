"use client";

import React from "react";
import { motion } from "framer-motion";
import { MOBILE_APP_FEATURES } from "@/app/lib/constants";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function MobileAppSection() {
  return (
    <SectionWrapper className="bg-gray-50/50 dark:bg-white/[0.02]">
      <SectionHeading
        badge="Mobile App"
        title="Manage On the Go"
        subtitle="Dedicated mobile apps for property owners. Available on iOS and Android."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Phone Mockups */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Phone 1 - Owner App */}
          <div className="relative z-10">
            <div className="w-56 sm:w-64 rounded-[2.5rem] bg-gray-900 dark:bg-gray-800 p-2 shadow-2xl shadow-indigo-500/10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 dark:bg-gray-800 rounded-b-2xl z-20" />

              {/* Screen */}
              <div className="rounded-[2rem] bg-white dark:bg-gray-950 overflow-hidden">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-6 py-2 bg-indigo-600">
                  <span className="text-xs text-white/70">9:41</span>
                  <span className="text-xs text-white/70">●●●</span>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-xs text-gray-500">Welcome back</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Rajesh Kumar</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Revenue", value: "₹4.2L" },
                      { label: "Occupancy", value: "94%" },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-indigo-50 dark:bg-indigo-500/10 p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                        <p className="text-base font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Mini Chart */}
                  <div className="rounded-xl bg-gray-50 dark:bg-white/5 p-3">
                    <p className="text-xs font-medium text-gray-900 dark:text-white mb-2">Weekly Revenue</p>
                    <div className="flex items-end gap-1.5 h-16">
                      {[30, 50, 40, 70, 55, 85, 65].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          className="flex-1 rounded-t bg-gradient-to-t from-indigo-600 to-purple-500 opacity-80"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-4 gap-2">
                    {["Rooms", "Tenants", "Bills", "More"].map((label) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5" />
                        <span className="text-[10px] text-gray-500">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone 2 - Tenant App (offset behind) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="absolute -right-4 sm:right-4 top-8 z-0"
          >
            <div className="w-48 sm:w-56 rounded-[2.5rem] bg-gray-900 dark:bg-gray-800 p-2 shadow-2xl opacity-80">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 dark:bg-gray-800 rounded-b-2xl z-20" />
              <div className="rounded-[2rem] bg-white dark:bg-gray-950 overflow-hidden">
                <div className="flex items-center justify-between px-5 py-2 bg-emerald-600">
                  <span className="text-xs text-white/70">9:41</span>
                  <span className="text-xs text-white/70">●●●</span>
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Tenant Dashboard</p>
                  <div className="rounded-lg bg-emerald-50 dark:bg-emerald-500/10 p-2">
                    <p className="text-[10px] text-gray-500">Rent Due</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">₹8,500</p>
                    <div className="mt-2 h-7 rounded-md bg-emerald-500 flex items-center justify-center">
                      <span className="text-[10px] font-semibold text-white">Pay Now</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 dark:bg-white/5 p-2 space-y-1.5">
                    <div className="h-3 w-full rounded bg-gray-100 dark:bg-white/5" />
                    <div className="h-3 w-3/4 rounded bg-gray-100 dark:bg-white/5" />
                    <div className="h-3 w-1/2 rounded bg-gray-100 dark:bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 right-0 sm:right-12 z-20"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-gray-900 dark:text-white">Payment Received</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-5">
            {MOBILE_APP_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-white/[0.03] border border-transparent hover:border-gray-100 dark:hover:border-white/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
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

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 pl-4">
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 cursor-pointer"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.38l2.302 1.334-2.791 1.616-2.463-2.463 2.952-2.952 2.302 1.334-2.302 1.131zm-3.199-1.38L5.864 1.312l10.937 6.333-2.302 2.302z" />
              </svg>
              <div>
                <p className="text-[10px] opacity-70">Get it on</p>
                <p className="text-sm font-semibold -mt-0.5">Google Play</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
