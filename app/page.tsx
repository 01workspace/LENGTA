import { SiteHeader } from '@/components/site-header';

const categories = [
  { number: '01', title: 'The Art of Lace', note: 'Intricate textures. Unmistakable presence.' },
  { number: '02', title: 'Sculpted Silhouettes', note: 'Corsetry and considered construction.' },
  { number: '03', title: 'After Hours', note: 'Nightwear with a point of view.' },
];

export default function Home() {
  return (
    <main>
      <div className="announcement">A different kind of confidence. <span>OWN THE BEAUTY.</span></div>
      <SiteHeader />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">LENGTA / INTIMATE ATELIER</p>
          <h1 id="hero-title">Own the<br /><em>beauty.</em></h1>
          <p className="hero-intro">A study in confidence, form and fearless femininity. Made for the woman who defines beauty on her own terms.</p>
          <a className="text-link" href="#collections">Discover the world of LENGTA <span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero-art" role="img" aria-label="LENGTA campaign editorial photograph">
          <div className="art-frame"><span className="art-mark">L.</span><span className="art-caption">FORM / FEELING / FREEDOM</span></div>
          <span className="vertical-note">THE BEAUTY IS YOURS — 001</span>
        </div>
        <div className="hero-index">01 <span>—</span> 03</div>
      </section>
      <section className="manifesto" id="story">
        <p className="eyebrow">A LENGTA STATE OF MIND</p>
        <p>Not made to please everyone.<br /><em>Made to be entirely your own.</em></p>
      </section>
      <section className="collections" id="collections">
        <div className="section-heading">
          <div><p className="eyebrow">THE LENGTA UNIVERSE</p><h2>Designed to <em>be felt.</em></h2></div>
          <p>Distinct expressions. One uncompromising point of view.</p>
        </div>
        <div className="category-grid">
          {categories.map(item => (
            <article className="category-card" key={item.number}>
              <div className="category-art" role="img" aria-label={item.title}>
                <span>{item.number}</span><i aria-hidden="true">L</i>
              </div>
              <div className="category-meta">
                <div><h3>{item.title}</h3><p>{item.note}</p></div>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <footer className="site-footer">
        <a className="footer-wordmark" href="/">LENGTA</a>
        <p>OWN THE BEAUTY.</p>
        <small>© {new Date().getFullYear()} LENGTA. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  );
}
