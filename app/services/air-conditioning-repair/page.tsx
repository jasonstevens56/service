import { CTA } from "@/components/CTA";
import { ServiceVisualCard } from "@/components/Visuals";

export default function Page() {
  return (
    <>
      <section className="bg-soft py-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Service HQ Inc.</p>
          <h1 className="mt-3 text-4xl font-black text-navy md:text-5xl">Air Conditioning Repair</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">Professional air conditioning diagnostics and repair service for South Florida homes. Service HQ helps customers address cooling issues with detail-focused service.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-3xl">
          <ServiceVisualCard
            service="ac"
            href="/contact"
            description="Professional air conditioning diagnostics and repair service for South Florida homes."
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
