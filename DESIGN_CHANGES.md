# Spicewise Advice Design Changes
## Aligning Current Implementation with Reference Documentation

---

## PRIORITY: Investor Document Summary

> **Source:** Spice Investor Invitation.pdf (Official Brand Document)

### Brand Identity

| Element | Value |
|---------|-------|
| **Name** | Spicewise Advice |
| **Tagline** | *"Spice-based Wellness Wisdom at Your Fingertips"* |
| **Website** | SpicewiseAdvice.carrd.co |
| **Email** | SpicewiseAdvice@gmail.com |
| **Target Launch** | Autumn-Winter 2025 |

### Brand Colors (Finalized)

| Color | Hex | Usage |
|-------|-----|-------|
| **Sage/Cream** | `#E8E5DF` | Background, light sections |
| **Olive Green** | `#6B7B4C` | Primary accent, buttons, navigation |
| **Charcoal** | `#2D2D2D` | Primary text |
| **White** | `#FFFFFF` | Cards, content areas |
| **Black** | `#000000` | Logo, headings, decorative elements |

### The Problem We Solve

Modern health solutions often rely on pills or quick fixes, leaving people disconnected from natural, time-tested ancient remedies.

**Key Issues:**
- Everyday ailments (inflammation, fatigue, stress) are on the rise
- Spice-based healing wisdom is underrepresented in wellness tech
- People want accessible, holistic approaches they can trust with digestible knowledge
- People crave tools that connect them to ancestral wellness wisdom

### Our Solution

**Spicewise Advice** is a mobile app offering users a rich, easy-to-navigate reference for the healing potential of spices.

#### Core Features (MVP Priority)

| Feature | Description |
|---------|-------------|
| **Spice Index** | Browse healing spices with research-backed properties, notable compounds, region of origin, and growing zones |
| **Keyword Search** | Search for symptoms (e.g., weight loss, menopause, arthritis) |
| **Remedy Road Maps** | Guides connecting multiple spices to shared health themes (subscription feature) |

#### Spice Catalog Data Points
- Picture references
- Scientific names
- Notable healing compounds
- Regions of origin and growth zones
- Evidence-based healing properties
- Research citations and disclaimer statements

### What We DON'T Do
- Sell supplements
- Suggest dosages
- Offer miracle cures
- Over-promise results

Instead: Provide natural remedy information based on research of the effectiveness of spices used in early civilizations (India, Africa, China, Europe, Middle East).

### Target Audience

| Segment | Description |
|---------|-------------|
| **Primary Age** | 25-75 years |
| **Wellness-curious** | Individuals exploring natural healing practices |
| **Gardeners & Foodies** | People interested in growing and cooking with spices |
| **BIPOC Communities** | Seeking culturally-relevant wellness tools |

### Market Trends

- Growing interest in natural and integrative health
- Demand for education-based, non-commercialized wellness platforms
- Shift toward culturally conscious and rooted self-care
- Increased skepticism of pharmaceuticals for everyday issues
- Revival of plant-based healing and ancestral wisdom

### Progress Status

| Phase | Status | Details |
|-------|--------|---------|
| Design | Complete | Product branding, colors, and logo finalized |
| Development | Complete | UI structure and function completed |
| Testing | Complete | Beta tested UX, feedback collected |
| Production | Paused | Was briefly on Google Play Store |
| Community | Active | Strong user interest, growing network |

### Future Revenue Streams

- App upgrades (premium features)
- Brand collaborations
- Affiliate product ads (spice vendors, tea companies)
- In-app community building
- Subscription model for Remedy Road Maps

### Investment Requirements

| Category | Amount |
|----------|--------|
| Platform Subscription (Tier 3) | $7,188 |
| Expand and Refine Content | $1,500 |
| Trademark, Legal | $900 |
| Marketing and Outreach | $500 |
| **Total Startup Investment** | **$10,088** |

---

## CURRENT: Information Architecture (Most Authoritative)

