import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { PreloadResources } from "@/app/preload";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/navbar";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://nathanlevitt.com"),
  title: {
    default: "Nathan Levitt",
    template: "%s | Nathan Levitt",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Nathan Levitt",
    description: "Developer, writer, and creator.",
    url: "https://nathanlevitt.com",
    siteName: "Nathan Levitt",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Nathan Levitt",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased text-neutral-900 bg-white dark:text-neutral-100 dark:bg-[#111010]">
        <main className="">
          <Providers>
            <Navbar />
            {children}
            <Analytics />
            <PreloadResources />
          </Providers>
        </main>
      </body>
    </html>
  );
}
