import { Reveal } from "@/components/Reveal";
import { ownerOutcomes } from "@/lib/site-content";

export function OwnerOutcomes() {
  return (
    <section
      className="section section-dark owner-outcomes"
      id="za-vlasnike"
      aria-labelledby="owner-outcomes-title"
    >
      <div className="container">
        <Reveal className="owner-outcomes__intro">
          <p className="eyebrow">Za vlasnike</p>
          <h2 className="section-title" id="owner-outcomes-title">
            Više od izdavanja. Sistem koji čuva vaše vreme.
          </h2>
          <p className="body-copy">
            Dobar rezultat nastaje iz dosledno vođenih detalja. Svaki dan
            pratimo ono što utiče na kvalitet boravka, ritam rezervacija i mir
            vlasnika.
          </p>
        </Reveal>

        <div className="owner-outcomes__grid">
          {ownerOutcomes.map((outcome, index) => (
            <Reveal
              className="owner-outcomes__item"
              delay={index * 90}
              key={outcome.number}
            >
              <span className="owner-outcomes__number" aria-hidden="true">
                {outcome.number}
              </span>
              <h3 className="card-title">{outcome.title}</h3>
              <p>{outcome.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .owner-outcomes {
          overflow: hidden;
          background:
            radial-gradient(circle at 50% -20%, rgba(211, 192, 164, 0.08), transparent 38%),
            var(--ink-deep);
        }

        .owner-outcomes__intro {
          max-width: 880px;
          margin-inline: auto;
          text-align: center;
        }

        .owner-outcomes__intro .eyebrow {
          color: var(--sand);
        }

        .owner-outcomes__intro .body-copy {
          max-width: 650px;
          margin: 28px auto 0;
        }

        .owner-outcomes__grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: clamp(68px, 8vw, 112px);
          border-top: 1px solid var(--line-dark);
        }

        .owner-outcomes__item {
          min-height: 330px;
          padding: clamp(28px, 3.2vw, 48px) clamp(22px, 2.6vw, 38px) 0;
        }

        .owner-outcomes__item + .owner-outcomes__item {
          border-left: 1px solid var(--line-dark);
        }

        .owner-outcomes__number {
          display: block;
          margin-bottom: clamp(54px, 6vw, 88px);
          color: var(--sand);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.17em;
        }

        .owner-outcomes__item .card-title {
          max-width: 250px;
          font-size: clamp(30px, 2.5vw, 40px);
          line-height: 1.13;
        }

        .owner-outcomes__item p {
          max-width: 270px;
          margin: 23px 0 0;
          color: rgba(255, 254, 250, 0.74);
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.75;
        }

        @media (max-width: 960px) {
          .owner-outcomes__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .owner-outcomes__item:nth-child(3) {
            border-left: 0;
          }

          .owner-outcomes__item:nth-child(n + 3) {
            border-top: 1px solid var(--line-dark);
          }
        }

        @media (max-width: 580px) {
          .owner-outcomes__intro {
            text-align: left;
          }

          .owner-outcomes__intro .body-copy {
            margin-inline: 0;
          }

          .owner-outcomes__grid {
            grid-template-columns: 1fr;
            margin-top: 58px;
          }

          .owner-outcomes__item {
            min-height: auto;
            padding: 34px 0 43px;
          }

          .owner-outcomes__item + .owner-outcomes__item {
            border-top: 1px solid var(--line-dark);
            border-left: 0;
          }

          .owner-outcomes__number {
            margin-bottom: 28px;
          }

          .owner-outcomes__item .card-title,
          .owner-outcomes__item p {
            max-width: 390px;
          }
        }
      `}</style>
    </section>
  );
}
