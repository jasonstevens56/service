import { CTA } from "@/components/CTA";
import { ServiceVisualCard } from "@/components/Visuals";
import { services } from "@/components/site-data";

const serviceKeys = ["ac", "heat", "appliance"] as const;

export default function Page() {
  return (
    <>
      <section className="bg-soft py-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Service HQ Inc.</p>
          <h1 className="mt-3 text-4xl font-black text-navy md:text-5xl">HVAC & Appliance Repair Services</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">Service HQ Inc. provides air conditioning, heating, and appliance repair services across Broward, Palm Beach, and Miami-Dade Counties.</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceVisualCard
              key={service.href}
              service={serviceKeys[index] ?? "ac"}
              href={service.href}
              description={service.description}
            />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
