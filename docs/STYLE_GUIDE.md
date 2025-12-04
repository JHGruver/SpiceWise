# SpiceCraft Design System & Style Guide

**Version:** 2.0
**Last Updated:** November 2024
**Theme:** New Age Rustic Professional

---

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Border Radius](#border-radius)
6. [Shadows & Elevation](#shadows--elevation)
7. [Breakpoints & Responsive Design](#breakpoints--responsive-design)
8. [Component Library](#component-library)
9. [Animation Guidelines](#animation-guidelines)
10. [Glassmorphism & Effects](#glassmorphism--effects)
11. [SASS Architecture](#sass-architecture)
12. [CSS Custom Properties](#css-custom-properties)
13. [Best Practices](#best-practices)

---

## Brand Overview

SpiceCraft embodies a **"New Age Rustic Professional"** aesthetic that combines:

- **Earthy, organic warmth** - Natural colors inspired by herbs and spices
- **Modern sophistication** - Clean lines, glassmorphic effects, smooth animations
- **Trustworthy professionalism** - Consistent spacing, readable typography
- **Cultural authenticity** - Colors and textures rooted in ancestral wellness traditions

### Design Principles

1. **Nature-Inspired** - Every color relates back to herbs, spices, earth, or plants
2. **Warm & Inviting** - Never cold or clinical; always approachable
3. **Premium but Accessible** - High-end feel without pretentiousness
4. **Functional Beauty** - Every decorative element serves a purpose

---

## Color System

### Primary Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--sw-color-primary` | `#4A5D4A` | Primary actions, links, key UI elements |
| `--sw-color-primary-light` | `#5A6D5A` | Hover states |
| `--sw-color-primary-dark` | `#3A4D3A` | Active states, dark accents |
| `--sw-color-primary-muted` | `rgba(74, 93, 74, 0.1)` | Backgrounds, subtle highlights |

### Secondary Palette (Warm Spice Tones)

| Token | Hex | Usage |
|-------|-----|-------|
| `--sw-color-secondary` | `#B87333` | Secondary actions, spice-related elements |
| `--sw-color-secondary-light` | `#C68B4D` | Hover states |
| `--sw-color-secondary-dark` | `#8B5A2B` | Active states |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--sw-color-accent` | `#C9A961` | Highlights, badges, decorative elements |
| `--sw-color-accent-light` | `#D4BC7D` | Softer accents |
| `--sw-color-accent-dark` | `#A08040` | Darker accent needs |

### Background Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--sw-color-bg-primary` | `#FAF7F2` | Main page background (warm cream) |
| `--sw-color-bg-secondary` | `#F5F0E8` | Alternate sections |
| `--sw-color-bg-card` | `#FFFFFF` | Cards, modals, elevated surfaces |
| `--sw-color-bg-dark` | `#2D3B2D` | Dark sections, footer |
| `--sw-color-sand` | `#E8E2D6` | Borders, dividers, subtle backgrounds |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--sw-color-text-primary` | `#2D3B2D` | Headings, body text |
| `--sw-color-text-secondary` | `#5A6B5A` | Descriptions, secondary content |
| `--sw-color-text-muted` | `#8B9B8B` | Placeholders, hints, captions |
| `--sw-color-text-inverse` | `#FFFFFF` | Text on dark backgrounds |
| `--sw-color-espresso` | `#3D2B1F` | Rich dark brown for accents |

### Status Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--sw-color-success` | `#4A7C5A` | Success messages, confirmations |
| `--sw-color-warning` | `#D4A017` | Warnings, cautions |
| `--sw-color-error` | `#B94A48` | Errors, destructive actions |
| `--sw-color-info` | `#4A6B7C` | Informational messages |

### Gradient Presets

```css
/* Primary gradient */
background: linear-gradient(135deg, var(--sw-color-primary) 0%, var(--sw-color-primary-dark) 100%);

/* Accent gradient */
background: linear-gradient(135deg, var(--sw-color-accent) 0%, var(--sw-color-secondary) 100%);

/* Hero overlay (left to transparent) */
background: linear-gradient(
  to right,
  rgba(250, 247, 242, 0.98) 0%,
  rgba(250, 247, 242, 0.7) 50%,
  transparent 100%
);
```

---

## Typography

### Font Families

| Token | Font Stack | Usage |
|-------|------------|-------|
| `--sw-font-display` | `'Cormorant Garamond', Georgia, serif` | Hero titles, display headings |
| `--sw-font-heading` | `'Lora', Georgia, serif` | Section headings, card titles |
| `--sw-font-body` | `'Source Sans 3', -apple-system, sans-serif` | Body text, UI elements |

### Font Sizes

| Token | Size | Typical Usage |
|-------|------|---------------|
| `--sw-text-xs` | `0.75rem` (12px) | Captions, badges |
| `--sw-text-sm` | `0.875rem` (14px) | Small text, labels |
| `--sw-text-base` | `1rem` (16px) | Body text default |
| `--sw-text-lg` | `1.125rem` (18px) | Emphasized body text |
| `--sw-text-xl` | `1.25rem` (20px) | Subheadings |
| `--sw-text-2xl` | `1.5rem` (24px) | H4 equivalent |
| `--sw-text-3xl` | `1.875rem` (30px) | H3 equivalent |
| `--sw-text-4xl` | `2.25rem` (36px) | H2 equivalent |
| `--sw-text-5xl` | `3rem` (48px) | H1 equivalent |
| `--sw-text-6xl` | `3.75rem` (60px) | Hero headlines |

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `--sw-font-normal` | `400` | Body text |
| `--sw-font-medium` | `500` | Emphasized text, labels |
| `--sw-font-semibold` | `600` | Subheadings, buttons |
| `--sw-font-bold` | `700` | Headlines, CTAs |

### Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--sw-leading-tight` | `1.25` | Headlines, compact text |
| `--sw-leading-snug` | `1.375` | Subheadings |
| `--sw-leading-normal` | `1.5` | Default body text |
| `--sw-leading-relaxed` | `1.75` | Long-form content |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--sw-tracking-tight` | `-0.025em` | Headlines |
| `--sw-tracking-normal` | `0` | Body text |
| `--sw-tracking-wide` | `0.025em` | Buttons, labels |
| `--sw-tracking-wider` | `0.05em` | Uppercase text |
| `--sw-tracking-widest` | `0.1em` | Badges, eyebrows |

---

## Spacing System

Based on a 4px base unit with an 8px scale:

| Token | Value | Pixels |
|-------|-------|--------|
| `--sw-spacing-xs` | `0.25rem` | 4px |
| `--sw-spacing-sm` | `0.5rem` | 8px |
| `--sw-spacing-md` | `1rem` | 16px |
| `--sw-spacing-lg` | `1.5rem` | 24px |
| `--sw-spacing-xl` | `2rem` | 32px |
| `--sw-spacing-2xl` | `3rem` | 48px |
| `--sw-spacing-3xl` | `4rem` | 64px |
| `--sw-spacing-4xl` | `6rem` | 96px |
| `--sw-spacing-5xl` | `8rem` | 128px |

### Usage Guidelines

- **Component internal spacing:** `xs` to `lg`
- **Between components:** `lg` to `xl`
- **Between sections:** `3xl` to `5xl`
- **Page margins:** `lg` (mobile) to `xl` (desktop)

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--sw-radius-sm` | `4px` | Small elements, inputs |
| `--sw-radius-md` | `8px` | Buttons, standard cards |
| `--sw-radius-lg` | `12px` | Cards, form elements |
| `--sw-radius-xl` | `16px` | Large cards, hero elements |
| `--sw-radius-2xl` | `24px` | Featured cards, modals |
| `--sw-radius-full` | `9999px` | Pills, circular elements |

---

## Shadows & Elevation

| Token | Value | Usage |
|-------|-------|-------|
| `--sw-shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--sw-shadow-md` | `0 4px 6px rgba(0,0,0,0.08)` | Cards at rest |
| `--sw-shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Hover states |
| `--sw-shadow-xl` | `0 20px 25px rgba(0,0,0,0.12)` | Modals, dropdowns |
| `--sw-shadow-2xl` | `0 25px 50px rgba(0,0,0,0.15)` | Featured elements |

### Elevation Hierarchy

1. **Base level** (0): Page background
2. **Level 1** (`shadow-sm`): Subtle card separation
3. **Level 2** (`shadow-md`): Cards, containers
4. **Level 3** (`shadow-lg`): Hover states, focused elements
5. **Level 4** (`shadow-xl`): Modals, popovers, dropdowns

---

## Breakpoints & Responsive Design

| Token | Value | Description |
|-------|-------|-------------|
| `sm` | `640px` | Large phones, small tablets |
| `md` | `768px` | Tablets |
| `lg` | `1024px` | Laptops, small desktops |
| `xl` | `1280px` | Standard desktops |

### Container Widths

- **Default:** `max-width: 1280px`
- **Narrow:** `max-width: 800px` (for content-focused pages)
- **Wide:** `max-width: 1440px` (for expansive layouts)

### Mobile-First Approach

```css
/* Base styles (mobile) */
.element {
  padding: var(--sw-spacing-md);
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    padding: var(--sw-spacing-lg);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element {
    padding: var(--sw-spacing-xl);
  }
}
```

---

## Component Library

### Buttons

#### Standard Button Classes

```html
<!-- Size variants -->
<button class="btn btn--sm">Small</button>
<button class="btn btn--md">Medium</button>
<button class="btn btn--lg">Large</button>

<!-- Color variants -->
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--outline">Outline</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--accent">Accent</button>
```

#### Spice-Themed Buttons

```html
<!-- Animated spice button with sprinkle effect -->
<button class="btn btn--spice btn--spice-sprinkle">
  Explore Spices
</button>

<!-- Golden spice variant -->
<button class="btn btn--spice-gold btn--spice-sprinkle">
  Get Early Access
</button>

<!-- Hero CTA with maximum visual impact -->
<button class="btn btn--hero-cta btn--spice-sprinkle">
  Join Waitlist
</button>
```

#### Button States

- **Default:** Base gradient, subtle shadow
- **Hover:** Lifted (`translateY(-2px)`), enhanced shadow, animated sprinkle effect
- **Active:** Slight press down (`translateY(-1px)`)
- **Disabled:** `opacity: 0.5`, no pointer events

### Cards

```html
<!-- Elevated card -->
<div class="card card--elevated">
  <div class="card-content">...</div>
</div>

<!-- Bordered card -->
<div class="card card--bordered">...</div>

<!-- Glass card -->
<div class="card card--glass">...</div>
```

### Form Elements

```html
<div class="form-group">
  <label class="form-label">Email Address</label>
  <input type="email" class="form-input" placeholder="Email">
</div>

<textarea class="form-textarea" rows="4"></textarea>
<select class="form-select">...</select>
```

### Badges

```html
<span class="badge">Default</span>
<span class="badge badge--secondary">Spice</span>
<span class="badge badge--accent">Featured</span>
```

### Section Structure

```html
<section class="section section--alt">
  <div class="container">
    <div class="section-header section-header--flourish">
      <span class="section-eyebrow">Our Features</span>
      <h2 class="section-title">Explore the Spice Index</h2>
      <p class="section-subtitle">Description text here</p>
    </div>
    <!-- Section content -->
  </div>
</section>
```

---

## Animation Guidelines

### Transitions

| Token | Duration | Usage |
|-------|----------|-------|
| `--sw-transition-fast` | `150ms ease` | Micro-interactions (hover, focus) |
| `--sw-transition-normal` | `250ms ease` | Standard transitions |
| `--sw-transition-slow` | `350ms ease` | Complex animations, page transitions |

### Standard Keyframe Animations

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scale in */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
```

### Spice-Specific Animations

```css
/* Spice sprinkle effect on button hover */
@keyframes spiceSprinkle {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  20% { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1.8) rotate(15deg); }
}

/* Floating herb decoration */
@keyframes floatHerb {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-5px) rotate(10deg); }
}

/* Gradient shift for CTAs */
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Pulsing glow for hero buttons */
@keyframes heroButtonPulse {
  0%, 100% { box-shadow: 0 6px 30px rgba(74, 93, 74, 0.5); }
  50% { box-shadow: 0 8px 40px rgba(74, 93, 74, 0.6), 0 0 20px rgba(201, 169, 97, 0.3); }
}
```

### Animation Utility Classes

```html
<div class="animate-fade-in">Fades in</div>
<div class="animate-slide-up">Slides up</div>
<div class="animate-scale-in">Scales in</div>
```

---

## Glassmorphism & Effects

### Header Glassmorphic Effect

```css
.site-header {
  background: linear-gradient(
    135deg,
    rgba(250, 247, 242, 0.7) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(250, 247, 242, 0.6) 100%
  );
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 4px 30px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
}
```

### Glass Card

```css
.card--glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
```

### Hero Overlay Gradient

```css
/* Creates solid left fading to transparent right */
.hero-overlay {
  background: linear-gradient(
    to right,
    rgba(250, 247, 242, 0.98) 0%,
    rgba(250, 247, 242, 0.95) 25%,
    rgba(250, 247, 242, 0.7) 50%,
    rgba(250, 247, 242, 0.3) 70%,
    transparent 100%
  );
}
```

---

## SASS Architecture

### File Structure

```
packages/ui-components/src/styles/
├── _variables.scss      # Design tokens as SASS variables
├── _mixins.scss         # Reusable mixins
├── _functions.scss      # SASS functions
└── index.scss           # Main export

apps/website/src/styles/
├── index.css            # Global styles, CSS custom properties
└── components/          # Component-specific styles

apps/website/src/pages/
├── HomePage.css         # Page-specific styles
├── AboutPage.css
├── BlogPage.css
├── ContactPage.css
└── ...
```

### Key Mixins

```scss
// Responsive breakpoint
@mixin breakpoint($size) {
  @if $size == sm {
    @media (min-width: 640px) { @content; }
  } @else if $size == md {
    @media (min-width: 768px) { @content; }
  } @else if $size == lg {
    @media (min-width: 1024px) { @content; }
  } @else if $size == xl {
    @media (min-width: 1280px) { @content; }
  }
}

// Focus outline for accessibility
@mixin focus-outline {
  outline: 2px solid $sw-color-primary;
  outline-offset: 2px;
}

// Card base styles
@mixin card($padding: $sw-spacing-md, $shadow: $sw-shadow-sm) {
  background-color: $sw-color-bg-card;
  border-radius: $sw-radius-lg;
  box-shadow: $shadow;
  padding: $padding;
}

// Button base
@mixin button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: $sw-font-family;
  font-weight: $sw-font-medium;
  border-radius: $sw-radius-md;
  cursor: pointer;
  transition: all $sw-transition-fast;
  border: 2px solid transparent;
}
```

---

## CSS Custom Properties

All design tokens are available as CSS custom properties for use in plain CSS:

```css
:root {
  /* Colors */
  --sw-color-primary: #4A5D4A;
  --sw-color-secondary: #B87333;
  --sw-color-accent: #C9A961;

  /* Typography */
  --sw-font-display: 'Cormorant Garamond', Georgia, serif;
  --sw-font-heading: 'Lora', Georgia, serif;
  --sw-font-body: 'Source Sans 3', sans-serif;

  /* Spacing */
  --sw-spacing-md: 1rem;
  --sw-spacing-lg: 1.5rem;

  /* ... all other tokens */
}
```

### Using Custom Properties

```css
.my-component {
  color: var(--sw-color-text-primary);
  font-family: var(--sw-font-body);
  padding: var(--sw-spacing-lg);
  border-radius: var(--sw-radius-lg);
  transition: all var(--sw-transition-normal);
}
```

---

## Best Practices

### Do's

1. **Use design tokens** - Always reference `--sw-*` variables instead of hardcoding values
2. **Mobile-first** - Write base styles for mobile, then add breakpoints for larger screens
3. **Semantic naming** - Use class names that describe purpose, not appearance
4. **Consistent spacing** - Use the spacing scale; avoid arbitrary pixel values
5. **Accessibility** - Maintain sufficient color contrast (4.5:1 for text)
6. **Performance** - Prefer `transform` and `opacity` for animations

### Don'ts

1. **Don't use inline styles** - Keep styles in CSS files
2. **Don't override tokens** - If a token doesn't fit, propose an addition
3. **Don't use `!important`** - Fix specificity issues properly
4. **Don't hardcode colors** - Always use the color tokens
5. **Don't forget hover/focus states** - Every interactive element needs them
6. **Don't mix units** - Stick to `rem` for sizing, `px` only for borders

### Naming Conventions

```css
/* Block */
.card { }

/* Element */
.card-header { }
.card-body { }
.card-footer { }

/* Modifier */
.card--elevated { }
.card--bordered { }
.card--glass { }

/* State */
.card.is-active { }
.card.is-loading { }

/* Utility (sparingly) */
.u-text-center { }
.u-mt-lg { }
```

### Z-Index Scale

| Layer | Z-Index | Usage |
|-------|---------|-------|
| Base | `0` | Default content |
| Dropdown | `100` | Dropdown menus |
| Sticky | `200` | Sticky elements |
| Modal Backdrop | `250` | Modal overlays |
| Modal | `300` | Modal content |
| Toast | `400` | Notifications |
| Header | `1000` | Site header |

---

## Changelog

### Version 2.0 (November 2024)
- Introduced "New Age Rustic Professional" theme
- Added premium typography system (Cormorant Garamond, Lora, Source Sans 3)
- Implemented glassmorphic header design
- Created spice-themed button animations
- Enhanced color palette with warm earth tones
- Added hero overlay gradient system

### Version 1.0 (Initial)
- Basic color palette
- Standard typography
- Core component styles

---

*This style guide is a living document. Please propose changes through pull requests.*
