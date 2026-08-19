# Written Explanation (DECISIONS.md)

### 1. Why this ingestion strategy over the obvious alternative you rejected?

I chose a **compile-time static module ingestion strategy** (`src/data/toppers.js`, `faqs.js`, `gallery.js`, `courses.js`) over the obvious alternative of **runtime client-side scraping or dynamic API fetching**. 

Runtime scraping or fetching external endpoints on landing page load creates single-point-of-failure vulnerabilities—if the source site changes its HTML structure, rate-limits requests, or blocks incoming connections mid-run, the landing page breaks or displays unstyled fallbacks. For a high-stakes first-3-seconds user experience, dynamic scraping introduces unpredictable network latency and layout shifts. 

By bundling data directly into structured local modules at build time, I ensured fast, predictable page loads, complete layout stability across all viewports, and removed runtime dependency on external API fetching for the landing-page data. This strategy also supported strict honesty: I verified authentic Commerce Gyan brand details (Tabarak Sir’s credentials, Katrasgarh location, real board toppers like Pariniti 91.2%) from the original source material, while structuring the hero register around the specific student admission records assigned during implementation.

### 2. One trade-off you made under the time limit, and what you'd do with a real week.

Under the assessment time limit, I made a conscious trade-off to build a **static client-side counselling modal and admission register interaction** instead of integrating a full backend database and real-time scheduling API. While the counselling modal captures student inputs and provides a direct WhatsApp redirect, it does not persist registrations into a database.

With a real week, I would implement a full-stack registration workflow:
1. A lightweight backend API (Node.js/Express with Supabase or PostgreSQL) to persist counselling bookings and issue automated SMS/WhatsApp confirmations to students and Tabarak Sir’s Katrasgarh office.
2. An interactive batch availability checker that queries live database availability.
3. A searchable digital archive of verified board exam papers and downloadable chapter summaries for Class 11 & 12 Commerce.

### 3. Where did you use AI tools, and what did you personally verify or change afterward?

I used AI tools (Antigravity AI coding assistant) during development for two primary purposes:
1. **Initial Code Generation & Boilerplate**: Scaffolding React components, generating CSS custom properties for the paper/ledger design system (`--paper: #F7F3E8`, `--ink: #0F2C4C`, `--gold: #D9A441`), and setting up animation keyframes for the typewriter effect and stamp.
2. **Automated Viewport Auditing**: Capturing automated browser subagent sweeps at 390px mobile and 1440px desktop to check for horizontal overflow and layout alignment.

**What I personally decided, verified, and changed afterward:**
- **Data & Content Verification**: I personally cross-checked authentic Commerce Gyan brand information (mentor qualifications, institute address, topper percentages) against the source material, ensuring no fake statistics, fabricated testimonials, or fake user counts were generated.
- **Visual & Layout Refinements**: I personally adjusted the hero Admission Register card layout, font sizing, subtitle line heights (`max-w-[490px]`), top header clearance, and updated the 3-column `FOCUS / APPROACH / BATCH TYPE` card footer to match the target reference design.
- **Component Styling & Build Checks**: I refactored `ResultsHallOfFame.jsx` to load authentic student photos from `/achievers/` with clean initial fallbacks, tuned font hierarchies across `Navbar.jsx` and `Hero.jsx`, and verified the production build with `npm run build` and checked for broken assets.
