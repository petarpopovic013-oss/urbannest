import Image from "next/image";

import { Reveal } from "@/components/Reveal";

export function Transparency() {
  return (
    <section
      className="section section-light transparency"
      aria-labelledby="transparency-title"
    >
      <div className="container transparency__layout">
        <Reveal className="transparency__visual">
          <div className="transparency__orb transparency__orb--bedroom image-frame">
            <Image
              alt="Uredno pripremljena spavaća soba apartmana"
              fill
              sizes="(max-width: 760px) 60vw, 29vw"
              src="/images/apartment-bedroom.jpg"
            />
          </div>
          <div className="transparency__orb transparency__orb--minimal image-frame">
            <Image
              alt="Minimalistički enterijer savremenog apartmana"
              fill
              sizes="(max-width: 760px) 58vw, 27vw"
              src="/images/apartment-minimal.jpg"
            />
          </div>
          <div className="transparency__orb transparency__orb--city image-frame">
            <Image
              alt="Moderan gradski apartman"
              fill
              sizes="(max-width: 760px) 52vw, 24vw"
              src="/images/apartment-city.jpg"
            />
          </div>
          <span className="transparency__ring" aria-hidden="true" />
        </Reveal>

        <Reveal className="transparency__content" delay={100}>
          <p className="eyebrow">Potpuna transparentnost</p>
          <h2 className="section-title" id="transparency-title">
            Vi vidite brojke. Mi rešavamo operativu.
          </h2>
          <p className="body-copy transparency__lead">
            Bez nagađanja i bez svakodnevnog jurcanja. Dobijate jasan pregled
            rezervacija i učinka, dok mi brinemo o iskustvu gosta i stanju
            apartmana.
          </p>

          <div className="transparency__notes" aria-label="Vlasnički pregled">
            <div>
              <span aria-hidden="true">01</span>
              <p>Pregled rezervacija</p>
            </div>
            <div>
              <span aria-hidden="true">02</span>
              <p>Mesečni izveštaj</p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .transparency {
          overflow: hidden;
          background:
            radial-gradient(circle at 84% 36%, rgba(211, 192, 164, 0.18), transparent 22%),
            var(--paper);
        }

        .transparency::after {
          position: absolute;
          top: 12%;
          right: -13%;
          width: min(48vw, 650px);
          aspect-ratio: 1;
          border: 1px solid rgba(39, 43, 48, 0.04);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .transparency__layout {
          display: grid;
          grid-template-columns: minmax(460px, 1fr) minmax(430px, 0.9fr);
          align-items: center;
          gap: clamp(70px, 9vw, 150px);
        }

        .transparency__visual {
          position: relative;
          width: min(100%, 640px);
          aspect-ratio: 0.82;
        }

        .transparency__orb {
          position: absolute;
          aspect-ratio: 1;
          border: 7px solid var(--paper);
          border-radius: 50%;
          box-shadow: 0 24px 55px rgba(39, 43, 48, 0.08);
        }

        .transparency__orb--bedroom {
          top: 0;
          left: 8%;
          z-index: 1;
          width: 59%;
        }

        .transparency__orb--minimal {
          top: 34%;
          right: 1%;
          z-index: 3;
          width: 57%;
        }

        .transparency__orb--city {
          bottom: 0;
          left: 1%;
          z-index: 2;
          width: 51%;
        }

        .transparency__orb--bedroom img {
          object-position: 55% center;
        }

        .transparency__orb--minimal img {
          object-position: center;
        }

        .transparency__orb--city img {
          object-position: 62% center;
        }

        .transparency__ring {
          position: absolute;
          top: 9%;
          right: 8%;
          width: 28%;
          aspect-ratio: 1;
          border: 1px solid rgba(39, 43, 48, 0.16);
          border-radius: 50%;
        }

        .transparency__content {
          position: relative;
          z-index: 1;
          max-width: 570px;
        }

        .transparency__content .eyebrow {
          color: #787568;
        }

        .transparency__lead {
          max-width: 540px;
          margin: 32px 0 0;
        }

        .transparency__notes {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: clamp(54px, 6vw, 78px);
          border-top: 1px solid var(--line-light);
        }

        .transparency__notes > div {
          padding: 24px 20px 0 0;
        }

        .transparency__notes > div + div {
          border-left: 1px solid var(--line-light);
          padding-left: 26px;
        }

        .transparency__notes span {
          color: #8b775b;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.16em;
        }

        .transparency__notes p {
          margin: 18px 0 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(22px, 2vw, 28px);
          line-height: 1.05;
        }

        @media (max-width: 980px) {
          .transparency__layout {
            grid-template-columns: minmax(380px, 0.9fr) minmax(390px, 1fr);
            gap: 54px;
          }
        }

        @media (max-width: 780px) {
          .transparency__layout {
            grid-template-columns: 1fr;
            gap: 70px;
          }

          .transparency__visual {
            width: min(88vw, 600px);
            margin-inline: auto;
          }

          .transparency__content {
            max-width: 640px;
          }
        }

        @media (max-width: 520px) {
          .transparency__visual {
            width: 100%;
          }

          .transparency__orb {
            border-width: 4px;
          }

          .transparency__notes {
            grid-template-columns: 1fr;
          }

          .transparency__notes > div {
            padding: 22px 0 25px;
          }

          .transparency__notes > div + div {
            border-top: 1px solid var(--line-light);
            border-left: 0;
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
