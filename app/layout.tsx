import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RentFlow — Smart PG & Rental Management Platform",
  description:
    "The all-in-one platform to manage tenants, rooms, rent collection, complaints, expenses, and analytics for PG owners, hostel managers, and co-living operators.",
  keywords: [
    "PG management",
    "rental management",
    "hostel management",
    "tenant management",
    "rent collection",
    "property management software",
    "co-living management",
  ],
  openGraph: {
    title: "RentFlow — Smart PG & Rental Management Platform",
    description:
      "Manage tenants, rooms, rent collection, and analytics from one powerful dashboard.",
    type: "website",
    locale: "en_IN",
    siteName: "RentFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "RentFlow — Smart PG & Rental Management Platform",
    description:
      "The all-in-one platform for PG owners and hostel managers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
