# SpiceWise: Information Architecture v2
## Updated December 2025

---

# APP STRUCTURE (Mobile/Web App)

## Core Flow
```
Loading → Welcome → Disclaimer → First Time User Instructions → Landing (Home)
```

## Main Screens

### 1. Loading
- App logo animation
- Loading indicator
- Brand colors/imagery

### 2. Welcome
- Welcome message
- Value proposition
- Get Started CTA

### 3. Disclaimer
- Medical disclaimer text
- "I understand" acceptance
- Link to full terms

### 4. First Time User Instructions (Onboarding)
- Step-by-step user setup
- Progress indicator
- Skip option available

### 5. Landing - Returning (Home Screen)

| Feature | Sub-feature | Details |
|---------|-------------|---------|
| **Search** | Clear text | Text search with clear button |
| | Filter | By category, benefit, origin |
| | List of all Spices | Grid/list view |
| **Spice Detail** | spice title | Name and common names |
| | spice image | High-quality images |
| | scientific name | Latin nomenclature |
| | notable compounds | Active ingredients |
| | growth origin | Geographic origins |
| | hardiness zone | Growing zones |
| | pairs well with | Complementary spices |
| | healing potential | Health benefits |
| **Personalize** | digital scan | Cabinet scanning feature |
| | favorites | Save/manage favorites |

### 6. Community Hub

| Feature | Sub-feature | Sub-sub feature |
|---------|-------------|-----------------|
| **Membership invite** | | |
| **Hosts $$** | Rules | Community guidelines |
| | Necessities | Requirements to host |
| | Parties | Event hosting |
| **Gamification** | | Points, badges, levels |
| **Tastings** | | Virtual tasting events |
| **Education** | | Articles, guides, learning |
| **Connection** | | Social features |

### 7. Pricing and Premium Sub
- Free tier (15 spices)
- Spice Seeker ($4.99/mo)
- Spice Master ($9.99/mo)
- Subscription management

---

# WEBSITE STRUCTURE

## Navigation
```
Home | Features | Community | About | Pricing | Contact
```

## Pages

### Home (/)
- Hero with waitlist signup
- Feature highlights
- Spice preview
- Social proof/testimonials
- Final CTA

### Features (/features)
- Spice Index overview
- Search functionality
- Digital Cabinet
- Personalized Remedies
- Remedy Road Maps
- Cultural Attribution
- Coming Soon features

### Community Page (/community) - NEW
| Feature | Description |
|---------|-------------|
| **Games - Trivia** | Daily spice quizzes, points, leaderboards |
| **Education** | Articles, guides, "Spice of the Week" |
| **Connection** | Community forums, sharing |

### Arbiter of Suppliers (/suppliers) - NEW
| Feature | Sub-feature |
|---------|-------------|
| **Ratings** | Star ratings (1-5) |
| **Ranking** | Top suppliers by category |
| **Winners** | Weekly, monthly, yearly |
| **Awards** | Featured supplier badges |

### About (/about)
- Mission statement
- Our values
- Company story/timeline
- Our approach

### Pricing (/pricing)
- Pricing tiers with toggle
- Feature comparison table
- FAQ section
- Waitlist signup

### Contact (/contact)
- Contact form
- Email address
- Social links

### Legal Pages
- /disclaimer - Health disclaimer
- /privacy - Privacy policy
- /terms - Terms of service

---

# NAVIGATION STRUCTURE

## App Bottom Navigation (5 tabs)
```
┌─────────┬─────────┬─────────┬─────────┬─────────┐
│  🏠     │  📚     │  🗄️     │  👥     │  👤     │
│  Home   │ Explore │ Cabinet │Community│ Profile │
└─────────┴─────────┴─────────┴─────────┴─────────┘
```

## Website Top Navigation
```
┌─────────────────────────────────────────────────────────┐
│  Logo  │ Features │ Community │ About │ Pricing │ [CTA] │
└─────────────────────────────────────────────────────────┘
```

---

# PRIORITY BREAKDOWN

## P1 - Must Have (MVP Core)
- Loading/Welcome/Disclaimer screens
- Onboarding wizard
- Home screen with search, filter, list
- Spice detail pages (50 spices)
- Favorites system
- User profile & persistence
- Basic Digital Cabinet
- Pricing/subscription page

## P2 - Should Have (MVP Enhanced)
- Extended spice data (compounds, zones, origins)
- Gamification (levels, badges, streaks)
- Community features (trivia, education)
- Supplier directory
- "For You" personalized section

## P3 - Nice to Have (Post-Launch)
- Barcode scanning
- AI image recognition
- Virtual tastings
- Host $$ system
- Advanced social features

---

# SPICE DETAIL DATA MODEL

```
Spice
├── id
├── name (title)
├── scientificName
├── image
├── notableCompounds[]
├── growthOrigin (region)
├── hardinessZone
├── pairsWellWith[]
├── healingPotential[]
│   ├── condition
│   ├── description
│   └── evidenceLevel
├── culinaryUses[]
├── precautions[]
├── tasteProfile
└── culturalAttribution
    ├── traditions[]
    └── history
```

---

# WEBSITE CONTENT ALIGNMENT

## Current Pages → New IA Mapping

| Current Page | Status | Changes Needed |
|--------------|--------|----------------|
| Home | Exists | Update to match app features |
| Features | Exists | Add notable compounds, zones info |
| About | Exists | Good - minimal changes |
| Pricing | Exists | Recently updated - good |
| Contact | Exists | Good - minimal changes |
| **Community** | **MISSING** | **CREATE NEW PAGE** |
| **Suppliers** | **MISSING** | **CREATE NEW PAGE** |
| Disclaimer | Exists | Good |
| Privacy | Exists | Good |
| Terms | Exists | Good |

## Required Website Updates

### 1. Add Community Page (/community)
- Games & Trivia section
- Education hub
- Connection/social preview
- Coming soon features

### 2. Add Suppliers Page (/suppliers)
- Supplier directory teaser
- Rating system preview
- "Arbiter of Suppliers" concept
- Coming soon features

### 3. Update Navigation
Add "Community" to main nav between Features and About

### 4. Update Features Page
- Add "Notable Compounds" to spice info
- Add "Hardiness Zone" to growing info
- Add "Growth Origin" details
- Update Digital Cabinet description with "digital scan"

### 5. Update Home Page
- Ensure features match app structure
- Reference Community features
- Reference Supplier directory

---

# IMPLEMENTATION CHECKLIST

## Website Updates Needed

- [ ] Create CommunityPage.tsx
- [ ] Create CommunityPage.css
- [ ] Create SuppliersPage.tsx
- [ ] Create SuppliersPage.css
- [ ] Update Header.tsx navigation
- [ ] Update App.tsx routes
- [ ] Update FeaturesPage.tsx content
- [ ] Update Footer.tsx links
- [ ] Test all new pages

---

*Document updated: December 3, 2025*
*Based on: IA - v2.pdf*
