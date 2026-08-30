import { ArrowIcon } from "@/components/ArrowIcon";
import { ParallaxImage } from "@/components/ParallaxImage";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section id="pocetna" className="hero-image" aria-labelledby="hero-title">
      <div className="hero-image__media" aria-hidden="true">
        <ParallaxImage
          src="/images/apartment-building.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          parallaxOffset={90}
        />
      </div>
      <div className="hero-image__overlay" aria-hidden="true" />
      <div className="hero-image__texture" aria-hidden="true" />

      <div className="container hero-image__content">
        <div className="hero-image__main">
          <Reveal direction="none">
            <p className="eyebrow hero-image__eyebrow">
              <span className="hero-image__desktop-text">
                Kompletno upravljanje kratkoročnim najmom u Beogradu
              </span>
              <span className="hero-image__mobile-text">
                Upravljanje apartmanima · Beograd
              </span>
            </p>
          </Reveal>

          <Reveal delay={70}>
            <h1 className="display-title hero-image__title" id="hero-title">
              <span>Vaš apartman radi više.</span>
              <span>Vi radite manje.</span>
            </h1>
          </Reveal>

          <Reveal delay={140} className="hero-image__lower">
            <p className="hero-image__copy">
              <span className="hero-image__desktop-text">
                Urban Nest preuzima kompletno upravljanje vašim apartmanom za
                kratkoročno izdavanje. To obuhvata oglas, cene, komunikaciju sa
                gostima i svakodnevnu operativu.
              </span>
              <span className="hero-image__mobile-text">
                Preuzimamo kompletno vođenje apartmana: oglas, cene,
                komunikaciju sa gostima i svakodnevnu operativu.
              </span>
            </p>

            <div className="hero-image__actions">
              <a className="button button-light" href={contact.phoneHref}>
                <span className="hero-image__desktop-text">
                  Pozovite Urban Nest
                </span>
                <span className="hero-image__mobile-text">
                  Zakažite konsultacije
                </span>
                <ArrowIcon />
              </a>
              <a className="text-link hero-image__link" href="#usluge">
                <span className="hero-image__desktop-text">
                  Pogledajte šta preuzimamo
                </span>
                <span className="hero-image__mobile-text">Šta preuzimamo</span>
                <ArrowIcon />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={210} direction="none" className="hero-image__aside">
          <span>Urban Nest</span>
          <p>Oglas · Cene · Gosti · Operativa</p>
        </Reveal>
      </div>

      <style>{`
        .hero-image {
          position: relative;
          min-height: clamp(680px, 100svh, 880px);
          overflow: hidden;
          background: var(--ink-deep);
          color: var(--white);
          isolation: isolate;
        }

        .hero-image__media,
        .hero-image__overlay,
        .hero-image__texture {
          position: absolute;
          inset: 0;
        }

        .hero-image__media {
          z-index: -3;
        }

        .hero-image__media img {
          object-fit: cover;
          object-position: center 48%;
        }

        .hero-image__overlay {
          z-index: -2;
          background:
            linear-gradient(90deg, rgba(16, 19, 20, 0.88) 0%, rgba(16, 19, 20, 0.68) 42%, rgba(16, 19, 20, 0.2) 76%, rgba(16, 19, 20, 0.18) 100%),
            linear-gradient(180deg, rgba(16, 19, 20, 0.2) 0%, rgba(16, 19, 20, 0.08) 42%, rgba(16, 19, 20, 0.72) 100%);
        }

        .hero-image__texture {
          z-index: -1;
          opacity: 0.2;
          background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px);
          background-size: 100% 25%;
          pointer-events: none;
        }

        .hero-image__content {
          display: grid;
          min-height: inherit;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 48px;
          padding-block: clamp(74px, 8vw, 118px);
        }

        .hero-image__main {
          max-width: 1100px;
        }

        .hero-image__mobile-text {
          display: none;
        }

        .hero-image__eyebrow {
          margin-bottom: clamp(24px, 3vw, 38px);
          color: var(--sand-light);
        }

        .hero-image__title {
          color: var(--white);
          font-size: clamp(58px, 6.8vw, 98px);
          line-height: 0.96;
          text-shadow: 0 4px 36px rgba(0, 0, 0, 0.18);
        }

        .hero-image__title span {
          display: block;
        }

        .hero-image__lower {
          display: flex;
          max-width: 920px;
          align-items: flex-end;
          justify-content: space-between;
          gap: clamp(34px, 6vw, 82px);
          margin-top: clamp(30px, 4vw, 50px);
          padding-top: 28px;
          border-top: 1px solid rgba(255, 254, 250, 0.28);
        }

        .hero-image__copy {
          max-width: 560px;
          margin: 0;
          color: rgba(255, 254, 250, 0.78);
          font-size: clamp(15px, 1.2vw, 18px);
          line-height: 1.72;
        }

        .hero-image__actions {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          gap: 24px;
        }

        .hero-image__link {
          color: var(--white);
          white-space: nowrap;
        }

        .hero-image__aside {
          display: grid;
          align-self: center;
          gap: 9px;
          padding-left: 26px;
          border-left: 1px solid rgba(255, 254, 250, 0.3);
          color: rgba(255, 254, 250, 0.62);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        .hero-image__aside span,
        .hero-image__aside p {
          margin: 0;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .hero-image__aside span {
          color: var(--sand-light);
        }

        @media (min-width: 1100px) {
          .hero-image__title span {
            white-space: nowrap;
          }
        }

        @media (max-width: 980px) {
          .hero-image__content {
            grid-template-columns: 1fr;
          }

          .hero-image__aside {
            display: none;
          }

          .hero-image__lower {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 759px) {
          .hero-image {
            min-height: max(620px, 100svh);
          }

          .hero-image__media img {
            object-position: 60% center;
          }

          .hero-image__overlay {
            background:
              linear-gradient(90deg, rgba(16, 19, 20, 0.48), rgba(16, 19, 20, 0.24)),
              linear-gradient(180deg, rgba(16, 19, 20, 0.2) 0%, rgba(16, 19, 20, 0.42) 42%, rgba(16, 19, 20, 0.86) 100%);
          }

          .hero-image__texture {
            display: none;
          }

          .hero-image__content {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-block: 104px 48px;
          }

          .hero-image__main {
            display: flex;
            width: 100%;
            max-width: 380px;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }

          .hero-image__desktop-text {
            display: none;
          }

          .hero-image__mobile-text {
            display: inline;
          }

          .hero-image__eyebrow {
            gap: 9px;
            margin-bottom: 24px;
            padding: 0;
            color: rgba(255, 254, 250, 0.7);
            font-size: 10.5px;
            letter-spacing: 0.16em;
            white-space: nowrap;
          }

          .hero-image__eyebrow::before {
            display: block;
            width: 18px;
          }

          .hero-image__title {
            max-width: none;
            font-size: clamp(30px, 9.3vw, 41px);
            line-height: 1.05;
            letter-spacing: -0.045em;
          }

          .hero-image__title span {
            white-space: nowrap;
          }

          .hero-image__lower {
            display: flex;
            max-width: 32rem;
            align-items: center;
            margin-top: 27px;
            padding-top: 0;
            border-top: 0;
          }

          .hero-image__copy {
            max-width: 34ch;
            font-size: 15px;
            line-height: 1.62;
          }

          .hero-image__actions {
            display: flex;
            width: auto;
            align-items: center;
            justify-content: center;
            margin-top: 30px;
          }

          .hero-image__actions .button {
            width: auto;
            min-height: 50px;
            padding-inline: 25px;
            font-size: 12px;
            letter-spacing: 0.055em;
          }

          .hero-image__link {
            display: none;
          }
        }

        @media (max-width: 759px) and (max-height: 700px) {
          .hero-image__content {
            padding-block: 92px 32px;
          }

          .hero-image__eyebrow {
            margin-bottom: 14px;
          }

          .hero-image__lower {
            margin-top: 17px;
          }

          .hero-image__actions {
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}
