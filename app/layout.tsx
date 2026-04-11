import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Inar Ventures",
  description:
    "Qualified Indian yoga professionals for online work with clients outside India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />

          <main>{children}</main>

          <footer className="site-footer">
            <div className="container footer-grid">
              <div className="footer-col">
                <div className="footer-brand">Inar Ventures</div>
                <p className="footer-tagline">
                  A curated network of qualified Indian yoga professionals for online work worldwide.
                </p>
              </div>

              <div className="footer-col">
                <div className="footer-heading">Contact</div>
                <p className="footer-text">Bangalore, India</p>
                <p className="footer-text" style={{ marginTop: "0.35rem" }}>
                  hello@inarventures.com
                </p>
              </div>

              <div className="footer-col">
                <div className="footer-heading">Navigate</div>
                <div className="footer-links">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/teachers">Our Network</a>
                  <a href="/yoga-professionals">Apply to Join</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>

              <div className="footer-col">
                <div className="footer-heading">Follow</div>
                <div className="footer-links">
                  <a href="#" aria-label="LinkedIn" style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <rect x="0.7" y="0.7" width="12.6" height="12.6" rx="2.3" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                      <path d="M3.5 6v4.5M3.5 3.8v.4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                      <path d="M6.5 10.5V7.8c0-.9.5-1.8 1.8-1.8s1.7.9 1.7 1.8v2.7" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a href="#" aria-label="Instagram" style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <rect x="0.7" y="0.7" width="12.6" height="12.6" rx="3.2" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                      <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.1" fill="none"/>
                      <circle cx="10" cy="4" r="0.65" fill="currentColor"/>
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div className="container footer-bottom">
              <p>© 2026 Inar Ventures. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
