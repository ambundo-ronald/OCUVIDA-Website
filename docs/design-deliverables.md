# OCUVIDA Website Design Deliverables

## Sitemap

- Home: mission, impact stats, how it works, coverage, Google Maps location, lead form.
- What We Do: detailed services, sorting process, partnerships, community benefits, sustainability story.
- Operations: receiving, sorting, storage, dispatch, facility proof, and operational discipline.
- Impact: social, environmental, economic, and operational impact metrics and reporting framework.
- Growth Brief: problem, solution, growth case, growth plan, and partnership needs.
- Gallery: filtered glass-recycling operations gallery with lightbox captions.

## Low-Fidelity Wireframes

### Mobile

Home:
1. Header with logo, menu, WhatsApp action.
2. Hero headline, tagline, CTAs.
3. Impact stats stacked.
4. Overview text.
5. Four process cards.
6. Coverage tags and map.
7. Lead form.
8. Footer contact details.

What We Do:
1. Header.
2. Page intro and aggregator CTA.
3. Service cards stacked.
4. Sustainability impact cards.
5. WhatsApp and phone CTA.
6. Footer.

Gallery:
1. Header.
2. Page intro.
3. Horizontal/wrapped filters.
4. One-column image gallery.
5. Lightbox overlay.
6. Footer.

### Desktop

Home:
1. Sticky header with inline navigation.
2. Full-viewport hero with copy left and impact panel right.
3. Two-column overview.
4. Four-column process cards.
5. Two-column coverage text and stylized Kenya map.
6. Two-column contact section with form.
7. Footer.

What We Do:
1. Compact page hero.
2. Two-by-two services grid.
3. Two-column sustainability story and impact list.
4. Full-width CTA band.

Operations:
1. Visual hero with receiving-area photo.
2. Four-step operations board.
3. Photo proof section for receiving, sorting, and dispatch.
4. Growth brief CTA.

Impact:
1. Visual hero focused on community and aggregator value.
2. Metrics grid for employees, dependants, regions, and material focus.
3. Impact reporting framework.
4. Before, during, after impact story.

Growth Brief:
1. Growth hero with current proof points.
2. Problem and solution thesis.
3. Investment case grid.
4. Growth plan with operations photos.
5. Partnership needs panel.

Gallery:
1. Compact page hero.
2. Filter toolbar.
3. Two-column image grid.
4. Lightbox for larger image and caption.

## High-Fidelity Mockup Direction

- Visual tone: clean, efficient, local, practical, and trustworthy.
- Layout: mobile-first stacked sections; desktop uses restrained grids and strong spacing.
- Imagery: generated documentary-style recycling images for collection points, sorting operations, recycled results, and community engagement.
- CTAs: consistent filled primary buttons for scheduling/registering; white secondary buttons for informational routes or phone action; WhatsApp actions use the WhatsApp icon.
- Navigation: sticky header, clear active state, keyboard focus outlines, mobile menu.

## Color Palette

- Primary: `#0B5D3B` deep green for brand, header actions, CTAs.
- Secondary: `#2F8F5B` medium green for highlights and quick WhatsApp action.
- Accent: `#F2B84B` warm amber for hero CTA and focus rings.
- Background: `#F6F8F5` off-white green-tinted page background.
- Muted background: `#E8EFE8` light grey-green section background.
- Surface: `#FFFFFF` cards and forms.
- Text: `#1F2A24` near-black green-grey.
- Subtle text: `#5E6B64` secondary body text.
- Border: `#D9E2DC` low-contrast structural borders.

## Typography

- Recommended Google Font: Inter.
- Web-safe fallback: Arial, Helvetica, sans-serif.
- H1: 2.35rem mobile to 5.25rem desktop, weight 800.
- H2: 1.8rem mobile to 3rem desktop, weight 800.
- Body: 1rem, weight 400.
- Buttons and labels: 0.95rem to 1rem, weight 700.

## Components

- Buttons: 44px minimum height, 8px radius, high-contrast filled primary and bordered secondary variants.
- Forms: visible labels, 44px inputs, clear focus ring, required fields for name, county, phone, type, and message.
- Cards: 8px radius, light border, white surface, minimal shadow only where useful.
- Gallery: image buttons with captions, filter buttons, keyboard-accessible lightbox, Escape to close.
- Map: Google Maps embed for `-1.263820,36.880787`, labelled as Harmony Road, off Outering Road, Kariobangi Light Industries.
- Logo: custom SVG mark showing a glass bottle inside circular recycling arrows.
- Iconography: simple system-like controls plus a WhatsApp icon for contact actions; no external icon dependency required.

## Accessibility Notes

- Uses semantic landmarks: header, nav, main, sections, footer.
- Includes skip link and visible focus outlines.
- Buttons and links have minimum touch targets.
- Gallery items are real buttons, not clickable divs.
- Image alt text is descriptive.
- Contrast targets WCAG AA for body text and primary controls.

## Performance Notes

- Generated PNG source files are retained.
- Compressed JPEG derivatives are used in the live pages.
- Gallery images use `loading="lazy"`.
- CSS and JavaScript are local and lightweight.
- Google Fonts is the only external render dependency; self-hosting can remove it.

## Client Confirmations Needed

- Confirm default language: English.
- Confirm exact Google Maps pin label and any additional collection hubs.
- Confirm whether to add Google Analytics or Tag Manager.
- Confirm legal business address and social links.
- Confirm final metrics beyond 32 staff and 200+ dependants.
