import { navigation, siteConfig } from "@/data/site";
import { Icon } from "./icons";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span className="wordmark-mark">{siteConfig.name.slice(0, 1)}</span>
          <span className="wordmark-copy">
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.role}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="#contact">
          Let&apos;s talk <Icon name="arrow-up-right" />
        </a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <Icon name="menu" />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