> **Source:** SW&NA IA.pdf, Information Architecture.xlsx, Flow V1.docx whiteboard images
> **Status:** This is the most current and authoritative design specification

### App Flow Overview

The app follows a **three-phase user journey**:

```
1. Building Profile (SW) → 2. Build Cabinet → 3. Guide/App
```

### Phase 1: Loading & Onboarding

| Screen | Purpose |
|--------|---------|
| **Loading Screen** | Intro animation showing 3 pillars: Health Profile, Digital Cabinet, Level Up Your Life |
| **Character Selection** | User picks an avatar character they identify with for their wellness adventure |

### Phase 2: Profile Creation ("Tell Us About You")

#### 2.1 Personal Data - WHO
| Field | Description | Avatar Effect |
|-------|-------------|---------------|
| Name | User's display name | Banner and title added to avatar |
| Social Accounts | Connected social profiles | Nameplate ribbons added |
| Email | Contact/login | Shoes for avatar |

#### 2.2 Biometrics
| Field | Type |
|-------|------|
| Birthdate | Date picker |
| Weight | Number input |
| Height | Number input |
| Pulse | Number input |
| Blood Pressure | Number input |

#### 2.3 Diet & Exercise
| Category | Fields |
|----------|--------|
| **Diet** | Calories/day, Type of calories |
| **Exercise** | How much, What kind, Intensity level |

#### 2.4 Lifestyle
| Category | Options |
|----------|---------|
| Alcohol | Frequency tracking |
| Drugs | Usage tracking |
| Cannabis | "Weeeed" - separate tracking |
| Coffee | Consumption frequency |
| Vitamins | Main vitamins A, B, 1-12, etc. |
| Supplements | General supplement tracking |
| Medications | Mandatory vs Recreational |

#### 2.5 Health Concerns
| Type | Description |
|------|-------------|
| Diseases | Diagnosed conditions |
| Ailments | Symptoms and discomforts |
| DNA | Genetic predispositions |
| Environmental | Environmental health factors |
| Pre-existing Conditions | Known prior conditions |
| Goals | Other things user wants to improve |

### Phase 3: Digital Cabinet ("Create Vault")

#### Cabinet Types
| Cabinet | Purpose |
|---------|---------|
| **Pantry** | Dry herbs and spices for cooking |
| **Fridge** | Fresh/perishable items |
| **Cupboard** | Stored dry goods |
| **Medicine Cabinet** | Supplements, vitamins, medications |

#### Input Methods
| Method | Description |
|--------|-------------|
| **Camera Scan** | Barcode/image recognition |
| **Photo Scan** | Take picture of item |
| **Text Entry** | Manual keyboard input |
| **Microphone** | Voice input |
| **Live/Video Scan** | Real-time scanning |

#### Cabinet Features
- Walkthrough/Help system
- Item list with equipment tracking
- Integration with recommendations

### Phase 4: HOME Screen ("Level Up Your Life")

The home screen is the **mission control center** with three main pathways:

| Section | Purpose |
|---------|---------|
| **Set Goals** | Primary CTA - define what user wants to achieve |
| **Search** | Quick access to spice database |
| **Menu** | Navigation to main features |

#### Home Menu Structure
```
Menu
├── Health - How to help with your issues
│   └── (Based on health concerns entered above)
├── Lifestyle - Behavior improvement
│   └── (Based on lifestyle goals)
└── Exploration - Library
    └── (Browse the spice database)
```

### Phase 5: Spice Database ("SpyceWyze")

The core encyclopedia feature with comprehensive spice data:

#### Spice Detail Fields
| Category | Fields |
|----------|--------|
| **Naming** | Common name, Scientific name, Colloquial names |
| **Origin** | History, Preferred growing zone, How to grow & cultivate |
| **Health** | Ailments treated, Health benefits, Nutritional info |
| **Lifecycle** | Seed to harvest stages (with images) |
| **Culinary** | Common dishes, Recipes containing this spice |
| **Sourcing** | Where to find, How to find, Vendors, Restaurants |
| **Research** | Links to articles, Clinical studies, Regional disease statistics |

