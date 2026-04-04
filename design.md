# Design System — Lewis Center Barber Shop

## Brand Identity
Classic neighborhood barbershop with 21+ years of community trust. Owner Myron Byrd — "The Master Barber." Premium craft, old-school soul, modern edge.

## Color Palette
```css
--color-bg: #080808          /* Near black — deep, rich background */
--color-bg-card: #111111     /* Slightly lifted card surface */
--color-bg-section: #0d0d0d  /* Alternating section bg */
--color-gold: #C9A84C        /* Primary accent — classic barbershop gold */
--color-gold-light: #E8C76A  /* Hover/highlight gold */
--color-white: #F5F0E8       /* Warm white — not cold */
--color-gray: #888888        /* Muted body text */
--color-border: #222222      /* Subtle borders */
```

## Typography
- **Display/Hero:** `Bebas Neue` — bold, tall, masculine. All caps energy.
- **Subheadings:** `Oswald` — strong but readable, semi-bold
- **Body:** `DM Sans` — clean, modern, easy on dark backgrounds
- **Accent labels:** Letter-spaced uppercase in gold

## Layout Principles
- Full-bleed sections — no floating card islands
- Asymmetric: text left + visual right, or visual bleeds to edge
- Generous vertical padding — breathe, don't cram
- Gold dividers and horizontal rules to separate sections
- NO rounded corners on primary elements (sharp = precision)
- Subtle noise texture overlay on hero

## Motion
- Page load: staggered fade-up on hero text (name → tagline → CTA)
- Scroll-triggered: sections fade in from bottom on enter
- Hover: gold underline slides in on nav links, cards lift with gold border
- Keep it smooth — 0.3s ease transitions

## Section Themes
- Hero: full-screen, dark, dramatic — bold white + gold headline
- Services: dark card grid, gold pricing, sharp borders
- Barbers: horizontal scroll cards on mobile, grid on desktop
- Reviews: gold quote marks, italic text, subtle bg shift
- Book/CTA: gold background section — the ONE bright moment on the page
- Footer: near-black, minimal

## Do NOT
- No purple, blue, or pastel
- No rounded pill buttons (use sharp or slightly rounded max 4px)
- No stock photo vibes — feel real and local
- No generic barbershop clipart
- No white background sections
