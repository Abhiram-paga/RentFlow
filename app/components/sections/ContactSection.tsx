"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Send, Loader2, Check } from "lucide-react";
import SectionWrapper from "@/app/components/ui/SectionWrapper";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Button from "@/app/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone Validation
    const phoneRegex = /^\+?[\d\s-]{10,15}$/;
    const sanitizedPhone = formData.phone.replace(/[\s-]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(sanitizedPhone)) {
      newErrors.phone = "Please enter a valid 10-15 digit phone number";
      isValid = false;
    }

    // Message Validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as the user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || 'Failed to send message');
      }

      setIsSuccess(true);
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <SectionWrapper id="contact" className="bg-gray-50/50 dark:bg-white/[0.02]">
      <SectionHeading
        badge="Contact"
        title="Get in Touch"
        subtitle="Have questions? We'd love to hear from you. Our team is ready to help."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">

        {/* Contact Form State (Animate between Form and Success Screen) */}
        <div className="relative flex flex-col h-full justify-center">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full rounded-2xl bg-white dark:bg-gray-900 border border-gray-150 dark:border-white/5 shadow-lg p-6 md:p-8 flex flex-col justify-between"
              >
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border ${errors.name
                          ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                          : "border-gray-200 dark:border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
                          } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border ${errors.email
                            ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                            : "border-gray-200 dark:border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
                          } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 transition-all`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 8688408742"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border ${errors.phone
                        ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                        : "border-gray-200 dark:border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
                        } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border ${errors.message
                        ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                        : "border-gray-200 dark:border-white/10 focus:ring-indigo-500/20 focus:border-indigo-500"
                        } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 text-sm focus:outline-none focus:ring-2 transition-all resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full rounded-2xl bg-white dark:bg-gray-900 border border-emerald-100 dark:border-emerald-500/10 shadow-lg p-6 md:p-8 flex flex-col items-center justify-center text-center h-full min-h-[415px]"
              >
                <div className="w-16 h-16 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-sm shadow-emerald-500/20">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
                  Thank you, <span className="font-semibold text-gray-800 dark:text-white">{formData.name}</span>. We've received your query and our team will get in touch with you at <span className="font-semibold text-gray-800 dark:text-white">{formData.email}</span> shortly.
                </p>
                <Button onClick={handleReset}>Send Another Message</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Info (Clickable Link Cards) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col justify-between"
        >
          <div className="space-y-4">
            {[
              {
                icon: Mail,
                title: "Email Us",
                description: "Our friendly team is here to help.",
                value: "abhirampagadala38@gmail.com",
                color: "indigo",
                href: "mailto:abhirampagadala38@gmail.com",
              },
              {
                icon: Phone,
                title: "Call Us",
                description: "Mon-Sat from 9am to 7pm.",
                value: "+91 8688408742",
                color: "purple",
                href: "tel:+918688408742",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                description: "Quick support via WhatsApp.",
                value: "Chat Now",
                color: "emerald",
                href: "https://wa.me/918688408742?text=Hi%20RentFlow%20team,%20I'd%20like%20to%20know%20more%20about%20the%20platform.",
              },
              {
                icon: MapPin,
                title: "Office",
                description: "Come visit our office.",
                value: "Hyderabad, Telangana, India",
                color: "blue",
                href: "https://maps.google.com/?q=Hyderabad,+Telangana,+India",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/5 hover:border-indigo-200 dark:hover:border-indigo-500/20 hover:shadow-lg transition-all duration-300 cursor-pointer text-left"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color === "indigo"
                    ? "bg-indigo-50 dark:bg-indigo-500/10"
                    : item.color === "purple"
                      ? "bg-purple-50 dark:bg-purple-500/10"
                      : item.color === "emerald"
                        ? "bg-emerald-50 dark:bg-emerald-500/10"
                        : "bg-blue-50 dark:bg-blue-500/10"
                    }`}>
                    <Icon className={`w-6 h-6 ${item.color === "indigo"
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
                </motion.a>
              );
            })}
          </div>

          {/* Interactive Map Redirect */}
          <motion.a
            href="https://maps.google.com/?q=Hyderabad,+Telangana,+India"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/5 hover:border-indigo-200 dark:hover:border-indigo-500/20 hover:shadow-lg h-40 flex items-center justify-center overflow-hidden transition-all duration-300 group cursor-pointer"
          >
            <div className="text-center">
              <MapPin className="w-8 h-8 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Hyderabad, Telangana, India</p>
              <p className="text-xs text-gray-500 mt-0.5">Click to view on Google Maps</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
