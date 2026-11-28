"use client";

import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <a className="brandmark" href="/" aria-label="LENGTA home">
          <img src="/assets/lengta-logo.webp" alt="LENGTA" width="1079" height="783" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="/collection/">THE COLLECTION</a>
          <a href="/about/">OUR PHILOSOPHY</a>
          <a href="/#campaigns">CAMPAIGNS</a>
        </nav>
        <a className="header-action" href="/collection/">DISCOVER <span>↗</span></a>
        <button className="menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(value => !value)}>☰</button>
      </header>
      <nav className={open ? "mobile-nav is-open" : "mobile-nav"} aria-label="Mobile navigation">
        <a href="/collection/" onClick={() => setOpen(false)}>THE COLLECTION</a>
        <a href="/about/" onClick={() => setOpen(false)}>OUR PHILOSOPHY</a>
        <a href="/#campaigns" onClick={() => setOpen(false)}>CAMPAIGNS</a>
      </nav>
    </>
  );
}
