# LENGTA Typography System — v1

**Brand:** LENGTA  
**Official tagline:** WEAR YOUR BEAUTY.  
**Brand philosophy:** OWN THE BEAUTY.  
**Status:** Recommended system for implementation; font licensing and final logo lettering require confirmation before production.

## Typography direction

LENGTA typography should feel editorial, feminine, confident and contemporary. Use contrast between a refined display face and a highly legible sans-serif. Avoid overly decorative scripts, ultra-thin body text and generic all-serif interfaces.

## Recommended type pairing

### Display — Cormorant Garamond
Use for editorial headlines, collection titles, campaign statements and selected brand moments. Prefer Medium (500) or SemiBold (600) for legibility. Use optical sizing where available. Do not use this font as the final logo wordmark without separate custom lettering approval.

### Interface and body — Manrope
Use for navigation, product names, descriptions, buttons, size guides, forms and utility text. Use Regular (400), Medium (500) and SemiBold (600). Prioritize readable sizes and contrast.

**Font sourcing:** Obtain font files only from the official Google Fonts distribution or another verified authorized source. Confirm the applicable SIL Open Font License notices and include required license files if font files are bundled in the repository. Do not commit font binaries until licensing and file provenance are verified.

## Type scale

| Token | Desktop | Mobile | Weight | Use |
|---|---:|---:|---:|---|
| Display XL | 64 px | 42 px | 500 | Homepage/editorial hero |
| Display L | 48 px | 36 px | 500 | Collection hero |
| H1 | 40 px | 32 px | 600 | Page title |
| H2 | 30 px | 26 px | 600 | Section heading |
| H3 | 22 px | 20 px | 600 | Product/section title |
| Body L | 18 px | 17 px | 400 | Editorial copy |
| Body | 16 px | 16 px | 400 | Standard body |
| UI | 14 px | 14 px | 500 | Navigation, labels |
| Caption | 12 px | 12 px | 500 | Metadata and helper text |

## Brand lockup rules

- Use the approved logo artwork as a separate asset; do not recreate it with live text.
- Public-facing tagline must read exactly **WEAR YOUR BEAUTY.**
- **OWN THE BEAUTY.** remains the brand philosophy and must not replace the public tagline in the primary logo lockup.
- Keep tagline letter spacing generous but ensure readability at small sizes.
- Do not stretch, skew, outline, add shadows to, or change the proportions of the approved logo.
- The SVG currently in the repository is an interpretation, not the final outlined master. Do not treat its font fallback as approved logo typography.

## Ecommerce implementation

- Use Manrope for all functional UI and product information.
- Use Cormorant Garamond selectively for editorial headlines and collection storytelling.
- Product names should remain easy to scan; avoid all-caps for long names.
- Keep price, size selection, stock state, delivery and returns information in a clear sans-serif hierarchy.
- Use responsive type sizes; do not simply scale desktop typography down.
- Maintain WCAG-conscious contrast and avoid small, low-contrast text over photography.

## CSS starter tokens

```css
:root {
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-ui: "Manrope", Arial, sans-serif;
  --type-display-xl: clamp(2.625rem, 6vw, 4rem);
  --type-display-lg: clamp(2.25rem, 4.5vw, 3rem);
  --type-h1: clamp(2rem, 3.5vw, 2.5rem);
  --type-h2: clamp(1.625rem, 2.8vw, 1.875rem);
  --type-h3: 1.375rem;
  --type-body-lg: 1.125rem;
  --type-body: 1rem;
  --type-ui: 0.875rem;
  --type-caption: 0.75rem;
}
```

## Approval and implementation gates

1. Treat this as the recommended digital typography pairing, not final custom logo lettering.
2. Verify font files, licenses and rendering before adding binaries or deploying.
3. Test Latin glyph coverage, punctuation, numerals and all ecommerce UI states.
4. Review desktop and mobile layouts with real product content.
5. Do not alter an approved live site without explicit owner approval.
