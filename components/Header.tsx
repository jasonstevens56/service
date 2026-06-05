import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  ["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Reviews", "/reviews"], ["Areas Served", "/areas-served"], ["Contact", "/contact"]
];

export function Header() {
  return <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-xl font-black text-white">HQ</div>
        <div><div className="display text-xl font-black text-navy">Service HQ</div><div className="text-xs font-semibold uppercase tracking-wide text-slate-500">HVAC & Appliance Repair</div></div>
      </Link>
      <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
        {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-navy">{label}</Link>)}
      </nav>
      <a href={site.phoneHref} className="btn-primary hidden sm:inline-flex">Call {site.phone}</a>
    </div>
  </header>;
}
