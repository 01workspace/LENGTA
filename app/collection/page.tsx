import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "AFTER DARK — LENGTA Collection 001",
  "description": "Explore the LENGTA AFTER DARK collection visual preview.",
  "openGraph": {
    "images": [
      "/assets/campaign-03.webp"
    ]
  }
};

export default function Collection() {
  const products = [
    {
      code: "AD—01",
      name: "THE SIGNATURE SET",
      category: "LACE / TWO PIECE",
      image: "/assets/product-01-set.webp",
      alternate: "/assets/product-01-bra-detail.webp",
      alt: "Burgundy jeweled lace bra and brief set presented on a studio mannequin",
      description: "A statement study in lace, crystal detail and considered straps."
    },
    {
      code: "AD—02",
      name: "THE SCARLET EDIT",
      category: "EDITORIAL / LACE",
      image: "/assets/product-01-editorial.webp",
      alternate: "/assets/product-01-floral-detail.webp",
      alt: "LENGTA burgundy lace editorial look with intricate appliqué details",
      description: "An expressive silhouette with delicate floral finishing."
    },
    {
      code: "AD—03",
      name: "THE SCULPTED BODYSUIT",
      category: "LACE / BODYSUIT",
      image: "/assets/product-02-bodysuit-front.webp",
      alternate: "/assets/product-02-bodysuit-detail.webp",
      alt: "Burgundy lace and strap bodysuit product photograph",
      description: "A sculptural lace composition with refined strapwork."
    },
    {
      code: "AD—04",
      name: "THE AFTER HOURS SLIP",
      category: "NIGHTWEAR / SHEER",
      image: "/assets/product-04-hero.webp",
      alternate: "/assets/product-04-feature.webp",
      alt: "Black sheer nightwear look photographed in a softly lit studio",
      description: "A dark, fluid nightwear look with a sheer overlay."
    },
    {
      code: "AD—05",
      name: "THE FRONT / BACK STUDY",
      category: "EDITORIAL / DETAIL",
      image: "/assets/product-02-model-front.webp",
      alternate: "/assets/product-02-model-back.webp",
      alt: "LENGTA model wearing a dark lace intimate look, front view",
      description: "A closer look at proportion, placement and silhouette."
    },
    {
      code: "AD—06",
      name: "THE LACE DETAILS",
      category: "CRAFT / CLOSE-UP",
      image: "/assets/product-01-strap-detail.webp",
      alternate: "/assets/product-01-bra-detail.webp",
      alt: "Close-up of burgundy lace straps and jeweled floral embellishment",
      description: "The finishing details that give a piece its character."
    },
    {
      code: "AD—07",
      name: "THE NIGHT FORM",
      category: "EDITORIAL / NIGHTWEAR",
      image: "/assets/product-06-front.webp",
      alternate: "/assets/product-06-back.webp",
      alt: "Adult model in black sheer nightwear, editorial front view",
      description: "A fluid black look with a long sheer layer."
    },
    {
      code: "AD—08",
      name: "THE FLORAL FINISH",
      category: "CRAFT / EMBELLISHMENT",
      image: "/assets/product-01-floral-detail.webp",
      alternate: "/assets/product-01-strap-detail.webp",
      alt: "Close-up of floral lace embellishment in burgundy",
      description: "An intimate study of floral lace and intricate finishing."
    }
  ];
  return (
    <>
      <section className="collection-hero">
          <img
            src="/assets/campaign-03.webp"
            alt="LENGTA AFTER DARK campaign image in burgundy and black"
            width="1500"
            height="844"
            fetchPriority="high"
          />
          <div className="collection-hero-copy">
            <p className="eyebrow">LENGTA / COLLECTION 001</p>
            <h1>AFTER<br /><em>DARK.</em></h1>
            <p>ARCHITECTURAL SENSUALITY. CONSIDERED FORM. YOUR OWN RULES.</p>
          </div>
        </section>
        <section className="collection-list">
          <div className="collection-toolbar">
            <span>THE OPENING EDIT</span>
            <span>08 VISUAL STUDIES</span>
            <span>18+ / LENGTA</span>
          </div>
          <div className="product-grid collection-grid">
            {products.map((product) => (
              <article key={product.code} className="product-card">
                <div className="product-image">
                  <img className="product-primary" src={product.image} alt={product.alt} width="900" height="1100" loading="lazy" />
                  <img className="product-secondary" src={product.alternate} alt="" width="900" height="1100" loading="lazy" />
                  <span className="product-code">{product.code}</span>
                  <span className="product-view">IMAGE DETAIL ↗</span>
                </div>
                <div className="product-meta product-meta-stack">
                  <div>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p className="product-desc">{product.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="collection-disclaimer">
            <span className="disclaimer-mark">L / 001</span>
            <p>VISUAL COLLECTION PREVIEW. PRODUCT NAMES AND DESCRIPTIONS ARE EDITORIAL PLACEHOLDERS. FINAL MATERIALS, CONSTRUCTION, SIZE RANGE, PRICES, STOCK AND AVAILABILITY HAVE NOT YET BEEN CONFIRMED.</p>
          </div>
        </section>
        <section className="detail-strip">
          <div>
            <p className="eyebrow">THE DETAILS MATTER</p>
            <h2>FORM.<br /><em>FINISH.</em><br />FEELING.</h2>
          </div>
          <img src="/assets/product-01-bra-detail.webp" alt="Close-up of burgundy lace bra embroidery and embellishment" width="900" height="900" loading="lazy" />
          <img src="/assets/product-01-floral-detail.webp" alt="Close-up of floral lace detail" width="900" height="900" loading="lazy" />
          <img src="/assets/product-01-strap-detail.webp" alt="Close-up of decorative lingerie straps" width="900" height="900" loading="lazy" />
        </section>
    </>
  );
}
