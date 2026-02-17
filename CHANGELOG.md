# SpiceWise Changelog & Bug Log

## 2026-02-16

### Bug Fix: Secret Menu — Hamburger Still Visible on Homepage

**Status:** FIXED

**Symptoms:**
- Hamburger menu is still visible on the homepage in its default (locked) state
- User expects ONLY the logo to be visible on the homepage before entering the secret code

**Root Cause Analysis:**
The original secret menu implementation (commit `4b3bf36`) only hid **one element** — the `.menu-toggle` (mobile hamburger button). Three other navigation elements were left completely untouched:

1. **DevMenu component** (`DevMenu.tsx`) — Renders its own hamburger icon button in `.header-left` before the logo. This is a separate component with its own `.dev-menu-toggle` / `.hamburger-icon` elements. It was never conditionally hidden.

2. **Desktop nav links** (`.nav`) — The CSS media query at 768px+ sets `.nav { display: block }`, making the Features / About / Pricing links always visible on desktop. The secret mode classes only targeted `.menu-toggle`, which is already `display: none` on desktop anyway.

3. **CTA button** (`.cta-button` / "Join Waitlist") — Same issue as nav links. The desktop media query sets `.cta-button { display: block }` and it was never given a secret mode class.

Additionally, the original `.menu-toggle--secret` class used `opacity: 0; width: 0` instead of `display: none`, which could leave layout artifacts.

**What was visible in each viewport (BEFORE fix):**

| Viewport | DevMenu hamburger | Nav links | CTA button | Menu toggle |
|----------|------------------|-----------|------------|-------------|
| Desktop  | Visible          | Visible   | Visible    | Already hidden by media query |
| Mobile   | Visible          | Hidden (normal) | Hidden (normal) | Hidden by secret class |

**Fix Applied (3 changes):**

1. **Header.tsx** — DevMenu conditionally rendered: `{!isSecretMode && <DevMenu />}`
2. **Header.tsx** — Added `nav--secret` / `cta-button--secret` classes to `<nav>` and CTA `<Link>`
3. **Header.css** — Added `display: none !important` rules for `.nav--secret`, `.cta-button--secret`, and updated `.menu-toggle--secret` to use `display: none !important`
4. **Header.css** — Added `secretReveal` animation for smooth fade-in on unlock

**What is visible after fix:**

| Page | DevMenu | Nav links | CTA button | Hamburger |
|------|---------|-----------|------------|-----------|
| Homepage (locked) | Hidden | Hidden | Hidden | Hidden |
| Homepage (unlocked) | Visible | Visible (desktop) | Visible | Visible (mobile only) |
| All other pages | Visible | Visible | Visible | Visible (mobile only) |

**Files Modified:**
- `apps/website/src/components/common/Header.tsx` (lines 90, 103, 125)
- `apps/website/src/components/common/Header.css` (lines 434–468)

### Bug Fix: DevMenu Dropdown Behind Sidebar in Web App

**Status:** FIXED

**Symptoms:**
- In the web app, clicking the DevMenu hamburger opens a dropdown that renders BEHIND the left sidebar navigation (Home, Explore, Cabinet, Community, Profile)

**Root Cause Analysis:**
Both the header (`.header`) and the sidebar (`.navigation`) use `z-index: var(--z-sticky)` (value: 200) with `position: fixed`. Since Navigation renders after Header in the DOM, it paints on top. The DevMenu container's `z-index: 1001` is trapped inside the header's stacking context (200), so it can never appear above the sidebar.

**Fix Applied:**
- `apps/web-app/src/components/common/Header.css` — Changed header z-index from `var(--z-sticky)` to `calc(var(--z-sticky) + 10)` (210 vs 200), ensuring the header and all its children (including DevMenu dropdown) stack above the sidebar.

---

## 2026-01-26

### Email Integration
- Replaced all placeholder emails across the site with spiciety21@gmail.com:
  - hello@spicecraft.com (HomePage, ContactPage, DisclaimerPage)
  - privacy@spicecraft.com (PrivacyPage x2)
  - legal@spicecraft.com (TermsPage)
