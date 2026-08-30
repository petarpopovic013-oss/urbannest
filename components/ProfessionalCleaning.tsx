import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Reveal } from "@/components/Reveal";

const spaces = [
  "Stanovi i kuće",
  "Apartmani",
  "Kancelarije",
  "Lokali",
  "Drugi poslovni prostori",
];

export function ProfessionalCleaning() {
  return (
    <section
      id="ciscenje"
      className="professional-cleaning section section-light"
      aria-labelledby="professional-cleaning-title"
    >
      <div className="container professional-cleaning__layout">
        <Reveal className="professional-cleaning__visual">
          <Image
            src="/images/apartment-kitchen.jpg"
            alt="Uredan i profesionalno pripremljen enterijer"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal className="professional-cleaning__content" delay={100}>
          <p className="eyebrow">Profesionalno čišćenje</p>
          <h2 className="section-title" id="professional-cleaning-title">
            <span>Uredan prostor,</span>
            <span>bez dodatne organizacije.</span>
          </h2>
          <p className="body-copy">
            Urban Nest pruža profesionalno čišćenje stambenih i poslovnih
            prostora kao potpuno zasebnu uslugu. Obim i dinamiku rada
            dogovaramo prema prostoru i vašim potrebama.
          </p>

          <ul className="professional-cleaning__spaces" aria-label="Prostori koje čistimo">
            {spaces.map((space) => (
              <li key={space}>{space}</li>
            ))}
          </ul>

          <Link className="button button-dark" href="/kontakt">
            Pošaljite upit za čišćenje
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>

      <style>{`
        .professional-cleaning {
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(211, 192, 164, 0.13), transparent 45%),
            var(--paper);
        }

        .professional-cleaning__layout {
          display: grid;
          grid-template-columns: minmax(0, 0.94fr) minmax(430px, 1.06fr);
          align-items: center;
          gap: clamp(58px, 9vw, 138px);
        }

        .professional-cleaning__visual {
          position: relative;
          min-height: clamp(500px, 48vw, 680px);
          overflow: hidden;
          border-radius: 4px 240px 4px 4px;
          background: var(--paper-soft);
        }

        .professional-cleaning__visual::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 62%, rgba(25, 27, 29, 0.62));
          content: "";
        }

        .professional-cleaning__content .eyebrow {
          color: #81725d;
        }

        .professional-cleaning__content .section-title {
          max-width: none;
          font-size: clamp(42px, 4.1vw, 60px);
        }

        .professional-cleaning__content .section-title span {
          display: block;
        }

        .professional-cleaning__content .body-copy {
          max-width: 590px;
          margin: 30px 0 0;
        }

        .professional-cleaning__spaces {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 34px 0 38px;
          padding: 0;
          list-style: none;
        }

        .professional-cleaning__spaces li {
          border: 1px solid var(--line-light);
          border-radius: 999px;
          padding: 9px 14px;
          color: rgba(39, 43, 48, 0.72);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .professional-cleaning__layout {
            grid-template-columns: 1fr;
          }

          .professional-cleaning__visual {
            min-height: 520px;
          }
        }

        @media (min-width: 1100px) {
          .professional-cleaning__content .section-title span {
            white-space: nowrap;
          }
        }

        @media (max-width: 620px) {
          .professional-cleaning__visual {
            min-height: 410px;
            border-radius: 4px 150px 4px 4px;
          }

        }
      `}</style>
    </section>
  );
}
