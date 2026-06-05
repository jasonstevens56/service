import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="bg-slate-950 text-white">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
      <div className="md:col-span-2"><div className="display text-2xl font-black">Service HQ Inc.</div><p className="mt-3 max-w-xl text-slate-300">HVAC and appliance repair services across Broward, Palm Beach, and Miami-Dade Counties.</p></div>
      <div><h3 className="font-bold">Contact</h3><p className="mt-3 text-slate-300"><a href={site.phoneHref}>{site.phone}</a><br/><a href={site.emailHref}>{site.email}</a><br/>{site.address}</p></div>
      <div><h3 className="font-bold">Links</h3><div className="mt-3 grid gap-2 text-slate-300"><Link href="/services">Services</Link><Link href="/areas-served">Areas Served</Link><Link href="/reviews">Reviews</Link><Link href="/contact">Contact</Link></div></div>
    </div>
    <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400">© {new Date().getFullYear()} Service HQ Inc. <Link href="/privacy-policy" className="underline">Privacy Policy</Link> · <Link href="/terms-and-conditions" className="underline">Terms</Link></div>
    <a href={site.phoneHref} className="fixed bottom-4 left-4 right-4 z-50 rounded-full bg-action px-5 py-4 text-center font-black text-white shadow-2xl md:hidden">Call {site.phone}</a>
  </footer>;
}
