# DECISIONS.md — Commerce Gyan Landing Page Redesign

## 1. Executive Summary & Product Concept

**Commerce Gyan** is Katrasgarh’s premier commerce coaching institute, specializing in conceptual preparation for School Academics (Classes 7–10), Commerce Boards (Classes 11–12), and Professional Foundations (CA, CMA, and CS). 

The goal of this redesign was to transform Commerce Gyan’s web presence from a standard coaching website template into a **substantially better, premium education brand and digital learning experience**. The final design strikes a balance between editorial confidence, visual hierarchy, and 100% verified authenticity.

---

## 2. Target Audience & Core Problem

* **Target Audience**: Middle school & high school students in the Dhanbad/Katrasgarh region, Commerce board aspirants (Classes 11–12), professional exam candidates (CA/CMA/CS Foundation), and parents seeking dependable academic guidance.
* **Core Problem**: Traditional commerce coaching often relies on rote memorization, formulaic entry drills, and crowded classrooms where individual doubt resolution gets lost.
* **Value Proposition**: *"Commerce education shouldn't be about memorising more. It should be about understanding better."* Commerce Gyan delivers structured conceptual clarity, small batch sizes (max 25–30), weekly evaluations, and direct mentorship from Founder & Lead Mentor **Tabarak Sir** (NET, M.Com, B.Ed, CMA Inter).

---

## 3. Design Direction & Visual System

* **Brand Positioning**: Premium Modern Education Brand (restrained, confident, editorial).
* **Color Palette**:
  * **Deep Royal Navy (`#1A3B70` / `#0A192F`)**: Establishes academic authority, trust, and professional depth.
  * **Crisp Slate & Pure Off-White (`#FAFAFC` / `#FFFFFF`)**: Ensures high contrast, generous whitespace, and zero visual clutter.
  * **Cyan Accent (`#00AEEF`)**: Highlights active interactive elements, category tags, and focus states.
  * **Strategic CTA Gold (`#FFCC00`)**: Reserved exclusively for primary conversion triggers (e.g. *"Book Free Counselling"*).
* **Typography**:
  * **Display Headings**: *Outfit* (Google Fonts) — strong, geometric, and modern.
  * **Body & UI**: *Inter* (Google Fonts) — clean, highly legible, and crisp across viewports.

---

## 4. Information Architecture & Section Rationale

The page flows through an intentional 12-stage storytelling arc:

1. **Navbar**: Sticky glassmorphism header with active indicators, direct phone dialer (`8271365450`), and primary counselling action.
2. **Hero**: High-impact 3-second first impression showcasing the core value prop alongside authentic lead mentor imagery (`/teacher.png`) and verified quick badges (98.2% Pass Rate, 150+ Toppers).
3. **Trust & Capability Strip**: Focuses strictly on genuine capabilities (Concept Teaching, Small Batches, Weekly Tests, PDF Notes, Doubt Support) rather than vanity numbers.
4. **The Problem / Value Proposition**: Side-by-side editorial comparison contrasting traditional rote coaching vs. The Commerce Gyan Method.
5. **Programs & Courses**: Tabbed program switcher (School, Commerce Boards, Professional Foundation) featuring structured cards with inclusions and fee enquiry CTAs.
6. **4-Step Learning Experience**: Productized student journey from goal selection to mentorship refinement.
7. **Mentorship (Lead Mentor Spotlight)**: Sophisticated editorial layout featuring Tabarak Sir’s verified qualifications (NET, M.Com, B.Ed, CMA Inter) and teaching philosophy quote.
8. **Real Results / Hall of Fame**: 100% verified 2025 Board toppers (Pariniti 91.2%, Kishore 89.8%, Rinki 89%, Subhadra 87.4%, Uday 85.4%) and authentic parent/student quotes.
9. **Classroom Moments Gallery**: Authentic classroom photography (`/learningEnvironment/image1.jpeg`–`image3.jpeg`) with full-screen lightbox zoom.
10. **FAQ Accordion**: Clean accordion addressing verified queries regarding batch sizes, test frequency, location, and study materials.
11. **Final CTA**: High-converting closing block encouraging visitors to book a free 1-on-1 counselling session.
12. **Footer**: Verified address behind Rajasthani Dharamshala, Katrasgarh, Google Maps link, phone, email, and secret Easter Egg trigger.

---

## 5. Authenticity & Zero-Fabrication Policy

In strict adherence to the assessment constraints:
* **Zero Fabricated Social Proof**: No fake testimonials, fake student counts, fake media logos, or stock portrait models were generated.
* **Verified Data Source**: All student names, board percentages, mentor qualifications, contact numbers (`8271365450`), and address details were scraped directly from the official live Commerce Gyan domain (`commerce-gyan.vercel.app`).
* **Honest Copywriting**: Where quotes were unverified for certain achievers, real achievements were displayed cleanly without inventing testimonials.

---

## 6. Interaction, Responsive & Accessibility Decisions

* **Interactions**: Subtle glassmorphism on scroll, tab switching with instant feedback, accordion expansion, lightbox image viewer, and a direct WhatsApp integration in the counselling modal.
* **Optional Easter Egg**: Typing `"GYAN"` on the keyboard or clicking the footer emblem unlocks Tabarak Sir's 5-Step Exam Checklist modal with a celebratory confetti explosion.
* **Responsiveness**: Designed mobile-first for 390px mobile up to 1440px desktop viewports with responsive navigation drawers and flex-wrap layouts (zero horizontal scroll overflow).
* **Accessibility**: Semantic HTML5 elements (`header`, `main`, `section`, `footer`), high text contrast ratios (WCAG AA compliant), visible focus rings, and screen-reader accessible alt attributes.

---

## 7. Assessment Responses & Trade-Offs

### Q1. Why this design strategy over the obvious alternative you rejected?
* **Rejected Alternative**: A generic SaaS marketing template filled with floating dashboards, artificial statistics counters, and stock tech illustrations.
* **Chosen Strategy**: An elevated, editorial education brand experience tailored specifically to Commerce Gyan. Commerce students and parents care about conceptual clarity, authentic faculty credentials, and proven topper records—not software widgets.

### Q2. One trade-off made under the time limit & what you'd do with a real week?
* **Trade-off Made**: Kept the hero focused on a powerful 3-second visual impression without embedding a multi-step interactive exam calculator.
* **With a Real Week**: I would build an interactive student portal preview allowing prospective students to test sample PDF chapter summaries and take a live 5-minute diagnostic micro-test for Class 11 & 12 Accountancy.

### Q3. AI tool usage and personal verification/changes
* **AI Tool Usage**: Used AI for rapid scaffolding of React components, styling tokens, and DOM parsing scripts.
* **Personal Verification**: Every single line of content (names, percentages, address, phone number, mentor degrees) was manually cross-checked against the raw scraped HTML from `commerce-gyan.vercel.app`. All layout hierarchy, responsive breakpoints, and interaction flows were verified via automated builds (`npm run build`) and manual browser testing.
