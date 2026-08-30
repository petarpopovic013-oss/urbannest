# Urban Nest landing page

## Implementirano

- Izrađen je kompletan responsive landing page za Urban Nest.
- Dizajn prati dostavljenu referencu: editorial serif tipografija, svetle i tamne sekcije, veliki vizuelni kadrovi, zaobljene maske i široki layout.
- Sajt je full-width na desktop ekranima, bez belih bočnih traka.
- Header je uvećan i sadrži:
  - Urban Nest logo
  - desktop navigaciju
  - telefonski CTA
  - responsive mobilni meni
- Dodat je hero blok sa glavnom porukom:
  - „Vaš apartman radi više. Vi radite manje.”
- Implementirana je sekcija sa osnovnim obećanjem brenda i galerijom apartmana.
- Dodata je interaktivna sekcija procesa upravljanja apartmanom:
  - početak saradnje
  - priprema prezentacije
  - cena i kalendar
  - komunikacija sa gostom
  - smena gostiju
  - pregled za vlasnika
- Dodata je interaktivna sekcija poređenja:
  - kada vlasnik radi sam
  - kada Urban Nest vodi apartman
- Dodata je sekcija transparentnosti sa kružnom kompozicijom fotografija.
- Dodata je sekcija o lokalnom poznavanju Beograda sa dekorativnom SVG mapom i operativnim principima.
- Dodat je upitnik sa četiri pitanja koji se završava direktnim telefonskim CTA pozivom.
- Završna CTA sekcija vodi korisnika ka telefonskom kontaktu.
- Footer sadrži logo, navigaciju, kontakt i lokaciju Beograd, Srbija.

## Brend i vizuelni materijali

- Klijentski logo je obrađen i uklonjene su pozadine iz obe varijante logoa.
- Pripremljene su tamna i svetla transparentna varijanta logoa.
- Fotografije su lokalizovane u `public/images` i optimizovane za web.
- Fotografija u sekciji „Kompletno upravljanje” zamenjena je neutralnim gradskim apartmanom.
- Fotografija u završnoj CTA sekciji zamenjena je fotografijom savremenog stambenog kompleksa u Beogradu.
- Stock fotografije su evidentirane u `docs/research/ASSET_SOURCES.md`.

## Sadržaj i komunikacija

- Copy je zasnovan na dostavljenoj prezentaciji poslovnog modela.
- Fokus komunikacije je na vremenu vlasnika, kompletnoj operativi, lokalnom upravljanju i transparentnosti.
- Uklonjeni su izmišljeni KPI-jevi, lažne recenzije, javni procenti i obećanja garantovanog profita.
- Uklonjene su duge crtice iz sadržaja sajta.
- Kontakt podaci centralizovani su u `lib/site-content.ts`:
  - `+381 61 51 41 21 3`
  - `office@urban-nest.rs`

## Tehnička provera

- TypeScript provera prolazi.
- ESLint provera prolazi.
- Production build prolazi.
- Implementirane su responsive desktop i mobilne varijante.
- Dodat je reduced-motion fallback za korisnike koji imaju smanjenu animaciju uključenu u sistemu.
