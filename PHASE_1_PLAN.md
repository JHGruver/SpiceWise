# Spicewise Advice: Phase 1 Implementation Plan
## Website + App — No Budget Constraints

---

# OVERVIEW

## What We're Building in Phase 1

| Platform | Goal | Key Deliverables |
|----------|------|------------------|
| **Website** | Convert visitors to app users | Working CTAs, Email capture, Clear value prop |
| **App** | Core spice encyclopedia experience | 50 spices, Search, Profile, Cabinet v1 |

## What's NOT in Phase 1

- ~~Avatar selection~~ (removed)
- ~~Budget/pricing discussions~~ (removed)
- ~~Community features~~ (Phase 2)
- ~~Gamification~~ (Phase 2)
- ~~Supplier ratings~~ (Phase 2)
- ~~Trivia games~~ (Phase 2)

---

# PHASE 1: WEBSITE

## Current State

| Page | Status | Issues |
|------|--------|--------|
| HomePage | Exists | CTAs link to localhost (broken) |
| FeaturesPage | Exists | Generic, no visuals |
| PricingPage | Exists | Says "Coming Soon" |
| AboutPage | Exists | Needs review |
| BlogPage | Exists | Empty |
| ContactPage | Exists | Needs review |

## Phase 1 Website Tasks

### 1.1 Fix Critical Bugs

| Task | File | What to Do |
|------|------|------------|
| Fix hero CTA | HomePage.tsx | Change `localhost:3000` → real app URL or `#waitlist` |
| Fix spice index link | HomePage.tsx | Change `localhost:3000/encyclopedia` → real URL or `#waitlist` |
| Fix final CTA | HomePage.tsx | Change `localhost:3000` → real URL or `#waitlist` |

### 1.2 Add Email Capture

| Task | Location | What to Build |
|------|----------|---------------|
| Email signup form | HomePage (hero section) | Input + "Join Waitlist" button |
| Email signup form | HomePage (CTA section) | Input + "Get Early Access" button |
| Success message | Both locations | "Thanks! We'll notify you at launch." |
| Store emails | Backend | Simple list (can use Supabase, Google Form, or Mailchimp) |

### 1.3 Add Medical Disclaimer

| Task | Location | What to Add |
|------|----------|-------------|
| Footer disclaimer | Footer.tsx | Short disclaimer text |
| Full disclaimer page | New: DisclaimerPage.tsx | Complete medical disclaimer |
| Link in footer | Footer.tsx | Link to disclaimer page |

### 1.4 Update Content

| Task | File | What to Change |
|------|------|----------------|
| Remove "100+ spices" claim | FeaturesPage.tsx | Change to "50+ healing spices" |
| Update pricing page | PricingPage.tsx | Show actual tiers or "Coming Soon with waitlist" |
| Add app screenshots | FeaturesPage.tsx | Placeholder images of app |

---

## Website Phase 1 Checklist

```
WEBSITE PHASE 1 CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Critical Fixes
[ ] Fix hero "Explore the Spice Index" button
[ ] Fix "Browse Full Spice Index" link
[ ] Fix "Start Exploring" CTA button
[ ] All CTAs point to waitlist or real app URL

Email Capture
[ ] Add email input to hero section
[ ] Add email input to CTA section
[ ] Create success/thank you message
[ ] Connect to email storage (Supabase/Mailchimp/etc)

Disclaimer
[ ] Add short disclaimer to footer
[ ] Create full disclaimer page
[ ] Link footer to disclaimer page

Content Updates
[ ] Fix "100+ spices" → "50+ spices"
[ ] Update pricing page content
[ ] Review/update About page
[ ] Review/update Contact page

Polish
[ ] Test all links work
[ ] Test email capture works
[ ] Test on mobile
[ ] Test on desktop
```

---

## Website Phase 1 File Changes

### Files to EDIT:

```
apps/website/src/
├── pages/
│   ├── HomePage.tsx        ← Fix CTAs, add email capture
│   ├── FeaturesPage.tsx    ← Update content
│   └── PricingPage.tsx     ← Update content
├── components/
│   └── common/
│       └── Footer.tsx      ← Add disclaimer
```

### Files to CREATE:

```
apps/website/src/
├── pages/
│   └── DisclaimerPage.tsx  ← New: Full disclaimer
├── components/
│   └── common/
│       └── EmailCapture.tsx ← New: Reusable email form
```

