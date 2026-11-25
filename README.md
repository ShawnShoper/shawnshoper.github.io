# ShawnShoper Portfolio

A static personal project showcase for [ShawnShoper](https://github.com/ShawnShoper), featuring [TraceHalo](https://github.com/ShawnShoper/TraceHalo) and [Peek](https://github.com/ShawnShoper/peek).

The page is built with React and Vite, and all visible TraceHalo product imagery comes directly from the TraceHalo repository.

## TraceHalo content

The page reflects [v0.2.2 Beta, build 46](https://github.com/ShawnShoper/TraceHalo/releases/tag/v0.2.2), published November 25, 2026 (Asia/Shanghai). Version, date, release notes, universal DMG and SHA-256 links follow the published GitHub Release. The bilingual highlights cover window recovery, fixed percentage-chart scaling and device-status improvements. The RK R87PRO receiver is explicitly described as not reporting battery or charging fields.

Official screenshots and the app icon match TraceHalo release commit `74509afb065e941e447e488f44814da87105f396` byte for byte. The release continues to use the same published image files, so the originals and their dimensions are retained:

- `docs/images/{en,zh-Hans}/overview.png`: the new Live Monitor home, used in the hero and monitoring chapter.
- `docs/images/{en,zh-Hans}/live-monitor.png`: Menu Bar Layout, used in the menu bar chapter.
- `docs/images/{en,zh-Hans}/storage.png` and `menu-bar.png`: storage and the menu bar detail panel.
- `docs/images/en/input-devices.png`: the shared input-device image; upstream has no Chinese equivalent.
- `Resources/TraceHalo-AppIcon-Source.png`: the official icon.

Chinese visitors see Chinese product screenshots where upstream provides them; English visitors see the English originals. Captions identify these as official project screenshots. The product story retains application management and its default local-data preservation behavior alongside the current release improvements.

## Peek content

The page reflects [v0.4.1](https://github.com/ShawnShoper/peek/releases/tag/v0.4.1), published November 18, 2026 (Asia/Shanghai), and source commit `060b15329e27ee2319a7916adc4b645c71d2b003`. The release supports macOS 13+, Apple silicon and Intel.

The existing screenshots and app icon match the official repository byte for byte:

- `docs/images/peek-file-search.png`: the search hero and chapter.
- `audit/screenshot-toolbar-compact-option1-2026-08-17/implementation-toolbar-final-focused.png`: the capture toolbar referenced by the current README.
- `audit/ocr-reference-2026-08-16/implementation-window-final.png`: the OCR window.
- `docs/images/peek-settings.jpeg`: the settings image referenced by the current README.
- `PEEK/Resources/Assets.xcassets/AppIcon.appiconset/AppIcon-512.png`: the bundled official icon.

Upstream provides these images in Chinese; both page languages use the originals with localized captions and accessibility labels. Version highlights follow the published release notes. The privacy copy and policy link explain optional cloud translation and clipboard-history limits, including source-marker-dependent filtering and local storage without additional encryption.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static site is emitted to `dist/client`.
