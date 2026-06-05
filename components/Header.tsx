import Link from "next/link";
import { site } from "./site-data";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Reviews", "/reviews"],
  ["Areas Served", "/areas-served"],
  ["Contact", "/contact"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="bg-navy text-white">
        <div className="container flex flex-col gap-2 py-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span>Serving Broward, Palm Beach & Miami-Dade Counties</span>
          <a className="font-semibold" href={site.phoneHref}>Call {site.phone}</a>
        </div>
      </div>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy text-lg font-black text-white">HQ</span>
          <span>
            <span className="block text-xl font-black text-navy">Service HQ</span>
            <span className="block text-xs font-semibold uppercase tracking-widest text-slate-500">HVAC & Appliance Repair</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-navy">{label}</Link>)}
        </nav>
        <a href={site.phoneHref} className="hidden rounded-full bg-action px-5 py-3 text-sm font-bold text-white shadow-card sm:inline-flex">Call Now</a>
      </div>
    </header>
  );
}
