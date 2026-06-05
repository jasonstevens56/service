import { CTA } from "@/components/Sections";
import { site } from "@/lib/site";
export const metadata = { title: "Google Reviews | Service HQ Inc." };
export default function Page(){return <main><section className="px-4 py-20"><div className="mx-auto max-w-4xl text-center"><h1 className="display text-5xl font-black text-navy">Service HQ Reviews</h1><p className="mt-5 text-lg text-slate-600">Read customer feedback on Google for Service HQ Inc.</p><div className="card mt-10"><div className="text-5xl text-action">★★★★★</div><p className="mt-4 text-slate-600">Customer review text is not included until real review content is supplied.</p><a className="btn-primary mt-6" href={site.reviewUrl} target="_blank">View Google Reviews</a></div></div></section><CTA/></main>}
