import Image from "next/image";

import { ArrowIcon } from "@/components/ArrowIcon";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/lib/site-content";

export function FinalCTA() {
  return (
    <section
      id="kontakt"
      className="section-light relative overflow-hidden py-[clamp(80px,9vw,140px)]"
      aria-labelledby="final-cta-title"
    >
      <div className="container relative">
        <Reveal className="relative ml-auto aspect-[16/10] w-full overflow-hidden bg-[var(--paper-soft)] md:w-[82%] lg:aspect-[16/9]">
          <Image
            src="/images/cta-belgrade.jpg"
            alt="Savremeni stambeni kompleks u Beogradu"
            fill
            sizes="(max-width: 768px) 100vw, 82vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink-deep)]/10 via-transparent to-transparent" />
        </Reveal>

        <Reveal
          delay={120}
          className="relative z-10 -mt-7 w-[calc(100%+var(--gutter))] -translate-x-[var(--gutter)] rounded-tr-[90px] rounded-br-[90px] bg-[var(--ink-deep)] px-[var(--gutter)] py-16 text-[var(--white)] sm:rounded-tr-[150px] sm:rounded-br-[150px] md:absolute md:bottom-[-48px] md:left-0 md:mt-0 md:w-[64%] md:max-w-[760px] md:-translate-x-[calc(var(--gutter)/2)] md:rounded-tr-[240px] md:rounded-br-[240px] md:px-[calc(var(--gutter)/2)] md:py-[clamp(58px,7vw,92px)] lg:w-[61%]"
        >
          <div className="max-w-[570px] pr-3 sm:pr-12 md:pr-[12%]">
            <p className="eyebrow text-[var(--sand)]">
              Spremni za jednostavnije izdavanje?
            </p>
            <h2
              id="final-cta-title"
              className="section-title text-[clamp(40px,5vw,72px)]"
            >
              Vaš apartman može da bude posao, a da ne postane vaš drugi posao.
            </h2>
            <p
              className="body-copy mt-7 max-w-[49ch]"
              style={{ color: "rgba(255, 254, 250, 0.64)" }}
            >
              Razgovarajmo o vašem apartmanu, realnom potencijalu i načinu
              upravljanja koji vam vraća vreme i mir.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4">
              <a
                className="button button-light"
                href={contact.phoneHref}
                aria-label={`Pozovite Urban Nest na ${contact.displayPhone}`}
              >
                Pozovite Urban Nest
                <ArrowIcon />
              </a>
              <a
                href={contact.phoneHref}
                className="text-[12px] font-semibold tracking-[0.08em] text-white/65 transition-colors hover:text-white"
              >
                {contact.displayPhone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="h-0 md:h-14" aria-hidden="true" />
    </section>
  );
}
