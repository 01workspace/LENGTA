import type { Metadata } from "next";

export const metadata: Metadata = {
  "title": "The LENGTA Philosophy — OWN THE BEAUTY.",
  "description": "The LENGTA point of view: intimate fashion, self-expression and beauty on your own terms.",
  "openGraph": {
    "images": [
      "/assets/campaign-04.webp"
    ]
  }
};

export default function About() {

  return (
    <>
      <section className="about-hero">
          <img src="/assets/campaign-04.webp" alt="LENGTA dark luxury intimate-fashion campaign" width="1500" height="844" fetchPriority="high" />
          <div className="about-hero-copy">
            <p className="eyebrow">THE LENGTA POINT OF VIEW</p>
            <h1>YOUR BODY.<br /><em>YOUR TERMS.</em></h1>
          </div>
        </section>
        <section className="about-manifesto">
          <p className="eyebrow">OWN THE BEAUTY.</p>
          <h2>BEAUTY IS NOT<br />A PERMISSION.</h2>
          <p>It is yours to define, to wear, to keep. LENGTA is an independent intimate-fashion label built around agency, self-expression and the freedom to define beauty on your own terms.</p>
          <p>Choose what moves you. Take up space. Be every version of yourself.</p>
          <a className="button button-outline" href="/collection/">EXPLORE THE COLLECTION <span>↗</span></a>
        </section>
    </>
  );
}
