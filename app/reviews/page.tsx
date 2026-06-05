import { CTA } from "@/components/CTA";
import { ReviewVisual } from "@/components/Visuals";

export default function Page() {
  return (
    <>
      <section className="bg-soft py-16">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Service HQ Inc.</p>
          <h1 className="mt-3 text-4xl font-black text-navy md:text-5xl">Google Reviews</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">Customer reviews are available through the provided Google Reviews link. Service HQ Inc. does not display invented review text or ratings.</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container">
          <ReviewVisual />
        </div>
      </section>
      <CTA />
    </>
  );
}
