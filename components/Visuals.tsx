import Link from "next/link";
import { site } from "./site-data";

type ServiceKey = "ac" | "heat" | "appliance";

const serviceVisuals: Record<
  ServiceKey,
  {
    kicker: string;
    title: string;
    palette: string;
    accent: string;
    aria: string;
  }
> = {
  ac: {
    kicker: "Cooling",
    title: "Air Conditioning Repair",
    palette: "from-sky-50 via-white to-cyan-100",
    accent: "#1EA7FF",
    aria: "Illustrated cooling system visual for air conditioning repair",
  },
  heat: {
    kicker: "Comfort",
    title: "Heating Services",
    palette: "from-orange-50 via-white to-amber-100",
    accent: "#FF7A00",
    aria: "Illustrated warm airflow visual for heating services",
  },
  appliance: {
    kicker: "Home Systems",
    title: "Appliance Repair",
    palette: "from-emerald-50 via-white to-slate-100",
    accent: "#10B981",
    aria: "Illustrated appliance diagnostic visual for appliance repair",
  },
};

export const countyVisuals = [
  {
    name: "Broward County",
    href: "/areas-served/broward-county",
    tone: "from-sky-100 via-white to-blue-50",
    accent: "#1EA7FF",
  },
  {
    name: "Palm Beach County",
    href: "/areas-served/palm-beach-county",
    tone: "from-emerald-100 via-white to-teal-50",
    accent: "#10B981",
  },
  {
    name: "Miami-Dade County",
    href: "/areas-served/miami-dade-county",
    tone: "from-orange-100 via-white to-rose-50",
    accent: "#FF7A00",
  },
];

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
  external?: boolean;
}) {
  const classes = {
    primary:
      "bg-action text-white shadow-[0_16px_30px_rgba(255,122,0,0.28)] hover:bg-[#e76800]",
    light: "bg-white text-navy shadow-[0_16px_30px_rgba(15,76,129,0.16)] hover:bg-slate-50",
    outline:
      "border border-white/35 bg-white/10 text-white shadow-[0_16px_30px_rgba(15,76,129,0.16)] hover:bg-white/20",
  }[variant];

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-black transition ${classes}`}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-black transition ${classes}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center text-sm font-black transition ${classes}`}
    >
      {children}
    </Link>
  );
}

