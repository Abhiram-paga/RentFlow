"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, IndianRupee, BedDouble, MessageSquareWarning, TrendingUp, PieChart, Bell, ArrowUpRight, ArrowDownRight } from "lucide-react";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";

export default function DashboardSection() {
  return (
    <SectionWrapper className="bg-gray-50/50 dark:bg-white/[0.02]">
      <SectionHeading
        badge="Dashboard"
        title="See the Dashboard in Action"
        subtitle="A powerful, intuitive dashboard that gives you complete visibility into your property operations."
      />

      <div className="relative">
        {/* Desktop Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 shadow-2xl shadow-indigo-500/5 overflow-hidden"
        >
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 rounded-lg bg-white dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-600">
                dashboard.rentflow.in/overview
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:block w-56 border-r border-gray-100 dark:border-white/5 p-4 bg-gray-50/50 dark:bg-gray-800/50">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100 dark:border-white/5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">RentFlow</p>
                  <p className="text-xs text-gray-500">Pro Plan</p>
                </div>
              </div>
              {[
                { label: "Overview", active: true },
                { label: "Tenants", active: false },
                { label: "Rooms", active: false },
                { label: "Payments", active: false },
                { label: "Complaints", active: false },
                { label: "Analytics", active: false },
                { label: "Settings", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`px-3 py-2 rounded-lg text-sm mb-1 ${
                    item.active
                      ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-gray-500 dark:text-gray-500"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 md:p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                {[
                  { icon: IndianRupee, label: "Total Revenue", value: "₹12,54,800", change: "+18.2%", up: true, color: "emerald" },
                  { icon: BedDouble, label: "Occupancy Rate", value: "94.2%", change: "+5.1%", up: true, color: "indigo" },
                  { icon: Users, label: "Active Tenants", value: "186", change: "+12", up: true, color: "purple" },
                  { icon: MessageSquareWarning, label: "Open Complaints", value: "7", change: "-3", up: false, color: "amber" },
                ].map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-3 md:p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <StatIcon className="w-5 h-5 text-gray-400 dark:text-gray-600" />
                        <span className={`flex items-center text-xs font-medium ${stat.up ? "text-emerald-500" : "text-amber-500"}`}>
                          {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-3 gap-4 mb-6">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Revenue Overview</p>
                      <p className="text-xs text-gray-500">Monthly revenue trend</p>
                    </div>
                    <div className="flex gap-1 text-xs">
                      <span className="px-2 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium">6M</span>
                      <span className="px-2 py-1 rounded-md text-gray-500">1Y</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-32 md:h-40">
                    {[35, 45, 55, 40, 60, 75, 65, 80, 70, 85, 90, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.4 }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Jun</span>
                    <span>Sep</span>
                    <span>Dec</span>
                  </div>
                </div>

                {/* Occupancy Donut */}
                <div className="rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-4">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Room Status</p>
                  {/* Simple donut using CSS */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-28 h-28">
                      <svg className="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="12" className="text-gray-100 dark:text-gray-800" />
                        <motion.circle
                          cx="60" cy="60" r="50" fill="none" strokeWidth="12"
                          strokeLinecap="round"
                          className="text-indigo-500"
                          stroke="currentColor"
                          strokeDasharray="314"
                          initial={{ strokeDashoffset: 314 }}
                          whileInView={{ strokeDashoffset: 314 * (1 - 0.94) }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">94%</span>
                        <span className="text-xs text-gray-500">Occupied</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { label: "Occupied", value: "188", color: "bg-indigo-500" },
                      { label: "Vacant", value: "8", color: "bg-gray-300 dark:bg-gray-600" },
                      { label: "Maintenance", value: "4", color: "bg-amber-400" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${item.color}`} />
                          <span className="text-gray-600 dark:text-gray-400">{item.label}</span>
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid lg:grid-cols-2 gap-4">
                {/* Recent Payments */}
                <div className="rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Recent Payments</p>
                    <span className="text-xs text-indigo-500 font-medium cursor-pointer">View All</span>
                  </div>
                  {[
                    { name: "Rahul Verma", room: "Room 204", amount: "₹8,500", status: "Paid" },
                    { name: "Priya Nair", room: "Room 112", amount: "₹7,000", status: "Paid" },
                    { name: "Arjun Mehta", room: "Room 305", amount: "₹9,200", status: "Pending" },
                    { name: "Divya Iyer", room: "Room 108", amount: "₹6,800", status: "Paid" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 dark:border-white/5 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20 flex items-center justify-center">
                          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                            {item.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</p>
                          <p className="text-xs text-gray-500">{item.room}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.amount}</p>
                        <span className={`text-xs ${item.status === "Paid" ? "text-emerald-500" : "text-amber-500"}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complaint Tracking */}
                <div className="rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Active Complaints</p>
                    <span className="text-xs text-indigo-500 font-medium cursor-pointer">View All</span>
                  </div>
                  {[
                    { issue: "AC not working", room: "Room 305", priority: "High", time: "2h ago" },
                    { issue: "Water leakage", room: "Room 112", priority: "Medium", time: "5h ago" },
                    { issue: "WiFi connectivity", room: "Room 201", priority: "Low", time: "1d ago" },
                    { issue: "Door lock issue", room: "Room 408", priority: "High", time: "2d ago" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 dark:border-white/5 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.issue}</p>
                        <p className="text-xs text-gray-500">{item.room} · {item.time}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        item.priority === "High"
                          ? "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400"
                          : item.priority === "Medium"
                          ? "bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-2xl" />
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-2xl" />
      </div>
    </SectionWrapper>
  );
}