---

# PHASE 1: WEB APP

## Current State

| Page | Status | Issues |
|------|--------|--------|
| HomePage | Exists | Basic, no personalization |
| EncyclopediaPage | Exists | Only 8 spices |
| HerbDetailPage | Exists | Missing origin, growing, citations |
| ProfilePage | Exists | Flat form, no persistence |
| RemediesPage | Exists | Works but basic |
| RecipesPage | Exists | Works but basic |

## Phase 1 App Tasks

### 1.1 Backend Setup

| Task | What to Do |
|------|------------|
| Set up Supabase project | Create project at supabase.com |
| Create database tables | Users, Spices, UserProfiles, Cabinet |
| Set up authentication | Email/password login |
| Connect frontend | Install @supabase/supabase-js |

### 1.2 User Authentication

| Task | What to Build |
|------|---------------|
| Login page | Email + password form |
| Register page | Email + password + name |
| Auth context | Wrap app in auth provider |
| Protected routes | Redirect to login if not authenticated |
| Logout | Clear session, redirect to login |

### 1.3 Onboarding Flow (Simplified, No Avatar)

| Step | Screen | Fields |
|------|--------|--------|
| 1 | Welcome | Welcome message, "Get Started" button |
| 2 | Disclaimer | Medical disclaimer, "I Understand" checkbox |
| 3 | About You | Name (already have email from signup) |
| 4 | Health Concerns | Conditions checklist (existing) |
| 5 | Wellness Goals | Goals checklist (existing) |
| 6 | Complete | "Start Exploring" → Home |

### 1.4 Profile Persistence

| Task | What to Do |
|------|------------|
| Save profile to database | On any profile change, save to Supabase |
| Load profile on login | Fetch user profile from database |
| Update UserContext | Connect to Supabase instead of local state |

### 1.5 Expand Spice Database

| Task | What to Do |
|------|------------|
| Create spices table | In Supabase |
| Migrate 8 existing spices | From mockData.ts to database |
| Add 42 more spices | Total: 50 spices |
| Fetch from database | Replace mockData imports with API calls |

### 1.6 Digital Cabinet v1 (Text Entry)

| Task | What to Build |
|------|---------------|
| Cabinet page | New page with 4 cabinet types |
| Add item | Search spices → Add to cabinet |
| View items | List items in each cabinet |
| Edit quantity | Change amount |
| Delete item | Remove from cabinet |
| Persist to database | Save cabinet to Supabase |

### 1.7 Navigation Update

| Current | Phase 1 |
|---------|---------|
| Home, Encyclopedia, Remedies, Recipes, Profile | Home, Explore, Cabinet, Remedies, Profile |

---

## App Phase 1 Checklist

```
APP PHASE 1 CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Backend Setup
[ ] Create Supabase project
[ ] Create Users table
[ ] Create Spices table
[ ] Create UserProfiles table
[ ] Create CabinetItems table
[ ] Set up Row Level Security (RLS)

Authentication
[ ] Create LoginPage
[ ] Create RegisterPage
[ ] Create AuthContext
[ ] Implement login function
[ ] Implement register function
[ ] Implement logout function
[ ] Protect routes (redirect if not logged in)

Onboarding
[ ] Create WelcomeScreen
[ ] Create DisclaimerScreen
[ ] Create onboarding flow (5 steps)
[ ] Track onboarding completion
[ ] Skip to home after complete

Profile Persistence
[ ] Connect ProfilePage to Supabase
[ ] Save profile changes to database
[ ] Load profile on app start
[ ] Handle offline gracefully

Spice Database
[ ] Create 50 spice entries
[ ] Migrate data to Supabase
[ ] Create spice service/API
[ ] Update EncyclopediaPage to fetch from DB
[ ] Update HerbDetailPage to fetch from DB
[ ] Add loading states

Digital Cabinet
[ ] Create CabinetPage
[ ] Create cabinet types (Pantry, Fridge, Cupboard, Medicine)
[ ] Build "Add Item" modal
[ ] Build item list view
[ ] Implement edit quantity
[ ] Implement delete item
[ ] Save to database
[ ] Load from database

Navigation
[ ] Update nav to: Home, Explore, Cabinet, Remedies, Profile
[ ] Update bottom nav icons
[ ] Update routing
```

---

## App Phase 1 File Changes

### Files to EDIT:

