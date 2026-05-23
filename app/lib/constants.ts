import {
  Users, BedDouble, CreditCard, MessageSquareWarning, IndianRupee,
  UserCheck, BarChart3, Building2, Bell, FileText, Smartphone,
  PieChart, BellRing, FileCheck, MessageCircle, BrainCircuit,
  LineChart, QrCode, UsersRound, Cloud, ShieldCheck, Zap,
  Clock, TrendingUp, Headphones, Target, Wallet, LayoutDashboard,
} from "lucide-react";

// ── Navigation ──────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Stats ───────────────────────────────────────────────
export const STATS = [
  { label: "Properties Managed", value: 2500, prefix: "", suffix: "+" },
  { label: "Happy Tenants", value: 50000, prefix: "", suffix: "+" },
  { label: "Revenue Processed", value: 25, prefix: "₹", suffix: " Cr+" },
  { label: "Satisfaction Rate", value: 99, prefix: "", suffix: "%" },
] as const;

// ── Features ────────────────────────────────────────────
export const FEATURES = [
  {
    icon: Users,
    title: "Tenant Management",
    description: "Onboard, track, and manage all tenants with complete profiles, documents, and history in one place.",
  },
  {
    icon: BedDouble,
    title: "Smart Room Allocation",
    description: "Assign rooms intelligently based on availability, preferences, and occupancy optimization.",
  },
  {
    icon: CreditCard,
    title: "Rent Collection",
    description: "Automate rent collection with online payments, reminders, and real-time payment tracking.",
  },
  {
    icon: MessageSquareWarning,
    title: "Complaint Management",
    description: "Let tenants raise complaints digitally. Track, assign, and resolve issues efficiently.",
  },
  {
    icon: IndianRupee,
    title: "Expense Tracking",
    description: "Monitor all property expenses, generate reports, and keep your finances crystal clear.",
  },
  {
    icon: UserCheck,
    title: "Visitor Management",
    description: "Track visitor entries and exits with digital logs, QR passes, and instant notifications.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Get real-time insights on occupancy, revenue, expenses, and tenant activity at a glance.",
  },
  {
    icon: Building2,
    title: "Multi-property Support",
    description: "Manage multiple PGs, hostels, and properties from a single centralized dashboard.",
  },
  {
    icon: Bell,
    title: "Notifications & Alerts",
    description: "Automated alerts for rent due dates, lease renewals, complaints, and important updates.",
  },
  {
    icon: FileText,
    title: "Billing & Invoices",
    description: "Generate professional invoices automatically and share them digitally with tenants.",
  },
  {
    icon: Smartphone,
    title: "Online Payments",
    description: "Accept payments via UPI, cards, net banking, and wallets with instant reconciliation.",
  },
  {
    icon: PieChart,
    title: "Occupancy Monitoring",
    description: "Real-time occupancy dashboards to maximize revenue and minimize vacant rooms.",
  },
] as const;

// ── Advanced Features ───────────────────────────────────
export const ADVANCED_FEATURES = [
  {
    icon: BellRing,
    title: "Auto Rent Reminders",
    description: "Send automatic rent reminders via SMS, email, and push notifications before due dates.",
  },
  {
    icon: FileCheck,
    title: "Automated Invoices",
    description: "Generate and share invoices automatically every billing cycle without manual effort.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Notifications",
    description: "Send rent receipts, reminders, and updates directly to tenants via WhatsApp.",
  },
  {
    icon: BrainCircuit,
    title: "AI Insights",
    description: "Get AI-powered recommendations on pricing, occupancy optimization, and tenant retention.",
  },
  {
    icon: LineChart,
    title: "Smart Analytics",
    description: "Deep dive into trends, forecasts, and performance metrics with intelligent reports.",
  },
  {
    icon: QrCode,
    title: "QR Visitor Entry",
    description: "Generate QR codes for visitors enabling contactless and secure entry management.",
  },
  {
    icon: UsersRound,
    title: "Staff Management",
    description: "Manage housekeeping, maintenance, and security staff schedules and attendance.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Dedicated apps for both owners and tenants with full feature access on the go.",
  },
  {
    icon: Cloud,
    title: "Cloud Backup",
    description: "All your data is securely backed up on the cloud with 99.9% uptime guarantee.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based Access",
    description: "Control who sees what with granular role-based permissions for staff and managers.",
  },
] as const;

// ── Benefits ────────────────────────────────────────────
export const BENEFITS = [
  {
    icon: Zap,
    title: "Reduce Manual Work",
    description: "Eliminate spreadsheets, paper registers, and manual tracking. Automate 80% of your daily operations with smart workflows.",
  },
  {
    icon: CreditCard,
    title: "Automate Rent Collection",
    description: "Set up recurring rent reminders and accept online payments. No more chasing tenants for monthly rent.",
  },
  {
    icon: PieChart,
    title: "Better Occupancy Tracking",
    description: "See real-time room availability, booking status, and occupancy trends to maximize your revenue.",
  },
  {
    icon: TrendingUp,
    title: "Real-time Analytics",
    description: "Make data-driven decisions with live dashboards showing revenue, expenses, and growth metrics.",
  },
  {
    icon: Headphones,
    title: "Faster Complaint Resolution",
    description: "Digital complaint system with priority routing, status tracking, and automated escalation.",
  },
  {
    icon: Target,
    title: "Centralized Operations",
    description: "One dashboard for all your properties. Manage tenants, rooms, staff, and finances from anywhere.",
  },
  {
    icon: Wallet,
    title: "Smart Financial Tracking",
    description: "Track income vs expenses, generate P&L reports, and get tax-ready financial statements effortlessly.",
  },
] as const;