#### Database Features
| Feature | Description |
|---------|-------------|
| **Search** | By name, symptom, or benefit |
| **Sort** | Multiple sorting options |
| **Filter** | By category, benefit, origin |
| **View Details** | Full spice information page |

### Phase 6: Nature Archives

| Feature | Description |
|---------|-------------|
| View Database of Images | Browse spice/plant imagery |
| Expand an Image | Full-screen view |
| Purchase Image | Buy high-res versions |
| Upload Image | User-contributed photos |
| Tag an Image | Community tagging |

### Phase 7: The Game / Map Features

| Feature | Description |
|---------|-------------|
| View Map | Geographic spice origins |
| View Map Details | Detailed region info |
| Add Image | Contribute to map |
| Confirm Data | Verify information |
| Paint Map / TAG | Interactive tagging |

### Body Progress Bar

Visual progress tracking showing:
- The Heart (core health metrics)
- Completion percentage
- Progress toward goals

### User Profile Components
```
Who     → Personal identity
Body    → Physical metrics
Health  → Medical concerns
UR Needs → Goals and desires
```

---

## Executive Summary

The reference documents reveal a significantly more ambitious vision than our current implementation. Spicewise Advice is envisioned as a **gamified wellness platform** with avatar systems, progression mechanics, social features, and a "Digital Cabinet" inventory system—not just a simple herb encyclopedia.

**Alternative Tagline (from earlier docs):** *"Level (Spice?) Up Your Life...Naturally"*

---

## Vision & Mission (From Docs)

- **Vision:** To promote health and harmony for oneself, their community, and the natural world
- **Mission:** Offer a practical guide for individuals to profoundly enhance their lifestyle through affordable, natural, and social activities

---

## Major Feature Gaps

### 1. Onboarding Flow (NEW)
**Current:** Simple profile page with health concerns checkboxes
**Reference Design:** Multi-step onboarding wizard

| Step | Screen | Content |
|------|--------|---------|
| 1 | Loading/Intro | Health Profile → Digital Cabinet → Level Up Your Life |
| 2 | Who | Name, social accounts |
| 3 | Biometrics | Weight, height, pulse, blood pressure |
| 4 | Health Concerns | Diseases, ailments, DNA, environmental, pre-existing |
| 5 | Lifestyle | Diet, exercise, alcohol, drugs, coffee, vitamins, medications |
| 6 | Character Selection | Choose avatar/character type |

**Changes Required:**
- Create step-by-step onboarding wizard component
- Add biometrics data fields (weight, height, blood pressure, pulse)
- Add lifestyle inputs (diet type, calories/day, exercise frequency/intensity)
- Add substances tracking (alcohol, coffee, medications, supplements)
- Create character/avatar selection system

---

### 2. Digital Cabinet System (NEW)
**Current:** Not implemented
**Reference Design:** Virtual inventory of user's actual herbs/spices/medicines

| Cabinet Type | Purpose |
|--------------|---------|
| Pantry | Food-related herbs and spices |
| Fridge | Perishable items |
| Cupboard | Dry goods storage |
| Medicine Cabinet | Supplements, medications, vitamins |

**Input Methods:**
- 📷 Camera scan (barcode/image recognition)
- ⌨️ Text entry (manual)
- 🎤 Microphone (voice input)
- 📹 Live/Video scan

