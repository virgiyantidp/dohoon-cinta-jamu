# Jamu Pegal Linu Alami — Landing Page Implementation Plan

> **Goal:** Build a 7-section, single-page landing page (HTML5 + CSS3 + vanilla JavaScript) that introduces Jamu Pegal Linu Alami, a traditional herbal product from Sukoharjo, Central Java, with a Modern Natural / Clean / Minimalist / Trustworthy design direction.

**Architecture:** Single HTML file with semantic sections (navbar, hero, problem-solution, product, benefit, testimonial, pricing, CTA, footer). External CSS for design tokens, layout, responsive breakpoints, and motion. External JS for mobile hamburger menu, smooth scroll, and CTA/WhatsApp interactions.

**Tech Stack:** HTML5, CSS3 (Flexbox, Grid, CSS custom properties, media queries), vanilla JavaScript (ES6). No frameworks. Google Fonts (Poppins + Inter).

**Spec:** PRD provided by user (16 sections: background, goals, audience, design concept, color palette, typography, 7-section anatomy, functional/non-functional requirements, tech stack, SEO, legal, acceptance criteria, timeline, deliverables, KPI).

## Global Constraints
- Color palette: Forest Green #244B35 (primary), Sage Green #78936A (accent), Cream #F5F1E7 (background), Golden #D5A45B (highlight).
- Typography: Heading = Poppins SemiBold; Body = Inter Regular; Button = Poppins Medium.
- Responsive breakpoints: Mobile ≤767px (1 column), Tablet 768–1023px (1–2 columns), Desktop ≥1024px (multi-column).
- No framework; vanilla HTML/CSS/JS only.
- No medical cure claims; no unverified testimonials; placeholder pricing marked as such.
- Accessibility: color contrast ≥4.5:1, alt text on images, visible focus states, keyboard nav, prefers-reduced-motion.

## Review Focus
- Placeholder images must have descriptive alt text and be replaceable with real product photos.
- All CTA buttons must link to correct destinations (WhatsApp / order page / section anchors).
- Mobile hamburger menu must open/close and not trap focus.
- Smooth scroll must work on all nav links.
- No broken links or JS errors in modern browsers.

---

### Task 1: Project scaffold & design tokens (CSS variables)

**Files:**
- Create: `jamu-landing-page/css/style.css`

**Interfaces:**
- Consumes: PRD color palette + typography choices.
- Produces: CSS custom properties (--color-*, --font-*, --spacing-*, --radius-*, --transition-*) and base reset.

- [ ] Step 1: Write CSS reset + design tokens (colors, fonts, spacing, radius, transitions) in `css/style.css`.
- [ ] Step 2: Verify tokens render (no syntax errors) by opening a minimal HTML smoke test.
- [ ] Step 3: Commit.

### Task 2: HTML structure — all 7 sections + navbar + footer

**Files:**
- Create: `jamu-landing-page/index.html`

**Interfaces:**
- Consumes: CSS classes defined in Task 1.
- Produces: Semantic HTML for navbar, hero, problem-solution, product, benefit, testimonial, pricing, CTA, footer; placeholder image tags with alt text.

- [ ] Step 1: Write navbar + hero section (logo, nav, headline, subheadline, 2 CTAs, product image).
- [ ] Step 2: Write problem & solution section.
- [ ] Step 3: Write product section (name, category, origin, composition, packaging, net content, CTA).
- [ ] Step 4: Write benefit section (4 benefit cards).
- [ ] Step 5: Write testimonial section (placeholder customer cards with ratings).
- [ ] Step 6: Write pricing section (unit price, package size, options, shipping, order method, CTA).
- [ ] Step 7: Write CTA section + footer (contact, brand identity).
- [ ] Step 8: Link CSS and JS; verify all section anchors resolve.
- [ ] Step 9: Commit.

### Task 3: CSS layout, styling & responsiveness

**Files:**
- Modify: `jamu-landing-page/css/style.css`

**Interfaces:**
- Consumes: HTML structure from Task 2.
- Produces: Styled layout for all sections; responsive breakpoints at 767px and 1023px; hover/focus states; motion respecting prefers-reduced-motion.

- [ ] Step 1: Implement navbar (desktop row + mobile hamburger toggle), sticky behavior.
- [ ] Step 2: Implement hero (headline/subheadline/CTA/product image layout, cream background).
- [ ] Step 3: Implement problem-solution, product, benefit, testimonial, pricing, CTA sections with cards/grid.
- [ ] Step 4: Implement footer.
- [ ] Step 5: Add media queries: mobile single column, tablet 1–2 columns, desktop multi-column; no horizontal scroll.
- [ ] Step 6: Add hover transitions (150–300ms), visible focus states, touch targets ≥44×44px.
- [ ] Step 7: Verify contrast ≥4.5:1 on all text/background pairs.
- [ ] Step 8: Commit.

### Task 4: JavaScript interactivity

**Files:**
- Create: `jamu-landing-page/js/script.js`

**Interfaces:**
- Consumes: DOM elements from Task 2.
- Produces: Mobile menu toggle, smooth scroll on nav links, CTA/WhatsApp click handlers, testimonial slider (optional), scroll-reveal animation.

- [ ] Step 1: Implement mobile hamburger menu open/close with aria-expanded.
- [ ] Step 2: Implement smooth scroll for all anchor links.
- [ ] Step 3: Implement CTA button clicks (scroll to section / open WhatsApp).
- [ ] Step 4: Add scroll-reveal/stagger animation respecting prefers-reduced-motion.
- [ ] Step 5: Test in browser; confirm no JS errors.
- [ ] Step 6: Commit.

### Task 5: SEO, accessibility audit & acceptance verification

**Files:**
- Modify: `jamu-landing-page/index.html`
- Create: `jamu-landing-page/README.md`

**Interfaces:**
- Consumes: Completed page from Tasks 1–4.
- Produces: SEO meta tags, structured headings (H1/H2/H3), alt text audit, acceptance-criteria checklist.

- [ ] Step 1: Add page title, meta description, Open Graph tags; verify H1/H2/H3 hierarchy.
- [ ] Step 2: Audit all images have descriptive alt text.
- [ ] Step 3: Verify all 7 sections present, all nav links work, all CTAs reach correct target.
- [ ] Step 4: Verify responsive on mobile/tablet/desktop (375/768/1024/1440px).
- [ ] Step 5: Check for broken links and JS errors in Chrome/Edge/Firefox/Safari.
- [ ] Step 6: Write README with usage and deployment notes.
- [ ] Step 7: Commit.