// ── How It Works ────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    icon: Building2,
    title: "Add Property",
    description: "Register your PG, hostel, or rental property with basic details and room configurations.",
  },
  {
    icon: BedDouble,
    title: "Create Rooms",
    description: "Set up room types, pricing, amenities, and capacity for each room in your property.",
  },
  {
    icon: Users,
    title: "Add Tenants",
    description: "Onboard tenants with their KYC documents, contact info, and room assignments.",
  },
  {
    icon: CreditCard,
    title: "Collect Payments",
    description: "Enable online rent collection with automated reminders and instant payment receipts.",
  },
  {
    icon: LayoutDashboard,
    title: "Manage Everything",
    description: "Monitor analytics, handle complaints, track expenses, and grow your business from one dashboard.",
  },
] as const;

// ── Pricing ─────────────────────────────────────────────
export const PRICING_PLANS = [
  {
    name: "Starter",
    description: "Perfect for small PGs with up to 20 rooms",
    monthlyPrice: 999,
    yearlyPrice: 799,
    features: [
      "Up to 20 rooms",
      "Tenant management",
      "Rent collection",
      "Basic analytics",
      "Email support",
      "1 property",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing PG businesses with multiple properties",
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    features: [
      "Up to 100 rooms",
      "Everything in Starter",
      "Advanced analytics",
      "Complaint management",
      "Expense tracking",
      "Online payments",
      "WhatsApp notifications",
      "Up to 5 properties",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "For large operators and chains needing custom solutions",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited rooms",
      "Everything in Professional",
      "AI insights",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premise option",
      "Unlimited properties",
      "24/7 phone support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
] as const;

// ── Testimonials ────────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Sunrise PG",
    rating: 5,
    review: "RentFlow transformed how I manage my 3 PGs. Rent collection is now automated, and I save 10+ hours every week. The dashboard gives me complete visibility.",
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Manager, Urban Stay Hostel",
    rating: 5,
    review: "The complaint management system alone is worth it. Tenants love the app, and we've seen a 40% reduction in complaint resolution time.",
    avatar: "PS",
  },
  {
    name: "Amit Patel",
    role: "Founder, CoLive Spaces",
    rating: 5,
    review: "Managing 200+ rooms across 8 properties was chaos before RentFlow. Now everything is streamlined from one dashboard. Revenue is up 25%.",
    avatar: "AP",
  },
  {
    name: "Sneha Reddy",
    role: "Owner, Green Valley PG",
    rating: 4,
    review: "The occupancy tracking and analytics features are incredible. I can see exactly which rooms need attention and optimize pricing accordingly.",
    avatar: "SR",
  },
  {
    name: "Vikram Singh",
    role: "Director, StayEasy Chain",
    rating: 5,
    review: "We evaluated 5 platforms before choosing RentFlow. The multi-property support and financial reporting are best-in-class. Highly recommended!",
    avatar: "VS",
  },
  {
    name: "Ananya Desai",
    role: "Manager, City Nest Hostel",
    rating: 5,
    review: "Our tenants love paying rent through the app. WhatsApp reminders mean we get 95% on-time payments now. Game changer for our operations.",
    avatar: "AD",
  },
] as const;

// ── FAQ ─────────────────────────────────────────────────
export const FAQS = [
  {
    question: "How does rent collection work?",
    answer: "RentFlow automates rent collection by sending timely reminders via SMS, email, and WhatsApp. Tenants can pay online through UPI, cards, or net banking. You get instant notifications on payment receipt and can track all transactions from your dashboard.",
  },
  {
    question: "Can I manage multiple properties?",
    answer: "Yes! RentFlow supports multi-property management. You can manage all your PGs, hostels, and rental properties from a single dashboard. Each property has its own rooms, tenants, and financial tracking while giving you a consolidated overview.",
  },
  {
    question: "Is online payment supported?",
    answer: "Absolutely. We support all major payment methods including UPI (Google Pay, PhonePe, Paytm), credit/debit cards, net banking, and digital wallets. All transactions are secured with bank-grade encryption.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes, we offer dedicated mobile apps for both property owners and tenants. Owners can manage their properties on the go, while tenants can pay rent, raise complaints, and receive notifications through their app.",
  },
  {
    question: "Can tenants raise complaints?",
    answer: "Yes. Tenants can raise complaints directly through the app or web portal. Each complaint is tracked with a ticket number, priority level, and status updates. You can assign complaints to staff and set SLA targets for resolution.",
  },
  {
    question: "Can I export reports?",
    answer: "Yes, all reports can be exported in PDF and Excel formats. This includes financial reports, occupancy reports, tenant lists, payment histories, and tax-ready statements. You can also schedule automatic report generation.",
  },
] as const;

// ── Mobile App Features ─────────────────────────────────
export const MOBILE_APP_FEATURES = [
  { icon: CreditCard, title: "Pay Rent Online", description: "Quick and secure rent payments via UPI, cards, and wallets" },
  { icon: MessageSquareWarning, title: "Raise Complaints", description: "Submit and track maintenance requests instantly" },
  { icon: Bell, title: "Smart Notifications", description: "Get alerts for rent due, complaints, and important updates" },
  { icon: FileText, title: "Digital Invoices", description: "Access and download rent receipts and invoices anytime" },
  { icon: BedDouble, title: "Room Management", description: "View room details, amenities, and occupancy status" },
] as const;
