import { Reveal } from "@/components/Reveal";

const principles = [
  "Pratimo ritam grada",
  "Usklađujemo cenu i boravak",
  "Čuvamo kvalitet rezervacija",
];

export function BelgradeMarket() {
  return (
    <section
      className="section section-dark overflow-hidden border-t border-white/10"
      aria-labelledby="belgrade-market-title"
    >
      <div className="container grid items-center gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <Reveal className="relative z-10 max-w-[560px]">
          <p className="eyebrow text-[var(--sand)]">Lokalno znanje</p>
          <h2
            id="belgrade-market-title"
            className="section-title max-w-[11ch]"
          >
            Beograd se menja iz dana u dan. I cena treba da prati.
          </h2>
          <p className="body-copy mt-8 max-w-[55ch]">
            Vikendi, praznici, sajmovi, koncerti i sezonska potražnja
            menjaju ritam rezervacija. Zato cene i minimalni boravak ne
            ostavljamo na autopilotu.
          </p>

          <ul className="mt-12 border-t border-white/15" role="list">
            {principles.map((principle, index) => (
              <li
                key={principle}
                className="grid grid-cols-[36px_1fr] items-center gap-4 border-b border-white/15 py-4 text-[13px] font-semibold tracking-[0.06em] text-white/85 uppercase"
              >
                <span
                  className="font-serif text-[15px] font-medium tracking-normal text-[var(--sand)]"
                  aria-hidden="true"
                >
                  0{index + 1}
                </span>
                {principle}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={130} className="relative min-w-0 lg:-mr-[7vw]">
          <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[var(--sand)]/5 blur-[70px]" />
          <svg
            viewBox="0 0 700 620"
            className="relative block h-auto w-full min-w-[610px] -translate-x-[7%] sm:min-w-0 sm:translate-x-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g opacity="0.14" stroke="#fffefa" strokeWidth="1">
              <path d="M77 175C126 105 216 54 321 58c116 4 206 57 276 150 65 87 61 197-3 277-67 84-171 112-283 96-108-15-210-63-245-159-32-87-38-177 11-247Z" />
              <path d="M128 234c65-57 149-80 240-67 80 11 153 48 203 113 48 63 51 136 18 204" />
              <path d="M165 463c87 47 199 51 279 6 68-39 102-94 112-165" />
              <path d="M227 95c-32 63-32 131 1 189 31 54 85 92 154 108 73 16 130 50 165 101" />
              <path d="M470 91c10 56-6 108-42 150-40 48-102 74-182 79-78 5-139 31-183 78" />
              <path d="m106 355 96 14 85 59 109-15 88-66 124 4" />
              <path d="m169 147 54 82 75 10 61-81 83 82 92 4" />
              <path d="m189 523 80-80 62 2 53 88" />
              <path d="m519 156-54 76 21 63 96 54" />
            </g>

            <g stroke="#d3c0a4" strokeLinecap="round">
              <path
                d="M16 504c87-22 108-101 173-133 68-34 129-5 192-35 70-33 91-115 144-161 42-36 93-45 159-32"
                strokeWidth="10"
                opacity="0.12"
              />
              <path
                d="M16 504c87-22 108-101 173-133 68-34 129-5 192-35 70-33 91-115 144-161 42-36 93-45 159-32"
                strokeWidth="1.5"
                opacity="0.68"
              />
              <path
                d="M38 537c118-15 161-93 235-98 94-6 161 61 252 30 55-19 90-62 159-61"
                strokeWidth="1"
                opacity="0.28"
              />
            </g>

            <g fill="#fffefa" opacity="0.4">
              <circle cx="128" cy="230" r="2.5" />
              <circle cx="269" cy="442" r="2.5" />
              <circle cx="472" cy="232" r="2.5" />
              <circle cx="570" cy="352" r="2.5" />
              <circle cx="357" cy="157" r="2.5" />
            </g>

            {[
              [200, 354],
              [377, 330],
              [487, 210],
              [548, 451],
            ].map(([cx, cy], index) => (
              <g key={`${cx}-${cy}`} transform={`translate(${cx} ${cy})`}>
                <circle
                  r={index === 1 ? 16 : 13}
                  fill={index === 1 ? "#d3c0a4" : "#191b1d"}
                  stroke="#d3c0a4"
                  strokeWidth="2"
                />
                <circle
                  r="3.5"
                  fill={index === 1 ? "#191b1d" : "#d3c0a4"}
                />
                <path
                  d="M0 16v13"
                  stroke="#d3c0a4"
                  strokeWidth="1.5"
                />
              </g>
            ))}
          </svg>
          <p className="absolute right-0 bottom-0 max-w-[210px] text-right text-[10px] leading-[1.6] tracking-[0.08em] text-white/35 uppercase">
            Lokalni događaji, sezona i potražnja oblikuju svaki kalendar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
