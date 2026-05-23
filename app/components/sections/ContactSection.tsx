"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send } from "lucide-react";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-gray-50/50 dark:bg-white/[0.02]">
      <SectionHeading
        badge="Contact"
        title="Get in Touch"
        subtitle="Have questions? We'd love to hear from you. Our team is ready to help."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 shadow-lg p-6 md:p-8"
        >
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
              />
            </div>
            <Button size="lg" className="w-full">
              <Send className="w-4 h-4" />
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {[
            {
              icon: Mail,
              title: "Email Us",
              description: "Our friendly team is here to help.",
              value: "hello@rentflow.in",
              color: "indigo",
            },
            {
              icon: Phone,
              title: "Call Us",
              description: "Mon-Sat from 9am to 7pm.",
              value: "+91 98765 43210",
              color: "purple",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              description: "Quick support via WhatsApp.",
              value: "Chat Now",
              color: "emerald",
            },
            {
              icon: MapPin,
              title: "Office",
              description: "Come visit our office.",
              value: "Bangalore, Karnataka, India",
              color: "blue",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 hover:border-indigo-200 dark:hover:border-indigo-500/20 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.color === "indigo"
                    ? "bg-indigo-50 dark:bg-indigo-500/10"
                    : item.color === "purple"
                    ? "bg-purple-50 dark:bg-purple-500/10"
                    : item.color === "emerald"
                    ? "bg-emerald-50 dark:bg-emerald-500/10"
                    : "bg-blue-50 dark:bg-blue-500/10"
                }`}>
                  <Icon className={`w-6 h-6 ${
                    item.color === "indigo"
                      ? "text-indigo-600 dark:text-indigo-400"
                      : item.color === "purple"
                      ? "text-purple-600 dark:text-purple-400"
                      : item.color === "emerald"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-blue-600 dark:text-blue-400"
                  }`} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">{item.description}</p>
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.value}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Map Placeholder */}
          <div className="rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 h-40 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Bangalore, Karnataka</p>
              <p className="text-xs text-gray-400">Interactive map coming soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
