import { CTA } from "@/components/CTA";
import { AboutVisual } from "@/components/Visuals";

export default function Page() {
  return (
    <>
      <section className="bg-soft py-16">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Service HQ Inc.</p>
            <h1 className="mt-3 text-4xl font-black text-navy md:text-5xl">About Service HQ Inc.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">Service HQ is a locally owned and operated company that values honesty and integrity in all aspects of business. The team has over 10 years of hands-on experience and provides repair services customized to each customer's needs.</p>
          </div>
          <AboutVisual />
        </div>
      </section>
      <CTA />
    </>
  );
}
