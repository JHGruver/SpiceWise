# Spicewise Advice: Strategic Decisions & Roadmap
## Stakeholder Decisions Confirmed — November 29, 2025

---

# STAKEHOLDER DECISIONS

| Question | Decision | Notes |
|----------|----------|-------|
| **Spice Count** | 50 for MVP | Add more post-launch |
| **Gamification** | MVP (Simplified) | Basic progression, not full RPG |
| **Digital Cabinet** | Phased approach | v1: Text, v2: Barcode, v3: AI Image |
| **Pricing Model** | Freemium + Paid | Both tiers from launch |
| **Platform** | Web-first (PWA) | Native mobile in long-term roadmap |

---

# CABINET FEATURE ROADMAP

## Version Progression

```
v1 (MVP)                v2 (Post-Launch)         v3 (Future)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  TEXT ENTRY     │    │  BARCODE SCAN   │    │  AI IMAGE       │
│                 │    │                 │    │  RECOGNITION    │
│ • Manual input  │ →  │ • Camera scan   │ →  │ • Photo of      │
│ • Search/select │    │ • UPC lookup    │    │   spice jar     │
│ • Quick add     │    │ • Auto-populate │    │ • Label reading │
│                 │    │                 │    │ • Smart ID      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
     Week 5-6              Month 3-4              Month 6+
```

### v1 Cabinet Features (MVP)
- Manual text entry with autocomplete
- Search from spice database
- 4 cabinet types: Pantry, Fridge, Cupboard, Medicine Cabinet
- Add/edit/delete items
- Expiration date tracking (optional)
- Integration with recommendations ("Use what you have")

### v2 Cabinet Features (Post-Launch)
- Barcode scanning via device camera
- UPC database lookup
- Auto-populate spice details from scan
- Bulk add capability

### v3 Cabinet Features (Future)
- AI-powered image recognition
- Photo of spice jar → automatic identification
- Label text extraction (OCR)
- Smart suggestions based on image

---

# SIMPLIFIED GAMIFICATION (MVP)

## What We're Building vs. Full Vision

| Feature | Full Vision | MVP Version |
|---------|-------------|-------------|
| Avatar System | 20+ characters with evolution | 6 simple avatars, static |
| Leveling | Complex XP with tiers | Simple levels 1-10 |
| Progression | Equipment, familiars, badges | Basic badges only |
| Streaks | Weekly with variable rewards | Daily streak counter |
| Leaderboards | Full social rankings | None (post-launch) |

## MVP Gamification Scope

### 1. Simple Avatar Selection
```
Choose Your Guide:
┌─────┐ ┌─────┐ ┌─────┐
│ 🧙 │ │ 🌿 │ │ 👨‍🍳 │
│Sage │ │Herb │ │Chef │
└─────┘ └─────┘ └─────┘
┌─────┐ ┌─────┐ ┌─────┐
│ 🧘 │ │ 👩‍🔬 │ │ 🌱 │
│Yogi │ │Doc  │ │Grower│
└─────┘ └─────┘ └─────┘
```

### 2. Simple Level System
| Level | Name | Spices Learned | Badge |
|-------|------|----------------|-------|
| 1 | Seedling | 0-5 | 🌱 |
| 2 | Sprout | 6-10 | 🌿 |
| 3 | Budding | 11-20 | 🌸 |
| 4 | Blooming | 21-30 | 🌺 |
| 5 | Flourishing | 31-40 | 🌻 |
| 6 | Thriving | 41-50 | 🌳 |
| 7 | Seasoned | 51-65 | ⭐ |
| 8 | Expert | 66-80 | 🏆 |
| 9 | Master | 81-95 | 👑 |
| 10 | Sage | 96+ | 🔮 |

### 3. Progress Tracking
- Spices viewed/learned counter
- Profile completion percentage
- Cabinet items added
- Days active (streak)

### 4. Basic Badges (10 for MVP)
| Badge | Name | Requirement |
|-------|------|-------------|
| 🌱 | First Steps | Complete profile |
| 📚 | Curious | View 10 spices |
| 🗄️ | Collector | Add 5 cabinet items |
| 🔥 | On Fire | 7-day streak |
| 💚 | Healer | View 5 remedy recommendations |
| 🌍 | Explorer | View spices from 3 regions |
| ⭐ | Favorite | Save 5 spices |
| 🧪 | Scientist | Read 10 research citations |
| 🌿 | Herbalist | Learn all herbs |
| 🫚 | Spice Master | Learn all spices |

---

# PRICING MODEL

