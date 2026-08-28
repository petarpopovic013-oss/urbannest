import type { Metadata } from "next";
import Image from "next/image";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Kontakt | Urban Nest",
  description:
    "Kontaktirajte Urban Nest za profesionalno upravljanje apartmanom u Beogradu.",
};

export default function ContactPage() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-[var(--line-light)] pb-[clamp(72px,9vw,130px)] pt-[clamp(40px,6vw,88px)]">
          <div className="container grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="relative z-10">
              <p className="eyebrow">Kontakt</p>
              <h1 className="display-title max-w-[9ch]">Razgovor je dobar početak.</h1>
              <p className="body-copy mt-8 max-w-[52ch]">
                Recite nam gde se vaš apartman nalazi i šta želite da postignete.
                Dobićete konkretan odgovor, bez komplikovanja i opštih obećanja.
              </p>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-t-[220px] bg-[var(--paper-soft)] sm:min-h-[540px]">
              <Image
                src="/images/apartment-living.jpg"
                alt="Uređen enterijer apartmana u Beogradu"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              <p className="absolute bottom-7 left-7 right-7 text-xs font-semibold uppercase tracking-[0.16em] text-white/85 sm:bottom-10 sm:left-10">
                Beograd · Upravljanje kratkoročnim najmom
              </p>
            </div>
          </div>
        </section>

        <section className="section section-light overflow-hidden">
          <div className="container grid items-start gap-16 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] lg:gap-[clamp(64px,8vw,120px)]">
            <div className="lg:sticky lg:top-40">
              <p className="eyebrow">Direktan kontakt</p>
              <h2 className="section-title max-w-[8ch]">Tu smo za vaše pitanje.</h2>
              <p className="body-copy mt-7 max-w-[39ch]">
                Vi poznajete svoj apartman. Mi poznajemo svakodnevicu kratkoročnog izdavanja. Hajde da spojimo te dve perspektive.
              </p>
              <div className="mt-12 grid border-t border-[var(--line-light)]">
                <div className="border-b border-[var(--line-light)] py-7">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">Kontakt osoba</p>
                  <p className="font-serif text-3xl">{contact.contactName}</p>
                </div>
                <div className="border-b border-[var(--line-light)] py-7">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">Telefon</p>
                  <a className="font-serif text-3xl transition-opacity hover:opacity-60" href={contact.phoneHref}>{contact.displayPhone}</a>
                </div>
                <div className="py-7">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">Email</p>
                  <a className="break-all text-base font-semibold transition-opacity hover:opacity-60" href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
            </div>

            <div className="relative bg-[var(--ink-deep)] p-[clamp(30px,5.5vw,76px)] text-[var(--white)] shadow-[0_30px_100px_rgba(25,27,29,0.14)]">
              <p className="eyebrow relative text-[var(--sand)]">Pošaljite upit</p>
              <h2 className="section-title relative mb-8 max-w-[11ch] text-[clamp(38px,4vw,62px)]">Nekoliko detalja je dovoljno.</h2>
              <div className="mb-12 h-px w-full bg-white/15" aria-hidden="true" />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
