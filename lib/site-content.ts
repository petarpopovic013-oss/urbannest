import type {
  ContactConfig,
  NavigationItem,
  OutcomeItem,
  ServiceItem,
} from "@/types/content";

export const navigation: NavigationItem[] = [
  { label: "Početna", href: "/#top" },
  { label: "Usluge", href: "/#usluge" },
  { label: "Kako radimo", href: "/#kako-radimo" },
  { label: "Čišćenje", href: "/#ciscenje" },
  { label: "Kontakt", href: "/kontakt" },
];

export const contact: ContactConfig = {
  displayPhone: "+381 61 51 41 21 3",
  phoneHref: "tel:+381615141213",
  email: "office@urban-nest.rs",
};

export const ownerOutcomes: OutcomeItem[] = [
  {
    number: "01",
    title: "Manje praznih termina",
    description:
      "Pratimo potražnju, kalendar i cene kako bi apartman imao više prilika za kvalitetne rezervacije.",
  },
  {
    number: "02",
    title: "Brža komunikacija",
    description:
      "Gost dobija pravovremene odgovore, jasne instrukcije i podršku tokom celog boravka.",
  },
  {
    number: "03",
    title: "Pouzdana smena gostiju",
    description:
      "Čišćenje, posteljina i kontrola prostora rade se po dogovorenom standardu.",
  },
  {
    number: "04",
    title: "Jasan mesečni pregled",
    description:
      "Znate šta je rezervisano, šta je urađeno i kako se vaš apartman razvija.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Oglas i prezentacija",
    description:
      "Postavljamo i unapređujemo prezentaciju apartmana, od fotografija i opisa do pravila i pogodnosti.",
  },
  {
    title: "Cene i kalendar",
    description:
      "Prilagođavamo cenu danu u nedelji, sezoni, događajima i realnoj potražnji u Beogradu.",
  },
  {
    title: "Gosti i check-in",
    description:
      "Vodimo upite, potvrde, dolazak, podršku tokom boravka i uredan odlazak gostiju.",
  },
  {
    title: "Operativa i pregled",
    description:
      "Koordiniramo smenu gostiju, čišćenje i kontrolu, uz jasan pregled rezervacija i važnih napomena.",
  },
];
