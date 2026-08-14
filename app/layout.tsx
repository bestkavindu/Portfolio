import type { Metadata, Viewport } from "next";
import { Asap_Condensed, IBM_Plex_Mono } from "next/font/google";
import Reveal from "@/components/Reveal";
import { THEME_KEY } from "@/lib/theme";
import "./globals.css";

const sans = Asap_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sachin Kavindu — Data & Software Engineer",
  description:
    "Data Engineer and Software Engineer building end-to-end data platforms — medallion Lakehouse architectures in Microsoft Fabric, PySpark pipelines, and Power BI reporting — alongside scalable Laravel applications.",
  openGraph: {
    title: "Sachin Kavindu — Data & Software Engineer",
    description:
      "Medallion Lakehouse architectures in Microsoft Fabric, PySpark pipelines, Power BI reporting, and scalable Laravel applications.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101012" },
  ],
};

// Runs before first paint so a saved dark choice never flashes light.
// Light is the design's default; dark is opt-in via the header toggle.
const themeScript = `
try {
  var t = localStorage.getItem(${JSON.stringify(THEME_KEY)});
  if (t === 'dark' || t === 'light') document.documentElement.dataset.theme = t;
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-density="regular"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
