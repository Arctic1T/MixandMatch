# SORA — Design Directions

## Three possible directions

| Theme Name | Very Brief Intro | Probability |
| --- | --- | --- |
| Ember Counter | A cinematic, low-lit omakase experience shaped by cedar, lacquer, and a single warm ember tone. It should feel like arriving somewhere carefully kept secret. | 0.07 |
| Stone & Steam | A pale, sculptural editorial world influenced by river stone, mist, and handmade ceramic. It foregrounds stillness and tactility rather than drama. | 0.04 |
| Tokyo Paperwork | A lively contemporary graphic system that turns menu details into layers of pasted paper, ink stamps, and playful type. It is social, bright, and urban. | 0.09 |

## Selected approach: Ember Counter

### Design Movement

**Japanese wabi-sabi hospitality meets contemporary editorial art direction.** The site is conceived as a slow approach to an intimate counter rather than a conventional restaurant brochure.

### Core Principles

1. **Cinematic restraint:** Deep shadow, warm pools of light, and a single compelling frame create anticipation without visual noise.
2. **Craft as choreography:** Motion is quiet and deliberate; each interaction should suggest an attentive chef's hand rather than a generic interface flourish.
3. **Material contrast:** Cedar grain, carbon-black ink, rice-paper warmth, and a restrained glossy lacquer finish make digital surfaces feel tangible.
4. **Asymmetrical ceremony:** Sections use off-axis composition, extended edge-to-edge images, and interrupted rules instead of centralized card grids.

### Color Philosophy

The palette begins in **sumi ink black** and charcoal so the visual field feels calm and enclosed. It is relieved by **ember persimmon** as an ownable moment of appetite and direction, then softened with rice paper, cedar, and a muted mineral blue. Color is used to focus attention, not decorate every surface.

### Layout Paradigm

The page behaves like a sequence of **thresholds**. A cinematic arrival opens into an offset menu strip, then a narrow story passage, a counter reservation panel, and a final editorial tasting tableau. Full-bleed media alternates with selective margins and vertical labels, creating a paced, gallery-like progression.

### Signature Elements

1. A thin **persimmon-red vertical rule** anchors key pieces of information and runs through the experience.
2. **Circular seal contours** and a brushstroke-inspired mark appear as understated navigation, badge, and cursor motifs.
3. Fine **rice-paper grain** sits behind dark surfaces, with brushed metal-like highlight lines activated only at the edges of selected cards.

### Interaction Philosophy

Interactions reward attention. The supplied edge-reactive glow is tuned to candlelight rather than neon; on hover, selected menu and reservation surfaces receive a warm directional glow. Calls to action compress slightly on press, and navigation responds with a measured underline rather than a jarring color change.

### Animation

The supplied fade pattern introduces content once as it enters view, using opacity and a brief 8px blur release. Choreography should be staggered in 60–90ms increments, with 500–850ms entrances using an ease-out curve. Video and ambient decorative motion remain slow; all nonessential effects are disabled for reduced-motion preferences. No bounce, spin, or large layout movement is used.

### Typography System

**Cormorant Garamond** provides the expressive high-contrast display voice for names, seasons, and dishes. **DM Sans** supplies precise, calm reading text and utility labels. Headings are oversized and editorial; uppercase navigation uses generous tracking; Japanese-style serif rhythm is suggested through spacing rather than imitation characters.

### Brand Essence

**SORA is an intimate omakase house for diners who want the ritual of the counter as much as the course itself.** Personality: **measured, sensorial, exacting**.

### Brand Voice

Headlines should be concise, poetic, and specific. CTAs should invite a considered next step, while microcopy should quietly explain the ritual.

> “The counter is set. The evening unfolds.”

> “Reserve the seat closest to the craft.”

### Wordmark & Logo

The logo is a hand-seal-inspired circular horizon: a deep persimmon brush ring interrupted by a rising-sun cutout and a small wave gesture. The wordmark is treated as a spaced, editorial signature rather than a default typeset label.

### Signature Brand Color

**Ember Persimmon — `#BE3B2F`**

## Style Decisions

- Ember Persimmon is a restrained signal for seals, rules, calls to action, section markers, and key numerals. It is never used as a dominant full-field background.
- Every major section operates as a visible threshold, marked by at least one composed focal moment: an image, rule, seal, numeral, or editorial passage that moves the counter ritual forward.
- The vertical rule and circular seal system remains continuous across the page as a form of navigation and ceremony.
