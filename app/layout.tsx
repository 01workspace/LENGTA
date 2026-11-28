import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "LENGTA — OWN THE BEAUTY.",
  description: "LENGTA — OWN THE BEAUTY. Luxury intimate fashion for adult women.",
  openGraph: {
    title: "LENGTA — OWN THE BEAUTY.",
    description: "LENGTA — OWN THE BEAUTY. Luxury intimate fashion for adult women.",
    type: "website",
    images: ["/assets/campaign-01-hero.webp"],
  },
  icons: { icon: "/assets/lengta-logo.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="announcement">LENGTA — INTIMATE FASHION <span>✦</span> OWN THE BEAUTY.</div>
        <SiteHeader />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-top">
            <a className="brandmark footer-mark" href="/" aria-label="LENGTA home">
              <img src="/assets/lengta-logo.webp" alt="LENGTA — Own the Beauty" width="1079" height="783" loading="lazy" />
            </a>
            <p>OWN THE BEAUTY.<br /><small>YOUR BODY. YOUR TERMS.</small></p>
            <a className="back-top" href="#top">BACK TO TOP ↑</a>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} LENGTA. ALL RIGHTS RESERVED.</span>
            <span>INDEPENDENT. UNAPOLOGETIC. YOURS.</span>
            <span>18+ · INTIMATE FASHION</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