```
apps/web-app/src/
├── App.tsx                    ← Add routes, auth protection
├── context/
│   └── UserContext.tsx        ← Connect to Supabase
├── pages/
│   ├── HomePage.tsx           ← Update for logged-in state
│   ├── EncyclopediaPage.tsx   ← Fetch from database
│   ├── HerbDetailPage.tsx     ← Fetch from database
│   └── ProfilePage.tsx        ← Connect to database
├── components/
│   └── common/
│       └── Navigation.tsx     ← Update nav items
├── data/
│   └── mockData.ts            ← Expand to 50 spices (temporary)
```

### Files to CREATE:

```
apps/web-app/src/
├── lib/
│   └── supabase.ts            ← Supabase client
├── services/
│   ├── authService.ts         ← Login/register/logout
│   ├── spiceService.ts        ← Fetch spices from DB
│   ├── profileService.ts      ← Save/load profile
│   └── cabinetService.ts      ← Cabinet CRUD
├── pages/
│   ├── LoginPage.tsx          ← Login form
│   ├── RegisterPage.tsx       ← Register form
│   ├── CabinetPage.tsx        ← Digital cabinet
│   └── onboarding/
│       ├── WelcomeScreen.tsx
│       ├── DisclaimerScreen.tsx
│       ├── AboutYouScreen.tsx
│       ├── HealthConcernsScreen.tsx
│       ├── WellnessGoalsScreen.tsx
│       └── CompleteScreen.tsx
├── components/
│   ├── auth/
│   │   └── ProtectedRoute.tsx
│   └── cabinet/
│       ├── CabinetSection.tsx
│       ├── AddItemModal.tsx
│       └── CabinetItem.tsx
├── context/
│   └── AuthContext.tsx
```

---

## Database Schema (Supabase)

### Tables to Create:

```sql
-- Users (handled by Supabase Auth)

-- User Profiles
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  name TEXT,
  conditions TEXT[], -- array of condition IDs
  goals TEXT[], -- array of goal IDs
  dietary_restrictions TEXT[],
  allergies TEXT[],
  onboarding_complete BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Spices
CREATE TABLE spices (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  scientific_name TEXT,
  category TEXT CHECK (category IN ('herb', 'spice')),
  description TEXT,
  image_emoji TEXT,
  health_benefits JSONB, -- array of {condition, description, evidenceLevel}
  culinary_uses TEXT[],
  precautions TEXT[],
  taste_profile TEXT,
  pairs_with TEXT[],
  origin_region TEXT,
  origin_history TEXT,
  growing_zone TEXT,
  growing_instructions TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Cabinet Items
CREATE TABLE cabinet_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  spice_id TEXT REFERENCES spices(id),
  cabinet_type TEXT CHECK (cabinet_type IN ('pantry', 'fridge', 'cupboard', 'medicine')),
  quantity DECIMAL,
  unit TEXT,
  expiration_date DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Saved Spices (favorites)
CREATE TABLE saved_spices (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  spice_id TEXT REFERENCES spices(id),
  created_at TIMESTAMP DEFAULT NOW(),
  PRIMARY KEY (user_id, spice_id)
);
```

---

# IMPLEMENTATION ORDER

## Week 1: Foundation

| Day | Website Tasks | App Tasks |
|-----|---------------|-----------|
| 1 | Fix all localhost links | Set up Supabase project |
| 2 | Create EmailCapture component | Create database tables |
| 3 | Add email capture to HomePage | Set up Supabase client in app |
| 4 | Add disclaimer to footer | Create AuthContext |
| 5 | Create DisclaimerPage | Create LoginPage |

## Week 2: Auth & Content

| Day | Website Tasks | App Tasks |
|-----|---------------|-----------|
| 1 | Update FeaturesPage content | Create RegisterPage |
| 2 | Update PricingPage content | Implement auth functions |
| 3 | Test all website changes | Create ProtectedRoute |
| 4 | Mobile responsiveness check | Start onboarding screens |
| 5 | Deploy website updates | Complete onboarding flow |

## Week 3: Data & Profile

| Day | App Tasks |
|-----|-----------|
| 1 | Connect ProfilePage to Supabase |
| 2 | Create profileService |
| 3 | Save/load profile from database |
| 4 | Create spiceService |
| 5 | Migrate 8 spices to database |

## Week 4: Spices & Cabinet

