# Storefront Migration — 2026-11-28

## Objective
Move LENGTA from hosted no-code experimentation to an independently maintained storefront with source control and a portable deployment architecture.

## Chosen stack
- Next.js App Router, React and TypeScript
- GitHub repository: 01workspace/LENGTA
- Vercel project: lengta-storefront
- Supabase: planned for catalog, customer accounts, orders and asset storage; not provisioned yet

## Current implementation
- A migration branch, `migration/nextjs-storefront`, holds the initial storefront foundation.
- The homepage establishes the editorial direction, responsive structure and approved palette.
- Brand documentation and machine-readable tokens use the central tagline OWN THE BEAUTY.
- Draft pull request: https://github.com/01workspace/LENGTA/pull/6

## Asset migration gate
The supplied source archive contains a logo, four campaign banners and product/category imagery. The binary originals are not yet committed to this repository. Three files explicitly named as SAXI assets are excluded from LENGTA. An additional generically named image in that same folder must be identified before reuse.
Before production use, record creator/photographer, license or written permission, model-release status, permitted channels, territory and duration. Preserve originals and create optimized web derivatives separately.

## Deployment status
- Vercel project linked to the GitHub repository.
- A preview deployment was requested from `migration/nextjs-storefront`.
- Production deployment is not approved. The first request was cancelled after Vercel reported a production target; a second request was created with the preview target left unset and verified as preview.
- Do not merge this branch or deploy production without explicit approval.

## Next work
1. Finish and verify the Vercel preview build.
2. Migrate the approved LENGTA logo, banners, category and product assets.
3. Build collection and product-detail pages with validated product data.
4. Add cart and checkout only after market, currency, payment provider and fulfillment rules are confirmed.
5. Design Supabase schema and row-level security before enabling customer/order data.
6. Run responsive, accessibility, link, form and checkout QA before launch.
