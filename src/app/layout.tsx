import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Puthal Web | Web Development & Digital Solutions",
    template: "%s | Puthal Web",
  },

  description:
    "Puthal Web provides professional website development, web design, Next.js, React and custom web solutions for businesses.",

   keywords: [
    "mental health support",
    "mental health care",
    "mental wellbeing",
    "emotional wellbeing",
    "anxiety support",
    "stress management",
    "depression support",
    "anxiety and depression support",
    "mental health resources",
    "online mental health support",
  ],

  authors: [
    {
      name: "Puthal Web",
    },
  ],

  creator: "Puthal Web",
  publisher: "Puthal Web",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Puthal Web",
    title: "Puthal Web | Web Development & Digital Solutions",
    description:
      "Professional website development, web design and custom web solutions for modern businesses.",
    url: "https://Puthal.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Puthal Web - Web Development & Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Puthal Web | Web Development & Digital Solutions",
    description:
      "Professional website development, web design and custom web solutions.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://yourdomain.com",
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
        className={`${poppins.variable} ${nunito.variable} antialiased font-body bg-[#fdfaff] min-h-screen text-[#1a0a2a]`}
      >
        
        <main>
          {children}
          
        </main>
  

      </body>
    </html>
  );
}
