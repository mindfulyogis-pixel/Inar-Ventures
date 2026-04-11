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
                  Curated Indian yoga professionals for online work worldwide.
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
                  <a href="#" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" aria-label="Instagram">Instagram</a>
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
