import { CTA } from "@/components/CTA";
import { services, site } from "@/components/site-data";
import { AboutVisual, ButtonLink, CountyVisualCards, HeroSystemVisual, ReviewVisual, ServiceVisualCard } from "@/components/Visuals";

const serviceKeys = ["ac", "heat", "appliance"] as const;

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(30,167,255,0.36),transparent_32%),linear-gradient(135deg,#0F4C81_0%,#12629f_48%,#1EA7FF_100%)] text-white">
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/80">South Florida Repair Services</p>
            <h1 className="mt-5 max-w-[330px] break-words text-2xl font-black leading-tight sm:max-w-none sm:text-4xl md:text-6xl">HVAC & Appliance Repair Services Across South Florida</h1>
            <p className="mt-6 max-w-[330px] text-base leading-8 text-white/85 sm:max-w-none sm:text-lg">Service HQ Inc. provides professional air conditioning, heating, and appliance repair services throughout Broward, Palm Beach, and Miami-Dade Counties.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.phoneHref}>Call {site.phone}</ButtonLink>
              <ButtonLink href="/contact" variant="light">Request Service</ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 text-sm font-bold text-white/85 sm:grid-cols-3">
              {site.serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-center">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <HeroSystemVisual />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Services</p>
          <h2 className="mt-2 text-3xl font-black text-navy md:text-4xl">Repair services built around your needs</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceVisualCard
                key={service.href}
                service={serviceKeys[index] ?? "ac"}
                href={service.href}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-20">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">About Service HQ</p>
            <h2 className="mt-2 text-3xl font-black text-navy md:text-4xl">Experience, integrity, and detail-focused service</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">Service HQ is a locally owned and operated company that values honesty and integrity in all aspects of business. The dedicated team has over 10 years of hands-on experience and provides suggestions tailored to each project.</p>
          </div>
          <AboutVisual />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Areas Served</p>
              <h2 className="mt-3 text-3xl font-black text-navy md:text-4xl">Serving South Florida counties</h2>
              <p className="mt-4 leading-7 text-slate-600">Service HQ Inc. serves Broward County, Palm Beach County, and Miami-Dade County.</p>
            </div>
            <CountyVisualCards />
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-20">
        <div className="container">
          <ReviewVisual />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Areas Served</p>
            <h2 className="mt-3 text-3xl font-black text-navy">Serving South Florida counties</h2>
            <div className="mt-6 grid gap-3">
              {site.serviceAreas.map(area => <div key={area} className="rounded-2xl bg-soft p-4 font-bold text-navy">{area}</div>)}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Contact</p>
            <h2 className="mt-3 text-3xl font-black text-navy">Ready to request service?</h2>
            <p className="mt-4 text-slate-600">Contact Service HQ Inc. for HVAC, heating, or appliance repair service.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.phoneHref}>Call {site.phone}</ButtonLink>
              <ButtonLink href="/contact" variant="light">Contact Page</ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
