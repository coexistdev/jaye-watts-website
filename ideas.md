# Jaye Watts Portfolio — Design Brief

## Three Stylistic Approaches

**Approach A: Obsidian Editorial**
Deep black backgrounds, bone-white typography, and champagne gold accents. Inspired by high-fashion editorial magazines and luxury brand annual reports. Probability: 0.07

**Approach B: Warm Monochrome**
Warm off-white canvas with charcoal ink typography, terracotta and bronze accents. Feels like a premium art book or Architectural Digest feature. Probability: 0.04

**Approach C: Architectural Minimal**
Cool concrete grey and white, structured grid, sharp sans-serif, with electric indigo as the sole accent. Feels like a McKinsey x MoMA crossover. Probability: 0.03

---

## Chosen Approach: Obsidian Editorial

### Design Movement
Luxury editorial — the visual language of Vogue Business, Apple keynote decks, and Stripe's brand identity. Dark, confident, and authoritative.

### Core Principles
1. **Restraint as power** — every element earns its place; nothing decorative without purpose
2. **Typography does the heavy lifting** — scale, weight contrast, and letter-spacing carry hierarchy
3. **Photography is the primary medium** — full-bleed images, cinematic crops, no stock-photo feel
4. **Motion is deliberate** — entrances are smooth, interactions are snappy, nothing bounces

### Color Philosophy
- Background: near-black `#0A0A0A` — not pure black, slightly warm to feel premium not harsh
- Surface: `#111111` for cards and panels
- Foreground: `#F5F0E8` — warm bone white, not clinical
- Accent (Signature Brand Color): Champagne Gold `#C9A84C` — ownable, luxurious, culturally resonant
- Muted text: `#6B6B6B`
- Border: `#1E1E1E`
Emotional intent: authority, sophistication, and cultural fluency. The palette says "I belong in every boardroom and every green room."

### Layout Paradigm
Asymmetric editorial grid. Full-bleed hero sections. Offset text blocks that break the center axis. Horizontal scroll carousels for media. Sticky side-labels on long sections. No generic centered card grids.

### Signature Elements
1. **Gold rule lines** — thin 1px gold horizontal rules as section dividers and decorative accents
2. **Large-scale counter numbers** — oversized numerals (e.g., "01", "02") as section anchors in muted gold
3. **Kinetic text reveals** — words that slide up into view on scroll, letter by letter or line by line

### Interaction Philosophy
Interactions feel like turning pages in a high-end magazine. Hover states reveal information rather than just changing color. Cursor changes to a crosshair on images. Smooth scroll with momentum. Navigation fades in on scroll-up, disappears on scroll-down.

### Animation
- Page entrances: 600ms ease-out fade + translateY(20px) to translateY(0)
- Stagger: 60ms between grouped items
- Nav: opacity transition 200ms on scroll direction change
- Hover on cards: subtle scale(1.02) + border-color shift to gold, 200ms ease-out
- CTA buttons: background fill sweeps left-to-right on hover, 250ms
- Respect prefers-reduced-motion throughout

### Typography System
- Display / Hero: **Cormorant Garamond** — high-contrast serif, editorial authority, luxury feel
- Body / UI: **DM Sans** — geometric sans, clean and modern, excellent readability
- Accent / Labels: **DM Mono** — monospaced for category labels, stats, and metadata
- Hierarchy: 96px display → 64px h1 → 48px h2 → 32px h3 → 18px body → 13px label
- Letter-spacing: display text tracked at +0.02em; labels at +0.15em uppercase

### Brand Essence
"The strategic partner that Fortune 500 brands call when they need to move culture." Adjectives: **Authoritative. Multidisciplinary. Magnetic.**

### Brand Voice
Headlines sound like statements of fact, not marketing copy. CTAs are invitations, not commands.
Example headlines: "Strategy that moves culture." / "The partner brands call when outcomes matter."
Example CTA: "Begin a conversation" / "Explore the work"

### Wordmark and Logo
A bold geometric "J" constructed from two overlapping shapes — a vertical stroke and a curved arc — with a thin gold rule through the intersection. Monogram style, no full name in the mark.

---

## Style Decisions
- All section numbers use DM Mono, uppercase, tracked wide, in muted gold
- Navigation is transparent over hero, transitions to `#0A0A0A/90` backdrop-blur on scroll
- CTA primary: gold fill with black text; secondary: transparent with gold border and gold text
- Image overlays use `bg-gradient-to-t from-black/70 to-transparent` for text legibility
- No rounded corners on hero images or full-bleed sections; subtle `rounded-sm` only on small cards
