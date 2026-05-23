"use client";

import React from "react";
import { motion } from "framer-motion";
import { BENEFITS } from "@/app/lib/constants";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";

// ── Custom Benefit Illustrations ───────────────────────

const ReduceManualWorkIllustration = () => (
  <div className="w-full h-full flex flex-col justify-center p-6 text-left">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-white/5 shadow-xl space-y-3"
    >
      <div className="flex items-center justify-between border-b border-gray-50 dark:border-white/5 pb-2">
        <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Automation Engine</span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500">Active</span>
      </div>
      {[
        { name: "Rent Invoice Generation", status: "Completed", time: "00:00 AM" },
        { name: "WhatsApp Reminders Dispatch", status: "Completed", time: "09:00 AM" },
        { name: "Late Fee Auto-Addition", status: "Running", time: "05:00 PM" },
      ].map((task, idx) => (
        <div key={idx} className="flex items-center justify-between text-xs py-1">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${task.status === "Completed" ? "bg-emerald-500" : "bg-indigo-500 animate-pulse"}`} />
            <span className="font-semibold text-gray-700 dark:text-gray-300">{task.name}</span>
          </div>
          <span className="text-[10px] text-gray-400 font-medium">{task.time}</span>
        </div>
      ))}
      <div className="mt-2 pt-3 border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-800 dark:text-white">Daily Manual Tasks Saved</span>
        <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">80% Saved</span>
      </div>
    </motion.div>
  </div>
);

const AutomateRentIllustration = () => (
  <div className="w-full h-full flex flex-col justify-center p-6 text-left">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-white/5 shadow-xl space-y-3 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl" />
      <div className="flex items-center justify-between">
        <span className="text-[9px] uppercase font-bold tracking-wider text-gray-400">Invoice #INV-2026-089</span>
        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500">PAID via UPI</span>
      </div>
      <div>
        <p className="text-2xl font-black text-gray-900 dark:text-white">₹8,500.00</p>
        <p className="text-[10px] text-gray-500 mt-0.5">Tenant: Rohan Roy · Room 202</p>
      </div>
      <div className="bg-gray-50 dark:bg-white/[0.02] rounded-xl p-3 space-y-1.5 text-xs text-gray-600 dark:text-gray-400 border border-gray-100/50 dark:border-white/5">
        <div className="flex justify-between">
          <span>Reminders Sent</span>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">WhatsApp & SMS</span>
        </div>
        <div className="flex justify-between text-[10px] text-gray-400">
          <span>Settled Instantly</span>
          <span>Ref: 614052938101</span>
        </div>
      </div>
    </motion.div>
  </div>
);

const BetterOccupancyIllustration = () => (
  <div className="w-full h-full flex flex-col justify-center p-4 text-left">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-white/5 shadow-xl space-y-3"
    >
      <div className="flex items-center justify-between text-xs border-b border-gray-50 dark:border-white/5 pb-2">
        <span className="font-semibold text-gray-700 dark:text-gray-300">Floor 1 Room Map</span>
        <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded-full">94% Booked</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: "101", status: "occupied" },
          { label: "102", status: "occupied" },
          { label: "103", status: "vacant" },
          { label: "104", status: "occupied" },
          { label: "105", status: "occupied" },
          { label: "106", status: "occupied" },
          { label: "107", status: "occupied" },
          { label: "108", status: "maintenance" },
        ].map((room) => (
          <div
            key={room.label}
            className={`rounded-xl p-2 text-center border transition-all ${
              room.status === "occupied"
                ? "bg-indigo-50/50 dark:bg-indigo-500/10 border-indigo-100/50 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400"
                : room.status === "vacant"
                ? "bg-emerald-50/50 dark:bg-emerald-500/10 border-emerald-100/50 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold"
                : "bg-amber-50/50 dark:bg-amber-500/10 border-amber-100/50 dark:border-amber-500/20 text-amber-600 dark:text-amber-400"
            }`}
          >
            <p className="text-xs font-bold">{room.label}</p>
            <p className="text-[8px] uppercase tracking-wider font-bold opacity-80 mt-0.5">
              {room.status === "occupied" ? "Occ" : room.status === "vacant" ? "Vac" : "Mnt"}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

const RealtimeAnalyticsIllustration = () => (
  <div className="w-full h-full flex flex-col justify-center p-6 text-left">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-white/5 shadow-xl space-y-3"
    >
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Live Revenue</span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500">+18.2%</span>
      </div>
      <div>
        <p className="text-xl font-black text-gray-900 dark:text-white">₹12,54,800</p>
        <p className="text-[10px] text-gray-400 mt-0.5">Total Month-on-Month Revenue</p>
      </div>
      <div className="flex gap-1.5 items-end h-16 pt-2">
        {[20, 35, 25, 45, 60, 50, 80, 70, 95].map((val, idx) => (
          <motion.div
            key={idx}
            initial={{ height: 0 }}
            whileInView={{ height: `${val}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-500 to-purple-500 opacity-80"
          />
        ))}
      </div>
    </motion.div>
  </div>
);

