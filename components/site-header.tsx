export function SiteHeader() {
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label="LENGTA home">LENGTA</a>
    <nav aria-label="Main navigation"><a href="#collections">Collections</a><a href="#story">Our philosophy</a></nav>
    <a className="header-action" href="mailto:hello@lengta.com">Get in touch <span aria-hidden="true">↗</span></a>
  </header>;
}