**Changes Required:**
- New "My Cabinet" section in navigation
- Cabinet category management UI
- Item entry forms with multiple input methods
- Inventory tracking and expiration reminders
- Integration with recommendations (suggest items from user's cabinet)

---

### 3. Gamification & Avatar System (NEW)
**Current:** Not implemented
**Reference Design:** Full RPG-style progression system

#### Character Types (from Character List)
- **Normal:** Nurse, Banker, Police Officer, Firefighter, etc.
- **Supernatural:** Werewolf → Alpha → Kinsmit → Grand Champion
- **Archetypes:** Alchemist, Librarian, Warrior, Wizard, Ninja, Doctor, etc.

#### Progression Systems
| Metric | Based On |
|--------|----------|
| Sustainability | Environmental/eco-friendly actions |
| Health | Achieving health goals |
| Compassion | Social/community goals |
| Wholesomeness | Volunteering goals |
| Trustworthiness | Consistency & engagement |

#### Reward Mechanics
- Daily rewards for consistency
- Week streaks
- Variable rewards (surprise unlocks)
- Equipment upgrades (Binoculars, Hat, Guidebook, Backpack, etc.)
- Badges and achievements
- Familiars/pets

**Changes Required:**
- Avatar selection screen with character options
- Avatar display component (header/profile)
- XP and leveling system
- Achievement/badge system
- Streak tracking
- Equipment/inventory for avatar
- Progress visualization (health bars, XP bars)

---

### 4. Home Screen Redesign (MAJOR UPDATE)
**Current:** Feature cards grid with tips
**Reference Design:** Goal-oriented hub

**Home Screen Elements:**
- Set Goals (primary CTA)
- Search
- Menu with sections:
  - Known Concerns (health issues)
  - Lifestyle Improvement
  - Exploration (library/encyclopedia)

**Changes Required:**
- Redesign home as mission/goal dashboard
- Add "Today's Goals" or "Daily Quests" section
- Show avatar status and progress
- Quick actions based on user's active goals
- Personalized content feed

---

### 5. Encyclopedia Enhancement (UPDATE)
**Current:** Basic herb cards with search/filter
**Reference Design:** Comprehensive "Spyce" database called "SpyceWyze"

**Additional Data Per Item:**
| Field | Description |
|-------|-------------|
| Scientific Name | Latin nomenclature |
| Colloquial Names | Regional/common names |
| Origin & History | Where it comes from |
| Growing Zone | Climate/region preferences |
| Cultivation Guide | How to grow |
| Life Cycle | Seed to harvest with images |
| Recipes | Common dishes containing it |
| Where to Find | Vendors, restaurants, markets |
| Research Links | Clinical studies, statistics |

**Changes Required:**
- Expand herb data model significantly
- Add cultivation/growing information
- Add recipe associations
- Add vendor/restaurant links
- Add research/study citations
- "Nature Archives" - image gallery feature
- Map view for finding local sources

---

### 6. Social/Community Features (NEW)
**Current:** Not implemented
**Reference Design:** "The Tribe" - social rewards system

**Community Activities:**
- Collective Gardening
- Day Hikes / Camping
- Farmer's Market visits
- Festivals (Natural World/Sustainability)
- Workshops/Classes
- Trash tag/litter pickup
- Volunteering
- Park Visits
- Potlucks
- Mom & Pop restaurant/market visits
- Walk/Jog/Run for causes

**Changes Required:**
- Community events calendar
- Activity check-in system
- Social sharing capabilities
- Group/tribe creation
- Activity feed
- Leaderboards

---

### 7. User Personas to Support

| Persona | Key Needs |
|---------|-----------|
| **Camilla** (35, Yoga Instructor) | Meal planning for family with allergies, quick healthy options |
| **Chet** (41, PE Coach) | Doesn't know how to cook, needs simple guidance, managing health issues |
| **Dolores** (75, Retired) | Not tech-savvy, wants to garden with grandkids, seeking medication alternatives |
| **Tammy** (28, HR) | Busy single mom, gamification appeals to her |

**UX Implications:**
- Simple, accessible interface for older users
- Quick-action shortcuts for busy users
- Family/household features
- Beginner-friendly cooking guidance

---

## Proposed Implementation Phases

### Phase 1: Foundation Updates
1. ~~Expand user profile data model~~ (biometrics, lifestyle)
2. Create multi-step onboarding wizard
3. Redesign home screen as goal-focused dashboard
4. Expand herb/spice data model

### Phase 2: Digital Cabinet
1. Cabinet data model and storage
2. Cabinet management UI (add/edit/delete items)
3. Manual entry forms
4. Integration with recommendations

### Phase 3: Gamification Core
1. Avatar/character selection system
2. XP and leveling system
3. Achievement/badge framework
4. Daily streaks and rewards
5. Avatar display across app

### Phase 4: Encyclopedia Enhancement
1. Expanded herb detail pages
2. Growing/cultivation guides
3. Recipe associations
4. Research links and citations
5. Map/location features

### Phase 5: Social Features
1. Community events system
2. Activity check-ins
3. Social profiles
4. Leaderboards
5. Sharing capabilities

---

## Data Model Changes Required

### User Profile (Expanded)
```
User
├── Basic Info
│   ├── name
│   ├── email
│   └── socialAccounts[]
├── Biometrics
│   ├── birthdate
│   ├── weight
│   ├── height
│   ├── bloodPressure
│   └── pulse
├── Lifestyle
│   ├── diet (type, calories/day)
│   ├── exercise (frequency, type, intensity)
│   ├── alcohol (frequency)
│   ├── coffee (frequency)
│   └── substances[]
├── Health
│   ├── conditions[]
│   ├── allergies[]
│   ├── medications[]
│   ├── supplements[]
│   └── vitamins[]
├── Goals[]
├── Avatar
│   ├── characterType
│   ├── level
│   ├── xp
│   ├── equipment[]
│   └── badges[]
└── Cabinet
    ├── pantry[]
    ├── fridge[]
    ├── cupboard[]
    └── medicineCabinet[]
```

### Herb/Spice (Expanded)
```
HerbSpice
├── Basic
│   ├── name
│   ├── scientificName
│   ├── colloquialNames[]
│   └── category
├── Origin
│   ├── history
│   ├── region
│   └── growingZone
├── Cultivation
│   ├── howToGrow
│   ├── lifecycle[]
│   └── harvestInfo
├── Health
│   ├── benefits[]
│   ├── precautions[]
│   ├── interactions[]
│   └── researchLinks[]
├── Culinary
│   ├── uses[]
│   ├── recipes[]
│   ├── pairsWith[]
│   └── tasteProfile
└── Sources
    ├── vendors[]
    ├── restaurants[]
    └── markets[]
```

---

## Navigation Changes

### Current Navigation
```
Home | Encyclopedia | Remedies | Recipes | Profile
```

### Proposed Navigation
```
Home | Cabinet | Explore | Quests | Profile
       (new)   (encyclopedia) (goals/remedies) (with avatar)
```

Or alternatively with bottom nav icons:
```
🏠 Home | 🗄️ Cabinet | 📚 Library | ⚔️ Quests | 👤 Me
```

---

## Visual Design Considerations

1. **Avatar Integration:** Show user's avatar in header and profile
2. **Progress Indicators:** XP bars, health meters, streak counters
3. **Achievement Badges:** Visual badge/medal display
4. **Gamified UI Elements:** Level indicators, unlock animations
5. **Cabinet Visuals:** Visual representation of pantry/fridge shelves
6. **Accessibility:** Large touch targets, high contrast for older users

---

## Questions to Resolve

1. **Scope:** Should we implement full gamification in MVP or simplified version?
2. **Camera Features:** Is barcode/image scanning essential or can we defer?
3. **Social Features:** Priority level? Can we launch without community features?
4. **Avatar Complexity:** Full character evolution system or simplified badges?
5. **Data Sources:** Where will expanded herb data come from?
6. **Offline Support:** Required for cabinet inventory?

---

## Next Steps

1. Review this document and confirm priorities
2. Decide on phased approach or full redesign
3. Create detailed wireframes for new screens
4. Update data models in codebase
5. Begin implementation of Phase 1

---

*Document generated from SpiceWise Reference Documentation review*
*Files reviewed: SW&NA IA.pdf, Vision & Mission.docx, Information Architecture.xlsx, Character List.xlsx, The Self.xlsx, User Persona Example.docx, Metrics Inputs.xlsx*