| Day | App Tasks |
|-----|-----------|
| 1 | Add 20 more spices (28 total) |
| 2 | Add 22 more spices (50 total) |
| 3 | Update Encyclopedia to use database |
| 4 | Create CabinetPage layout |
| 5 | Create cabinet types UI |

## Week 5: Cabinet & Polish

| Day | App Tasks |
|-----|-----------|
| 1 | Create AddItemModal |
| 2 | Implement add/edit/delete |
| 3 | Create cabinetService |
| 4 | Connect cabinet to database |
| 5 | Update navigation |

## Week 6: Testing & Launch Prep

| Day | All Tasks |
|-----|-----------|
| 1 | End-to-end testing |
| 2 | Bug fixes |
| 3 | Performance optimization |
| 4 | Final review |
| 5 | Deploy! |

---

# 50 SPICES LIST

## Spices to Include (MVP)

| # | Name | Category | Primary Benefit |
|---|------|----------|-----------------|
| 1 | Turmeric | Spice | Anti-inflammatory |
| 2 | Ginger | Spice | Digestive Health |
| 3 | Cinnamon | Spice | Blood Sugar |
| 4 | Garlic | Herb | Immune Support |
| 5 | Peppermint | Herb | IBS Relief |
| 6 | Basil | Herb | Stress Relief |
| 7 | Rosemary | Herb | Memory |
| 8 | Cayenne | Spice | Metabolism |
| 9 | Black Pepper | Spice | Absorption |
| 10 | Cumin | Spice | Digestion |
| 11 | Oregano | Herb | Antibacterial |
| 12 | Thyme | Herb | Respiratory |
| 13 | Sage | Herb | Brain Health |
| 14 | Cardamom | Spice | Digestive |
| 15 | Clove | Spice | Pain Relief |
| 16 | Nutmeg | Spice | Sleep |
| 17 | Fennel | Spice | Bloating |
| 18 | Fenugreek | Spice | Blood Sugar |
| 19 | Coriander | Spice | Cholesterol |
| 20 | Parsley | Herb | Detox |
| 21 | Cilantro | Herb | Heavy Metals |
| 22 | Dill | Herb | Digestive |
| 23 | Chives | Herb | Heart Health |
| 24 | Tarragon | Herb | Sleep |
| 25 | Marjoram | Herb | Hormones |
| 26 | Bay Leaf | Herb | Blood Sugar |
| 27 | Lemongrass | Herb | Anxiety |
| 28 | Lavender | Herb | Relaxation |
| 29 | Chamomile | Herb | Sleep |
| 30 | Echinacea | Herb | Immunity |
| 31 | Elderberry | Herb | Cold/Flu |
| 32 | Ashwagandha | Herb | Stress |
| 33 | Holy Basil (Tulsi) | Herb | Adaptogen |
| 34 | Ginseng | Herb | Energy |
| 35 | Licorice Root | Herb | Adrenal |
| 36 | Valerian | Herb | Sleep |
| 37 | St. John's Wort | Herb | Mood |
| 38 | Milk Thistle | Herb | Liver |
| 39 | Dandelion | Herb | Detox |
| 40 | Nettle | Herb | Allergies |
| 41 | Saffron | Spice | Mood |
| 42 | Star Anise | Spice | Digestive |
| 43 | Allspice | Spice | Antioxidant |
| 44 | Mustard Seed | Spice | Metabolism |
| 45 | Paprika | Spice | Circulation |
| 46 | Sumac | Spice | Antioxidant |
| 47 | Za'atar | Spice Blend | Memory |
| 48 | Curry Leaf | Herb | Diabetes |
| 49 | Moringa | Herb | Nutrition |
| 50 | Black Cumin (Nigella) | Spice | Immune |

---

# SUCCESS CRITERIA

## Phase 1 Complete When:

### Website
- [ ] All CTAs work (no localhost links)
- [ ] Email capture functional
- [ ] Disclaimer in footer
- [ ] Content accurate (50 spices, not 100)

### App
- [ ] Users can register/login
- [ ] Onboarding flow works (5 steps)
- [ ] Profile saves to database
- [ ] 50 spices viewable
- [ ] Search and filter work
- [ ] Digital Cabinet functional (add/edit/delete)
- [ ] Favorites save to database

---

*Phase 1 Plan — November 29, 2025*
*No avatar selection, no budget constraints*
