"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

const journeySteps = [
  {
    number: "01",
    label: "Početak saradnje",
    title: "Upoznajemo apartman i vaše ciljeve",
    description:
      "Prolazimo kroz lokaciju, kapacitet, trenutno stanje i način na koji želite da koristite apartman. Tako postavljamo realan okvir saradnje.",
    image: "/images/apartment-local.jpg",
    alt: "Dnevni boravak savremenog gradskog apartmana",
  },
  {
    number: "02",
    label: "Oglas, cena i kalendar",
    title: "Postavljamo prezentaciju i ritam rezervacija",
    description:
      "Uređujemo oglas, fotografije i pravila boravka, a cenu i dostupnost prilagođavamo periodu i potražnji u Beogradu.",
    image: "/images/apartment-living.jpg",
    alt: "Uređen dnevni boravak spreman za predstavljanje gostima",
  },
  {
    number: "03",
    label: "Rezervacija i boravak",
    title: "Vodimo gosta od prvog upita do odlaska",
    description:
      "Odgovaramo na poruke, potvrđujemo rezervaciju, šaljemo jasne instrukcije za dolazak i ostajemo dostupni tokom boravka.",
    image: "/images/apartment-minimal.jpg",
    alt: "Svetao enterijer apartmana pripremljen za dolazak gosta",
  },
  {
    number: "04",
    label: "Prostor i pregled",
    title: "Pripremamo apartman, a vas držimo informisanim",
    description:
      "Koordiniramo čišćenje i proveru nakon gosta, pripremamo prostor za sledeći dolazak i dajemo vam jasan pregled važnih aktivnosti.",
    image: "/images/apartment-kitchen.jpg",
    alt: "Uredna kuhinja savremenog apartmana",
  },
];

