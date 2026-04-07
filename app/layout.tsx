import "./globals.css";

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
          <header className="site-header">
            <div className="container nav-wrap">
              <a href="/" className="brand">
                Inar Ventures
              </a>

              <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/yoga-professionals">Yoga Professionals</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <div className="container footer-grid">
              <div className="footer-col footer-intro">
                <div className="footer-brand">Inar Ventures</div>
                <p className="footer-text">
                  Qualified Indian yoga professionals for online work with
                  clients offering yoga classes and programmes online.
                </p>
              </div>

              <div className="footer-col">
                <div className="footer-heading">Contact</div>
                <p className="footer-text">Bangalore, India</p>
                <p className="footer-text">hello@inarventures.com</p>
              </div>

              <div className="footer-col">
                <div className="footer-heading">Links</div>
                <div className="footer-links">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/yoga-professionals">Yoga Professionals</a>
                  <a href="/contact">Contact</a>
                </div>
              </div>

              <div className="footer-col">
                <div className="footer-heading">Social</div>
                <div className="footer-links">
                  <a href="#" aria-label="LinkedIn">
                    LinkedIn
                  </a>
                  <a href="#" aria-label="Instagram">
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