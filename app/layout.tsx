import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service HQ Inc. | HVAC & Appliance Repair in South Florida",
  description: "Service HQ Inc. provides air conditioning, heating, and appliance repair services across Broward, Palm Beach, and Miami-Dade Counties.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = { "@context": "https://schema.org", "@type": "HVACBusiness", name: site.name, telephone: site.phone, email: site.email, address: site.address, areaServed: site.counties };
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><Header />{children}<Footer /></body></html>;
}
