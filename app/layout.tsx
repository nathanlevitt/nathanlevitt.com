import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";

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
      className={cn(
        "text-black bg-neutral-50 dark:text-white dark:bg-[#111010]",
        GeistSans.variable
      )}
    >
      <body className="antialiased">
        <main className="">
          {/* <Navbar /> */}
          {children}
          {/* <Analytics /> */}
        </main>
      </body>
    </html>
  );
}