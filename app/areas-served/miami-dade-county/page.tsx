import { CTA } from "@/components/CTA";
import { CountyVisualCards } from "@/components/Visuals";

export default function Page() {
  return (
    <>
      <section className="bg-soft py-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Service HQ Inc.</p>
          <h1 className="mt-3 text-4xl font-black text-navy md:text-5xl">HVAC & Appliance Repair in Miami-Dade County</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">Service HQ Inc. provides HVAC, heating, and appliance repair services in Miami-Dade County.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container">
          <CountyVisualCards />
        </div>
      </section>
      <CTA />
    </>
  );
}
