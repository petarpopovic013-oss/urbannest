"use client";

import { type FormEvent, useState } from "react";

import { contact } from "@/lib/site-content";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const property = String(data.get("property") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();
    const subject = encodeURIComponent(`Upit sa sajta — ${name}`);
    const body = encodeURIComponent(
      [
        `Ime i prezime: ${name}`,
        `Telefon: ${phone}`,
        `Nekretnina: ${property || "Nije navedeno"}`,
        "",
        details,
      ].join("\n"),
    );

    setMessage("Otvaramo vaš email program sa pripremljenom porukom.");
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  }

  const labelClass =
    "grid gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/55";
  const inputClass =
    "w-full rounded-[2px] border border-white/15 bg-white/[0.055] px-5 py-[18px] text-[15px] font-medium normal-case tracking-normal text-[var(--white)] outline-none transition-[border-color,background-color] placeholder:text-white/30 hover:border-white/25 focus:border-[var(--sand)] focus:bg-white/[0.08]";

  return (
    <form onSubmit={handleSubmit} className="grid gap-8" aria-label="Kontakt forma">
      <div className="grid gap-8 xl:grid-cols-2">
        <label className={labelClass}>
          Ime i prezime
          <input className={inputClass} name="name" autoComplete="name" placeholder="Vaše ime" required />
        </label>
        <label className={labelClass}>
          Telefon
          <input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="Vaš broj telefona" required />
        </label>
      </div>
      <label className={labelClass}>
        Nekretnina
        <input className={inputClass} name="property" placeholder="Lokacija i tip apartmana" />
      </label>
      <label className={labelClass}>
        Kako možemo da pomognemo?
        <textarea className={`${inputClass} min-h-44 resize-y leading-7`} name="details" placeholder="Napišite nekoliko reči o apartmanu i vašim potrebama" required />
      </label>
      <div className="flex flex-col items-start gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <button className="button button-light min-w-48" type="submit">
          Pošaljite upit{" "}
          <svg
            className="arrow-icon"
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
        </button>
        <p className="max-w-72 text-xs leading-5 text-white/40 sm:text-right" aria-live="polite">
          {message || "Klikom se otvara vaš email program sa pripremljenom porukom."}
        </p>
      </div>
    </form>
  );
}
