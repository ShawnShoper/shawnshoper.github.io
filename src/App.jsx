import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code,
  GithubLogo,
  GlobeHemisphereWest,
  Monitor,
  ShieldCheck,
} from "@phosphor-icons/react";

const githubProfile = "https://github.com/ShawnShoper";
const traceHaloRepo = "https://github.com/ShawnShoper/TraceHalo";
const supportedLanguages = ["zh", "en"];

const screenshots = [
  {
    id: "monitor",
    src: "/assets/tracehalo-live-monitor.png",
    width: 1558,
    height: 1010,
  },
  {
    id: "storage",
    src: "/assets/tracehalo-storage.png",
    width: 1558,
    height: 1010,
  },
  {
    id: "devices",
    src: "/assets/tracehalo-input-devices.png",
    width: 1220,
    height: 790,
  },
  {
    id: "menu",
    src: "/assets/tracehalo-menu-bar.png",
    width: 282,
    height: 787,
    portrait: true,
  },
];

const copy = {
  zh: {
    meta: {
      title: "ShawnShoper — 独立开发者",
      description:
        "ShawnShoper 专注打造克制、清晰的开源软件。代表项目 TraceHalo 是一款免费的 Mac 系统监控工具。",
    },
    skip: "跳转到正文",
    brandLabel: "返回 ShawnShoper 首页",
    nav: {
      work: "作品",
      about: "关于",
      github: "GitHub",
      label: "作品集导航",
    },
    language: {
      label: "选择语言",
      zh: "中文",
      en: "EN",
    },
    hero: {
      eyebrow: "SHAWNSHOPER — 独立开发者与开源作者",
      prefix: "构建更",
      accent: "安静",
      suffix: "、",
      secondLine: "更清晰的软件。",
      intro: "我专注打造让系统状态更容易理解、也更少打扰你的工具。",
      primary: "探索 TraceHalo",
      secondary: "关注 GitHub",
      caption: "TraceHalo 真实界面 · 实时监控",
      imageAlt: "TraceHalo 实时监控页面，展示菜单栏模块和即时系统数据",
      scroll: "向下滚动，进入产品",
    },
    story: {
      eyebrow: "01 / TRACEHALO",
      title: "一款自由、开源的 Mac 系统监控工具。",
      summary:
        "TraceHalo 把散落在多个 macOS 界面中的系统信息汇集到一个安静、原生的工作空间。滚动浏览它如何呈现性能、存储、设备和传感器。",
      repo: "查看项目源码",
      progress: "产品章节",
      screenshot: "真实项目截图",
      chapters: [
        {
          id: "monitor",
          number: "01",
          label: "实时监控",
          title: "系统状态，一眼看清。",
          copy: "CPU、内存、温度、网络与进程保持实时更新。重要信息集中呈现，不让数据淹没判断。",
          alt: "TraceHalo 实时监控配置页面，包含模块设置和系统状态预览",
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
          copy: "键盘、鼠标和触控板的电量、连接方式与硬件信息集中展示，外设状态不再藏在系统深处。",
          alt: "TraceHalo 输入设备页面，展示键盘、鼠标和触控板信息",
        },
        {
          id: "menu",
          number: "04",
          label: "菜单栏",
          title: "需要时出现，其余时间保持安静。",
          copy: "把真正关心的指标留在菜单栏。轻点即可展开详情，关闭后重新回到不打扰的状态。",
          alt: "TraceHalo 菜单栏监控器，展示 CPU、内存、GPU、存储、网络和温度",
        },
      ],
    },
    principles: {
      label: "TraceHalo 的产品原则",
      items: [
        {
          title: "原生",
          copy: "为 macOS 14 及 Apple 芯片打造，保持熟悉、快速且克制的使用体验。",
        },
        {
          title: "私密",
          copy: "所有监控都在你的 Mac 上完成，不依赖账号、云端或分析服务。",
        },
        {
          title: "开源",
          copy: "采用 Apache 2.0 许可证，代码透明，欢迎学习、贡献和共同完善。",
        },
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
    about: {
      eyebrow: "关于开发者",
      title: "你好，我是 ShawnShoper。",
      copy: "我独立构建软件，重视工艺、清晰度和真实使用者的体验。TraceHalo 是这里展示的第一个项目，之后还会有更多作品。",
      action: "在 GitHub 联系我",
      iconAlt: "TraceHalo 应用图标",
    },
    footer: "TraceHalo · Apache 2.0",
    externalLabels: {
      profile: "在新窗口打开 ShawnShoper 的 GitHub 主页",
      repo: "在新窗口打开 TraceHalo 项目仓库",
      screenshots: "在 GitHub 查看 TraceHalo",
    },
  },
  en: {
    meta: {
      title: "ShawnShoper — Independent Developer",
      description:
        "ShawnShoper builds focused open-source software, including TraceHalo — a free system monitor for Mac.",
    },
    skip: "Skip to content",
    brandLabel: "ShawnShoper home",
    nav: {
      work: "Work",
      about: "About",
      github: "GitHub",
      label: "Portfolio navigation",
    },
    language: {
      label: "Choose language",
      zh: "中文",
      en: "EN",
    },
    hero: {
      eyebrow: "SHAWNSHOPER — INDEPENDENT DEVELOPER & OPEN-SOURCE MAKER",
      prefix: "Building ",
      accent: "quieter",
      suffix: ",",
      secondLine: "clearer software.",
      intro: "I create focused tools for people who care how their systems work.",
      primary: "Discover TraceHalo",
      secondary: "Follow on GitHub",
      caption: "Actual TraceHalo interface · Live Monitor",
      imageAlt:
        "TraceHalo Live Monitor screen showing menu bar modules and live system data",
      scroll: "Scroll to enter the product",
    },
    story: {
      eyebrow: "01 / TRACEHALO",
      title: "A free, open-source system monitor for Mac.",
      summary:
        "TraceHalo brings information normally spread across macOS into one calm, native workspace. Scroll through the ways it makes performance, storage, devices and sensors easier to understand.",
      repo: "Explore the repository",
      progress: "Product chapter",
      screenshot: "Actual project screenshot",
      chapters: [
        {
          id: "monitor",
          number: "01",
          label: "Live Monitor",
          title: "The whole system, at a glance.",
          copy: "CPU, memory, temperature, network and processes stay current. The signal remains clear without turning data into noise.",
          alt: "TraceHalo Live Monitor configuration with modules and a system status preview",
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
          copy: "Battery, connection and hardware details for keyboards, mice and trackpads stay together instead of hiding across system panels.",
          alt: "TraceHalo input-device view showing keyboard, mouse and trackpad information",
        },
        {
          id: "menu",
          number: "04",
          label: "Menu Bar",
          title: "There when needed. Quiet when not.",
          copy: "Keep the metrics that matter in the menu bar. Open the deeper view with a click, then return to a calm desktop.",
          alt: "TraceHalo menu bar monitor showing CPU, memory, GPU, storage and temperature",
        },
      ],
    },
    principles: {
      label: "TraceHalo principles",
      items: [
        {
          title: "Native",
          copy: "Built for macOS 14+ and Apple silicon, with a focused native experience.",
        },
        {
          title: "Private",
          copy: "Monitoring stays on your Mac. No account, cloud service or analytics layer is required.",
        },
        {
          title: "Open source",
          copy: "Apache 2.0 licensed and open for inspection, learning and contribution.",
        },
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
    about: {
      eyebrow: "THE MAKER",
      title: "Hi, I’m ShawnShoper.",
      copy: "I build independent software with care for craft, clarity and the people who use it. TraceHalo is the first project featured here, with more work to follow.",
      action: "Connect on GitHub",
      iconAlt: "TraceHalo app icon",
    },
    footer: "TraceHalo · Apache 2.0",
    externalLabels: {
      profile: "Open ShawnShoper on GitHub in a new window",
      repo: "Open the TraceHalo repository in a new window",
      screenshots: "See TraceHalo on GitHub",
    },
  },
};

const principleIcons = [Monitor, ShieldCheck, Code];

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(start, end, value) {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
}

function getInitialLanguage() {
  if (typeof window === "undefined") return "zh";

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (supportedLanguages.includes(queryLanguage)) return queryLanguage;

  try {
    const savedLanguage = window.localStorage.getItem("shawnshoper-language");
    if (supportedLanguages.includes(savedLanguage)) return savedLanguage;
  } catch {
    // Storage can be unavailable in privacy-focused browser modes.
  }

  return "zh";
}

function ExternalLink({ href, className, children, label }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
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

export function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const storyStepRefs = useRef([]);
  const storyLayerRefs = useRef([]);
  const t = copy[language];

  const chooseLanguage = useCallback((nextLanguage) => {
    if (!supportedLanguages.includes(nextLanguage)) return;
    setLanguage(nextLanguage);

    try {
      window.localStorage.setItem("shawnshoper-language", nextLanguage);
    } catch {
      // The visible switch remains functional even when persistence is unavailable.
    }

    const nextUrl = new URL(window.location.href);
    if (nextLanguage === "zh") {
      nextUrl.searchParams.delete("lang");
    } else {
      nextUrl.searchParams.set("lang", nextLanguage);
    }
    window.history.replaceState({}, "", `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = t.meta.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", t.meta.description);
  }, [language, t.meta.description, t.meta.title]);

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
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayout = window.matchMedia("(max-width: 860px)");
    let animationFrame = 0;
    let previousStoryIndex = 0;

    const resetMotionStyles = () => {
      const hero = heroRef.current;
      if (hero) {
        [
          "--hero-copy-opacity",
          "--hero-copy-y",
          "--hero-product-opacity",
          "--hero-product-scale",
          "--hero-product-y",
          "--hero-halo-scale",
          "--hero-scroll-opacity",
        ].forEach((property) => hero.style.removeProperty(property));
      }

      storyStepRefs.current.forEach((step) => step?.style.removeProperty("--step-focus"));
      storyLayerRefs.current.forEach((layer, index) => {
        if (!layer) return;
        layer.style.setProperty("--layer-opacity", index === 0 ? "1" : "0");
        layer.style.setProperty("--layer-scale", "1");
        layer.style.setProperty("--layer-y", "0px");
      });
      previousStoryIndex = 0;
      setActiveStoryIndex(0);
    };

    const updateMotion = () => {
      animationFrame = 0;

      if (reducedMotion.matches || compactLayout.matches) {
        resetMotionStyles();
        return;
      }

      const viewportHeight = window.innerHeight;
      const hero = heroRef.current;
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        const heroDistance = Math.max(hero.offsetHeight - viewportHeight, 1);
        const heroProgress = clamp(-heroRect.top / heroDistance);
        const productReveal = smoothstep(0.04, 0.52, heroProgress);
        const copyExit = smoothstep(0.16, 0.55, heroProgress);
        const finalLift = smoothstep(0.68, 1, heroProgress);

        hero.style.setProperty("--hero-copy-opacity", String(1 - copyExit));
        hero.style.setProperty("--hero-copy-y", `${-54 * copyExit}px`);
        hero.style.setProperty("--hero-product-opacity", String(0.64 + productReveal * 0.36));
        hero.style.setProperty("--hero-product-scale", String(0.8 + productReveal * 0.2));
        hero.style.setProperty(
          "--hero-product-y",
          `${112 * (1 - productReveal) - 44 * finalLift}px`,
        );
        hero.style.setProperty("--hero-halo-scale", String(1 + heroProgress * 0.12));
        hero.style.setProperty(
          "--hero-scroll-opacity",
          String(1 - smoothstep(0.03, 0.28, heroProgress)),
        );
      }

      const steps = storyStepRefs.current.filter(Boolean);
      if (!steps.length) return;

      const targetLine = viewportHeight * 0.52;
      let nextStoryIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      const focusValues = steps.map((step, index) => {
        const rect = step.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - targetLine);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextStoryIndex = index;
        }
        const focus = 1 - clamp(distance / (viewportHeight * 0.72));
        step.style.setProperty("--step-focus", String(focus));
        return focus;
      });

      const focusTotal = focusValues.reduce((total, value) => total + value, 0) || 1;
      storyLayerRefs.current.forEach((layer, index) => {
        if (!layer) return;
        const opacity = clamp((focusValues[index] / focusTotal) * 1.6);
        const relativePosition = index - nextStoryIndex;
        layer.style.setProperty("--layer-opacity", String(opacity));
        layer.style.setProperty("--layer-scale", String(0.965 + opacity * 0.035));
        layer.style.setProperty("--layer-y", `${relativePosition * 18}px`);
      });

      if (nextStoryIndex !== previousStoryIndex) {
        previousStoryIndex = nextStoryIndex;
        setActiveStoryIndex(nextStoryIndex);
      }
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener?.("change", requestUpdate);
    compactLayout.addEventListener?.("change", requestUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener?.("change", requestUpdate);
      compactLayout.removeEventListener?.("change", requestUpdate);
    };
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>

      <header className="site-header" aria-label={t.nav.label}>
        <a className="brand" href="#top" aria-label={t.brandLabel}>
          <span className="brand-mark">SS</span>
          <span className="brand-name">ShawnShoper</span>
        </a>

        <div className="header-actions">
          <nav className="site-nav" aria-label={t.nav.label}>
            <a href="#work">{t.nav.work}</a>
            <a href="#about">{t.nav.about}</a>
            <ExternalLink
              href={githubProfile}
              className="nav-external"
              label={t.externalLabels.profile}
            >
              {t.nav.github}
            </ExternalLink>
          </nav>
          <LanguageSwitcher
            language={language}
            labels={t.language}
            onChange={chooseLanguage}
          />
        </div>
      </header>

      <main id="main-content">
        <section className="hero-scroll" id="top" ref={heroRef} aria-labelledby="hero-title">
          <div className="hero-sticky">
            <div className="hero-background" aria-hidden="true" />
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1 id="hero-title">
                {t.hero.prefix}
                <span>{t.hero.accent}</span>
                {t.hero.suffix}
                <br />
                {t.hero.secondLine}
              </h1>
              <p className="hero-intro">{t.hero.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  {t.hero.primary} <ArrowRight aria-hidden="true" weight="bold" />
                </a>
                <ExternalLink
                  href={githubProfile}
                  className="button button-secondary"
                  label={t.externalLabels.profile}
                >
                  {t.hero.secondary} <GithubLogo aria-hidden="true" weight="fill" />
                </ExternalLink>
              </div>
            </div>

            <figure className="hero-product">
              <div className="product-frame product-frame-hero">
                <img
                  src="/assets/tracehalo-live-monitor.png"
                  alt={t.hero.imageAlt}
                  width="1558"
                  height="1010"
                  fetchPriority="high"
                />
              </div>
              <figcaption>{t.hero.caption}</figcaption>
            </figure>

            <p className="scroll-cue" aria-hidden="true">
              {t.hero.scroll}
              <ArrowDown weight="bold" />
            </p>
          </div>
        </section>

        <section className="project-story" id="work" ref={storyRef} aria-labelledby="project-title">
          <div className="story-intro section-container" data-reveal>
            <p className="section-index">{t.story.eyebrow}</p>
            <div>
              <h2 id="project-title">{t.story.title}</h2>
              <p>{t.story.summary}</p>
              <ExternalLink
                href={traceHaloRepo}
                className="text-link"
                label={t.externalLabels.repo}
              >
                {t.story.repo} <ArrowUpRight aria-hidden="true" weight="bold" />
              </ExternalLink>
            </div>
          </div>

          <div className="story-shell section-container">
            <div className="story-copy-rail">
              {t.story.chapters.map((chapter, index) => {
                const screenshot = screenshots[index];
                return (
                  <article
                    className={`story-step ${activeStoryIndex === index ? "is-active" : ""}`}
                    key={chapter.id}
                    ref={(element) => {
                      storyStepRefs.current[index] = element;
                    }}
                  >
                    <div className="story-step-copy">
                      <p className="story-step-index">
                        {chapter.number} / {chapter.label}
                      </p>
                      <h3>{chapter.title}</h3>
                      <p>{chapter.copy}</p>
                    </div>
                    <figure className={`story-mobile-media ${screenshot.portrait ? "is-portrait" : ""}`}>
                      <div className="product-frame">
                        <img
                          src={screenshot.src}
                          alt={chapter.alt}
                          width={screenshot.width}
                          height={screenshot.height}
                          loading="lazy"
                        />
                      </div>
                      <figcaption>
                        {t.story.screenshot} · {chapter.label}
                      </figcaption>
                    </figure>
                  </article>
                );
              })}
            </div>

            <div className="story-visual" aria-live="polite">
              <div className="story-stage-meta">
                <span>{t.story.progress}</span>
                <strong>
                  {String(activeStoryIndex + 1).padStart(2, "0")} / {String(screenshots.length).padStart(2, "0")}
                </strong>
              </div>
              <div className="story-stage">
                {screenshots.map((screenshot, index) => {
                  const chapter = t.story.chapters[index];
                  return (
                    <figure
                      className={`story-layer ${screenshot.portrait ? "is-portrait" : ""}`}
                      key={screenshot.id}
                      ref={(element) => {
                        storyLayerRefs.current[index] = element;
                      }}
                      style={{
                        "--layer-opacity": index === 0 ? 1 : 0,
                        "--layer-scale": 1,
                        "--layer-y": "0px",
                      }}
                      aria-hidden={activeStoryIndex !== index}
                    >
                      <div className="story-layer-visual">
                        <div className="product-frame">
                          <img
                            src={screenshot.src}
                            alt={activeStoryIndex === index ? chapter.alt : ""}
                            width={screenshot.width}
                            height={screenshot.height}
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                      </div>
                      <figcaption>
                        {t.story.screenshot} · {chapter.label}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="principles-section" aria-label={t.principles.label}>
          <div className="principles section-container">
            {t.principles.items.map((principle, index) => {
              const Icon = principleIcons[index];
              return (
                <article
                  className="principle"
                  key={principle.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` }}
                >
                  <span className="icon-wrap" aria-hidden="true">
                    <Icon size={26} weight="duotone" />
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="menubar-story" aria-labelledby="menubar-title">
          <div className="menubar-background" aria-hidden="true" />
          <div className="menubar-inner section-container">
            <div className="menubar-copy" data-reveal>
              <p className="section-index">{t.status.eyebrow}</p>
              <h2 id="menubar-title">{t.status.title}</h2>
              <p>{t.status.copy}</p>
              <ExternalLink
                href={`${traceHaloRepo}#see-tracehalo`}
                className="button button-light"
                label={t.externalLabels.screenshots}
              >
                {t.status.action} <ArrowUpRight aria-hidden="true" weight="bold" />
              </ExternalLink>
            </div>

            <figure className="menubar-product" data-reveal>
              <img
                src="/assets/tracehalo-menu-bar.png"
                alt={t.status.alt}
                width="282"
                height="787"
                loading="lazy"
              />
              <figcaption>{t.status.caption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner section-container" data-reveal>
            <img
              className="about-icon"
              src="/assets/tracehalo-icon.png"
              alt={t.about.iconAlt}
              width="1254"
              height="1254"
              loading="lazy"
            />
            <div className="about-copy">
              <p className="section-index">{t.about.eyebrow}</p>
              <h2 id="about-title">{t.about.title}</h2>
              <p>{t.about.copy}</p>
            </div>
            <ExternalLink
              href={githubProfile}
              className="button button-secondary about-action"
              label={t.externalLabels.profile}
            >
              <GithubLogo aria-hidden="true" weight="fill" /> {t.about.action}
              <ArrowRight aria-hidden="true" weight="bold" />
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} ShawnShoper</span>
        <ExternalLink href={traceHaloRepo} label={t.externalLabels.repo}>
          {t.footer}
        </ExternalLink>
      </footer>
    </div>
  );
}
