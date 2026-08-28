"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Logo } from "@/components/Logo";
import { contact } from "@/lib/site-content";

const questions = [
  {
    question: "Gde se nalazi vaš apartman?",
    helper: "Lokacija nam pomaže da razumemo tip potražnje i ritam rezervacija.",
    options: ["Centar i širi centar", "Novi Beograd", "Drugi deo Beograda", "Još tražim nekretninu"],
  },
  {
    question: "U kojoj fazi se trenutno nalazite?",
    helper: "Saradnja može početi i sa postojećim oglasom i sa potpuno novim apartmanom.",
    options: ["Već izdajem kratkoročno", "Spreman sam da počnem", "Tek razmatram opcije"],
  },
  {
    question: "Šta vam trenutno oduzima najviše vremena?",
    helper: "Izaberite deo upravljanja koji vam predstavlja najveće opterećenje.",
    options: ["Poruke i komunikacija", "Dolazak i odlazak gostiju", "Čišćenje i kontrola", "Cene i kalendar"],
  },
  {
    question: "Kako želite da koristite apartman?",
    helper: "Dostupnost vlasniku i dostupnost gostima mogu da se usklade kroz kalendar.",
    options: ["Uglavnom za goste", "Povremeno i za sebe", "Nisam još odlučio"],
  },
] as const;

