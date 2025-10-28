import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Westbay BJJ at Next School | Brazilian Jiu-Jitsu for Kids Ages 4-18",
  description:
    "Westbay Brazilian Jiu-Jitsu Academy brings world-class BJJ instruction to Next School. Build confidence, discipline, and resilience in your child through expert martial arts training for ages 4-18.",
  openGraph: {
    title: "Westbay BJJ at Next School | Brazilian Jiu-Jitsu for Kids Ages 4-18",
    description:
      "Westbay Brazilian Jiu-Jitsu Academy brings world-class BJJ instruction to Next School. Build confidence, discipline, and resilience in your child through expert martial arts training for ages 4-18.",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Westbay BJJ at Next School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Westbay BJJ at Next School | Brazilian Jiu-Jitsu for Kids Ages 4-18",
    description:
      "Westbay Brazilian Jiu-Jitsu Academy brings world-class BJJ instruction to Next School. Build confidence, discipline, and resilience in your child through expert martial arts training for ages 4-18.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
