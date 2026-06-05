import { CTA } from "@/components/CTA";
import { site } from "@/components/site-data";
import { ContactVisualPanel } from "@/components/Visuals";

export default function ContactPage() {
  return (
    <>
      <section className="bg-soft py-16">
        <div className="container grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Contact Service HQ</p>
            <h1 className="mt-3 text-4xl font-black text-navy md:text-5xl">Request HVAC or appliance repair service</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">Contact Ricardo Fernandez and Service HQ Inc. for repair service across Broward, Palm Beach, and Miami-Dade Counties.</p>
            <div className="mt-8 grid gap-3 text-lg font-bold text-navy">
              <a href={site.phoneHref}>{site.phone}</a>
              <a href={site.emailHref}>{site.email}</a>
              <p>{site.address}</p>
            </div>
            <div className="mt-8">
              <ContactVisualPanel />
            </div>
          </div>
          <form className="rounded-[2rem] bg-white p-6 shadow-card md:p-8">
            <label className="block text-sm font-bold text-slate-700">Name<input className="mt-2 w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-serviceBlue focus:ring-4 focus:ring-serviceBlue/15" /></label>
            <label className="mt-4 block text-sm font-bold text-slate-700">Phone<input className="mt-2 w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-serviceBlue focus:ring-4 focus:ring-serviceBlue/15" /></label>
            <label className="mt-4 block text-sm font-bold text-slate-700">Message<textarea className="mt-2 h-32 w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-serviceBlue focus:ring-4 focus:ring-serviceBlue/15" /></label>
            <button className="mt-5 w-full rounded-full bg-action px-6 py-4 font-black text-white shadow-[0_16px_30px_rgba(255,122,0,0.28)] transition hover:bg-[#e76800]" type="button">Request Service</button>
          </form>
        </div>
      </section>
      <CTA />
    </>
  );
}
