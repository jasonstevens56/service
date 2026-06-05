import Link from "next/link";
import { site, services } from "./site-data";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container grid gap-8 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black">Service HQ Inc.</h2>
          <p className="mt-3 max-w-xl text-white/80">HVAC, heating, and appliance repair services for Broward, Palm Beach, and Miami-Dade Counties.</p>
          <p className="mt-4 text-white/80">{site.address}</p>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <div className="mt-3 grid gap-2 text-white/80">
            {services.map(service => <Link key={service.href} href={service.href}>{service.title}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-3 grid gap-2 text-white/80">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <a href={site.reviewUrl} target="_blank">Google Reviews</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm text-white/70">© {new Date().getFullYear()} Service HQ Inc. All rights reserved.</div>
      <a href={site.phoneHref} className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-action py-4 text-center font-black text-white shadow-2xl md:hidden">Call {site.phone}</a>
    </footer>
  );
}
