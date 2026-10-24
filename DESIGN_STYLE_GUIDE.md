# Design & Style Guide

## Purpose

This guide describes the visual and implementation system already established by the portfolio. Use it when adding a section, changing content presentation, or refining interaction so the site continues to feel like one composed experience.

## Design intent

The portfolio is a **dark, editorial, technical** experience with restrained retro-brutalist texture. It should feel calm, precise, and self-assured:

- Let the work and writing lead; decoration is atmospheric, not informational.
- Use monochrome contrast as the default. Blue and purple are subtle ambient accents, not brand-colored UI controls.
- Favor hairline borders, generous empty space, and concise text over heavy panels, gradients, or ornamental icons.
- Movement should confirm hierarchy and interaction, never delay reading.
- Imperfection is structural and repeatable: a visible grid, slight offset shadows, square corners, and system-like labels—not arbitrary disorder.

## Foundations

### Color

| Role | Current implementation | Use |
| --- | --- | --- |
| Canvas | `black` / `#000` | Page background and primary navigation. |
| Primary content | `white` / `#fff` | Headlines, active controls, icons, timeline markers. |
| Secondary content | `gray-300` | Supporting copy and context. |
| Muted content | `gray-400` | Longer descriptions and lower-priority detail. |
| Quiet border | `white/10`–`white/20` | Navigation divider, cards, contact rows, tags. |
| Emphasized border | `white/30`–`white/50` | Primary CTA and skill chips. |
| Surface | `white/5` or transparent | Tag fills and hover surfaces. |
| Texture | White grid at low opacity plus static grain | Atmospheric structure; never compete with copy. |

Do not introduce a saturated accent palette for ordinary links, buttons, or cards. Hover states should generally use stronger contrast, not a new color. Avoid decorative colored blobs or gradients; the interface is deliberately monochromatic.

### Typography

`Space Grotesk` is loaded in `public/index.html` and registered as `font-spaceGrotesk`. It is used for the wordmark and section headings. Body text inherits the system sans stack from Tailwind.

| Element | Classes / size | Weight and guidance |
| --- | --- | --- |
| Wordmark | `text-3xl font-spaceGrotesk` | Medium; uppercase name with tracking. |
| Hero title | `text-5xl md:text-7xl` | Bold; one clear statement. |
| Section title | `text-5xl md:text-6xl font-spaceGrotesk` | Medium; leave substantial space below. |
| Card/timeline title | `text-2xl` | Medium or bold depending on hierarchy. |
| Lead text | `text-xl md:text-2xl text-gray-300` | One concise value statement. |
| Body text | Base or `text-lg`, usually `text-gray-400` | Prioritize readable line lengths. |
| Metadata/tag | `text-sm` | Restrained, never visually louder than the card title. |

Use sentence case in UI labels except for the `AYUSH` wordmark. Keep headings brief; do not add display typefaces or more than two weights without an intentional redesign.

### Layout and spacing

- Every section sits in `container mx-auto px-8 md:px-10 max-w-7xl` (the main shell currently starts at `px-4`). Reuse this rhythm for new sections.
- Desktop content width is capped at `max-w-7xl`; focused content blocks narrow to `max-w-2xl`, `max-w-5xl`, or `max-w-6xl`.
- Section spacing is `py-20`; the hero occupies `min-h-screen`.
- Core gaps: `gap-4` for compact grids, `gap-8` for cards, `gap-12` for major hero columns, `mb-16` after standard section headings.
- Interactive surfaces are square and use thin white borders; offset shadows appear only on hover to create a printed-poster effect.
- The fixed navigation is `h-20`; retain `scroll-padding-top: 4rem` and verify anchors do not land under the header.

## Components and patterns

### Navigation

The navigation is fixed, blurred, black, and divided with a faint animated line. Links receive a short underline reveal. On small screens, the hamburger opens a full-width overlay below the header.

- Keep the five existing labels and IDs synchronized.
- Any added link needs a corresponding unique section ID.
- Close the mobile menu after navigation; keep the main content blur as an orientation cue.
- Use visible focus styles when evolving this component; the current custom button removes the browser outline and should be improved rather than copied blindly.

### Hero and primary CTA