## Tier Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                        PRICING TIERS                            │
├─────────────────┬─────────────────┬─────────────────────────────┤
│     FREE        │   SPICE SEEKER  │      SPICE MASTER           │
│      $0         │    $4.99/mo     │        $9.99/mo             │
│                 │   $49/year      │       $99/year              │
├─────────────────┼─────────────────┼─────────────────────────────┤
│ • Browse 15     │ • Full 50+      │ • Everything in Seeker      │
│   spices        │   spice access  │                             │
│ • Basic search  │ • Health        │ • Digital Cabinet           │
│ • View benefits │   profile       │ • Gamification/Levels       │
│                 │ • Personalized  │ • Remedy Road Maps          │
│                 │   remedies      │ • Priority support          │
│                 │ • Save favorites│ • Early access to features  │
└─────────────────┴─────────────────┴─────────────────────────────┘
```

## Feature Access Matrix

| Feature | Free | Seeker | Master |
|---------|------|--------|--------|
| Browse Encyclopedia | 15 spices | All 50+ | All 50+ |
| Search | Basic | Full | Full |
| View Benefits | ✓ | ✓ | ✓ |
| Health Profile | ✗ | ✓ | ✓ |
| Personalized Remedies | ✗ | ✓ | ✓ |
| Save Favorites | 3 max | Unlimited | Unlimited |
| Digital Cabinet | ✗ | ✗ | ✓ |
| Gamification/Levels | ✗ | ✗ | ✓ |
| Avatar Selection | ✗ | ✗ | ✓ |
| Remedy Road Maps | ✗ | ✗ | ✓ |
| Priority Support | ✗ | ✗ | ✓ |

## Revenue Projections (Conservative)

| Scenario | Users | Free | Seeker | Master | MRR |
|----------|-------|------|--------|--------|-----|
| Launch (Month 1) | 500 | 400 | 75 | 25 | $624 |
| Month 3 | 2,000 | 1,600 | 300 | 100 | $2,497 |
| Month 6 | 5,000 | 4,000 | 700 | 300 | $6,493 |
| Year 1 | 10,000 | 7,500 | 1,750 | 750 | $16,233 |

*Assumes 20% conversion to paid (industry avg: 2-5% for apps)*

---

# PLATFORM STRATEGY

## Phase 1: Web-First (PWA)

### Why PWA First
- Faster development (single codebase)
- No app store approval delays
- Easier iteration and updates
- Lower cost
- Works on all devices

### PWA Features to Implement
| Feature | Priority | Notes |
|---------|----------|-------|
| Installable | High | "Add to Home Screen" |
| Offline Support | Medium | Cache spice data locally |
| Push Notifications | Low | Reminders, streaks |
| Responsive Design | High | Already implemented |

## Phase 2: Native Mobile (Future)

### Timeline Trigger
Consider native development when:
- 10,000+ monthly active users
- Revenue exceeds $10k/month
- User feedback demands native features
- Need advanced camera/hardware access

### Native Features (Future)
| Platform | Unique Features |
|----------|-----------------|
| iOS | Apple Health integration, Siri shortcuts |
| Android | Google Fit integration, widgets |
| Both | Better camera access, notifications, performance |

### Technology Options for Native
| Option | Pros | Cons |
|--------|------|------|
| React Native | Code reuse from web | Learning curve |
| Flutter | Single codebase, fast | New language (Dart) |
| Native (Swift/Kotlin) | Best performance | 2 codebases |

**Recommendation**: React Native when ready (leverages existing React skills)

---

# REVISED IMPLEMENTATION TIMELINE

## Phase 0: Emergency Fixes (Week 1)
**Budget: 8 hours**

| Task | Hours | Owner |
|------|-------|-------|
| Fix localhost links → real URLs or waitlist | 2 | Dev |
| Add email capture form (Mailchimp/ConvertKit) | 3 | Dev |
| Add medical disclaimer | 1 | Helena |
| Update "100+" claims to accurate numbers | 1 | Marcus |
| Add simple analytics (Plausible/GA) | 1 | Dev |

## Phase 1: Foundation (Weeks 2-4)
**Budget: 80 hours**

### Week 2: Backend & Auth
| Task | Hours |
|------|-------|
| Set up Supabase project | 4 |
| Design database schema | 8 |
| Implement user authentication | 16 |
| Create user profile persistence | 8 |

### Week 3: Content & Data
| Task | Hours |
|------|-------|
| Migrate spice data to database | 4 |
| Enhance 8 existing spices (full data) | 8 |
| Add 12 new spices (20 total) | 12 |
| Create admin panel for content | 8 |

### Week 4: Onboarding
| Task | Hours |
|------|-------|
| Design onboarding wizard (6 steps) | 4 |
| Implement onboarding flow | 12 |
| Add biometrics/lifestyle fields | 4 |
| Simple avatar selection (6 options) | 4 |

## Phase 2: Core Features (Weeks 5-8)
**Budget: 100 hours**

### Week 5-6: Digital Cabinet v1
| Task | Hours |
|------|-------|
| Design cabinet UI | 8 |
| Build cabinet data model | 8 |
| Implement text-based add/edit/delete | 16 |
| Connect cabinet to recommendations | 8 |
| "Use what you have" feature | 8 |

### Week 7-8: Content & Gamification
| Task | Hours |
|------|-------|
| Add 30 more spices (50 total) | 24 |
| Implement basic level system | 8 |
| Add badge system (10 badges) | 8 |
| Create streak tracking | 4 |
| Progress indicators throughout app | 8 |

## Phase 3: Monetization & Polish (Weeks 9-12)
**Budget: 80 hours**

### Week 9-10: Payments & Tiers
| Task | Hours |
|------|-------|
| Integrate Stripe | 16 |
| Implement feature gating by tier | 12 |
| Create upgrade prompts | 4 |
| Build subscription management | 8 |

### Week 11-12: Launch Prep
| Task | Hours |
|------|-------|
| Beta testing (50 users) | 16 |
| Bug fixes from beta | 16 |
| PWA optimization | 4 |
| Create launch assets | 4 |

## Phase 4: Post-Launch Growth (Months 4-6)
**Estimated: 160 hours**

| Feature | Hours | Month |
|---------|-------|-------|
| Remedy Road Maps (premium) | 40 | 4 |
| Cabinet v2 (barcode scanning) | 40 | 4-5 |
| Expanded gamification | 24 | 5 |
| Social features (sharing) | 24 | 5-6 |
| Native mobile evaluation | 16 | 6 |
| Analytics & optimization | 16 | Ongoing |

---

# TOTAL BUDGET SUMMARY

## Development Hours

| Phase | Hours | Timeline |
|-------|-------|----------|
| Phase 0: Emergency | 8 | Week 1 |
| Phase 1: Foundation | 80 | Weeks 2-4 |
| Phase 2: Core Features | 100 | Weeks 5-8 |
| Phase 3: Monetization | 80 | Weeks 9-12 |
| **Total MVP** | **268** | **12 weeks** |

## Cost Estimates

| Category | Low | High | Notes |
|----------|-----|------|-------|
| Development (268 hrs @ $40-75/hr) | $10,720 | $20,100 | |
| Content (50 spices) | $2,000 | $4,000 | Research + writing |
| Illustrations (10) | $1,000 | $2,500 | Custom botanical art |
| Marketing (3 months) | $500 | $1,500 | Ads + tools |
| Infrastructure | $50/mo | $100/mo | Supabase, hosting |
| **Total MVP** | **$14,270** | **$28,100** | |

## Comparison to Investor Ask

| Category | Investor Budget | Our Estimate | Delta |
|----------|-----------------|--------------|-------|
| Platform/Dev | $7,188 | $15,000-20,000 | Need more |
| Content | $1,500 | $2,000-4,000 | On track |
| Legal | $900 | $900 | On track |
| Marketing | $500 | $500-1,500 | On track |
| **Total** | **$10,088** | **$18,400-26,400** | Gap: $8-16k |

**Note**: Original budget may be tight for full MVP scope. Consider:
1. Phased launch (lighter v1)
2. Extended timeline
3. Additional funding
4. Reduce scope (fewer spices, simpler features)

---

# IMMEDIATE NEXT STEPS

## This Week (Priority Order)

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Fix broken localhost links | Dev | ⬜ |
| 2 | Add email capture to homepage | Dev | ⬜ |
| 3 | Add medical disclaimer | Content | ⬜ |
| 4 | Set up Supabase account | Dev | ⬜ |
| 5 | Create database schema design | Dev | ⬜ |

## This Month

| # | Task | Owner | Status |
|---|------|-------|--------|
| 1 | Complete backend setup | Dev | ⬜ |
| 2 | Implement authentication | Dev | ⬜ |
| 3 | Enhance 8 existing spices | Content | ⬜ |
| 4 | Add 12 new spices (20 total) | Content | ⬜ |
| 5 | Design onboarding wizard | Design | ⬜ |
| 6 | Create 3 sample illustrations | Art | ⬜ |

---

# DECISION LOG

| Date | Decision | Rationale | Impact |
|------|----------|-----------|--------|
| 11/29/25 | 50 spices for MVP | Quality > quantity | Reduces content work |
| 11/29/25 | Simplified gamification | Focus on core value | Reduces dev time |
| 11/29/25 | Cabinet: Text → Barcode → AI | Phased complexity | Enables faster launch |
| 11/29/25 | Freemium + Paid | Maximize reach + revenue | Requires feature gating |
| 11/29/25 | Web-first (PWA) | Speed to market | Native comes later |

---

*Document updated: November 29, 2025*
*Next review: After Phase 1 completion*
