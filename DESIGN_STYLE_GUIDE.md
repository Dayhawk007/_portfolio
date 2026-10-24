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

The navigation is a fixed command strip: `AYUSH.SH` anchors the left edge while all five numbered destinations remain visible as a single directory on desktop. The current section is a white block that glides between labels as the reader scrolls. Labels lift by two pixels on hover and their small index rule fills from left to right. This gives the navigation neo-brutalist structure without adding ornamental controls.

- Keep the five existing labels and IDs synchronized.
- Any added link needs a corresponding unique section ID.
- On small screens, collapse the directory into a boxed `[ INDEX ]` control. Its panel is the same numbered directory, not a separate navigation pattern; close it after a selection and keep the main-content blur as an orientation cue.
- Use visible focus styles when evolving this component; the current custom button removes the browser outline and should be improved rather than copied blindly.

### Hero and primary CTA

The hero pairs “Ayush here.” with a compact, looping role carousel—engineer, nerd, tinkerer, caffeine addict, maybe a sentient being, then the dry correction “Absolutely not.”—and a visible-grid composition. The descriptive paragraph beneath the carousel reads “I craft niche solutions, automate the tedious, and turn nuanced problems into systems that quietly work.” Each role enters with a clipped reveal, makes one short hard-edged glitch offset, and exits before the next appears. Primary buttons retain one boxed white face border and use a hard black upper-left shadow for neo-brutalist elevation; the shadow compresses on hover as the face inverts. Do not add a second outer outline. Use a single primary action and link it to an on-page destination when possible.

The `SYSTEM / 01` composition may animate passively as a square-only neo-brutalist study. Keep the grid calm and use two thin square frames that contract through it toward the central icon tile; the next monochrome line-art visual—coffee, controller, bug, workstation—then crossfades in cleanly. Time outgoing and incoming icon fades to overlap, so the tile is never empty. Use only a subtle vertical bounce inside the tile. Keep borders thin, motion precise, and the palette strictly black and white. It should feel modern and editorial—not like a dashboard, loader, or sci-fi control panel.

### Introduction opener

The site opens with a full-screen editorial lock-up, not a name card: a compact, useful-work manifesto, one dry human aside, a thin progress rule, and minimal status metadata. The three-line statement, supporting copy, and status reveal in measured beats across a single roughly six-second sequence, then the opener softly clips into the portfolio. Each line has its own padded reveal mask, so animation never clips adjacent type or letterforms. Keep the copy concise and lightly witty—personality belongs in the words, not a busy illustration. Do not add secondary illustrations, loops, or interaction prompts. It uses the same monochrome grid and restrained straight-line motion as the rest of the site.

### Section heading

All standard sections begin with a numbered, rule-led `section-kicker` and a large Space Grotesk heading. Reveal headings from a clipped container; do not vary heading animations between sections without a purpose.

### Career log

Experience is a system-log ledger rather than a conventional timeline. Each full-width record has a restrained `[ 01 ] / LOG` index rail, company and period on one compact top line, a role title, a short outcome-focused description, square stack tags, and one explicit `Impact →` line. Records are separated by thin rules and may tint softly on hover; invert only the index rail for the neo-brutalist response. On scroll, the record should rise into place as a single unit—do not animate each sentence or imitate a terminal.

### Build archive

Work is a project cassette deck, not a career-log sequel or a grid of isolated cards. Four thin, numbered modules overlap with a small deliberate offset. Selecting a cassette pulls it to the front, inverts its entire surface to white, and opens one concise project brief: purpose, square stack tags, one `Capability →` receipt, and an external project link. Inactive cassettes show only their number, name, and type. Keep the response crisp and structural—no soft scaling, thumbnails, or dashboard decoration.

### Capability sheet

The toolkit is a tabbed capability sheet, not a generic skill grid or a dense command interface. Render technical categories—AI systems, languages, frontend and mobile, backend systems, data and insights, cloud and delivery, and engineering practice—as thin tabs across the top. Selecting one opens a single focused sheet with its index, category name, concise capability count, and short numbered list. Core languages and recognised frameworks belong in that list; specialised services, analytics, media, testing, and workflow tools live in a compact “Also worked with” rail. Keep only one category visible at a time. Preserve square rules, compact mono metadata, and whole-row inversion for list entries; the interaction should make technical depth easier to scan, not feel exhaustive or crowded.

### Closing statement

The contact close is an editorial ending, not a card or a generic list of social links. Lead with one large, direct question, a short supporting sentence, and one white email-first action. LinkedIn and GitHub stay as quiet mono links beneath it, followed by a single low-key availability note. Preserve the generous empty space; do not introduce an illustrative metaphor. Keep all routes fully interactive, protect external links with `target="_blank"` and `rel="noopener noreferrer"`, and keep `mailto:` in the same browsing context.

## Motion

Two complementary mechanisms are in use:

1. `.section-fade` uses an `IntersectionObserver` to move sections from `12px` below and fade them in over `0.45s`.
2. Framer Motion handles clipped heading reveals, straight-line timeline drawing, and short offset/inversion feedback.
3. The opener uses a one-time CSS sequence for its progress rule, name lock-up, and role descriptor, then clips away into the portfolio. It does not loop.

Default timing is short and direct: `0.15–0.2s` for hover feedback, `0.35–0.5s` for entrance transitions, and modest staggered delays only for repeated items. There are no floating, pulsing, or spring animations.

When adding motion:

- Animate opacity and transform instead of layout-affecting properties where possible.
- Use `whileInView` for local content reveals and keep starting offsets small.
- Do not stack `.section-fade` and a dramatic Framer Motion entrance on the same visual unit.
- Keep the global `prefers-reduced-motion` fallback intact before adding any new nonessential animation.

## Responsive behavior

| Range | Expected behavior |
| --- | --- |
| Mobile (default) | Single-column content, one-column capability lists, hidden hero illustration, overlay navigation, compact text, and wrapped technology tags. |
| Up to `767px` | Experience entries, project cassettes, and the capability sheet remain single-column so their metadata never competes with content. |
| `md` and up | Hero becomes two columns; the capability sheet restores its metadata column and two-column capability list; headings and side padding grow. |
| `lg` and up | Desktop navigation replaces the menu button. |

Build mobile-first. Test long project titles, long technology labels, the rotating hero labels, and the email action at narrow widths. Avoid horizontal overflow; content should reflow rather than scale down.

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
