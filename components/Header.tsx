"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact, navigation } from "@/lib/site-content";

function ArrowUpRight({ className = "arrow-icon" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

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
      className={`site-header ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-active" : ""}`}
    >
      <div className="header-inner">
        <Link
          href="/#top"
          className="header-logo-link"
          aria-label="Urban Nest, početna"
          onClick={closeMenu}
        >
          <Logo
            variant={menuOpen ? "light" : "dark"}
            className="header-logo"
            priority
          />
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
          <ArrowUpRight />
        </a>

        <button
          type="button"
          className={`header-menu-button ${menuOpen ? "is-open" : ""}`}
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
          <div className="mobile-menu-inner">
            <nav className="mobile-nav" aria-label="Mobilna navigacija">
              <p className="mobile-nav-kicker">Navigacija</p>
              {navigation.map((item, index) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  <div className="mobile-nav-left">
                    <span className="mobile-nav-num">0{index + 1}</span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </div>
                  <svg
                    className="mobile-nav-arrow"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.5 4.5l5 5.5-5 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </nav>

            <div className="mobile-contact-card">
              <div className="mobile-contact-header">
                <span className="mobile-contact-badge">Direktan kontakt</span>
                <p className="mobile-contact-title">Razgovarajmo o vašem apartmanu</p>
              </div>

              <a className="button button-light mobile-call-action" href={contact.phoneHref}>
                <span>Pozovite nas</span>
                <ArrowUpRight />
              </a>

              <div className="mobile-contact-meta">
                <a href={contact.phoneHref} className="mobile-phone-link">
                  {contact.displayPhone}
                </a>
                <span className="mobile-meta-divider">•</span>
                <a href={`mailto:${contact.email}`} className="mobile-email-link">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
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

        .header-logo {
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
          .header-logo {
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
            height: 84px;
            background: var(--paper) !important;
            border-bottom: 1px solid rgba(39, 43, 48, 0.09) !important;
            backdrop-filter: none !important;
          }

          .site-header.menu-active {
            background: var(--ink-deep) !important;
            border-bottom: 1px solid rgba(255, 254, 250, 0.1) !important;
          }

          .header-inner {
            display: flex;
            justify-content: space-between;
          }

          .header-logo {
            width: 126px;
            max-height: 54px;
          }

          .header-nav,
          .header-call {
            display: none;
          }

          .header-menu-button {
            display: grid;
            width: 44px;
            height: 44px;
            border: 1px solid rgba(39, 43, 48, 0.18);
            border-radius: 50%;
            background: transparent;
            color: var(--ink);
            cursor: pointer;
            place-items: center;
            transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          }

          .header-menu-button.is-open {
            border-color: rgba(255, 254, 250, 0.22);
            background: rgba(255, 254, 250, 0.08);
            color: var(--white);
          }

          .mobile-menu {
            position: fixed;
            z-index: 49;
            top: 84px;
            right: 0;
            bottom: 0;
            left: 0;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            background:
              radial-gradient(circle at 100% 0%, rgba(211, 192, 164, 0.12), transparent 45%),
              var(--ink-deep);
            color: var(--white);
            animation: mobile-fade-in 0.25s ease-out;
          }

          @keyframes mobile-fade-in {
            from {
              opacity: 0;
              transform: translateY(-6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .mobile-menu-inner {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: calc(100dvh - 84px);
            padding: 24px var(--gutter) max(28px, env(safe-area-inset-bottom, 28px));
            gap: 28px;
          }

          .mobile-nav-kicker {
            margin: 0 0 12px 4px;
            color: var(--sand);
            font-size: 10px;
            font-weight: 750;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .mobile-nav {
            display: flex;
            flex-direction: column;
          }

          .mobile-nav-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 8px;
            border-bottom: 1px solid rgba(255, 254, 250, 0.08);
            border-radius: 8px;
            transition: background-color 0.2s, padding-left 0.2s;
          }

          .mobile-nav-link:active {
            background: rgba(255, 254, 250, 0.06);
            padding-left: 14px;
          }

          .mobile-nav-left {
            display: flex;
            align-items: baseline;
            gap: 16px;
          }

          .mobile-nav-num {
            color: var(--sand);
            font-family: var(--font-sans), Arial, sans-serif;
            font-size: 11px;
            font-weight: 750;
            letter-spacing: 0.12em;
          }

          .mobile-nav-label {
            color: var(--white);
            font-family: var(--font-serif), Georgia, serif;
            font-size: clamp(22px, 5.8vw, 28px);
            font-weight: 500;
            line-height: 1.2;
            letter-spacing: -0.02em;
          }

          .mobile-nav-arrow {
            width: 16px;
            height: 16px;
            color: rgba(255, 254, 250, 0.35);
            transition: transform 0.2s, color 0.2s;
          }

          .mobile-nav-link:active .mobile-nav-arrow {
            transform: translateX(3px);
            color: var(--sand-light);
          }

          .mobile-contact-card {
            background: rgba(255, 254, 250, 0.04);
            border: 1px solid rgba(255, 254, 250, 0.1);
            border-radius: 18px;
            padding: 22px 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }

          .mobile-contact-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 6px;
          }

          .mobile-contact-badge {
            color: var(--sand);
            font-size: 9px;
            font-weight: 750;
            letter-spacing: 0.18em;
            text-transform: uppercase;
          }

          .mobile-contact-title {
            margin: 0;
            color: rgba(255, 254, 250, 0.9);
            font-family: var(--font-serif), Georgia, serif;
            font-size: 18px;
            line-height: 1.25;
            text-align: center;
          }

          .mobile-call-action {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding-block: 15px;
            font-size: 12px;
            letter-spacing: 0.08em;
          }

          .mobile-contact-meta {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 8px 12px;
            padding-top: 4px;
            font-size: 12px;
          }

          .mobile-phone-link {
            color: rgba(255, 254, 250, 0.75);
            font-weight: 600;
          }

          .mobile-meta-divider {
            color: rgba(255, 254, 250, 0.25);
          }

          .mobile-email-link {
            color: rgba(255, 254, 250, 0.6);
            transition: color 0.2s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .header-nav a::after {
            transition: none;
          }
          .mobile-menu {
            animation: none;
          }
        }
      `}</style>
    </header>
  );
}