export function HeroSystemVisual() {
  return (
    <div className="relative min-h-[430px] w-full max-w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/20 bg-white/12 p-4 shadow-2xl backdrop-blur">
      <div className="absolute inset-x-10 top-8 h-32 rounded-full bg-white/20 blur-3xl" />
      <div className="relative grid h-full min-h-[398px] place-items-center rounded-[1.5rem] bg-white text-ink">
        <svg
          role="img"
          aria-label="Abstract HVAC and appliance repair visual for Service HQ Inc."
          viewBox="0 0 520 420"
          className="h-full min-h-[350px] w-full"
        >
          <defs>
            <linearGradient id="heroPanel" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#F7F9FC" />
              <stop offset="100%" stopColor="#D9F1FF" />
            </linearGradient>
            <linearGradient id="heroBlue" x1="0" x2="1">
              <stop offset="0%" stopColor="#0F4C81" />
              <stop offset="100%" stopColor="#1EA7FF" />
            </linearGradient>
          </defs>
          <rect width="520" height="420" rx="28" fill="url(#heroPanel)" />
          <circle cx="420" cy="74" r="64" fill="#FF7A00" opacity=".15" />
          <circle cx="82" cy="318" r="72" fill="#1EA7FF" opacity=".16" />
          <rect x="78" y="76" width="364" height="204" rx="30" fill="#FFFFFF" stroke="#D7E4EF" strokeWidth="3" />
          <rect x="112" y="112" width="132" height="84" rx="18" fill="url(#heroBlue)" />
          <path d="M134 154h88M178 132v44" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" opacity=".9" />
          <rect x="278" y="112" width="104" height="84" rx="18" fill="#F7F9FC" stroke="#D7E4EF" strokeWidth="3" />
          <path d="M310 152c18-22 42-16 48 10" fill="none" stroke="#FF7A00" strokeWidth="10" strokeLinecap="round" />
          <path d="M118 245h282" stroke="#0F4C81" strokeWidth="10" strokeLinecap="round" opacity=".18" />
          <rect x="132" y="300" width="86" height="70" rx="18" fill="#FFFFFF" stroke="#D7E4EF" strokeWidth="3" />
          <rect x="156" y="320" width="38" height="8" rx="4" fill="#0F4C81" opacity=".7" />
          <circle cx="176" cy="348" r="12" fill="#1EA7FF" />
          <rect x="252" y="300" width="136" height="70" rx="18" fill="#0F4C81" />
          <path d="M282 337h76" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" />
          <path d="M320 318v38" stroke="#1EA7FF" strokeWidth="10" strokeLinecap="round" />
        </svg>
        <div className="absolute bottom-5 left-5 right-5 grid gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-card backdrop-blur sm:grid-cols-3">
          {["Air Conditioning", "Heating", "Appliances"].map((label) => (
            <div key={label} className="rounded-xl bg-soft px-4 py-3 text-sm font-black text-navy">
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServiceVisualCard({
  service,
  href,
  description,
}: {
  service: ServiceKey;
  href: string;
  description: string;
}) {
  const visual = serviceVisuals[service];

  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${visual.palette}`}>
        <svg role="img" aria-label={visual.aria} viewBox="0 0 360 220" className="h-full w-full">
          <circle cx="290" cy="54" r="48" fill={visual.accent} opacity=".16" />
          <circle cx="70" cy="172" r="58" fill="#0F4C81" opacity=".08" />
          <rect x="58" y="52" width="244" height="116" rx="24" fill="#FFFFFF" stroke="#D7E4EF" strokeWidth="3" />
          <path d="M92 91h94M92 126h64" stroke="#0F4C81" strokeWidth="11" strokeLinecap="round" opacity=".78" />
          <circle cx="245" cy="110" r="35" fill={visual.accent} opacity=".2" />
          {service === "ac" ? (
            <path d="M229 110h32M245 94v32M234 99l22 22M256 99l-22 22" stroke={visual.accent} strokeWidth="8" strokeLinecap="round" />
          ) : service === "heat" ? (
            <path d="M232 125c18-18 5-29 15-45 23 24 36 42 11 62" fill="none" stroke={visual.accent} strokeWidth="9" strokeLinecap="round" />
          ) : (
            <>
              <rect x="222" y="78" width="50" height="66" rx="12" fill="none" stroke={visual.accent} strokeWidth="8" />
              <circle cx="247" cy="119" r="14" fill="none" stroke={visual.accent} strokeWidth="7" />
            </>
          )}
        </svg>
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-navy">
          {visual.kicker}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-navy">{visual.title}</h3>
        <p className="mt-3 leading-7 text-slate-600">{description}</p>
        <span className="mt-5 inline-flex text-sm font-black text-action">View service</span>
      </div>
    </Link>
  );
}

export function AboutVisual() {
  const items = ["Locally owned and operated", "Over 10 years of hands-on experience", "Honesty and integrity", "Customized service for each project"];

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
      <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-50 via-white to-orange-50 p-6">
        <svg
          role="img"
          aria-label="Illustrated service planning visual for Service HQ Inc."
          viewBox="0 0 420 260"
          className="h-56 w-full"
        >
          <rect x="42" y="36" width="336" height="188" rx="26" fill="#FFFFFF" stroke="#D7E4EF" strokeWidth="3" />
          <path d="M86 91h138M86 132h104M86 173h160" stroke="#0F4C81" strokeWidth="11" strokeLinecap="round" opacity=".78" />
          <circle cx="305" cy="118" r="44" fill="#1EA7FF" opacity=".18" />
          <path d="M285 120l17 17 36-45" fill="none" stroke="#FF7A00" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-black text-navy shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CountyVisualCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {countyVisuals.map((county, index) => (
        <Link
          key={county.name}
          href={county.href}
          className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <div className={`h-40 bg-gradient-to-br ${county.tone}`}>
            <svg
              role="img"
              aria-label={`Illustrated service area visual for ${county.name}`}
              viewBox="0 0 340 170"
              className="h-full w-full"
            >
              <path d="M0 118c58-18 91 16 146-2 54-17 74-61 194-41v95H0z" fill={county.accent} opacity=".17" />
              <path d="M0 139c66-21 106 14 161-6 48-18 84-34 179-17v54H0z" fill="#0F4C81" opacity=".12" />
              <circle cx={78 + index * 28} cy={62 + index * 9} r="24" fill="#FFFFFF" stroke="#D7E4EF" strokeWidth="3" />
              <path d={`M${78 + index * 28} ${50 + index * 9}v25M${66 + index * 28} ${62 + index * 9}h25`} stroke={county.accent} strokeWidth="7" strokeLinecap="round" />
              <rect x="214" y="42" width="66" height="58" rx="15" fill="#FFFFFF" stroke="#D7E4EF" strokeWidth="3" />
              <path d="M229 71h36" stroke="#0F4C81" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-black text-navy">{county.name}</h3>
            <p className="mt-3 leading-7 text-slate-600">Service coverage for {county.name}.</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ReviewVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-card md:p-10">
      <div className="absolute right-0 top-0 h-56 w-56 translate-x-16 -translate-y-16 rounded-full bg-serviceBlue/20 blur-2xl" />
      <div className="relative grid gap-8 md:grid-cols-[1fr_220px] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-serviceBlue">Google Reviews</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">See customer feedback on Google</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/78">
            Reviews are linked directly to Google so the site does not display invented review text or ratings.
          </p>
          <div className="mt-7">
            <ButtonLink href={site.reviewUrl} external>
              View Google Reviews
            </ButtonLink>
          </div>
        </div>
        <svg
          role="img"
          aria-label="Illustrated Google review card visual"
          viewBox="0 0 220 220"
          className="mx-auto h-52 w-52"
        >
          <rect x="24" y="30" width="172" height="154" rx="28" fill="#FFFFFF" opacity=".95" />
          <path d="M62 82h96M62 118h72M62 150h52" stroke="#0F4C81" strokeWidth="10" strokeLinecap="round" opacity=".72" />
          <path d="M110 44l14 29 32 4-23 22 6 32-29-15-28 15 5-32-23-22 32-4z" fill="#FF7A00" />
        </svg>
      </div>
    </div>
  );
}

export function ContactVisualPanel() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
      <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-navy via-[#12629f] to-serviceBlue p-6 text-white">
        <svg
          role="img"
          aria-label="Illustrated contact and repair request visual"
          viewBox="0 0 420 250"
          className="h-56 w-full"
        >
          <circle cx="330" cy="54" r="55" fill="#FFFFFF" opacity=".12" />
          <rect x="52" y="50" width="316" height="150" rx="28" fill="#FFFFFF" opacity=".94" />
          <path d="M94 96h118M94 134h86M94 171h138" stroke="#0F4C81" strokeWidth="11" strokeLinecap="round" opacity=".78" />
          <circle cx="291" cy="126" r="38" fill="#FF7A00" opacity=".22" />
          <path d="M276 127l13 13 29-35" fill="none" stroke="#FF7A00" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="grid gap-3">
          <a href={site.phoneHref} className="rounded-2xl bg-white/12 px-4 py-3 font-black">
            {site.phone}
          </a>
          <a href={site.emailHref} className="rounded-2xl bg-white/12 px-4 py-3 font-black">
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
