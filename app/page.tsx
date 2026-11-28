import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "LENGTA — OWN THE BEAUTY.",
  "description": "Discover LENGTA: provocative luxury intimate fashion, designed around confidence, choice and self-expression.",
  "openGraph": {
    "images": [
      "/assets/campaign-01-hero.webp"
    ]
  }
};

export default function Home() {
  const categories = [
    {
      name: "LACE & LAYERS",
      kicker: "DETAILED / EXPRESSIVE",
      image: "/assets/product-01-editorial.webp",
      alt: "LENGTA burgundy lace lingerie editorial portrait"
    },
    {
      name: "SCULPTED FORMS",
      kicker: "STRUCTURE / SILHOUETTE",
      image: "/assets/product-02-bodysuit-front.webp",
      alt: "LENGTA sculptural burgundy lace bodysuit product photograph"
    },
    {
      name: "AFTER HOURS",
      kicker: "NIGHTWEAR / MOOD",
      image: "/assets/product-04-hero.webp",
      alt: "LENGTA black intimate nightwear editorial photograph"
    }
  ];
  const pieces = [
    {
      code: "AD—01",
      name: "THE SIGNATURE SET",
      category: "LACE / TWO PIECE",
      image: "/assets/product-01-set.webp",
      alt: "Burgundy embellished lingerie set on a studio mannequin",
      secondary: "/assets/product-01-bra-detail.webp"
    },
    {
      code: "AD—02",
      name: "THE SCULPTED BODYSUIT",
      category: "LACE / BODYSUIT",
      image: "/assets/product-02-bodysuit-front.webp",
      alt: "Burgundy lace sculptural bodysuit, front product view",
      secondary: "/assets/product-02-bodysuit-detail.webp"
    },
    {
      code: "AD—03",
      name: "THE AFTER HOURS SLIP",
      category: "NIGHTWEAR / SHEER",
      image: "/assets/product-04-hero.webp",
      alt: "Black sheer nightwear look in a warm studio",
      secondary: "/assets/product-04-feature.webp"
    },
    {
      code: "AD—04",
      name: "THE LENGTA EDIT",
      category: "EDITORIAL / LACE",
      image: "/assets/product-01-editorial.webp",
      alt: "LENGTA burgundy lace editorial styling",
      secondary: "/assets/product-01-floral-detail.webp"
    }
  ];
  return (
    <>
      <section className="hero" id="top">
          <a className="hero-banner" href="/collection/" aria-label="Explore the LENGTA collection">
            <img
              src="/assets/campaign-01-hero.webp"
              alt="LENGTA campaign image: adult model in a burgundy lace statement look, with the LENGTA Own the Beauty identity"
              width="1500"
              height="844"
              fetchPriority="high"
            />
            <span className="hero-banner-cue">EXPLORE COLLECTION <b>↗</b></span>
          </a>
          <div className="hero-under">
            <div>
              <p className="eyebrow">COLLECTION 001 — AFTER DARK</p>
              <h1>OWN THE <em>BEAUTY.</em></h1>
            </div>
            <div className="hero-under-copy">
              <p>Intimate fashion for women who define beauty on their own terms.</p>
              <a className="button button-light" href="/collection/">DISCOVER THE COLLECTION <span>↗</span></a>
            </div>
          </div>
        </section>
      
        <section className="category-section" aria-labelledby="category-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXPRESS YOURSELF</p>
              <h2 id="category-title">A WORLD OF<br /><em>YOUR OWN.</em></h2>
            </div>
            <a className="text-link" href="/collection/">EXPLORE ALL PIECES ↗</a>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <a key={category.name} className="category-card" href="/collection/">
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.alt}
                    width="900"
                    height="1100"
                    loading="lazy"
                  />
                  <span className="category-index">0{index + 1}</span>
                  <span className="category-arrow">↗</span>
                </div>
                <div className="category-meta">
                  <h3>{category.name}</h3>
                  <span>{category.kicker}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      
        <section className="philosophy-section" id="philosophy">
          <div className="philosophy-image">
            <img
              src="/assets/campaign-02.webp"
              alt="LENGTA luxury burgundy campaign visual"
              width="1500"
              height="844"
              loading="lazy"
            />
          </div>
          <div className="philosophy-copy">
            <p className="eyebrow">THE LENGTA POINT OF VIEW</p>
            <h2>YOUR BODY.<br /><em>YOUR TERMS.</em></h2>
            <p>Beauty is not a permission to be granted. It is yours to define, to wear, to keep. LENGTA creates intimate fashion for the woman who chooses her own gaze.</p>
            <a className="text-link" href="/about/">MEET LENGTA ↗</a>
          </div>
        </section>
      
        <section className="featured-section" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FIRST LOOK — COLLECTION 001</p>
              <h2>THE AFTER<br /><em>DARK EDIT.</em></h2>
            </div>
            <a className="text-link" href="/collection/">VIEW THE COLLECTION ↗</a>
          </div>
          <div className="product-grid">
            {pieces.map((piece) => (
              <a key={piece.code} className="product-card" href="/collection/">
                <div className="product-image">
                  <img className="product-primary" src={piece.image} alt={piece.alt} width="900" height="1100" loading="lazy" />
                  <img className="product-secondary" src={piece.secondary} alt="" width="900" height="1100" loading="lazy" />
                  <span className="product-code">{piece.code}</span>
                  <span className="product-view">VIEW PIECE ↗</span>
                </div>
                <div className="product-meta">
                  <div>
                    <h3>{piece.name}</h3>
                    <p>{piece.category}</p>
                  </div>
                  <span className="product-arrow">↗</span>
                </div>
              </a>
            ))}
          </div>
          <p className="image-note">COLLECTION VISUAL PREVIEW. FINAL PRODUCT DETAILS, PRICING AND AVAILABILITY WILL BE CONFIRMED BEFORE RETAIL LAUNCH.</p>
        </section>
      
        <section className="campaign-gallery" id="campaigns" aria-label="LENGTA campaign gallery">
          <div className="campaign-heading">
            <p className="eyebrow">LENGTA / CAMPAIGNS</p>
            <h2>MADE TO BE <em>REMEMBERED.</em></h2>
          </div>
          <div className="campaign-grid">
            <a className="campaign-tile campaign-tile-wide" href="/collection/">
              <img src="/assets/campaign-03.webp" alt="LENGTA campaign in dramatic burgundy editorial lighting" width="1500" height="844" loading="lazy" />
              <span>AFTER DARK / 002 <b>↗</b></span>
            </a>
            <a className="campaign-tile" href="/collection/">
              <img src="/assets/campaign-04.webp" alt="LENGTA intimate fashion campaign, dark luxury editorial styling" width="1500" height="844" loading="lazy" />
              <span>OWN THE BEAUTY / 003 <b>↗</b></span>
            </a>
          </div>
        </section>
      
        <section className="closing-statement">
          <p className="eyebrow">NO RULES TO FOLLOW. NO APPROVAL REQUIRED.</p>
          <h2>THE BEAUTY<br />IS <em>YOURS.</em></h2>
          <a className="button button-outline" href="/collection/">STEP INTO LENGTA <span>↗</span></a>
        </section>
    </>
  );
}