The hero pairs a direct introduction with a static, visible-grid composition. The CTA is a square outlined rectangle that inverts to white and shifts a few pixels on hover. Use a single primary action and link it to an on-page destination when possible.

### Section heading

All standard sections begin with a numbered, rule-led `section-kicker` and a large Space Grotesk heading. Reveal headings from a clipped container; do not vary heading animations between sections without a purpose.

### Timeline

Experience is a left-ruled vertical sequence: a 2px white line, white circular marker, title, organization/date metadata, and muted description. Preserve chronological reading order and keep descriptions outcome-focused.

### Project card

Project cards occupy a one-column mobile / two-column medium-and-up grid. The first card may span the desktop grid to create deliberate asymmetry. The whole card is the external link. Use a thin border, a project index, clear title, short muted description, and square compact tags. On hover, invert the card and offset it 4px; avoid nesting other interactive controls inside the anchor.

### Skill tile

Skills are square-cornered outlined cells in a responsive 2/3/4-column grid. On hover they invert to white with black text and offset slightly; do not use soft scaling or bounce. Prefer concise canonical technology names.

### Contact row

Contact methods are full-width, outlined rows with an icon and readable destination. The entire row is interactive. Keep external links protected with `target="_blank"` and `rel="noopener noreferrer"`; `mailto:` remains in the same browsing context.

## Motion

Two complementary mechanisms are in use:

1. `.section-fade` uses an `IntersectionObserver` to move sections from `12px` below and fade them in over `0.45s`.
2. Framer Motion handles clipped heading reveals, straight-line timeline drawing, and short offset/inversion feedback.

Default timing is short and direct: `0.15–0.2s` for hover feedback, `0.35–0.5s` for entrance transitions, and modest staggered delays only for repeated items. There are no floating, pulsing, or spring animations.

When adding motion:

- Animate opacity and transform instead of layout-affecting properties where possible.
- Use `whileInView` for local content reveals and keep starting offsets small.
- Do not stack `.section-fade` and a dramatic Framer Motion entrance on the same visual unit.
- Keep the global `prefers-reduced-motion` fallback intact before adding any new nonessential animation.

## Responsive behavior

| Range | Expected behavior |
| --- | --- |
| Mobile (default) | Single-column content, 2-column skills, hidden hero illustration, overlay navigation, compact text. |
| `md` and up | Hero becomes two columns; project cards become two columns; skills become three columns; larger headings and comfortable side padding. |
| `lg` and up | Desktop navigation replaces the menu button; skill grid becomes four columns. |

Build mobile-first. Test long project titles, long technology labels, and the email address at narrow widths; the contact label uses `break-all` on mobile specifically for this reason.

## Accessibility and quality checklist

Before merging a visual change:

- [ ] Maintain clear text contrast against the black canvas.
- [ ] Ensure every interactive item has a keyboard-visible focus state and a descriptive label.
- [ ] Keep heading levels sequential (`h1` in the hero, then `h2` for sections).
- [ ] Respect reduced-motion preferences for newly added animation.
- [ ] Keep touch targets at least about 44 × 44px.
- [ ] Check the mobile menu opens, closes, and remains keyboard operable.
- [ ] Check external links use safe `rel` attributes.
- [ ] Verify section anchor targets remain visible beneath the fixed header.
- [ ] Run `npm run build` before deployment.

## Implementation conventions

- Use Tailwind utilities for component styling; place only global behavior and reusable global utilities in `src/index.css`.
- Keep content in the JSON data files where a component already consumes structured content.
- Reuse the visual tokens above instead of hard-coding new hex values.
- Use semantic HTML first. Prefer an anchor for navigation, a button for a state change, and a section with an ID for page landmarks.
- `tailwind.config.js` is the home for shared animation and typography extensions. Remove unused animation definitions only as an intentional cleanup, not incidentally.

## Observed improvement opportunities

These are audit findings, not a mandate to redesign:

1. Keep visible `:focus-visible` treatments on every newly added interactive element.
2. Retire unused Tailwind animation definitions if they are no longer part of the product direction.
3. Decide whether to delete the inactive `src/App.css` or repurpose it; it is not part of the rendered style system today.
