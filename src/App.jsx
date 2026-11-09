import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Code,
  GithubLogo,
  GlobeHemisphereWest,
  MagnifyingGlass,
  Monitor,
  ShieldCheck,
} from "@phosphor-icons/react";

const githubProfile = "https://github.com/ShawnShoper";
const supportedLanguages = ["zh", "en"];
const supportedProducts = ["tracehalo", "peek"];

const shellCopy = {
  zh: {
    skip: "跳转到正文",
    brandLabel: "返回 ShawnShoper 首页",
    nav: { work: "产品", about: "关于", github: "GitHub", label: "作品集导航" },
    language: { label: "选择语言", zh: "中文", en: "EN" },
    products: {
      label: "选择展示产品",
      title: "探索产品",
      tracehalo: "实时了解 Mac 状态",
      peek: "本地搜索、截图与识别",
    },
    about: {
      eyebrow: "关于我",
      title: "你好，我是 ShawnShoper。",
      copy: "我用 AI 编程把产品想法变成真实应用，重视工艺、清晰度和使用体验。TraceHalo 让 Mac 状态更易理解，Peek 让查找、截图与识别更顺手。",
      action: "在 GitHub 联系我",
      traceHaloIconAlt: "TraceHalo 应用图标",
      peekIconAlt: "Peek 应用图标",
    },
    footerLabel: "开源产品",
    aiBuilt: "所有应用均由 AI 编程实现",
    externalProfile: "在新窗口打开 ShawnShoper 的 GitHub 主页",
  },
  en: {
    skip: "Skip to content",
    brandLabel: "ShawnShoper home",
    nav: { work: "Products", about: "About", github: "GitHub", label: "Portfolio navigation" },
    language: { label: "Choose language", zh: "中文", en: "EN" },
    products: {
      label: "Choose a product",
      title: "Explore products",
      tracehalo: "Understand your Mac live",
      peek: "Local search, capture & recognition",
    },
    about: {
      eyebrow: "ABOUT ME",
      title: "Hi, I’m ShawnShoper.",
      copy: "I turn product ideas into real applications with AI-assisted programming, with care for craft, clarity and the people who use them. TraceHalo makes Mac status easier to understand; Peek makes search, capture and recognition feel immediate.",
      action: "Connect on GitHub",
      traceHaloIconAlt: "TraceHalo app icon",
      peekIconAlt: "Peek app icon",
    },
    footerLabel: "Open-source products",
    aiBuilt: "All applications are built with AI programming",
    externalProfile: "Open ShawnShoper on GitHub in a new window",
  },
};

