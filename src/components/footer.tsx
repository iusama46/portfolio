import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <span>© {siteConfig.copyrightYear} {siteConfig.name}</span>
        <span>Based in the UAE · Open to opportunities worldwide.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
