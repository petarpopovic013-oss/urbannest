import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/site-content";

export function ServiceOverview() {
  return (
    <section
      id="usluge"
      className="service-overview section section-dark"
      aria-labelledby="service-overview-title"
    >
      <div className="container">
        <Reveal className="service-overview__intro">
          <div>
            <p className="eyebrow">Sve na jednom mestu</p>
            <h2 className="section-title" id="service-overview-title">
              <span>Vi imate apartman.</span>
              <span>Mi vodimo ceo posao.</span>
            </h2>
          </div>
          <p className="body-copy">
            Jedan tim povezuje prezentaciju, cenu, goste i svakodnevnu
            operativu. Vi donosite važne odluke i zadržavate jasan pregled.
          </p>
        </Reveal>

        <div className="service-overview__grid">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={70 + index * 55}
              className="service-overview__item"
            >
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="service-overview__note" delay={180}>
          <p>Lokalno znanje o Beogradu</p>
          <p>Pregled rezervacija i rezultata</p>
          <p>Manje dnevne operative za vlasnika</p>
        </Reveal>
      </div>

      <style>{`
        .service-overview {
          overflow: hidden;
          background:
            radial-gradient(circle at 88% 12%, rgba(211, 192, 164, 0.1), transparent 28%),
            var(--ink-deep);
        }

        .service-overview__intro {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
          align-items: end;
          gap: clamp(42px, 8vw, 126px);
        }

        .service-overview__intro .eyebrow {
          color: var(--sand);
        }

        .service-overview__intro .section-title {
          max-width: none;
          font-size: clamp(44px, 4.5vw, 66px);
        }

        .service-overview__intro .section-title span {
          display: block;
        }

        .service-overview__intro .body-copy {
          max-width: 480px;
          margin: 0 0 8px;
        }

        .service-overview__grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: clamp(52px, 6vw, 78px);
          border-top: 1px solid var(--line-dark);
          border-left: 1px solid var(--line-dark);
        }

        .service-overview__item {
          min-height: 310px;
          border-right: 1px solid var(--line-dark);
          border-bottom: 1px solid var(--line-dark);
          padding: clamp(26px, 3vw, 42px);
        }

        .service-overview__item > span {
          color: var(--sand);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.16em;
        }

        .service-overview__item h3 {
          margin: 70px 0 18px;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(28px, 2.4vw, 38px);
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.08;
        }

        .service-overview__item p {
          margin: 0;
          color: rgba(255, 254, 250, 0.58);
          font-size: 14px;
          line-height: 1.7;
        }

        .service-overview__note {
          display: flex;
          flex-wrap: wrap;
          gap: 14px 34px;
          justify-content: space-between;
          padding-top: 28px;
          color: rgba(255, 254, 250, 0.52);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .service-overview__note p {
          margin: 0;
        }

        @media (max-width: 980px) {
          .service-overview__intro {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .service-overview__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 981px) {
          .service-overview__intro .section-title span {
            white-space: nowrap;
          }
        }

        @media (max-width: 620px) {
          .service-overview__grid {
            grid-template-columns: 1fr;
            margin-top: 52px;
          }

          .service-overview__item {
            min-height: 0;
            padding: 27px;
          }

          .service-overview__item h3 {
            margin-top: 34px;
          }

        }

        @media (max-width: 759px) {
          .service-overview__note {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
