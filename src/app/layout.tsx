import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { NebulaBg } from "@/components/cosmos/nebula-bg";
import { Providers } from "@/components/providers";
import "@/styles/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  axes: ["opsz"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: {
    default: "Finanzia — Tu universo financiero",
    template: "%s · Finanzia",
  },
  description:
    "Finanzia es un lienzo navegable donde tu dinero fluye como un río, las categorías brillan como constelaciones y la IA actúa como un copiloto silencioso. Decisiones inteligentes sobre tus finanzas.",
  keywords: [
    "finanzas personales",
    "presupuesto",
    "ahorro",
    "IA",
    "control financiero",
    "Finanzia",
  ],
  authors: [{ name: "Finanzia" }],
  openGraph: {
    type: "website",
    siteName: "Finanzia",
    title: "Finanzia — Tu universo financiero",
    description:
      "Decisiones inteligentes sobre tus finanzas. Insights, planes y un coach con IA, en un lienzo diseñado para pensar mejor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finanzia",
    description: "Tu universo financiero, en un solo lienzo.",
  },
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${plexMono.variable} antialiased`}>
        <NebulaBg />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