const products = {
  tracehalo: {
    id: "tracehalo",
    name: "TraceHalo",
    order: "01",
    repo: "https://github.com/ShawnShoper/TraceHalo",
    icon: "/assets/tracehalo-icon.png",
    release: {
      version: "v0.2.1 Beta",
      date: "2026-11-09",
      notes: "https://github.com/ShawnShoper/TraceHalo/releases/tag/v0.2.1",
      download: "https://github.com/ShawnShoper/TraceHalo/releases/download/v0.2.1/TraceHalo-0.2.1-arm64-x86_64.dmg",
    },
    heroImage: { src: "/assets/tracehalo-overview.png", localizedSrc: { zh: "/assets/tracehalo-overview-zh.png" }, width: 1320, height: 840 },
    screenshots: [
      { id: "monitor", src: "/assets/tracehalo-overview.png", localizedSrc: { zh: "/assets/tracehalo-overview-zh.png" }, width: 1320, height: 840 },
      { id: "storage", src: "/assets/tracehalo-storage.png", localizedSrc: { zh: "/assets/tracehalo-storage-zh.png" }, width: 1558, height: 1010 },
      { id: "devices", src: "/assets/tracehalo-input-devices.png", width: 1220, height: 790, focusX: "52%", focusY: "42%", focusScale: 1.14 },
      { id: "menu", src: "/assets/tracehalo-live-monitor.png", localizedSrc: { zh: "/assets/tracehalo-live-monitor-zh.png" }, width: 1558, height: 1010 },
    ],
    statusImage: { src: "/assets/tracehalo-menu-bar.png", localizedSrc: { zh: "/assets/tracehalo-menu-bar-zh.png" }, width: 282, height: 787, mode: "portrait" },
    principleIcons: [Monitor, ShieldCheck, Code],
    copy: {
      zh: {
        meta: {
          title: "TraceHalo — ShawnShoper",
          description: "TraceHalo 是由 AI 编程实现的免费开源 Mac 系统监控工具。统一查看实时状态、资源趋势与应用信息，支持 macOS 14+、Apple 芯片和 Intel。",
        },
        hero: {
          eyebrow: "TRACEHALO — 原生 MAC 系统监控",
          prefix: "了解 Mac，",
          accent: "就这么清晰。",
          suffix: "",
          secondLine: "",
          intro: "实时状态、资源趋势与应用管理，在一个原生工作空间里看清。",
          primary: "下载 v0.2.1 Beta",
          secondary: "查看项目源码",
          caption: "TraceHalo 真实界面 · 新版实时监控首页",
          imageAlt: "TraceHalo 中文实时监控首页，集中展示 CPU、内存、GPU、存储、网络、散热与资源历史",
          scroll: "向下滚动，进入产品",
        },
        release: {
          eyebrow: "现已发布",
          preview: "看看这次的新变化",
          title: "应用管理，每一步都更清楚。",
          summary: "从查看应用信息，到选择保留的数据，再到最后确认，v0.2.1 让每一步都清楚可见。",
          date: "2026 年 11 月 9 日发布",
          requirements: "macOS 14+ · Apple 芯片与 Intel",
          notes: "查看完整更新",
          download: "下载 Mac 版",
          notesLabel: "在新窗口查看 TraceHalo v0.2.1 Beta 官方发布说明",
          downloadLabel: "下载 TraceHalo v0.2.1 Beta Mac 通用 DMG 安装包",
          items: [
            { title: "应用信息，一行读完。", copy: "图标、名称、版本和磁盘占用整齐对齐。每个应用都有明确的卸载入口，选项在独立页面打开。" },
            { title: "保留什么，由你选择。", copy: "卸载默认保留本机数据。选择清理时，可查看归属与影响；最终确认会完整列出待移除路径和保留清单。" },
            { title: "权限准备，按需完成。", copy: "首次引导可以跳过，之后可在设置中继续。主窗口的冷启动、关闭后重开和菜单栏返回也得到改善。" },
          ],
        },
        story: {
          eyebrow: "01 / TRACEHALO",
          title: "一款自由、开源的 Mac 系统监控工具。",
          summary: "CPU、内存、GPU、存储、网络与散热集中在同一首页。点开卡片查看详情，用最近 15、30 或 60 分钟的资源趋势理解变化，再把关心的指标留在菜单栏。",
          repo: "查看 TraceHalo 源码",
          progress: "产品章节",
          screenshot: "真实项目截图",
          chapters: [
            {
              id: "monitor",
              number: "01",
              label: "实时监控",
              title: "系统状态，一眼看清。",
              copy: "实时读数、资源趋势与事件记录放在一起。点开资源卡片，即可原地查看核心、进程、磁盘、网络接口或传感器详情。",
              alt: "TraceHalo 新版实时监控首页，展示六类资源卡片、历史趋势与事件记录",
            },
            {
              id: "storage",
              number: "02",
              label: "存储空间",
              title: "存储空间，不再靠猜。",
              copy: "容量、卷信息、实时读写活动与近期历史被放在同一个视图中，帮助你快速发现异常占用。",
              alt: "TraceHalo 存储页面，展示磁盘容量、健康信息和实时读写活动",
            },
            {
              id: "devices",
              number: "03",
              label: "输入设备",
              title: "连接的设备，清楚可见。",
              copy: "键盘、鼠标和触控板的连接方式与硬件信息集中展示。设备向 macOS 提供电量或充电信息时，也会一并显示。",
              alt: "TraceHalo 输入设备页面，展示键盘、鼠标和触控板信息",
            },
            {
              id: "menu",
              number: "04",
              label: "菜单栏布局",
              title: "只留下，你关心的指标。",
              copy: "从实时监控顶部打开「菜单栏布局」，自由选择模块并即时预览。关闭主窗口后，菜单栏监控仍会继续。",
              alt: "TraceHalo 菜单栏布局页面，展示可选监控模块与即时布局预览",
            },
          ],
        },
        principles: {
          label: "TraceHalo 的产品原则",
          items: [
            { title: "原生", copy: "支持 macOS 14 及以上、Apple 芯片与 Intel Mac，保持熟悉、快速且克制的使用体验。" },
            { title: "私密", copy: "所有监控都在你的 Mac 上完成，不依赖账号、云端或分析服务。" },
            { title: "开源", copy: "采用 Apache 2.0 许可证，代码透明，欢迎学习、贡献和共同完善。" },
          ],
        },
        status: {
          eyebrow: "始终触手可及",
          title: "细节留在后台，直到你需要它。",
          copy: "自由选择菜单栏显示的模块，随时查看实时摘要；只有需要深入时，才打开完整视图。",
          action: "了解 TraceHalo",
          alt: "TraceHalo 菜单栏详情，显示实时系统监控数据",
          caption: "TraceHalo 真实菜单栏界面",
        },
        footer: "TraceHalo · Apache 2.0",
      },
      en: {
        meta: {
          title: "TraceHalo — ShawnShoper",
          description: "TraceHalo is a free, open-source Mac system monitor built with AI programming. See live status, resource trends and app details on macOS 14+, Apple silicon and Intel.",
        },
        hero: {
          eyebrow: "TRACEHALO — NATIVE MAC SYSTEM MONITOR",
          prefix: "Know your Mac. ",
          accent: "Clearly.",
          suffix: "",
          secondLine: "",
          intro: "Live status, resource trends and app management. Clear in one native workspace.",
          primary: "Download v0.2.1 Beta",
          secondary: "Explore the repository",
          caption: "Actual TraceHalo interface · New Live Monitor home",
          imageAlt: "TraceHalo Live Monitor home in English with CPU, memory, GPU, storage, network, cooling and resource history",
          scroll: "Scroll to enter the product",
        },
        release: {
          eyebrow: "NOW AVAILABLE",
          preview: "See what’s new",
          title: "App management, made clear.",
          summary: "From reviewing app details to choosing what stays and confirming what goes, v0.2.1 makes every step easier to follow.",
          date: "Released November 9, 2026",
          requirements: "macOS 14+ · Apple silicon & Intel",
          notes: "Read the release notes",
          download: "Download for Mac",
          notesLabel: "Read the official TraceHalo v0.2.1 Beta release notes in a new window",
          downloadLabel: "Download the TraceHalo v0.2.1 Beta universal Mac DMG installer",
          items: [
            { title: "App details, in one row.", copy: "Icons, names, versions and disk usage line up clearly. Every app has a visible uninstall action, with options in a separate view." },
            { title: "Choose what stays.", copy: "Local data stays by default. Review ownership and impact before selecting files; the final confirmation lists every removal target and what you’re keeping." },
            { title: "Set up access when needed.", copy: "Skip the first-run guide and return in Settings whenever you need it. Cold starts, reopening the window and returning from the menu bar are improved too." },
          ],
        },
        story: {
          eyebrow: "01 / TRACEHALO",
          title: "A free, open-source system monitor for Mac.",
          summary: "CPU, memory, GPU, storage, network and cooling share one home page. Expand a card for details, understand changes with 15, 30 or 60 minutes of resource history, and keep your key metrics in the menu bar.",
          repo: "Explore TraceHalo",
          progress: "Product chapter",
          screenshot: "Actual project screenshot",
          chapters: [
            {
              id: "monitor",
              number: "01",
              label: "Live Monitor",
              title: "The whole system, at a glance.",
              copy: "Live readings, resource trends and events share one view. Expand a resource card in place for cores, processes, disks, network interfaces or sensors.",
              alt: "TraceHalo Live Monitor home showing six resource cards, history charts and events",
            },
            {
              id: "storage",
              number: "02",
              label: "Storage",
              title: "Storage without the guesswork.",
              copy: "Capacity, volume details, live activity and recent history live in one view, making unusual disk usage easy to spot.",
              alt: "TraceHalo storage workspace showing capacity, disk health and live activity",
            },
            {
              id: "devices",
              number: "03",
              label: "Input Devices",
              title: "Every connected device, clearly seen.",
              copy: "Connection and hardware details for keyboards, mice and trackpads stay together. Battery and charging information appears when the device reports it to macOS.",
              alt: "TraceHalo input-device view showing keyboard, mouse and trackpad information",
            },
            {
              id: "menu",
              number: "04",
              label: "Menu Bar Layout",
              title: "Keep only the metrics that matter.",
              copy: "Open Menu Bar Layout from Live Monitor to choose your modules and preview them immediately. Monitoring continues after you close the main window.",
              alt: "TraceHalo Menu Bar Layout showing available monitoring modules and an immediate layout preview",
            },
          ],
        },
        principles: {
          label: "TraceHalo principles",
          items: [
            { title: "Native", copy: "Supports macOS 14+, Apple silicon and Intel Macs, with a focused native experience." },
            { title: "Private", copy: "Monitoring stays on your Mac. No account, cloud service or analytics layer is required." },
            { title: "Open source", copy: "Apache 2.0 licensed and open for inspection, learning and contribution." },
          ],
        },
        status: {
          eyebrow: "ALWAYS WITHIN REACH",
          title: "The details stay out of the way until you ask.",
          copy: "Choose exactly what appears in the menu bar, check the live summary, and open deeper views only when you need them.",
          action: "See TraceHalo",
          alt: "TraceHalo menu bar detail showing live system monitoring data",
          caption: "Actual TraceHalo menu bar interface",
        },
        footer: "TraceHalo · Apache 2.0",
      },
    },
  },
  peek: {
    id: "peek",
    name: "Peek",
    order: "02",
    repo: "https://github.com/ShawnShoper/peek",
    icon: "/assets/peek-icon.png",
    heroImage: { src: "/assets/peek-file-search.png", width: 1456, height: 1080 },
    screenshots: [
      { id: "search", src: "/assets/peek-file-search.png", width: 1456, height: 1080, focusX: "20%", focusY: "17%", focusScale: 1.22 },
      { id: "capture", src: "/assets/peek-capture-toolbar.png", width: 1600, height: 278, panorama: true, focusX: "50%", focusY: "50%", focusScale: 1.04 },
      { id: "recognition", src: "/assets/peek-ocr.png", width: 2440, height: 1440, focusX: "68%", focusY: "44%", focusScale: 1.16 },
      { id: "settings", src: "/assets/peek-settings.jpeg", width: 980, height: 728, focusX: "28%", focusY: "34%", focusScale: 1.18 },
    ],
    statusImage: { src: "/assets/peek-icon.png", width: 512, height: 512, mode: "icon" },
    principleIcons: [MagnifyingGlass, Camera, ShieldCheck],
    copy: {
      zh: {
        meta: {
          title: "Peek — ShawnShoper",
          description: "Peek 是一款简单、安静、只在本机工作的 macOS 查找与截图工具。",
        },
        hero: {
          eyebrow: "PEEK — 本地搜索与截图工具",
          prefix: "找到它，",
          accent: "就这么简单。",
          suffix: "",
          secondLine: "",
          intro: "搜索应用与文件，完成截图、标注和识别。所有重要信息都留在你的 Mac。",
          primary: "探索 Peek",
          secondary: "查看项目源码",
          caption: "Peek 真实界面 · 文件与应用查找",
          imageAlt: "Peek 文件查找界面，展示应用搜索结果、预览信息和常用操作",
          scroll: "向下滚动，进入产品",
        },
        story: {
          eyebrow: "02 / PEEK",
          title: "在一处完成查找、截图与识别。",
          summary: "Peek 常驻在菜单栏，需要时一键出现，用完即走。它把文件与应用查找、截图标注、OCR、二维码识别和滚动长截图放进同一个原生工具。",
          repo: "查看 Peek 源码",
          progress: "产品章节",
          screenshot: "真实项目截图",
          chapters: [
            {
              id: "search",
              number: "01",
              label: "快速查找",
              title: "输入名字，立即抵达。",
              copy: "查找应用、文件和文件夹，支持中文、拼音首字母与英文模糊搜索；预览、打开、复制路径和访达定位都在同一个窗口。",
              alt: "Peek 文件查找界面，展示微信应用搜索结果、预览详情与常用操作",
            },
            {
              id: "capture",
              number: "02",
              label: "截图标注",
              title: "截取之后，直接表达。",
              copy: "画笔、箭头、形状、文字、序号、马赛克、钉图、复制和保存整合在紧凑工具栏里，完成后立即进入剪贴板。",
              alt: "Peek 截图标注工具栏，展示颜色、粗细、形状、文字、马赛克和完成操作",
            },
            {
              id: "recognition",
              number: "03",
              label: "识别与预览",
              title: "文字和二维码，不必重新输入。",
              copy: "在 Mac 本机识别中英文文本和二维码，支持复制、打开链接和预览；长文本以可滚动视图保持流畅。",
              alt: "Peek OCR 结果窗口，展示图片文字识别与文本预览",
            },
            {
              id: "settings",
              number: "04",
              label: "本地与可控",
              title: "范围、权限和节奏由你决定。",
              copy: "只索引明确授权的目录，首次索引优先得到可用结果，之后在后台低占用更新；语言、快捷键、截图和外观均可单独配置。",
              alt: "Peek 设置界面，展示通用、搜索、快捷键、截图、外观和关于选项",
            },
          ],
        },
        principles: {
          label: "Peek 的产品原则",
          items: [
            { title: "快速找到", copy: "应用优先、中文与拼音友好，搜索结果随索引进度逐步可用。" },
            { title: "一体完成", copy: "查找、截图、标注、OCR、二维码和长截图共享一套紧凑工作流。" },
            { title: "只在本机", copy: "搜索词、索引、截图与识别结果默认不上传云端，也不要求账号。" },
          ],
        },
        status: {
          eyebrow: "LOCAL BY DEFAULT",
          title: "你的内容，留在你的 Mac。",
          copy: "Peek 只读取系统允许的位置和你明确授权的目录。搜索索引、截图、OCR 与二维码识别默认全部在本机完成。",
          action: "了解 Peek",
          alt: "Peek 蓝紫色应用图标",
          caption: "Peek 官方应用图标",
        },
        footer: "Peek · Apache 2.0",
      },
      en: {
        meta: {
          title: "Peek — ShawnShoper",
          description: "Peek is a simple, quiet macOS search and capture utility that works locally on your Mac.",
        },
        hero: {
          eyebrow: "PEEK — LOCAL SEARCH & CAPTURE",
          prefix: "Find it. ",
          accent: "That simple.",
          suffix: "",
          secondLine: "",
          intro: "Search apps and files, capture, annotate and recognize — with your data staying on your Mac.",
          primary: "Discover Peek",
          secondary: "Explore the repository",
          caption: "Actual Peek interface · File and app search",
          imageAlt: "Peek file search showing app results, preview details and common actions",
          scroll: "Scroll to enter the product",
        },
        story: {
          eyebrow: "02 / PEEK",
          title: "Search, capture and recognize in one place.",
          summary: "Peek lives in the menu bar, appearing with a shortcut and leaving when the work is done. It brings file and app search, annotation, OCR, QR recognition and scrolling capture into one native utility.",
          repo: "Explore Peek",
          progress: "Product chapter",
          screenshot: "Actual project screenshot",
          chapters: [
            {
              id: "search",
              number: "01",
              label: "Fast Search",
              title: "Type a name. Get there now.",
              copy: "Find apps, files and folders with Chinese, Pinyin initials and fuzzy English matching. Preview, open, copy paths and reveal in Finder from one window.",
              alt: "Peek file search showing WeChat app results, preview details and common actions",
            },
            {
              id: "capture",
              number: "02",
              label: "Capture & Markup",
              title: "Capture it, then make the point.",
              copy: "Pen, arrows, shapes, text, numbering, mosaic, pinning, copy and save live in one compact toolbar, with completed captures ready on the clipboard.",
              alt: "Peek capture toolbar with color, stroke, shapes, text, mosaic and completion controls",
            },
            {
              id: "recognition",
              number: "03",
              label: "Recognition",
              title: "Text and QR codes, ready to use.",
              copy: "Recognize Chinese and English text and QR codes locally, then copy, open links or preview results. Large text stays responsive in a scrollable view.",
              alt: "Peek OCR result window showing recognized text and image preview",
            },
            {
              id: "settings",
              number: "04",
              label: "Local & Controlled",
              title: "You choose the scope and pace.",
              copy: "Only explicitly authorized folders are indexed. Useful results arrive early, low-impact updates continue later, and language, shortcuts, capture and appearance remain configurable.",
              alt: "Peek settings with General, Search, Shortcuts, Capture, Appearance and About sections",
            },
          ],
        },
        principles: {
          label: "Peek principles",
          items: [
            { title: "Find faster", copy: "App-first results, Chinese and Pinyin support, and useful results before a full index completes." },
            { title: "Finish in one flow", copy: "Search, capture, markup, OCR, QR recognition and scrolling capture stay together." },
            { title: "Local by default", copy: "Queries, indexes, captures and recognition results stay off the cloud by default." },
          ],
        },
        status: {
          eyebrow: "LOCAL BY DEFAULT",
          title: "Your content stays on your Mac.",
          copy: "Peek reads only system-allowed locations and folders you explicitly authorize. Search indexes, captures, OCR and QR recognition are processed locally by default.",
          action: "See Peek",
          alt: "Peek blue and violet application icon",
          caption: "Official Peek application icon",
        },
        footer: "Peek · Apache 2.0",
      },
    },
  },
};

