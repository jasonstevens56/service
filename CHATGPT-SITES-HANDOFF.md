# Service HQ Inc. Website Handoff for ChatGPT Sites

## Current project status

This project is the Service HQ Inc. website. It was upgraded through Phase 01: Premium Visual Upgrade.

- GitHub repo: https://github.com/jasonstevens56/service
- Current branch: `main`
- Phase 01 implementation commit: `f400717 Phase 01 visual upgrade`
- Vercel project: `service`
- Latest Vercel production deployment state: `READY`
- Latest Vercel deployment URL: https://service-33femg08f-jasonstevens56s-projects.vercel.app
- Temporary Vercel share URL created during QA: https://service-33femg08f-jasonstevens56s-projects.vercel.app/?_vercel_share=imAISowuu2jwZs1S1YXmX1jnPgxKWuQQ
- Temporary share URL expiration: June 6, 2026 at 3:15 PM

The normal Vercel deployment is protected by Vercel Authentication, so anonymous visitors see an authentication page unless a share link or project protection change is used.

## Business information used

Only business information already present in the project was used.

Known business details in the project:

- Business name: Service HQ Inc.
- Contact: Ricardo Fernandez
- Phone: `(954) 805-6339`
- Email: `hqservice247@gmail.com`
- Address: `1795 Lakeshore Cir, Fort Lauderdale, FL 33326-2368`
- Service areas: Broward County, Palm Beach County, Miami-Dade County
- Services: Air Conditioning Repair, Heating Services, Appliance Repair
- About language: locally owned and operated, honesty and integrity, over 10 years of hands-on experience, customized service for each project
- Google review URL is stored in `components/site-data.ts`

Do not add or imply unsupported claims such as licenses, emergency 24/7 service, warranties, financing, extra cities, reviews, technicians, team members, or business hours unless Service HQ confirms them.

## What was completed

Phase 01 added a premium visual upgrade across the site:

- Strong homepage hero with an abstract HVAC/appliance visual.
- Visual cards for Air Conditioning Repair, Heating Services, and Appliance Repair.
- Visual About section.
- County visual cards for Broward County, Palm Beach County, and Miami-Dade County.
- Google Reviews visual section linking to the provided Google review URL.
- Strong contact CTA section with gradient background styling.
- Improved spacing, mobile layout, typography, and button polish.
- Accessibility-friendly SVG labels for illustrative visuals.
- Explicit mobile viewport metadata.
- `.gitignore` updated to keep `.next`, `node_modules`, and `.DS_Store` out of GitHub.
- QA report created at `PHASE-01-VISUAL-UPGRADE-QA.md`.

## Important files

- `app/page.tsx`: Homepage layout and major visual sections.
- `components/Visuals.tsx`: Reusable SVG/gradient visual components.
- `components/CTA.tsx`: Shared contact CTA.
- `components/site-data.ts`: Business details, services, service areas, review URL.
- `components/Header.tsx`: Site header and navigation.
- `components/Footer.tsx`: Site footer and links.
- `app/about/page.tsx`: About page.
- `app/services/page.tsx`: Services index.
- `app/services/air-conditioning-repair/page.tsx`: AC repair page.
- `app/services/heating-services/page.tsx`: Heating page.
- `app/services/appliance-repair/page.tsx`: Appliance repair page.
- `app/areas-served/page.tsx`: Areas served index.
- `app/areas-served/broward-county/page.tsx`: Broward County page.
- `app/areas-served/palm-beach-county/page.tsx`: Palm Beach County page.
- `app/areas-served/miami-dade-county/page.tsx`: Miami-Dade County page.
- `app/reviews/page.tsx`: Reviews page.
- `app/contact/page.tsx`: Contact page.
- `app/globals.css`: Global styles and container rules.
- `app/layout.tsx`: Metadata, viewport, header/footer shell.
- `PHASE-01-VISUAL-UPGRADE-QA.md`: Completed QA report.

## QA already performed

The following checks were completed before the commit was pushed:

- `npm run build`: passed.
- Local dev server: responded with `HTTP 200`.
- Desktop screenshot review: passed.
- Mobile screenshot review: passed after fixing header/hero mobile wrapping.
- Unsupported-claims scan: passed.
- Confirmed `.next`, `node_modules`, and `.DS_Store` were not committed.

## Where things were left

The Phase 01 work is committed and pushed to GitHub.

Local working tree status after push showed only `.DS_Store` file changes. Those were intentionally not committed because they are local macOS metadata.

No local dev server was intentionally left running.

## Instructions for moving to ChatGPT Sites

Give ChatGPT Sites this context:

1. Import or recreate the Service HQ Inc. website from the GitHub repo:
   `https://github.com/jasonstevens56/service`

2. Use the Phase 01 implementation commit:
   `f400717 Phase 01 visual upgrade`

3. Preserve the existing business information exactly as written in `components/site-data.ts`.

4. Preserve the Phase 01 visual direction:
   clean abstract SVG/gradient visual cards, not fake jobsite photos.

5. Do not invent any unconfirmed contractor details:
   no licenses, no warranties, no financing, no emergency 24/7 claims, no extra cities, no reviews or ratings, no technicians or team members, and no hours unless confirmed by the business.

6. If converting from Next.js to ChatGPT Sites, keep the same page structure:
   homepage, about, services, three service detail pages, reviews, areas served, three county pages, and contact.

7. Preserve the Google Reviews behavior:
   link to the provided Google review URL rather than inventing or displaying review text.

8. Keep the primary CTAs:
   call `(954) 805-6339`, email `hqservice247@gmail.com`, and contact/request service.

9. If using real photos later, only add them if they are confirmed Service HQ assets or clearly labeled as illustrative/stock imagery.

10. Recommended next phase:
    Phase 02 should focus on content depth and conversion paths using confirmed business details only. Add more service-specific content, improve the contact workflow, and optionally connect a real form submission destination.

## Suggested prompt for ChatGPT Sites

Use this prompt:

> Build or import the Service HQ Inc. website using the GitHub repo `https://github.com/jasonstevens56/service`, latest commit `f400717`. Preserve all current business information exactly. Keep the Phase 01 premium visual upgrade: abstract SVG/gradient visuals, homepage hero, service visual cards, About visual, county cards, Google Reviews section, and contact CTA. Do not invent licenses, hours, warranties, financing, reviews, technicians, team members, extra cities, or emergency 24/7 claims. If converting the site to ChatGPT Sites, keep the same page structure and visual direction. Use the QA report `PHASE-01-VISUAL-UPGRADE-QA.md` as the record of completed work and continue with Phase 02 only after confirming any new business claims.