- Added spiciety21@gmail.com to Footer (visible on every page)
- Wired up all 8 forms to Formsubmit.co so submissions actually reach spiciety21@gmail.com:
  - 7 waitlist forms (HomePage x2, PricingPage, FeaturesPage, CommunityPage, SuppliersPage)
  - 1 contact form (ContactPage — name, email, subject, message)
- Created shared utility: src/utils/formSubmit.ts
- **NOTE:** First form submission will trigger a confirmation email from Formsubmit.co — click the link to activate

### Changes Made
- Fixed pricing card styling to meet exact design specifications:
  - All three pricing tiers now have equal height (removed scale(1.05) from Essentials)
  - CTA button hierarchy implemented:
    - Freemium: white fill, green border, green text
    - Essentials: green fill, white text
    - Premium: gold fill, black text
  - Icon default state (all tiers): green stroke (#2D4A3E), white fill, green icon
  - Icon hover states per tier:
    - Freemium: green fill, white icon
    - Essentials: gold gradient fill
    - Premium: gold stroke, green-gold gradient fill, white icon
- Removed duplicate/conflicting CSS in PricingPage.css:
  - Removed duplicate .pricing-icon definition
  - Removed old Premium dark-background styling (cream/gold text colors)
  - Removed scale transform from featured tier media query
- Removed inline styles from PricingPage.tsx buttons (CSS now handles all styling)

## 2026-01-24

### Changes Made
- Updated homepage "Why Spices? Why Now?" section with Rachel's content:
  - Box 1: "Why Spice?" - accessibility, versatility, digestibility messaging
  - Box 2: "Why Now?" - spice revival, holistic pathway messaging
  - ~~Box 3: "Remedy Road Maps" - kept as is~~ REMOVED (already on Features page)
- Reformatted Why Spice/Why Now tiles:
  - Changed from 3-column to 2-column centered layout
  - Added bullet points for easier readability
  - Added subtitle headers for each box
  - Gold bullet point styling to match brand
- Updated "Join the Movement" section with pricing tiers:
  - Tier 1: The Freemium (22 spices)
  - Tier 2: The Essentials (full database, search, Remedy Road Maps) - featured
  - Tier 3: The Premium (Essentials + training, community, leadership)
- Updated pricing page with community-focused tiers (Membership, Advocacy, Growth & Host)
- Fixed pricing button contrast with inline styles
- Added SPA routing fix for GitHub Pages (404.html redirect)
- Created favicon.svg with "SC" branding

### Bug: Favicon Not Displaying

**Status:** INVESTIGATING

**Symptoms:**
- User reports favicon not showing in browser tab

**Debug Findings:**
1. ✅ File exists: `/apps/website/public/favicon.svg` (253 bytes)
2. ✅ File included in build: `/apps/website/dist/favicon.svg` confirmed
3. ✅ Live URL accessible: `https://spicecraft.world/favicon.svg` returns HTTP 200
4. ✅ Correct content-type: `image/svg+xml`
5. ✅ HTML links present in deployed index.html:
   - `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />`
   - `<link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />`
   - `<link rel="shortcut icon" href="/favicon.svg" />`

**Root Cause Analysis:**
The SVG favicon uses a `<text>` element for the "SC" letters. Some browsers (especially Safari) have issues rendering:
- Text elements in SVG favicons
- Fonts that may not be available (Georgia)
- Small text at favicon sizes (16x16 or 32x32 pixels)

**Solution Applied:**
Replaced text-based SVG favicon with a stylized spice leaf icon that:
- Uses simple geometric shapes (ellipse, paths)
- No text elements or font dependencies
- Better visibility at small favicon sizes (16x16, 32x32)
- Consistent rendering across all browsers

**New Favicon Design:**
- Green rounded rectangle background (#2D4A3E)
- Gold spice leaf/seed shape (#C9A961)
- Stem extending below
- Subtle vein detail for depth

**Additional Notes:**
- User may need to hard refresh (Cmd+Shift+R) or clear browser cache
- Browser favicon caching is aggressive and may show old/empty favicon
- Try incognito/private window to test fresh favicon loading
