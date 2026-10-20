import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "One Click Communication | Fiber Internet in Fort Abbas",
  description: "Fast fiber internet plans in Fort Abbas with Open Speed nights, double daytime speed and free IPTV.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
