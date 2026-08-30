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
  metadataBase: new URL("https://urban-nest.rs"),
  title: "Urban Nest | Upravljanje apartmanima u Beogradu",
  description:
    "Kompletno upravljanje kratkoročnim najmom i profesionalno čišćenje stambenih i poslovnih prostora u Beogradu.",
  applicationName: "Urban Nest",
  keywords: [
    "upravljanje apartmanima Beograd",
    "kratkoročni najam",
    "izdavanje stanova",
    "property management Beograd",
    "profesionalno čišćenje Beograd",
    "čišćenje kancelarija",
  ],
  openGraph: {
    title: "Urban Nest | Vaš apartman radi više. Vi radite manje.",
    description:
      "Kompletno upravljanje apartmanima i profesionalno čišćenje prostora u Beogradu.",
    url: "/",
    siteName: "Urban Nest",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Urban Nest, upravljanje apartmanima i profesionalno čišćenje u Beogradu",
      },
    ],
    type: "website",
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Nest | Vaš apartman radi više. Vi radite manje.",
    description:
      "Kompletno upravljanje apartmanima i profesionalno čišćenje prostora u Beogradu.",
    images: ["/og.png"],
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
