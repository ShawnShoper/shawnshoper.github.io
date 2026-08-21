# Design QA — Airy Apple product story

## Evidence

- Selected reference: `/Users/shawnshoper/.codex/generated_images/019fe7bc-dbf3-75d3-aa5c-085bb79f6e26/exec-5834d04c-6ecb-4b5a-9a52-afa048950533.png` (`880 × 1816`).
- Current implementation capture: `work/qa/implementation-880x1816.png` (`880 × 1816`, Peek, Chinese).
- Required combined comparison: `work/qa/reference-vs-implementation.png`; reference on the left, implementation on the right.
- Browser QA target: local Vite preview at `http://127.0.0.1:4174/`.

## Visual comparison

The implementation follows the selected first mock's light Apple-style direction: translucent rounded navigation, blue-white ambient light, a centered high-contrast headline, restrained pill actions, a large elevated product window, generous white space, and alternating product-story rows.

The reference contains fabricated lower-page UI and a fabricated avatar. Those elements were intentionally not copied. Every visible product window in the implementation is a real Peek or TraceHalo project screenshot, and the developer section uses only the two official application icons.

The product selector is larger than in the reference because the product requirement calls for an obvious first-class Peek/TraceHalo switch. It remains visually integrated as a two-option segmented control rather than a separate technical navigation panel.

## Fidelity surfaces

- Typography: passed. Manrope provides the large, calm display hierarchy; IBM Plex Mono is limited to small product labels and indices.
- Spacing and hierarchy: passed. The first viewport contains the product selector, headline, actions, and the beginning of the real hero screenshot at `1280 × 720`; the `880 × 1816` comparison retains the reference's broad breathing room.
- Colors and surfaces: passed. White, pale blue, soft violet, translucent borders, and restrained shadows replace the previous dark cinematic palette.
- Real imagery: passed. Peek uses file search, capture toolbar, OCR, and settings assets; TraceHalo uses live monitor, storage, input device, and menu-bar assets. No generated product interface appears in the page.
- Responsive behavior: passed. At `390 × 844`, the product switcher remains obvious, actions stack, screenshots fit the viewport, chapter order stays readable, and `documentElement.scrollWidth === innerWidth === 390`.
- Reduced motion: passed by implementation inspection. The media query disables animation and transitions, forces reveal content visible, and removes hero transforms; the readable layout does not depend on motion.
- Accessibility: passed. The page includes a skip link, semantic navigation/sections, descriptive real-image alt text, visible focus treatment, pressed/current states, and synchronized document language and metadata.

## Interaction verification

- Product switch: Peek → TraceHalo produced `?p=tracehalo`, updated the active product, title, metadata, copy, accent color, and screenshots.
- Language switch: Chinese → English preserved the product and produced `?p=tracehalo&lang=en`, `html[lang="en"]`, and complete English copy including the AI-programming footer statement.
- Deep link: `?p=peek&lang=en#feature-recognition` loaded Peek in English, selected Peek, and scrolled to the recognition chapter.
- Default handoff state: the preview is returned to `?p=peek` in Chinese.
- Browser console warnings/errors: `0`.

## Comparison history

### Pass 1 — P2 fixes applied

- The initial hero placed the real screenshot entirely below a `720px` viewport. Removed the redundant product-identity badge and tightened the selector-to-headline and headline-to-image spacing so the product appears in the first viewport.
- The previous dark, pinned, scroll-scrubbed structure conflicted with the selected light mock and the beginner-friendly goal. Replaced it with a complete static story enhanced by subtle reveal, hover lift, ambient motion, and light parallax.
- The previous developer copy described ShawnShoper as an independent developer. Replaced it with the required AI-programming statement and added “所有应用均由 AI 编程实现” to the footer.

### Pass 2 — passed

- Combined reference/implementation comparison reviewed.
- Peek and TraceHalo desktop states reviewed with real screenshots.
- Chinese/English, product query state, chapter hash, mobile overflow, and console state verified.
- No actionable P0, P1, or P2 differences remain.

final result: passed
