import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-content";

const quadrants = ["north-west", "north-east", "south-west", "south-east"];

export function FullManagement() {
  return (
    <section
      className="section section-dark full-management"
      id="usluge"
      aria-labelledby="full-management-title"
    >
      <div className="container full-management__layout">
        <Reveal className="full-management__visual">
          <div
            className="full-management__clover"
            role="img"
            aria-label="Savremeno uređen gradski apartman"
          >
            {quadrants.map((quadrant) => (
              <div
                className={`full-management__petal full-management__petal--${quadrant}`}
                key={quadrant}
                aria-hidden="true"
              >
                <Image
                  alt=""
                  fill
                  sizes="(max-width: 820px) 78vw, 43vw"
                  src="/images/apartment-local.jpg"
                />
              </div>
            ))}
          </div>
          <p className="full-management__visual-note">
            Jedan standard,
            <br /> od dolaska do odlaska.
          </p>
        </Reveal>

        <div className="full-management__content">
          <Reveal>
            <p className="eyebrow">Kompletno upravljanje</p>
            <h2 className="section-title" id="full-management-title">
              Jedan partner za svaki detalj boravka.
            </h2>
            <p className="body-copy full-management__lead">
              Od optimizacije oglasa do kontrole nakon odlaska gosta. Svaki
              korak ima jasan standard.
            </p>
          </Reveal>

          <div className="full-management__services">
            {services.map((service, index) => (
              <Reveal
                className="full-management__service"
                delay={index * 80}
                key={service.title}
              >
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .full-management {
          overflow: hidden;
          background: #202326;
        }

        .full-management::before {
          position: absolute;
          inset: 0 auto 0 50%;
          width: 1px;
          background: linear-gradient(transparent, var(--line-dark) 16%, var(--line-dark) 84%, transparent);
          content: "";
          opacity: 0.5;
        }

        .full-management__layout {
          display: grid;
          grid-template-columns: minmax(360px, 0.9fr) minmax(460px, 1.1fr);
          align-items: center;
          gap: clamp(64px, 9vw, 142px);
        }

        .full-management__visual {
          position: relative;
          padding-bottom: 58px;
        }

        .full-management__clover {
          display: grid;
          width: min(100%, 560px);
          aspect-ratio: 1;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 3px;
          margin-inline: auto;
        }

        .full-management__petal {
          position: relative;
          overflow: hidden;
          background: #303438;
        }

        .full-management__petal img {
          width: 200% !important;
          max-width: none;
          height: 200% !important;
          object-fit: cover;
          transition: transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .full-management__clover:hover img {
          transform: scale(1.025);
        }

        .full-management__petal--north-west {
          border-radius: 100% 0 0 0;
        }

        .full-management__petal--north-west img {
          inset: 0 auto auto 0 !important;
        }

        .full-management__petal--north-east {
          border-radius: 0 100% 0 0;
        }

        .full-management__petal--north-east img {
          inset: 0 0 auto auto !important;
        }

        .full-management__petal--south-west {
          border-radius: 0 0 0 100%;
        }

        .full-management__petal--south-west img {
          inset: auto auto 0 0 !important;
        }

        .full-management__petal--south-east {
          border-radius: 0 0 100% 0;
        }

        .full-management__petal--south-east img {
          inset: auto 0 0 auto !important;
        }

        .full-management__visual-note {
          position: absolute;
          right: -12px;
          bottom: 0;
          margin: 0;
          color: rgba(255, 254, 250, 0.52);
          font-family: var(--font-serif), Georgia, serif;
          font-size: 17px;
          line-height: 1.18;
          text-align: right;
        }

        .full-management__content .eyebrow {
          color: var(--sand);
        }

        .full-management__lead {
          max-width: 620px;
          margin: 30px 0 0;
        }

        .full-management__services {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: clamp(54px, 6vw, 82px);
        }

        .full-management__service {
          min-height: 270px;
          border-top: 1px solid var(--line-dark);
          padding: 28px 34px 32px 0;
        }

        .full-management__service:nth-child(even) {
          border-left: 1px solid var(--line-dark);
          padding-left: 34px;
        }

        .full-management__service > span {
          color: var(--sand);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        .full-management__service h3 {
          margin: 38px 0 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(28px, 2.25vw, 36px);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.14;
        }

        .full-management__service p {
          margin: 19px 0 0;
          color: rgba(255, 254, 250, 0.74);
          font-size: clamp(15px, 1.05vw, 17px);
          line-height: 1.75;
        }

        @media (max-width: 1040px) {
          .full-management__layout {
            grid-template-columns: minmax(300px, 0.8fr) minmax(430px, 1.2fr);
            gap: 58px;
          }

          .full-management__service {
            padding-right: 24px;
          }

          .full-management__service:nth-child(even) {
            padding-left: 24px;
          }
        }

        @media (max-width: 820px) {
          .full-management::before {
            display: none;
          }

          .full-management__layout {
            grid-template-columns: 1fr;
          }

          .full-management__visual {
            width: min(78vw, 540px);
            margin-inline: auto;
          }

          .full-management__content {
            max-width: 720px;
          }
        }

        @media (max-width: 560px) {
          .full-management__visual {
            width: 100%;
            padding-bottom: 48px;
          }

          .full-management__visual-note {
            right: 0;
            font-size: 15px;
          }

          .full-management__services {
            grid-template-columns: 1fr;
          }

          .full-management__service {
            min-height: auto;
            padding: 25px 0 32px;
          }

          .full-management__service:nth-child(even) {
            border-left: 0;
            padding-left: 0;
          }

          .full-management__service h3 {
            margin-top: 26px;
          }
        }
      `}</style>
    </section>
  );
}
