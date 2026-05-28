import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubh Shah — ML Engineer & Data Analyst",
  description:
    "Portfolio of Shubh Shah — MSc Computing (Data Analytics) candidate at DCU with expertise in machine learning, data pipelines, and business analysis.",
  keywords: ["Shubh Shah", "Machine Learning", "Data Analytics", "Portfolio", "Dublin"],
  openGraph: {
    title: "Shubh Shah — ML Engineer & Data Analyst",
    description: "Portfolio of Shubh Shah — ML Engineer and Data Analyst based in Dublin, Ireland.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
