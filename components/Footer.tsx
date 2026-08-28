import Link from "next/link";

import { Logo } from "@/components/Logo";
import { contact, navigation } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="bg-[var(--ink-deep)] text-white pt-24 pb-8 sm:pt-32 sm:pb-12 border-t border-white/5 mt-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-24">
          
          {/* Brand & Slogan */}
          <div className="max-w-xl">
            <Link href="/" aria-label="Urban Nest početna" className="inline-block mb-10 transition-opacity hover:opacity-80">
              <Logo variant="light" className="!w-24 sm:!w-28 !h-auto" />
            </Link>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight text-white/95">
              Apartman radi.<br />
              Vi imate mir.
            </h2>
            <div className="mt-12">
              <a className="button button-light !px-8 !py-4 !text-sm" href={contact.phoneHref}>
                Zakažite konsultacije
                <svg
                  className="arrow-icon ml-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 15 15 5M7 5h8v8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Links & Contact Grid */}
          <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24 lg:pr-12">
            {/* Nav */}
            <nav aria-label="Navigacija u podnožju">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[var(--sand)] uppercase mb-8 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[var(--sand)] opacity-50"></span>
                Navigacija
              </h3>
              <ul className="flex flex-col gap-5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[15px] font-medium text-white/60 hover:text-white transition-colors relative group w-fit">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[var(--sand)] uppercase mb-8 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-[var(--sand)] opacity-50"></span>
                Razgovarajmo
              </h3>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-white/40 text-[10px] font-bold mb-3 uppercase tracking-[0.15em]">Kontakt osoba</p>
                  <p className="font-serif text-2xl text-white/90 leading-none tracking-tight">
                    {contact.contactName}
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-bold mb-3 uppercase tracking-[0.15em]">Telefon</p>
                  <a href={contact.phoneHref} className="font-serif text-3xl sm:text-4xl text-white hover:text-[var(--sand-light)] transition-colors leading-none tracking-tight">
                    {contact.displayPhone}
                  </a>
                </div>
                
                <div>
                  <p className="text-white/40 text-[10px] font-bold mb-3 uppercase tracking-[0.15em]">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-base text-white/80 hover:text-white transition-colors flex items-center gap-2 group w-fit">
                    {contact.email}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 20 20" fill="none">
                      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[11px] font-bold tracking-[0.15em] text-white/30 uppercase">
          <p>© {new Date().getFullYear()} Urban Nest.</p>
          <div className="flex gap-8">
            <p>Beograd, Srbija</p>
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1.5 group">
              Početna
              <svg
                className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 16V4m-5 5 5-5 5 5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
