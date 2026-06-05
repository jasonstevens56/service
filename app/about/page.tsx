import { CTA } from "@/components/Sections";
import { companyDescription } from "@/lib/site";
export const metadata = { title: "About Service HQ Inc. | South Florida HVAC & Appliance Repair" };
export default function Page(){return <main><section className="bg-soft px-4 py-20"><div className="mx-auto max-w-4xl"><h1 className="display text-5xl font-black text-navy">About Service HQ Inc.</h1><p className="mt-6 text-xl leading-9 text-slate-700">{companyDescription}</p></div></section><CTA/></main>}
