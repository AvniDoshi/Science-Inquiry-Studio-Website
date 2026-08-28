import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://scienceinquirystudio.org"),
  title: { default: "Science Inquiry Studio", template: "%s | Science Inquiry Studio" },
  description: "A web-based environment for middle school scientific inquiry and engineering design, supported by specialized AI assistants.",
  openGraph: {
    title: "Science Inquiry Studio",
    description: "Students ask questions, investigate evidence, and build better explanations with specialized AI assistants.",
    url: "https://scienceinquirystudio.org",
    siteName: "Science Inquiry Studio",
    type: "website",
    images: [{ url: "/og.png", width: 1280, height: 720, alt: "Science Inquiry Studio overview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Science Inquiry Studio",
    description: "Inquiry belongs in students’ hands.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${fraunces.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="site-header">
          <div className="shell header-inner">
            <a className="brand" href="/" aria-label="Science Inquiry Studio home">
              <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
              <span><strong>Science Inquiry</strong><small>Studio</small></span>
            </a>
            <nav aria-label="Main navigation">
              <a href="/#how-it-works">How it works</a>
              <a href="/people">People</a>
              <a className="nav-cta" href="https://sinq.studio" target="_blank" rel="noreferrer">Try SINQ <span aria-hidden="true">↗</span></a>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="shell footer-grid">
            <div>
              <a className="brand footer-brand" href="/">
                <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
                <span><strong>Science Inquiry</strong><small>Studio</small></span>
              </a>
              <p>Inquiry belongs in students’ hands.</p>
            </div>
            <div className="footer-links">
              <a href="/people">Research team</a>
              <a href="https://sinq.studio" target="_blank" rel="noreferrer">Open SINQ Studio</a>
              <a href="https://www.digitallearninglab.org/" target="_blank" rel="noreferrer">Digital Learning Lab</a>
            </div>
          </div>
          <div className="shell footer-bottom"><span>© 2026 Science Inquiry Studio</span><span>A research collaboration for better science learning.</span></div>
        </footer>
      </body>
    </html>
  );
}
