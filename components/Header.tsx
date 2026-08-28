"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact, navigation } from "@/lib/site-content";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={open ? "M3 3 15 15" : "M2 6.5h14"}
        stroke="currentColor"
        strokeWidth="1.25"
        style={{ transition: "d 0.3s" }}
      />
      <path
        d={open ? "M15 3 3 15" : "M2 11.5h14"}
        stroke="currentColor"
        strokeWidth="1.25"
        style={{ transition: "d 0.3s" }}
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header 
      className={`site-header ${scrolled ? "scrolled" : ""}`}
    >
      <div className="header-inner">
        <Link
          href="/"
          className="header-logo-link"
          aria-label="Urban Nest, početna"
          onClick={closeMenu}
        >
          <Logo className="header-logo" priority />
        </Link>

        <nav className="header-nav" aria-label="Glavna navigacija">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a className="button button-dark header-call" href={contact.phoneHref}>
          Pozovite nas
          <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="header-menu-button"
          aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mobile-menu"
        >
          <nav aria-label="Mobilna navigacija">
            {navigation.map((item, index) => (
              <Link 
                key={item.href} 
                href={item.href} 
                onClick={closeMenu}
              >
                <span>0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-contact">
            <p>Razgovarajmo o vašem apartmanu.</p>
            <a className="button button-light" href={contact.phoneHref}>
              Pozovite nas
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        .site-header {
          position: sticky;
          z-index: 50;
          top: 0;
          height: 120px;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s;
        }

        .site-header.scrolled {
          background: rgba(241, 240, 235, 0.94);
          border-bottom: 1px solid rgba(39, 43, 48, 0.09);
          backdrop-filter: blur(18px);
        }

        .header-inner {
          position: relative;
          z-index: 2;
          display: grid;
          width: min(100%, 1480px);
          height: 100%;
          margin-inline: auto;
          padding-inline: var(--gutter);
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        .header-logo-link {
          display: inline-flex;
          width: max-content;
          align-items: center;
        }

        :global(.header-logo) {
          width: 158px;
          max-height: 72px;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: clamp(30px, 3.2vw, 58px);
        }

        .header-nav a {
          position: relative;
          padding-block: 10px;
          color: rgba(39, 43, 48, 0.76);
          font-size: 14px;
          font-weight: 650;
          letter-spacing: 0.025em;
          transition: color 180ms ease;
        }

        .header-nav a::after {
          position: absolute;
          right: 0;
          bottom: 3px;
          left: 0;
          height: 1px;
          background: var(--ink);
          content: "";
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 220ms ease;
        }

        .header-nav a:hover {
          color: var(--ink);
        }

        .header-nav a:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .header-call {
          justify-self: end;
          min-height: 50px;
          padding-inline: 25px;
          font-size: 13px;
        }

        .header-menu-button {
          display: none;
        }

        @media (max-width: 920px) {
          :global(.header-logo) {
            width: 142px;
          }

          .header-nav {
            gap: 25px;
          }

          .header-nav a {
            font-size: 13px;
          }

          .header-call {
            min-width: 0;
            padding-inline: 19px;
          }
        }

        @media (max-width: 759px) {
          .site-header, .site-header.scrolled {
            height: 96px;
            background: var(--paper) !important;
            border-bottom: 1px solid rgba(39, 43, 48, 0.09) !important;
            backdrop-filter: none !important;
          }

          .header-inner {
            display: flex;
            justify-content: space-between;
          }

          :global(.header-logo) {
            width: 126px;
            max-height: 58px;
          }

          .header-nav,
          .header-call {
            display: none;
          }

          .header-menu-button {
            display: grid;
            width: 48px;
            height: 48px;
            border: 1px solid rgba(39, 43, 48, 0.17);
            border-radius: 50%;
            background: transparent;
            color: var(--ink);
            cursor: pointer;
            place-items: center;
          }

          .mobile-menu {
            position: fixed;
            z-index: 1;
            top: 96px;
            right: 0;
            bottom: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 62px var(--gutter) 40px;
            background: var(--ink-deep);
            color: var(--white);
          }

          .mobile-menu nav {
            display: grid;
          }

          .mobile-menu nav a {
            display: flex;
            align-items: baseline;
            gap: 19px;
            border-bottom: 1px solid var(--line-dark);
            padding-block: 22px;
            font-family: var(--font-serif), Georgia, serif;
            font-size: clamp(38px, 11vw, 56px);
            line-height: 1;
          }

          .mobile-menu nav a span {
            color: var(--sand);
            font-family: var(--font-sans), Arial, sans-serif;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.12em;
          }

          .mobile-contact {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 24px;
          }

          .mobile-contact p {
            max-width: 180px;
            margin: 0;
            color: rgba(255, 254, 250, 0.58);
            font-size: 13px;
          }
        }

        @media (max-width: 440px) {
          .mobile-contact {
            align-items: stretch;
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .header-nav a::after {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}
