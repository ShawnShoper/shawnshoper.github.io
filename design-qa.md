# Design QA — TraceHalo baseline (historical)

> The evidence below records the original TraceHalo-only visual pass. It is retained as the Apple-style baseline and does not claim visual verification of the later dual-product Peek extension.

## Evidence

- Source visual truth: `/Users/shawnshoper/.codex/generated_images/019fe7bc-dbf3-75d3-aa5c-085bb79f6e26/exec-c5756327-fb0a-449c-84a6-3c99d22c0f3d.png`
- Source dimensions: `880 × 1788` pixels.
- Normalized source crop: `work/qa/source-v3-top.png`, top `880 × 1000` pixels.
- Desktop implementation, matching English state: `work/qa/implementation-desktop-english-top.png`, CSS viewport and pixels `880 × 1000`, device scale factor `1`.
- Side-by-side comparison: `work/qa/compare-desktop-top.png`, `1760 × 1000` pixels; source on the left, implementation on the right.
- Chinese desktop implementation: `work/qa/implementation-desktop-top.png`, `880 × 1000` pixels.
- Desktop scroll-story state: `work/qa/implementation-desktop-story.png`, CSS viewport and pixels `1440 × 1000`, device scale factor `1`.
- Mobile hero: `work/qa/implementation-mobile-top.png`, CSS viewport and pixels `390 × 844`, device scale factor `1`.
- Mobile story: `work/qa/implementation-mobile-story.png`, CSS viewport and pixels `390 × 844`, device scale factor `1`.
- Browser state: local Vite preview, unauthenticated public portfolio, dark theme.

## Full-view comparison

The normalized English comparison preserves the selected Aurora Product Journal direction: dark navy base, real product imagery, blue-violet halo, centered editorial hero, restrained pill CTAs and high-contrast typography. The implementation intentionally adds a glass navigation capsule for the required language control and places the real TraceHalo screenshot lower and smaller at the initial frame because it expands to full emphasis as the user scrolls.

The selected mock contains an invented dashboard. The implementation correctly substitutes the real TraceHalo repository screenshots, as required, while preserving the frame, crop, border, radius, shadow and surrounding aurora treatment.

## Focused-region comparison

- Hero typography and CTA region: Manrope display type, IBM Plex Mono eyebrow, negative display tracking, line height, button height, spacing and accent color match the source design language. English and Chinese variants both remain visually balanced.
- Product frame: real screenshots remain sharp, undistorted and correctly sized. Desktop scroll states use only opacity, translation and scale; no fake UI, custom SVG illustration or placeholder asset is present.
- Mobile: the header, language switcher, hero CTA stack and screenshot fit within `390px` with `scrollWidth === clientWidth === 390`. The scroll-driven desktop story becomes a complete vertical sequence so no information depends on animation.
- A separate mobile source mock was not provided; the mobile pass therefore validates responsive hierarchy and product constraints rather than claiming pixel fidelity to an unavailable source state.

## Required fidelity surfaces

- Fonts and typography: passed. Manrope and IBM Plex Mono maintain the selected hierarchy. The Chinese headline was reduced at the mobile breakpoint after the first pass to remove an orphaned final character.
- Spacing and layout rhythm: passed. Desktop uses large Apple-style breathing room and a pinned product stage; mobile collapses to readable sequential chapters without overlap or clipping.
- Colors and visual tokens: passed. Navy, violet, periwinkle, cyan and translucent border tokens remain consistent with the selected source.
- Image quality and asset fidelity: passed. Every product UI image and app icon is a real TraceHalo repository asset. The existing generated aurora is used only as an abstract background.
- Copy and content: passed. All navigation, hero, story, principles, status, about, captions, metadata, alt text and labels have complete Chinese and English versions. First visit defaults to Chinese.
- Icons: passed. All visible icons use the existing Phosphor icon library with consistent weight and alignment.
- States and interactions: passed. Anchor navigation, external project links, Chinese/English switching, URL state, document `lang`, title, description and persisted preference were exercised.
- Accessibility: passed. Semantic buttons and links, visible focus styles, descriptive alt text, a skip link and a full `prefers-reduced-motion` static fallback are present.

## Comparison history

### Pass 1 — blocked

- [P2] The Chinese mobile hero left the final character and punctuation on a third line at `390px`.
  - Fix: reduced the mobile display-size clamp while preserving the two-line composition.
- [P2] The real hero screenshot began too faint relative to the selected source.
  - Fix: raised the initial product opacity while preserving the scroll-driven reveal to full opacity.

### Pass 2 — passed

- Post-fix evidence: `work/qa/implementation-mobile-top.png` and `work/qa/compare-desktop-top.png`.
- No actionable P0, P1 or P2 differences remain.
- Browser console warnings/errors from the page: `0`.
- All visible product images loaded at their intrinsic dimensions when their sections entered the viewport.

## Primary interactions tested

- Desktop hero scroll: copy fades while the real product window scales and rises into focus.
- Desktop story scroll: Live Monitor, Storage, Input Devices and Menu Bar screenshots crossfade with synchronized chapter text and progress.
- Language switch: `中文` → `EN` produced `lang=en`, English metadata and `?lang=en`; switching back produced `lang=zh-CN`, Chinese metadata and removed the query parameter.
- Mobile navigation and sequential story layout at `390 × 844`.
- About anchor and lazy-loaded app icon.

## Follow-up polish

- [P3] A future pass could provide an alternate mobile-specific visual mock, but the current responsive interpretation is complete and usable.

final result: passed

## 2026-08-21 dual-product implementation check

- Added a persistent, high-visibility TraceHalo/Peek selector. Each option is a real anchor with a shareable `?p=tracehalo` or `?p=peek` URL and preserves the current language query and section hash.
- Added complete Chinese and English product copy, metadata, accessibility labels, four-chapter scroll stories, principles and closing sections for both products.
- Peek imagery is copied from the project itself: the current README file-search screenshot (`1456 × 1080`), the official settings screenshot, the implemented compact capture toolbar, the implemented OCR result window and the official app icon. Declared image dimensions match the source files.
- Desktop scroll choreography remains transform/opacity based. Compact and `prefers-reduced-motion` layouts render all chapters sequentially without depending on animation.
- Production Vite build passed, Sites package preparation passed, `git diff --check` passed, and all four Sites worker tests passed.
- A new browser screenshot comparison was not captured in this implementation pass; the historical screenshots above must not be treated as evidence for the Peek state.