function ArrowIcon() {
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PropertyQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const isComplete = step >= questions.length;
  const currentAnswer = answers[step];

  const selectAnswer = (answer: string) => {
    setAnswers((existing) => {
      const updated = [...existing];
      updated[step] = answer;
      return updated;
    });
  };

  const goNext = () => {
    if (!currentAnswer) return;
    setStep((current) => current + 1);
  };

  const goBack = () => setStep((current) => Math.max(0, current - 1));

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <section
      id="procena"
      className="quiz section section-dark"
      aria-labelledby="quiz-title"
    >
      <div className="container quiz-layout">
        <Reveal className="quiz-intro">
          <p className="eyebrow">Kratka procena</p>
          <h2 className="section-title" id="quiz-title">
            Da li vam je potrebno organizovano upravljanje?
          </h2>
          <p className="body-copy">
            Odgovorite na četiri kratka pitanja. Ne računamo zaradu unapred i
            ne dajemo automatska obećanja. Cilj je da razgovor počne sa pravim
            informacijama.
          </p>
        </Reveal>

        <Reveal delay={100} className="quiz-card-wrap">
          <div className="quiz-card">
            {!isComplete ? (
              <>
                <div className="quiz-progress" aria-label={`Pitanje ${step + 1} od ${questions.length}`}>
                  <div>
                    <span>Pitanje</span>
                    <strong>
                      {String(step + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}
                    </strong>
                  </div>
                  <div className="quiz-progress-track" aria-hidden="true">
                    <span style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div 
                    className="quiz-question" 
                    key={step}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="quiz-kicker">O vašem apartmanu</p>
                    <h3>{questions[step].question}</h3>
                    <p className="quiz-helper">{questions[step].helper}</p>

                    <div className="quiz-options">
                      {questions[step].options.map((option, index) => (
                        <button
                          key={option}
                          type="button"
                          className={currentAnswer === option ? "is-selected" : ""}
                          aria-pressed={currentAnswer === option}
                          onClick={() => selectAnswer(option)}
                        >
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          {option}
                          <i aria-hidden="true" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="quiz-controls">
                  <button
                    type="button"
                    className="quiz-back"
                    onClick={goBack}
                    disabled={step === 0}
                  >
                    Prethodno
                  </button>
                  <button
                    type="button"
                    className="button button-dark quiz-next"
                    onClick={goNext}
                    disabled={!currentAnswer}
                  >
                    {step === questions.length - 1 ? "Završite procenu" : "Sledeće pitanje"}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </>
            ) : (
              <motion.div 
                className="quiz-result" 
                aria-live="polite"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              >
                <div className="quiz-result-mark">
                  <Logo className="quiz-result-logo" />
                </div>
                <p className="quiz-kicker">Sledeći korak</p>
                <h3>Imamo dobru osnovu za kratak razgovor.</h3>
                <p>
                  Vaši odgovori pokazuju šta vam je važno u svakodnevnom
                  upravljanju. Telefonski razgovor nam omogućava da proverimo
                  detalje apartmana i objasnimo kako bi saradnja izgledala u
                  praksi.
                </p>
                <a
                  className="button button-dark quiz-call"
                  href={contact.phoneHref}
                  aria-label={`Nazovite Urban Nest na ${contact.displayPhone}`}
                >
                  Nazovite Urban Nest
                  <ArrowIcon />
                </a>
                <a className="quiz-phone" href={contact.phoneHref}>
                  {contact.displayPhone}
                </a>
                <button type="button" className="quiz-restart" onClick={restart}>
                  Popunite upitnik ponovo
                </button>
              </motion.div>
            )}
          </div>
        </Reveal>
      </div>

      <style>{`
        .quiz {
          overflow: hidden;
          background:
            radial-gradient(circle at 6% 92%, rgba(211, 192, 164, 0.08), transparent 28%),
            var(--ink-deep);
        }

        .quiz-layout {
          display: grid;
          grid-template-columns: minmax(380px, 0.8fr) minmax(520px, 1.2fr);
          align-items: start;
          gap: clamp(65px, 9vw, 145px);
        }

        .quiz-intro {
          position: sticky;
          top: 140px;
        }

        .quiz-intro .eyebrow {
          color: var(--sand);
        }

        .quiz-intro .body-copy {
          max-width: 560px;
          margin: 32px 0 0;
        }

        .quiz-card {
          min-height: 720px;
          border-radius: 42px 4px 42px 4px;
          padding: clamp(30px, 4.6vw, 66px);
          background: var(--paper);
          color: var(--ink);
          box-shadow: 0 34px 90px rgba(0, 0, 0, 0.28);
        }

        .quiz-progress > div:first-child {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: rgba(39, 43, 48, 0.52);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .quiz-progress strong {
          color: #806b4d;
          font-weight: 750;
        }

        .quiz-progress-track {
          height: 2px;
          margin-top: 17px;
          background: rgba(39, 43, 48, 0.13);
        }

        .quiz-progress-track span {
          display: block;
          height: 100%;
          background: #9b8361;
          transition: width 320ms ease;
        }

        .quiz-question {
          padding-top: clamp(45px, 5vw, 70px);
        }

        .quiz-kicker {
          margin: 0 0 23px;
          color: #806b4d;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .quiz-question h3,
        .quiz-result h3 {
          max-width: 650px;
          margin: 0;
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(40px, 4.2vw, 62px);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.08;
        }

        .quiz-helper {
          max-width: 590px;
          margin: 22px 0 0;
          color: rgba(39, 43, 48, 0.66);
          font-size: 15px;
          line-height: 1.7;
        }

        .quiz-options {
          display: grid;
          margin-top: 42px;
          border-top: 1px solid var(--line-light);
        }

        .quiz-options button {
          display: grid;
          min-height: 64px;
          grid-template-columns: 34px 1fr 18px;
          align-items: center;
          gap: 15px;
          border: 0;
          border-bottom: 1px solid var(--line-light);
          padding: 12px 2px;
          background: transparent;
          color: rgba(39, 43, 48, 0.78);
          font-size: 15px;
          text-align: left;
          cursor: pointer;
          transition:
            color 200ms ease,
            padding-left 200ms ease,
            background-color 200ms ease;
        }

        .quiz-options button > span {
          color: #806b4d;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 14px;
        }

        .quiz-options button i {
          width: 14px;
          height: 14px;
          border: 1px solid rgba(39, 43, 48, 0.3);
          border-radius: 50%;
          transition:
            border-color 200ms ease,
            background-color 200ms ease;
        }

        .quiz-options button:hover,
        .quiz-options button.is-selected {
          padding-left: 14px;
          background: rgba(211, 192, 164, 0.24);
          color: var(--ink-deep);
        }

        .quiz-options button.is-selected i {
          border: 4px solid #9b8361;
          background: var(--paper);
        }

        .quiz-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          margin-top: 42px;
        }

        .quiz-back,
        .quiz-restart {
          border: 0;
          border-bottom: 1px solid currentColor;
          padding: 5px 0;
          background: transparent;
          color: rgba(39, 43, 48, 0.66);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
        }

        .quiz-back:disabled {
          visibility: hidden;
        }

        .quiz-next:disabled {
          opacity: 0.35;
          pointer-events: none;
        }

        .quiz-result {
          display: flex;
          min-height: 590px;
          align-items: flex-start;
          flex-direction: column;
          justify-content: center;
        }

        .quiz-result-mark {
          display: block;
          width: min(133px, 36%);
          height: auto;
          margin-bottom: 40px;
        }

        .quiz-result-logo {
          width: 100%;
          height: auto;
        }

        .quiz-result > p:not(.quiz-kicker) {
          max-width: 610px;
          margin: 28px 0 0;
          color: rgba(39, 43, 48, 0.68);
          font-size: 16px;
          line-height: 1.75;
        }

        .quiz-call {
          margin-top: 38px;
        }

        .quiz-phone {
          margin-top: 17px;
          color: rgba(39, 43, 48, 0.62);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .quiz-restart {
          margin-top: 42px;
        }


        @media (max-width: 940px) {
          .quiz-layout {
            grid-template-columns: 1fr;
          }

          .quiz-intro {
            position: static;
            max-width: 760px;
          }

          .quiz-card-wrap {
            max-width: 760px;
          }
        }

        @media (max-width: 560px) {
          .quiz-card {
            min-height: 680px;
            border-radius: 28px 3px 28px 3px;
            padding: 30px 20px 34px;
          }

          .quiz-question h3,
          .quiz-result h3 {
            font-size: 40px;
          }

          .quiz-options button {
            min-height: 70px;
          }

          .quiz-controls {
            align-items: stretch;
            flex-direction: column-reverse;
          }

          .quiz-next {
            width: 100%;
          }

          .quiz-back {
            align-self: flex-start;
          }
        }

      `}</style>
    </section>
  );
}
