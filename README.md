# ShawnShoper Portfolio

A static personal project showcase for [ShawnShoper](https://github.com/ShawnShoper), featuring [TraceHalo](https://github.com/ShawnShoper/TraceHalo) and [Peek](https://github.com/ShawnShoper/peek).

The page is built with React and Vite, and all visible TraceHalo product imagery comes directly from the TraceHalo repository.

## TraceHalo content

The page reflects [v0.2.1 Beta](https://github.com/ShawnShoper/TraceHalo/releases/tag/v0.2.1), published November 9, 2026 (Asia/Shanghai). Release status and download links follow the published GitHub Release.

Official screenshots and the app icon are sourced from TraceHalo commit `93ad6dff94db0a32cff06f3d69a537f7c5dd7952`:

- `docs/images/{en,zh-Hans}/overview.png`: the new Live Monitor home, used in the hero and monitoring chapter.
- `docs/images/{en,zh-Hans}/live-monitor.png`: Menu Bar Layout, used in the menu bar chapter.
- `docs/images/{en,zh-Hans}/storage.png` and `menu-bar.png`: storage and the menu bar detail panel.
- `docs/images/en/input-devices.png`: the shared input-device image; upstream has no Chinese equivalent.
- `Resources/TraceHalo-AppIcon-Source.png`: the official icon.

Chinese visitors see Chinese product screenshots where upstream provides them; English visitors see the English originals. Image dimensions match the source files. Application-management changes are described using the published release notes.

## Peek content

The page reflects [v0.3.1](https://github.com/ShawnShoper/peek/releases/tag/v0.3.1), published November 9, 2026 (Asia/Shanghai), and source commit `07b4a96dc5785c0679903f88b50888e5989d6ae5`. The release supports macOS 13+, Apple silicon and Intel.

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
