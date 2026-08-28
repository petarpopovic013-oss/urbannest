import { ParallaxImage } from "@/components/ParallaxImage";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/site-content";

function ArrowIcon() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="pocetna" className="hero section-light">
      <div className="hero-intro container">
        <Reveal>
          <p className="eyebrow hero-eyebrow">
            Kompletno upravljanje kratkoročnim najmom u Beogradu
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display-title hero-title">
            Vaš apartman radi više.
            <br />
            Vi radite manje.
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="body-copy hero-copy">
            Urban Nest vodi oglas, cene, goste, check-in, čišćenje, kontrolu i
            izveštaje, dok vi zadržavate pregled bez svakodnevne operative.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href={contact.phoneHref}>
              Pozovite Urban Nest
              <ArrowIcon />
            </a>
            <a className="text-link" href="#kako-radimo">
              Pogledajte kako radimo
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={220} className="hero-image-reveal">
        <div className="hero-image image-frame">
          <ParallaxImage
            src="/images/apartment-building.jpg"
            alt="Savremena stambena zgrada okružena zelenilom"
            fill
            priority
            sizes="100vw"
            parallaxOffset={120}
          />
          <div className="hero-image-shade" aria-hidden="true" />
        </div>
      </Reveal>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          padding-top: clamp(88px, 10vw, 156px);
        }

        .hero::before,
        .hero::after {
          position: absolute;
          border-radius: 50%;
          background: rgba(39, 43, 48, 0.022);
          content: "";
          pointer-events: none;
        }

        .hero::before {
          top: -18vw;
          left: 8%;
          width: 34vw;
          height: 34vw;
        }

        .hero::after {
          top: 40px;
          right: -9vw;
          width: 31vw;
          height: 31vw;
        }

        .hero-intro {
          position: relative;
          z-index: 1;
          display: flex;
          max-width: 1160px;
          align-items: center;
          flex-direction: column;
          padding-bottom: clamp(76px, 9vw, 132px);
          text-align: center;
        }

        .hero-eyebrow {
          justify-content: center;
          margin-bottom: clamp(24px, 3vw, 42px);
          color: rgba(39, 43, 48, 0.68);
        }

        .hero-title {
          max-width: 1100px;
          font-size: clamp(62px, 8vw, 116px);
          line-height: 1;
        }

        .hero-copy {
          max-width: 720px;
          margin: clamp(32px, 4vw, 50px) auto 0;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          margin-top: 35px;
        }

        .hero-image-reveal {
          position: relative;
          z-index: 2;
        }

        .hero-image {
          height: clamp(560px, 46vw, 700px);
          background: var(--sage);
        }

        .hero-image-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 58%, rgba(20, 23, 24, 0.13));
          pointer-events: none;
        }

        @media (max-width: 759px) {
          .hero {
            padding-top: 74px;
          }

          .hero-intro {
            padding-bottom: 68px;
          }

          .hero-eyebrow {
            max-width: 290px;
            font-size: 9px;
          }

          .hero-title {
            font-size: clamp(52px, 17vw, 75px);
            line-height: 1.02;
          }

          .hero-copy {
            max-width: 520px;
            margin-top: 29px;
            font-size: 15px;
            line-height: 1.68;
          }

          .hero-actions {
            align-items: center;
            flex-direction: column;
            gap: 19px;
            margin-top: 29px;
          }

          .hero-image {
            height: 430px;
          }

          .hero-image img {
            object-position: 58% center;
          }
        }

      `}</style>
    </section>
  );
}
