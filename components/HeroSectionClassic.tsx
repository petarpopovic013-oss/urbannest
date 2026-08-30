import { ArrowIcon } from "@/components/ArrowIcon";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/site-content";

export function HeroSectionClassic() {
  return (
    <section id="pocetna" className="hero-classic section-light">
      <div className="hero-classic__intro container">
        <Reveal>
          <p className="eyebrow hero-classic__eyebrow">
            Kompletno upravljanje kratkoročnim najmom u Beogradu
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-title hero-classic__title">
            Vaš apartman radi više.
            <br />
            Vi radite manje.
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="body-copy hero-classic__copy">
            Kompletno vođenje kratkoročnog najma, od oglasa i cena do gostiju,
            pripreme prostora i jasnog pregleda za vlasnika.
          </p>
          <div className="hero-classic__actions">
            <a className="button button-dark" href={contact.phoneHref}>
              Pozovite Urban Nest
              <ArrowIcon />
            </a>
            <a className="text-link" href="#usluge">
              Pogledajte šta preuzimamo
              <ArrowIcon />
            </a>
          </div>
        </Reveal>
      </div>
      <Reveal delay={220} className="hero-classic__image-reveal">
        <div className="hero-classic__image image-frame">
          <ParallaxImage
            src="/images/apartment-building.jpg"
            alt="Savremena stambena zgrada okružena zelenilom"
            fill
            priority
            sizes="100vw"
            parallaxOffset={120}
          />
          <div className="hero-classic__shade" aria-hidden="true" />
        </div>
      </Reveal>
      <style>{`
        .hero-classic {
          position: relative;
          overflow: hidden;
          padding-top: clamp(64px, 7vw, 108px);
        }
        .hero-classic::before,
        .hero-classic::after {
          position: absolute;
          border-radius: 50%;
          background: rgba(39, 43, 48, 0.022);
          content: "";
          pointer-events: none;
        }
        .hero-classic::before {
          top: -18vw;
          left: 8%;
          width: 34vw;
          height: 34vw;
        }
        .hero-classic::after {
          top: 40px;
          right: -9vw;
          width: 31vw;
          height: 31vw;
        }
        .hero-classic__intro {
          position: relative;
          z-index: 1;
          display: flex;
          max-width: 1160px;
          align-items: center;
          flex-direction: column;
          padding-bottom: clamp(58px, 7vw, 96px);
          text-align: center;
        }
        .hero-classic__eyebrow {
          justify-content: center;
          margin-bottom: clamp(24px, 3vw, 42px);
          color: rgba(39, 43, 48, 0.68);
        }
        .hero-classic__title {
          max-width: 1100px;
          font-size: clamp(58px, 7.4vw, 106px);
          line-height: 1;
        }
        .hero-classic__copy {
          max-width: 720px;
          margin: clamp(32px, 4vw, 50px) auto 0;
        }
        .hero-classic__actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          margin-top: 35px;
        }
        .hero-classic__image-reveal {
          position: relative;
          z-index: 2;
        }
        .hero-classic__image {
          height: clamp(450px, 39vw, 590px);
          background: var(--sage);
        }
        .hero-classic__shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 58%, rgba(20, 23, 24, 0.13));
          pointer-events: none;
        }
        @media (max-width: 759px) {
          .hero-classic {
            padding-top: 58px;
          }
          .hero-classic__intro {
            padding-bottom: 56px;
          }
          .hero-classic__eyebrow {
            max-width: 290px;
            font-size: 9px;
          }
          .hero-classic__title {
            font-size: clamp(52px, 17vw, 75px);
            line-height: 1.02;
          }
          .hero-classic__copy {
            max-width: 520px;
            margin-top: 29px;
            font-size: 15px;
            line-height: 1.68;
          }
          .hero-classic__actions {
            align-items: center;
            flex-direction: column;
            gap: 19px;
            margin-top: 29px;
          }
          .hero-classic__image {
            height: 370px;
          }
          .hero-classic__image img {
            object-position: 58% center;
          }
        }
      `}</style>
    </section>
  );
}
