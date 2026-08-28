"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const comparisonModes = {
  self: {
    tab: "Kada radite sami",
    eyebrow: "Samostalno upravljanje",
    title: "Jedan vlasnik, mnogo dnevnih uloga.",
    description:
      "Vlasnik je istovremeno domaćin, administrator, koordinator čišćenja i osoba za nepredviđene situacije.",
    focus: "Vaše vreme odlazi na svakodnevnu operativu.",
    items: [
      "Odgovaranje na svaki novi upit",
      "Praćenje cena i slobodnih termina",
      "Slanje instrukcija za dolazak",
      "Dočekivanje i ispraćanje gostiju",
      "Organizacija čišćenja i posteljine",
      "Rešavanje pitanja tokom boravka",
      "Vođenje evidencije rezervacija",
    ],
  },
  urban: {
    tab: "Kada Urban Nest vodi",
    eyebrow: "Organizovano upravljanje",
    title: "Jedan partner, jasan sistem rada.",
    description:
      "Urban Nest preuzima dnevne zadatke, dok vlasnik zadržava pregled i donosi važne odluke o svom apartmanu.",
    focus: "Vaš fokus ostaje na vlasništvu, ne na operativi.",
    items: [
      "Urban Nest vodi komunikaciju sa gostima",
      "Cene i kalendar se redovno prate",
      "Dolazak i odlazak imaju jasan proces",
      "Čišćenje se organizuje između rezervacija",
      "Apartman se proverava nakon boravka",
      "Važne situacije se rešavaju bez odlaganja",
      "Vlasnik dobija pregled rezervacija i rada",
    ],
  },
} as const;

type ComparisonMode = keyof typeof comparisonModes;

export function OwnerComparison() {
  const [mode, setMode] = useState<ComparisonMode>("self");
  const active = comparisonModes[mode];

  return (
    <section
      id="za-vlasnike"
      className="comparison section section-dark"
      aria-labelledby="comparison-title"
    >
      <div className="container">
        <Reveal className="comparison-intro">
          <p className="eyebrow">Dve strane istog apartmana</p>
          <h2 className="section-title" id="comparison-title">
            Isti apartman. Dva potpuno različita radna dana.
          </h2>
          <p className="body-copy">
            Razlika nije samo u broju rezervacija. Razlika je i u tome ko
            svakog dana vodi sve male zadatke iza njih.
          </p>
        </Reveal>

        <Reveal delay={100} className="comparison-card">
          <div className="comparison-tabs" role="tablist" aria-label="Način upravljanja apartmanom">
            {(Object.keys(comparisonModes) as ComparisonMode[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={mode === key}
                aria-controls="comparison-panel"
                className={mode === key ? "is-active" : ""}
                onClick={() => setMode(key)}
              >
                <span aria-hidden="true">{key === "self" ? "01" : "02"}</span>
                {comparisonModes[key].tab}
              </button>
            ))}
          </div>

          <div
            id="comparison-panel"
            className="comparison-panel"
            role="tabpanel"
            key={mode}
          >
            <div className="comparison-summary">
              <p className="comparison-eyebrow">{active.eyebrow}</p>
              <h3>{active.title}</h3>
              <p className="comparison-description">{active.description}</p>
              <p className="comparison-focus">{active.focus}</p>
            </div>

            <ul className="comparison-list" role="list">
              {active.items.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <style>{`
        .comparison {
          overflow: hidden;
          background:
            radial-gradient(circle at 82% 12%, rgba(211, 192, 164, 0.09), transparent 28%),
            var(--ink-deep);
        }

        .comparison-intro {
          max-width: 950px;
          margin-inline: auto;
          text-align: center;
        }

        .comparison-intro .eyebrow {
          justify-content: center;
          color: var(--sand);
        }

        .comparison-intro .body-copy {
          max-width: 680px;
          margin: 30px auto 0;
        }

        .comparison-card {
          margin-top: clamp(70px, 8vw, 110px);
          border: 1px solid var(--line-dark);
          background: #202326;
        }

        .comparison-tabs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-bottom: 1px solid var(--line-dark);
        }

        .comparison-tabs button {
          display: flex;
          min-height: 82px;
          align-items: center;
          justify-content: center;
          gap: 18px;
          border: 0;
          background: transparent;
          color: rgba(255, 254, 250, 0.5);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition:
            background-color 240ms ease,
            color 240ms ease;
        }

        .comparison-tabs button + button {
          border-left: 1px solid var(--line-dark);
        }

        .comparison-tabs button span {
          color: var(--sand);
          font-size: 10px;
          letter-spacing: 0.16em;
        }

        .comparison-tabs button.is-active {
          background: var(--sand-light);
          color: var(--ink-deep);
        }

        .comparison-tabs button.is-active span {
          color: #786548;
        }

        .comparison-panel {
          display: grid;
          grid-template-columns: minmax(350px, 0.85fr) minmax(470px, 1.15fr);
          gap: clamp(50px, 8vw, 120px);
          padding: clamp(48px, 6vw, 88px);
          animation: panel-in 420ms ease both;
        }

        .comparison-eyebrow {
          margin: 0 0 27px;
          color: var(--sand);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .comparison-summary h3 {
          max-width: 520px;
          margin: 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(42px, 4.4vw, 68px);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.08;
        }

        .comparison-description {
          max-width: 520px;
          margin: 29px 0 0;
          color: rgba(255, 254, 250, 0.68);
          font-size: 16px;
          line-height: 1.75;
        }

        .comparison-focus {
          max-width: 460px;
          margin: 48px 0 0;
          border-left: 2px solid var(--sand);
          padding-left: 22px;
          color: var(--sand-light);
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(24px, 2.2vw, 32px);
          line-height: 1.2;
        }

        .comparison-list {
          margin: 0;
          padding: 0;
          border-top: 1px solid var(--line-dark);
          list-style: none;
        }

        .comparison-list li {
          display: grid;
          grid-template-columns: 38px 1fr;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid var(--line-dark);
          padding: 18px 4px;
        }

        .comparison-list span {
          color: var(--sand);
          font-family: var(--font-serif), Georgia, serif;
          font-size: 15px;
        }

        .comparison-list p {
          margin: 0;
          color: rgba(255, 254, 250, 0.82);
          font-size: clamp(15px, 1.15vw, 17px);
          line-height: 1.55;
        }

        @keyframes panel-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 850px) {
          .comparison-panel {
            grid-template-columns: 1fr;
          }

          .comparison-summary {
            max-width: 650px;
          }
        }

        @media (max-width: 560px) {
          .comparison-intro {
            text-align: left;
          }

          .comparison-intro .eyebrow {
            justify-content: flex-start;
          }

          .comparison-intro .body-copy {
            margin-inline: 0;
          }

          .comparison-tabs button {
            min-height: 92px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            gap: 7px;
            padding: 14px 16px;
            font-size: 12px;
            text-align: left;
          }

          .comparison-panel {
            gap: 54px;
            padding: 38px 20px 44px;
          }

          .comparison-summary h3 {
            font-size: 42px;
          }

          .comparison-focus {
            margin-top: 36px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .comparison-panel {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
