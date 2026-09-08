# Reusable website build prompts

## 1. Premium restaurant website prompt

Build a polished, production-ready, responsive website for **[RESTAURANT NAME]**, a **[restaurant type and location]**. Use the visual quality and interaction language of a premium editorial restaurant site: strong typography, asymmetrical sections, deliberate pacing, layered depth, tactile hover states, and scroll-triggered reveals. First choose a distinct design direction from the restaurant’s actual brand assets, then state the chosen palette, typography, material references, layout rhythm, and motion rules before coding.

Use the supplied logo, food photography, interior photos, and brand colors as the source of truth. Do not invent menu facts, prices, opening hours, addresses, phone numbers, dietary claims, customer reviews, star ratings, awards, or testimonials. If a required fact is missing, show a clearly marked placeholder or ask for it. Never create fake user-generated content. Build authentic review-request UI instead if real reviews are not supplied.

Create a mobile-first landing page with a welcome or language gate when requested, a cinematic hero, clear restaurant positioning, featured dishes, menu or course cards, story/chef section, gallery, hours and location, reservation or contact CTA, and a useful footer. Use the supplied React Bits components when provided, such as FadeContent, BorderGlow, TextLoop, or other hover/scroll interactions. Keep motion under control, use GPU-friendly opacity/transform animation, support prefers-reduced-motion, and make every interactive element keyboard accessible.

For the hero, prefer a real restaurant video or a generated cinematic sequence when available. If video generation is unavailable, create a video-ready layout with an animated photo collage, layered gradients, subtle grain, depth offsets, and a clearly isolated media slot so the video can be swapped in later. Make the hero feel dimensional without requiring a heavy 3D engine unless the brief explicitly needs one. Validate desktop, tablet, and mobile screenshots; run type checks and Vitest tests; and provide a checkpoint-ready result.

## 2. Premium regular-business website prompt

Build a polished, production-ready, responsive website for **[BUSINESS NAME]**, a **[business category]** serving **[audience and location]**. Create a distinct visual identity from the supplied logo, colors, photography, and business materials instead of using a generic template. Before coding, define the chosen design philosophy, palette, typography, visual materials, interaction style, and responsive layout strategy.

Use the supplied brand assets as the source of truth. Do not fabricate claims, customer reviews, ratings, certifications, partner logos, statistics, case studies, pricing, addresses, phone numbers, guarantees, or testimonials. If information is missing, keep a clearly labeled placeholder or ask the owner for the real content. When testimonials are unavailable, use a review-request or proof-needed section rather than invented quotes.

Build a mobile-first site with a clear welcome/hero area, strong value proposition, services or offerings, process/how-it-works section, proof or portfolio gallery, about/team story, location/contact details, lead form or booking CTA, FAQ when useful, and a focused footer. Use supplied React Bits components such as fade-on-scroll reveals, pointer-reactive borders, looping text, magnetic or tactile buttons, and expandable cards when they fit the brand. Keep interactions subtle and responsive, support keyboard navigation and prefers-reduced-motion, use strong contrast, and avoid motion that blocks content.

Use real photography whenever possible. If a cinematic video is requested but unavailable, build a video-ready hero with layered stills, parallax-like depth created with CSS transforms, subtle textures, and a replaceable media slot. Avoid pretending that a 2D effect is a true 3D scene. Validate desktop and mobile compositions, check all image URLs, run type checks and Vitest tests, and save a recoverable project checkpoint before delivery.