function getLanguageFromUrl() {
  if (typeof window === "undefined") return null;
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  return supportedLanguages.includes(queryLanguage) ? queryLanguage : null;
}

function getInitialLanguage() {
  const queryLanguage = getLanguageFromUrl();
  if (queryLanguage) return queryLanguage;
  try {
    const savedLanguage = window.localStorage.getItem("shawnshoper-language");
    if (supportedLanguages.includes(savedLanguage)) return savedLanguage;
  } catch {
    // Storage can be unavailable in privacy-focused browser modes.
  }
  return "zh";
}

function getProductFromUrl() {
  if (typeof window === "undefined") return "tracehalo";
  const queryProduct = new URLSearchParams(window.location.search).get("p")?.toLowerCase();
  return supportedProducts.includes(queryProduct) ? queryProduct : "tracehalo";
}

function ExternalLink({ href, className, children, label }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function LanguageSwitcher({ language, labels, onChange }) {
  return (
    <div className="language-switcher" role="group" aria-label={labels.label}>
      <GlobeHemisphereWest aria-hidden="true" size={15} weight="duotone" />
      {supportedLanguages.map((languageCode) => (
        <button
          type="button"
          key={languageCode}
          className={language === languageCode ? "is-active" : ""}
          aria-pressed={language === languageCode}
          onClick={() => onChange(languageCode)}
        >
          {labels[languageCode]}
        </button>
      ))}
    </div>
  );
}

function getProductHref(productId, language) {
  if (typeof window === "undefined") {
    return `?p=${productId}${language === "en" ? "&lang=en" : ""}`;
  }
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("p", productId);
  if (language === "zh") nextUrl.searchParams.delete("lang");
  else nextUrl.searchParams.set("lang", language);
  return `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
}

function ProductSwitcher({ activeProduct, language, labels, onChange }) {
  return (
    <aside className="product-switcher-shell" aria-label={labels.label}>
      <span className="product-switcher-title">{labels.title}</span>
      <nav className="product-switcher" aria-label={labels.label}>
        {supportedProducts.map((productId) => {
          const product = products[productId];
          const isActive = activeProduct === productId;
          return (
            <a
              key={productId}
              href={getProductHref(productId, language)}
              className={`product-option ${isActive ? "is-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
              aria-controls="main-content"
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                if (!isActive) onChange(productId);
              }}
            >
              <img src={product.icon} alt="" width="48" height="48" />
              <span>
                <strong>{product.name}</strong>
                <small>{labels[productId]}</small>
              </span>
              <span className="product-option-dot" aria-hidden="true" />
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

export function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [activeProduct, setActiveProduct] = useState(getProductFromUrl);
  const heroShowcaseRef = useRef(null);

  const shell = shellCopy[language];
  const product = products[activeProduct];
  const t = product.copy[language];
  const screenshots = product.screenshots;
  const imageSrc = (image) => image.localizedSrc?.[language] ?? image.src;

  const chooseProduct = useCallback((nextProduct) => {
    if (!supportedProducts.includes(nextProduct)) return;
    setActiveProduct(nextProduct);
    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.set("p", nextProduct);
    window.history.pushState({ product: nextProduct }, "", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }, []);

  const chooseLanguage = useCallback((nextLanguage) => {
    if (!supportedLanguages.includes(nextLanguage)) return;
    setLanguage(nextLanguage);
    try {
      window.localStorage.setItem("shawnshoper-language", nextLanguage);
    } catch {
      // The visible switch remains functional even when persistence is unavailable.
    }
    const nextUrl = new URL(window.location.href);
    if (nextLanguage === "zh") nextUrl.searchParams.delete("lang");
    else nextUrl.searchParams.set("lang", nextLanguage);
    window.history.replaceState(window.history.state, "", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }, []);

  useEffect(() => {
    const handleHistoryChange = () => {
      setActiveProduct(getProductFromUrl());
      setLanguage(getInitialLanguage());
    };
    window.addEventListener("popstate", handleHistoryChange);
    return () => window.removeEventListener("popstate", handleHistoryChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [language, t.meta.description, t.meta.title]);

  useEffect(() => {
    const hashId = decodeURIComponent(window.location.hash.slice(1));
    if (!hashId) return undefined;
    const frame = window.requestAnimationFrame(() => document.getElementById(hashId)?.scrollIntoView());
    return () => window.cancelAnimationFrame(frame);
  }, [activeProduct]);

  useEffect(() => {
    const showcase = heroShowcaseRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia("(max-width: 760px)");
    if (!showcase || reducedMotion.matches || compactLayout.matches) return undefined;

    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const progress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.9)));
      showcase.style.setProperty("--showcase-lift", `${progress * -34}px`);
      showcase.style.setProperty("--showcase-scale", String(1 + progress * 0.025));
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };
    const handlePointerMove = (event) => {
      const rect = showcase.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
      const y = Math.min(1, Math.max(0, (event.clientY - rect.top) / rect.height));
      showcase.style.setProperty("--showcase-tilt-x", `${(0.5 - y) * 2.4}deg`);
      showcase.style.setProperty("--showcase-tilt-y", `${(x - 0.5) * 3.2}deg`);
    };
    const resetPointer = () => {
      showcase.style.setProperty("--showcase-tilt-x", "0deg");
      showcase.style.setProperty("--showcase-tilt-y", "0deg");
    };

    updateScroll();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    showcase.addEventListener("pointermove", handlePointerMove, { passive: true });
    showcase.addEventListener("pointerleave", resetPointer);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      showcase.removeEventListener("pointermove", handlePointerMove);
      showcase.removeEventListener("pointerleave", resetPointer);
    };
  }, [activeProduct]);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeProduct]);

  const repoLabel =
    language === "zh"
      ? `在新窗口打开 ${product.name} 项目仓库`
      : `Open the ${product.name} repository in a new window`;

  return (
    <div className={`site-shell product-${activeProduct}`} data-product={activeProduct}>
      <a className="skip-link" href="#main-content">{shell.skip}</a>
      <header className="site-header" aria-label={shell.nav.label}>
        <a className="brand" href="#top" aria-label={shell.brandLabel}>
          <span className="brand-mark">SS</span>
          <span className="brand-name">ShawnShoper</span>
        </a>
        <div className="header-actions">
          <nav className="site-nav" aria-label={shell.nav.label}>
            <a href="#work">{shell.nav.work}</a>
            <a href="#about">{shell.nav.about}</a>
            <ExternalLink href={githubProfile} className="nav-external" label={shell.externalProfile}>
              {shell.nav.github}
            </ExternalLink>
          </nav>
          <LanguageSwitcher language={language} labels={shell.language} onChange={chooseLanguage} />
        </div>
      </header>

      <main id="main-content" className="product-main" key={activeProduct}>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <ProductSwitcher
            activeProduct={activeProduct}
            language={language}
            labels={shell.products}
            onChange={chooseProduct}
          />
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 id="hero-title">
              {t.hero.prefix}<span>{t.hero.accent}</span>{t.hero.suffix}
              {t.hero.secondLine && <><br />{t.hero.secondLine}</>}
            </h1>
            <p className="hero-intro">{t.hero.intro}</p>
            {product.release && (
              <a className="release-preview" href="#release">
                <span>{product.release.version}</span>
                {t.release.preview} <ArrowRight aria-hidden="true" weight="bold" />
              </a>
            )}
            <div className="hero-actions">
              {product.release ? (
                <ExternalLink href={product.release.download} className="button button-primary" label={t.release.downloadLabel}>
                  {t.hero.primary} <ArrowRight aria-hidden="true" weight="bold" />
                </ExternalLink>
              ) : (
                <a className="button button-primary" href="#work">
                  {t.hero.primary} <ArrowRight aria-hidden="true" weight="bold" />
                </a>
              )}
              <ExternalLink href={product.repo} className="button button-secondary" label={repoLabel}>
                {t.hero.secondary} <GithubLogo aria-hidden="true" weight="fill" />
              </ExternalLink>
            </div>
          </div>
          <figure className="hero-showcase" ref={heroShowcaseRef} data-reveal>
            <div className="hero-showcase-orbit" aria-hidden="true" />
            <div className="product-frame product-frame-hero">
              <img
                src={imageSrc(product.heroImage)}
                alt={t.hero.imageAlt}
                width={product.heroImage.width}
                height={product.heroImage.height}
                fetchPriority="high"
              />
            </div>
            <figcaption>{t.hero.caption}</figcaption>
          </figure>
        </section>

        <section className="principles-section" aria-label={t.principles.label}>
          <div className="principles section-container">
            {t.principles.items.map((principle, index) => {
              const Icon = product.principleIcons[index];
              return (
                <article className="principle" key={principle.title} data-reveal style={{ "--reveal-delay": `${index * 90}ms` }}>
                  <span className="icon-wrap" aria-hidden="true"><Icon size={26} weight="duotone" /></span>
                  <div><h3>{principle.title}</h3><p>{principle.copy}</p></div>
                </article>
              );
            })}
          </div>
        </section>

        {product.release && (
          <section className="release-section" id="release" aria-labelledby="release-title">
            <div className="release-inner section-container">
              <div className="release-heading" data-reveal>
                <p className="section-index">{t.release.eyebrow} · {product.release.version}</p>
                <h2 id="release-title">{t.release.title}</h2>
                <p>{t.release.summary}</p>
                <div className="release-meta">
                  <time dateTime={product.release.date}>{t.release.date}</time>
                  <span>{t.release.requirements}</span>
                </div>
              </div>
              <div className="release-highlights">
                {t.release.items.map((item, index) => (
                  <article key={item.title} data-reveal style={{ "--reveal-delay": `${index * 90}ms` }}>
                    <span className="feature-number" aria-hidden="true">0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
              <div className="release-actions" data-reveal>
                <ExternalLink href={product.release.download} className="button button-primary" label={t.release.downloadLabel}>
                  {t.release.download} <ArrowRight aria-hidden="true" weight="bold" />
                </ExternalLink>
                <ExternalLink href={product.release.notes} className="text-link" label={t.release.notesLabel}>
                  {t.release.notes} <ArrowUpRight aria-hidden="true" weight="bold" />
                </ExternalLink>
              </div>
            </div>
          </section>
        )}

        <section className="project-story" id="work" aria-labelledby="project-title">
          <div className="story-intro section-container" data-reveal>
            <p className="section-index">{t.story.eyebrow}</p>
            <div>
              <h2 id="project-title">{t.story.title}</h2>
              <p>{t.story.summary}</p>
              <ExternalLink href={product.repo} className="text-link" label={repoLabel}>
                {t.story.repo} <ArrowUpRight aria-hidden="true" weight="bold" />
              </ExternalLink>
            </div>
          </div>

          <div className="feature-list section-container">
            {t.story.chapters.map((chapter, index) => {
              const screenshot = screenshots[index];
              const mediaClass = [screenshot.portrait && "is-portrait", screenshot.panorama && "is-panorama"]
                .filter(Boolean).join(" ");
              return (
                <article className={`feature-row ${index % 2 ? "is-reversed" : ""}`} id={`feature-${chapter.id}`} key={chapter.id} data-reveal>
                  <div className="feature-copy">
                    <span className="feature-number">{chapter.number}</span>
                    <p className="feature-label">{chapter.label}</p>
                    <h3>{chapter.title}</h3>
                    <p>{chapter.copy}</p>
                  </div>
                  <figure className={`feature-media ${mediaClass}`}>
                    <span className="feature-halo" aria-hidden="true" />
                    <div className="product-frame">
                      <img
                        src={imageSrc(screenshot)}
                        alt={chapter.alt}
                        width={screenshot.width}
                        height={screenshot.height}
                        loading="lazy"
                      />
                    </div>
                    <figcaption>{t.story.screenshot} · {chapter.label}</figcaption>
                  </figure>
                </article>
              );
            })}
          </div>
        </section>

        <section className="status-story" aria-labelledby="status-title">
          <div className="status-inner section-container">
            <div className="status-copy" data-reveal>
              <p className="section-index">{t.status.eyebrow}</p>
              <h2 id="status-title">{t.status.title}</h2>
              <p>{t.status.copy}</p>
              <ExternalLink href={product.repo} className="button button-light" label={repoLabel}>
                {t.status.action} <ArrowUpRight aria-hidden="true" weight="bold" />
              </ExternalLink>
            </div>
            <figure className={`status-product is-${product.statusImage.mode}`} data-reveal>
              <span className="status-orbit status-orbit-one" aria-hidden="true" />
              <span className="status-orbit status-orbit-two" aria-hidden="true" />
              <img
                src={imageSrc(product.statusImage)}
                alt={t.status.alt}
                width={product.statusImage.width}
                height={product.statusImage.height}
                loading="lazy"
              />
              <figcaption>{t.status.caption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner section-container" data-reveal>
            <div className="about-icon-stack">
              <img src={products.tracehalo.icon} alt={shell.about.traceHaloIconAlt} width="1254" height="1254" loading="lazy" />
              <img src={products.peek.icon} alt={shell.about.peekIconAlt} width="512" height="512" loading="lazy" />
            </div>
            <div className="about-copy">
              <p className="section-index">{shell.about.eyebrow}</p>
              <h2 id="about-title">{shell.about.title}</h2>
              <p>{shell.about.copy}</p>
            </div>
            <ExternalLink href={githubProfile} className="button button-secondary about-action" label={shell.externalProfile}>
              <GithubLogo aria-hidden="true" weight="fill" /> {shell.about.action}<ArrowRight aria-hidden="true" weight="bold" />
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} ShawnShoper · {shell.aiBuilt}</span>
        <span className="footer-products">
          {supportedProducts.map((productId) => (
            <ExternalLink
              key={productId}
              href={products[productId].repo}
              label={language === "zh" ? `打开 ${products[productId].name} 项目仓库` : `Open ${products[productId].name} repository`}
            >
              {products[productId].copy[language].footer}
            </ExternalLink>
          ))}
        </span>
      </footer>
    </div>
  );
}
