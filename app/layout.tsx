import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Urban Nest | Upravljanje apartmanima u Beogradu",
  description:
    "Kompletno upravljanje kratkoročnim najmom: oglasi, cene, komunikacija sa gostima, check-in, čišćenje i izveštaji.",
  applicationName: "Urban Nest",
  keywords: [
    "upravljanje apartmanima Beograd",
    "kratkoročni najam",
    "izdavanje stanova",
    "property management Beograd",
  ],
  openGraph: {
    title: "Urban Nest | Vaš apartman radi više. Vi radite manje.",
    description:
      "Kompletno upravljanje kratkoročnim najmom u Beogradu.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr-Latn"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
