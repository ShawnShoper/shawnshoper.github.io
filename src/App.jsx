import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  GithubLogo,
  Monitor,
  ShieldCheck,
} from "@phosphor-icons/react";

const githubProfile = "https://github.com/ShawnShoper";
const traceHaloRepo = "https://github.com/ShawnShoper/TraceHalo";

const screens = [
  {
    id: "storage",
    label: "Storage",
    src: "/assets/tracehalo-storage.png",
    alt: "TraceHalo storage workspace showing capacity, disk health and live I/O activity",
  },
  {
    id: "monitor",
    label: "Live Monitor",
    src: "/assets/tracehalo-live-monitor.png",
    alt: "TraceHalo Live Monitor configuration with a real-time menu bar preview",
  },
  {
    id: "devices",
    label: "Input Devices",
    src: "/assets/tracehalo-input-devices.png",
    alt: "TraceHalo input-device view showing keyboard, mouse and trackpad information",
  },
];

const principles = [
  {
    title: "Native",
    copy: "Built for macOS 14+ and Apple silicon, with a focused native experience.",
    icon: Monitor,
  },
  {
    title: "Private",
    copy: "Monitoring stays on your Mac. No telemetry upload is built into the app.",
    icon: ShieldCheck,
  },
  {
    title: "Open source",
    copy: "Apache 2.0 licensed and open for inspection, learning and contribution.",
    icon: Code,
  },
];

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

export function App() {
  const [activeScreen, setActiveScreen] = useState(screens[0]);

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

    const handleScroll = () => {
      const shift = Math.max(-46, window.scrollY * -0.045);
      document.documentElement.style.setProperty("--hero-shift", `${shift}px`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="ShawnShoper home">
          <span className="brand-mark">SS</span>
          <span className="brand-name">ShawnShoper</span>
        </a>

        <nav className="site-nav" aria-label="Portfolio">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <ExternalLink href={githubProfile} label="Open ShawnShoper on GitHub">
            GitHub
          </ExternalLink>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">ShawnShoper — independent developer &amp; open-source maker</p>
            <h1 id="hero-title">
              Building <span>quieter,</span>
              <br /> clearer software.
            </h1>
            <p className="hero-intro">
              I create focused tools for people who care how their systems work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Discover TraceHalo <ArrowRight aria-hidden="true" weight="bold" />
              </a>
              <ExternalLink
                href={githubProfile}
                className="button button-secondary"
                label="Follow ShawnShoper on GitHub"
              >
                Follow on GitHub <GithubLogo aria-hidden="true" weight="fill" />
              </ExternalLink>
            </div>
          </div>

          <figure className="hero-product" data-reveal>
            <div className="product-frame product-frame-hero">
              <img
                src="/assets/tracehalo-live-monitor.png"
                alt="Actual TraceHalo Live Monitor screen with module controls and a live menu bar preview"
                width="1558"
                height="1010"
                fetchPriority="high"
              />
            </div>
            <figcaption>Actual TraceHalo interface · Live Monitor</figcaption>
          </figure>
        </section>

        <section className="project-section" id="work" aria-labelledby="project-title">
          <div className="section-container">
            <div className="project-showcase">
              <div className="project-copy" data-reveal>
                <p className="section-index">01 / TraceHalo</p>
                <h2 id="project-title">A free, open-source system monitor for Mac.</h2>
                <p className="project-summary">
                  TraceHalo brings system information that is normally spread across several
                  macOS screens into one calm, native workspace. See performance, storage,
                  devices and sensors when you need them—then keep a live summary in the
                  menu bar.
                </p>
                <ExternalLink
                  href={traceHaloRepo}
                  className="text-link"
                  label="Explore the TraceHalo repository"
                >
                  Explore the repository <ArrowUpRight aria-hidden="true" weight="bold" />
                </ExternalLink>
              </div>

              <div className="gallery" data-reveal>
                <div className="gallery-tabs" role="tablist" aria-label="TraceHalo screens">
                  {screens.map((screen) => (
                    <button
                      key={screen.id}
                      type="button"
                      role="tab"
                      aria-selected={activeScreen.id === screen.id}
                      aria-controls="tracehalo-screen"
                      onClick={() => setActiveScreen(screen)}
                    >
                      {screen.label}
                    </button>
                  ))}
                </div>
                <figure
                  className="product-frame gallery-frame"
                  id="tracehalo-screen"
                  role="tabpanel"
                  aria-live="polite"
                >
                  <img
                    key={activeScreen.id}
                    src={activeScreen.src}
                    alt={activeScreen.alt}
                    width={activeScreen.id === "devices" ? "1220" : "1558"}
                    height={activeScreen.id === "devices" ? "790" : "1010"}
                  />
                </figure>
                <p className="gallery-caption">
                  Actual project screenshot · {activeScreen.label}
                </p>
              </div>
            </div>

            <div className="principles" aria-label="TraceHalo principles">
              {principles.map(({ title, copy, icon: Icon }, index) => (
                <article
                  className="principle"
                  key={title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` }}
                >
                  <span className="icon-wrap" aria-hidden="true">
                    <Icon size={26} weight="duotone" />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="menubar-story" aria-labelledby="menubar-title">
          <div className="menubar-inner section-container">
            <div className="menubar-copy" data-reveal>
              <p className="section-index">Always within reach</p>
              <h2 id="menubar-title">The details stay out of the way until you ask.</h2>
              <p>
                Choose exactly what appears in the menu bar, check the live summary, and
                open deeper views only when you need them.
              </p>
              <ExternalLink
                href={`${traceHaloRepo}#see-tracehalo`}
                className="button button-light"
                label="See TraceHalo screenshots on GitHub"
              >
                See TraceHalo <ArrowUpRight aria-hidden="true" weight="bold" />
              </ExternalLink>
            </div>

            <figure className="menubar-product" data-reveal>
              <img
                src="/assets/tracehalo-menu-bar.png"
                alt="Actual TraceHalo menu bar monitor showing live CPU, memory, GPU, storage, network, fan and temperature readings"
                width="282"
                height="787"
                loading="lazy"
              />
              <figcaption>Actual TraceHalo menu bar monitor</figcaption>
            </figure>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner section-container" data-reveal>
            <img
              className="about-icon"
              src="/assets/tracehalo-icon.png"
              alt="TraceHalo app icon"
              width="1254"
              height="1254"
              loading="lazy"
            />
            <div className="about-copy">
              <p className="section-index">The maker</p>
              <h2 id="about-title">Hi, I’m ShawnShoper.</h2>
              <p>
                I build independent software with care for craft, clarity and the people
                who use it. TraceHalo is the first project featured here, with more work
                to follow.
              </p>
            </div>
            <ExternalLink
              href={githubProfile}
              className="button button-secondary about-action"
              label="Connect with ShawnShoper on GitHub"
            >
              <GithubLogo aria-hidden="true" weight="fill" /> Connect on GitHub
              <ArrowRight aria-hidden="true" weight="bold" />
            </ExternalLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} ShawnShoper</span>
        <ExternalLink href={traceHaloRepo} label="Open the TraceHalo repository">
          TraceHalo · Apache 2.0
        </ExternalLink>
      </footer>
    </div>
  );
}
