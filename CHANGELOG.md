# SpiceWise Changelog & Bug Log

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
