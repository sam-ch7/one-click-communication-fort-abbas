import type { InternetPlan } from "@/types/content";
export const localPlans: InternetPlan[] = [
  { id: "plan-16", speed: "16 MB", speedFormula: "8 + 8", price: 1500, note: "Up to 50 MB upload", badge: "Great value", features: ["Open Speed: 12 AM–9 AM", "Double speed: 9 AM–6 PM", "Free IPTV service"], displayOrder: 1 },
  { id: "plan-24", speed: "24 MB", speedFormula: "12 + 12", price: 1800, note: "Up to 50 MB upload", features: ["Open Speed: 12 AM–9 AM", "Double speed: 9 AM–6 PM", "Free IPTV service"], displayOrder: 2 },
  { id: "plan-32", speed: "32 MB", speedFormula: "16 + 16", price: 2300, note: "Up to 50 MB upload", badge: "Popular", features: ["Open Speed: 12 AM–9 AM", "Double speed: 9 AM–6 PM", "Free IPTV service"], featured: true, displayOrder: 3 },
  { id: "plan-40", speed: "40 MB", speedFormula: "20 + 20", price: 2800, note: "Up to 50 MB upload", features: ["Open Speed: 12 AM–9 AM", "Double speed: 9 AM–6 PM", "Free IPTV service"], displayOrder: 4 },
  { id: "plan-50", speed: "50 MB", speedFormula: "25 + 25", price: 3300, note: "Up to 50 MB upload", badge: "Fastest", features: ["Open Speed: 12 AM–9 AM", "Double speed: 9 AM–6 PM", "Free IPTV service"], featured: true, displayOrder: 5 },
];
