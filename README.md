# ShawnShoper Portfolio

A static personal project showcase for [ShawnShoper](https://github.com/ShawnShoper), featuring [TraceHalo](https://github.com/ShawnShoper/TraceHalo).

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
