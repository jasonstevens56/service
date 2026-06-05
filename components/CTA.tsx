import { site } from "./site-data";
import { ButtonLink } from "./Visuals";

export function CTA() {
  return (
    <section className="bg-soft py-16 md:py-20">
      <div className="container overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_85%_10%,rgba(30,167,255,0.34),transparent_28%),linear-gradient(135deg,#0F4C81_0%,#12629f_58%,#092f50_100%)] p-8 text-white shadow-card md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Request Service</p>
            <h2 className="mt-2 text-3xl font-black md:text-4xl">Need HVAC or appliance repair?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/80">Contact Service HQ Inc. for air conditioning, heating, or appliance repair service across Broward, Palm Beach, and Miami-Dade Counties.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ButtonLink href={site.phoneHref}>Call {site.phone}</ButtonLink>
            <ButtonLink href={site.emailHref} variant="light">Email Service HQ</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