const ComplaintResolutionIllustration = () => (
  <div className="w-full h-full flex flex-col justify-center p-6 text-left">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-white/5 shadow-xl space-y-3"
    >
      <div className="flex items-center justify-between border-b border-gray-50 dark:border-white/5 pb-2">
        <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Ticket #1847</span>
        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-rose-500/10 text-rose-500">HIGH PRIORITY</span>
      </div>
      <div>
        <p className="text-xs font-bold text-gray-900 dark:text-white">AC cooling issue in Room 305</p>
        <p className="text-[10px] text-gray-500">Reported by Rahul Verma · 2h ago</p>
      </div>
      <div className="space-y-2 pt-1">
        <div className="flex items-center gap-2.5 text-[10px]">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-[7px] text-emerald-500 font-bold">✓</div>
          <span className="text-gray-600 dark:text-gray-400">Assigned to Electrician (6m ago)</span>
        </div>
        <div className="flex items-center gap-2.5 text-[10px]">
          <div className="w-4 h-4 rounded-full bg-indigo-500/20 border border-indigo-500 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          </div>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">Technician arrived at room</span>
        </div>
      </div>
    </motion.div>
  </div>
);

const CentralizedOperationsIllustration = () => (
  <div className="w-full h-full flex flex-col justify-center p-6 text-left">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-white/5 shadow-xl space-y-2.5"
    >
      <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase pb-1 border-b border-gray-50 dark:border-white/5">Properties Switcher</div>
      {[
        { name: "StayEasy Hostel, Sector 62", count: "88 Rooms", active: true },
        { name: "GreenNest PG, Sector 15", count: "48 Rooms", active: false },
        { name: "CoLive Spaces, Indiranagar", count: "120 Rooms", active: false },
      ].map((prop, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-between rounded-xl p-2.5 border text-xs ${
            prop.active
              ? "bg-indigo-50/50 dark:bg-indigo-500/10 border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold"
              : "bg-transparent border-gray-50 dark:border-white/5 text-gray-500"
          }`}
        >
          <span>{prop.name}</span>
          <span className="text-[10px] opacity-80 font-medium">{prop.count}</span>
        </div>
      ))}
    </motion.div>
  </div>
);

const FinancialTrackingIllustration = () => (
  <div className="w-full h-full flex flex-col justify-center p-6 text-left">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-white/5 shadow-xl space-y-3"
    >
      <div className="flex items-center justify-between border-b border-gray-50 dark:border-white/5 pb-2">
        <span className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">P&L Report Overview</span>
        <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full font-bold">Tax Ready ✓</span>
      </div>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs mb-1 font-medium">
            <span className="text-gray-500">Rent Income</span>
            <span className="text-emerald-500">+₹14,80,000</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full bg-emerald-500 rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1 font-medium">
            <span className="text-gray-500">PG Expenses</span>
            <span className="text-rose-500">-₹2,30,000</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "20%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full bg-rose-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

// ── Benefits Section Component ──────────────────────────

export default function BenefitsSection() {
  return (
    <SectionWrapper>
      <SectionHeading
        badge="Benefits"
        title="Why Property Managers Love RentFlow"
        subtitle="Transform your property management operations and save hours every week with our intelligent platform."
      />

      <div className="space-y-16 md:space-y-24">
        {BENEFITS.map((benefit, i) => {
          const Icon = benefit.icon;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Illustration Card Container */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${
                    i % 3 === 0
                      ? "from-indigo-50 to-purple-50 dark:from-indigo-500/5 dark:to-purple-500/5"
                      : i % 3 === 1
                      ? "from-blue-50 to-indigo-50 dark:from-blue-500/5 dark:to-indigo-500/5"
                      : "from-purple-50 to-pink-50 dark:from-purple-500/5 dark:to-pink-500/5"
                  } border border-gray-100 dark:border-white/5 flex items-center justify-center overflow-hidden`}>
                    
                    {/* Render unique high-fidelity illustration based on benefit index */}
                    {i === 0 && <ReduceManualWorkIllustration />}
                    {i === 1 && <AutomateRentIllustration />}
                    {i === 2 && <BetterOccupancyIllustration />}
                    {i === 3 && <RealtimeAnalyticsIllustration />}
                    {i === 4 && <ComplaintResolutionIllustration />}
                    {i === 5 && <CentralizedOperationsIllustration />}
                    {i === 6 && <FinancialTrackingIllustration />}

                  </div>

                  {/* Floating icon */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className={`absolute -top-4 ${isEven ? "-right-4" : "-left-4"} w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-xl flex items-center justify-center`}
                  >
                    <Icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                  </motion.div>
                </div>
              </div>

              {/* Content Description */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 mb-4 md:hidden">
                  <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
