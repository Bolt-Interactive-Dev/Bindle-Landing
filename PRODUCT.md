# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary user: the family member who takes on organizing and preserving the family's shared history (photos, videos, PDFs, drawings, documents) and invites relatives — including non-technical, older relatives like grandparents — into a private, shared vault. The vault must stay simple enough for those invited relatives to use with no learning curve.

## Product Purpose

Bindle is a private family-sharing iOS app that keeps photos, videos, PDFs, and drawings grouped into private family "vaults," completely separate from the camera roll. It exists to turn scattered files (screenshots, camera roll clutter, one-off shares) into one organized, lasting family story that multiple relatives can contribute to and revisit.

## Positioning

Not a camera-roll backup tool and not a generic cloud file share. Bindle's mechanism is the private, contextualized "vault" — content deliberately curated and annotated with context, shared into a small trusted family circle, and simple enough that the least tech-savvy relative (explicitly: "Grandma") can use it. Competing products either dump everything into an undifferentiated photo stream or are too complex for non-technical relatives to join.

## Operating Context

- The landing page is the pre-launch marketing surface: current CTA is "Join the waitlist," not a download/purchase flow.
- The product itself is a native iOS app (iPhone first); this repo is the marketing website only, so its own design platform is `web`.
- Sharing flow includes inviting family members into a vault and exporting a vault (download or printable book) — see `img/share-export-preview.webp`, `img/export-preview.png`.
- Waitlist signups flow through a custom Cloudflare Pages Function + D1 (email confirmation, Turnstile spam protection, rate limiting) — see `WAITLIST_SETUP.md`, `schema.sql`, `functions/`.

## Capabilities and Constraints

- Platform availability: iPhone only at launch. Android is planned but **not available** — copy/design must never imply Android is available now (confirmed FAQ answer already states this).
- Pricing: freemium — Free tier up to a 25-memory cap; a paid tier beyond that. Everything kept in the free tier stays the user's either way.
- Product is pre-launch; there is no shipped app yet for this landing page to link to besides the waitlist.

## Brand Commitments

- Name: Bindle.
- Tagline framing already in use: "The Family Sharing App That Actually Works" / "Family sharing, without the clutter."
- Tone: warm, simple, reassuring toward non-technical relatives (repeated "Grandma will love it" framing) — not techy or feature-dense.

## Evidence on Hand

- No real customer testimonials, quotes, logos, or press mentions exist yet — product is pre-launch on a waitlist. Future work must not fabricate any of these.
- Product screenshots/mockups exist under `img/` (hero, vault grid, app cover, share/export previews) and may be used as real evidence of the UI.
- No Android build, App Store listing, or launch date to cite.

## Product Principles

1. Simplicity for the least technical invited relative is a hard requirement, not a nice-to-have — every design decision should pass the "Grandma" test.
2. The vault (private, contextualized, family-scoped) is the core differentiator from generic camera-roll or cloud-share products; do not blur it into a generic photo-backup pitch.
3. Never overstate launch/availability status: iPhone-only, waitlist-stage, no Android yet, no testimonials/press yet.
4. Preserve the free-tier promise (25-memory cap, keep what you've saved either way) accurately when referencing pricing.