export function ManagementJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const observers = stepRefs.current.map((node, index) => {
      if (!node) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(index);
        },
        { rootMargin: "-36% 0px -44% 0px", threshold: 0 },
      );

      observer.observe(node);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const active = journeySteps[activeStep];

  return (
    <section
      id="kako-radimo"
      className="journey section section-light"
      aria-labelledby="journey-title"
    >
      <div className="container">
        <Reveal className="journey-intro">
          <div>
            <p className="eyebrow">Kako izgleda saradnja</p>
            <h2 className="section-title" id="journey-title">
              <span>Od prvog razgovora do</span>
              <span>jasnog mesečnog pregleda.</span>
            </h2>
          </div>
          <p className="body-copy">
            Upravljanje apartmanom nije jedna radnja. To je niz povezanih
            koraka koji gostu daju dobro iskustvo, a vlasniku vraćaju vreme.
          </p>
        </Reveal>

        <div className="journey-layout">
          <div className="journey-visual-column" aria-live="polite">
            <div className="journey-visual image-frame">
              {journeySteps.map((step, index) => (
                <Image
                  key={step.image}
                  src={step.image}
                  alt={activeStep === index ? step.alt : ""}
                  aria-hidden={activeStep !== index}
                  fill
                  sizes="(max-width: 900px) 100vw, 43vw"
                  loading="eager"
                  className={`journey-slide${activeStep === index ? " is-active" : ""}`}
                />
              ))}
              <div className="journey-visual-overlay" aria-hidden="true" />
              <div className="journey-visual-caption">
                <span>{active.number}</span>
                <p>{active.label}</p>
              </div>
            </div>
          </div>

          <div className="journey-steps">
            {journeySteps.map((step, index) => (
              <button
                key={step.number}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                type="button"
                className={`journey-step${activeStep === index ? " is-active" : ""}`}
                aria-pressed={activeStep === index}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
              >
                <div className="journey-mobile-image image-frame">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 900px) calc(100vw - 40px), 1px"
                  />
                </div>
                <span className="journey-number">{step.number}</span>
                <div>
                  <p className="journey-label">{step.label}</p>
                  <h3>{step.title}</h3>
                  <p className="journey-description">{step.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .journey {
          overflow: clip;
          background:
            radial-gradient(circle at 8% 22%, rgba(211, 192, 164, 0.22), transparent 24%),
            var(--paper);
        }

        .journey-intro {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(280px, 0.6fr);
          align-items: end;
          gap: clamp(50px, 9vw, 150px);
        }

        .journey-intro .eyebrow {
          color: #81725d;
        }

        .journey-intro .section-title {
          font-size: clamp(42px, 4.4vw, 66px);
        }

        .journey-intro .section-title span {
          display: block;
        }

        .journey-intro .body-copy {
          max-width: 480px;
          margin: 0 0 7px;
        }

        .journey-layout {
          display: grid;
          grid-template-columns: minmax(380px, 0.9fr) minmax(460px, 1.1fr);
          align-items: start;
          gap: clamp(60px, 8vw, 132px);
          margin-top: clamp(60px, 7vw, 94px);
        }

        .journey-visual-column {
          position: sticky;
          top: 132px;
        }

        .journey-visual {
          width: 100%;
          aspect-ratio: 0.84;
          border-radius: 48% 48% 8px 8px;
          background: var(--paper-soft);
        }

        .journey-visual .journey-slide {
          opacity: 0;
          object-fit: cover;
          transform: scale(1.018);
          transition:
            opacity 760ms ease,
            transform 1100ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .journey-visual .journey-slide.is-active {
          z-index: 1;
          opacity: 1;
          transform: scale(1);
        }

        .journey-visual-overlay {
          position: absolute;
          z-index: 2;
          inset: 0;
          background: linear-gradient(180deg, transparent 58%, rgba(20, 23, 24, 0.58));
          pointer-events: none;
        }

        .journey-visual-caption {
          position: absolute;
          z-index: 3;
          right: 34px;
          bottom: 31px;
          left: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: var(--white);
        }

        .journey-visual-caption span {
          color: var(--sand-light);
          font-size: 12px;
          font-weight: 750;
          letter-spacing: 0.16em;
        }

        .journey-visual-caption p {
          margin: 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 26px;
        }

        .journey-steps {
          border-top: 1px solid var(--line-light);
        }

        .journey-step {
          display: grid;
          width: 100%;
          min-height: 220px;
          grid-template-columns: 42px 1fr;
          gap: 25px;
          border: 0;
          border-bottom: 1px solid var(--line-light);
          padding: 32px 16px 34px 0;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          transition:
            padding-left 260ms ease,
            background-color 260ms ease;
        }

        .journey-step.is-active {
          padding-left: 24px;
          background: rgba(211, 192, 164, 0.16);
        }

        .journey-number,
        .journey-label {
          color: #8b775b;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .journey-label {
          margin: 0 0 22px;
        }

        .journey-step h3 {
          max-width: 620px;
          margin: 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(32px, 3vw, 46px);
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .journey-description {
          max-width: 610px;
          margin: 22px 0 0;
          color: rgba(39, 43, 48, 0.7);
          font-size: 16px;
          line-height: 1.75;
        }

        .journey-mobile-image {
          display: none;
        }

        @media (max-width: 900px) {
          .journey-intro {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .journey-intro .body-copy {
            max-width: 650px;
          }

          .journey-layout {
            grid-template-columns: 1fr;
            gap: 0;
            margin-top: 66px;
          }

          .journey-visual-column {
            display: none;
          }

          .journey-step,
          .journey-step.is-active {
            min-height: 0;
            grid-template-columns: 34px 1fr;
            padding: 30px 0 38px;
            background: transparent;
          }

          .journey-mobile-image {
            display: block;
            height: 260px;
            grid-column: 1 / -1;
            margin-bottom: 27px;
            border-radius: 44% 44% 4px 4px;
          }

          .journey-step h3 {
            font-size: clamp(30px, 8.5vw, 42px);
          }
        }

        @media (min-width: 1000px) {
          .journey-intro .section-title span {
            white-space: nowrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-visual .journey-slide {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
