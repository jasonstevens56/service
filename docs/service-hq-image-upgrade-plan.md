# Service HQ Website Image Upgrade Plan

## Goal
Upgrade the current Service HQ website from a clean starter site into a visually stronger HVAC and appliance repair website with crisp, professional images throughout the site.

## Rule
Because no real company photos were provided, all images should be treated as marketing visuals, not real photos of Service HQ, Ricardo Fernandez, company trucks, or actual customers.

Do not show fake logos, fake uniforms, fake truck wraps, fake licenses, fake reviews, or fake customer testimonials inside images.

## Step 1: Image Style Direction
Use a consistent South Florida home-service photography style:

- Bright natural daylight
- Clean residential homes
- Modern outdoor AC units
- Professional technician visuals
- Sharp focus
- Premium contractor marketing look
- Blue, white, and orange visual accents where possible
- No text inside images
- No watermarks
- No distorted hands or tools

## Step 2: Required Website Images

### Home Page
1. Hero image: HVAC technician servicing an outdoor AC unit at a South Florida home
2. Services image row: AC repair, heating service, appliance repair
3. About image: technician arriving at a residential home
4. Reviews image: homeowner speaking with a service professional
5. Contact CTA image: clean modern AC system or technician with tools

### About Page
1. Professional technician with diagnostic tools
2. Residential HVAC service scene

### Services Page
1. HVAC service overview image
2. Appliance repair overview image
3. Heating and cooling system image

### Air Conditioning Repair Page
1. Technician inspecting outdoor condenser
2. Close-up of AC diagnostic work

### Heating Services Page
1. Technician inspecting indoor HVAC system
2. Thermostat or air handler service visual

### Appliance Repair Page
1. Technician repairing a kitchen appliance
2. Appliance diagnostic tools scene

### Reviews Page
1. Trust-focused service image
2. Customer service/homeowner interaction image

### Areas Served Page
1. South Florida neighborhood/home exterior
2. County card images for Broward, Palm Beach, and Miami-Dade

### Contact Page
1. Friendly technician/contact image
2. Clean service tools or HVAC equipment image

## Step 3: Image File Structure
Add images to:

```text
public/images/
```

Recommended file names:

```text
hero-hvac-service.jpg
service-ac-repair.jpg
service-heating.jpg
service-appliance-repair.jpg
about-technician.jpg
reviews-service.jpg
areas-south-florida.jpg
contact-technician.jpg
county-broward.jpg
county-palm-beach.jpg
county-miami-dade.jpg
```

## Step 4: Website Code Updates
Update the Next.js site to:

- Use `next/image` for optimized images
- Add image cards to service sections
- Add image hero backgrounds
- Add image-led page headers
- Add alt text for SEO and accessibility
- Keep images responsive on mobile
- Add subtle hover effects on cards
- Keep loading fast

## Step 5: Image Prompt Pack
Create or use AI images from these prompts.

### Hero Image Prompt
Ultra realistic commercial photography of a professional HVAC technician servicing a modern outdoor air conditioning condenser outside a clean South Florida residential home, bright natural daylight, sharp focus, premium contractor marketing image, modern tools, clean uniform without logo, no text, no watermark, 16:9 website hero composition.

### AC Repair Image Prompt
Ultra realistic close-up commercial photo of an HVAC technician inspecting and repairing an outdoor AC condenser, diagnostic gauges and tools visible, bright Florida daylight, crisp sharp focus, clean residential background, no logo, no text, no watermark.

### Heating Services Image Prompt
Ultra realistic photo of a professional HVAC technician inspecting an indoor air handler or heating system inside a clean residential utility space, modern tools, sharp focus, clean lighting, no logo, no text, no watermark.

### Appliance Repair Image Prompt
Ultra realistic commercial photography of a professional appliance repair technician diagnosing a modern kitchen appliance in a clean home, tool bag nearby, sharp focus, natural lighting, no logo, no text, no watermark.

### About Image Prompt
Ultra realistic professional home service technician arriving at a clean South Florida home with tool bag, friendly and trustworthy appearance, bright natural sunlight, premium contractor website photography, no logo, no text, no watermark.

### Reviews Image Prompt
Ultra realistic photo of a satisfied homeowner speaking with a professional service technician near the front door of a clean South Florida home, friendly trustworthy interaction, bright daylight, sharp focus, no logo, no text, no watermark.

### Areas Served Image Prompt
Ultra realistic wide photo of a clean South Florida residential neighborhood with palm trees, bright sunny weather, modern homes, premium local service company website background, no people, no text, no watermark.

### Contact Image Prompt
Ultra realistic photo of professional HVAC and appliance repair tools arranged neatly beside clean modern service equipment, bright lighting, sharp focus, premium contractor website image, no logo, no text, no watermark.

## Step 6: Review Checkpoint
After images are added, review:

- Does the homepage feel visually premium?
- Are the images consistent in style?
- Do the pages feel less plain?
- Do mobile images crop correctly?
- Are call buttons still obvious?
- Is the site still fast?

## Step 7: Next Improvement After Images
After the image upgrade, the next phase should be:

1. Logo options
2. Stronger homepage animation
3. Service page content expansion
4. Google Review section polish
5. Deployment to Vercel
