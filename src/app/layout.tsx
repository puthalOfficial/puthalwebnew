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
  metadataBase: new URL("https://puthal.com"),

  title: {
    default: "Puthal | Mental Wellness & Professional Support",
    template: "%s | Puthal",
  },

  description:
    "Puthal helps you take care of your mental well-being by connecting you with trusted mental health professionals and providing supportive wellness resources.",

  keywords: [
  // Mental Health
  "mental health",
  "mental health support",
  "mental health care",
  "mental health help",
  "mental health services",
  "mental health treatment",
  "mental health resources",
  "mental health awareness",
  "mental wellbeing",
  "mental wellness",

  // Anxiety
  "anxiety",
  "anxiety support",
  "anxiety help",
  "anxiety treatment",
  "anxiety disorder",
  "anxiety symptoms",
  "anxiety management",
  "severe anxiety",
  "social anxiety",
  "social anxiety support",
  "generalized anxiety disorder",
  "anxiety and stress",
  "how to manage anxiety",
  "how to reduce anxiety",
  "help with anxiety",

  // Stress
  "stress",
  "stress management",
  "stress relief",
  "stress symptoms",
  "chronic stress",
  "work stress",
  "emotional stress",
  "how to reduce stress",
  "stress and anxiety",
  "stress support",

  // Depression
  "depression",
  "depression support",
  "depression help",
  "depression treatment",
  "depression symptoms",
  "signs of depression",
  "feeling depressed",
  "help for depression",
  "depression and anxiety",
  "emotional wellbeing",

  // Panic & Fear
  "panic attack",
  "panic attack support",
  "panic attack help",
  "panic disorder",
  "panic disorder support",
  "fear and anxiety",
  "constant fear",
  "overthinking",
  "overthinking help",
  "racing thoughts",

  // Emotional Health
  "emotional health",
  "emotional support",
  "emotional wellbeing",
  "mental peace",
  "peace of mind",
  "negative thoughts",
  "loneliness support",
  "low mood support",
  "mood support",
  "coping with emotions",

  // Therapy & Professionals
  "therapy",
  "therapy support",
  "online therapy",
  "mental health therapist",
  "mental health professional",
  "psychologist",
  "psychological support",
  "mental health consultation",
  "mental health counseling",
  "online mental health support",

  // Self Help & Wellness
  "self care",
  "mental health self care",
  "mindfulness",
  "meditation for anxiety",
  "breathing exercises for anxiety",
  "relaxation techniques",
  "coping strategies",
  "healthy coping mechanisms",
  "mental wellness exercises",
  "mindfulness for stress",

  // Crisis / High-Risk Searches
  "suicidal thoughts",
  "suicidal thoughts help",
  "suicide prevention",
  "suicide prevention support",
  "crisis mental health support",
  "mental health crisis",
  "emotional crisis support",
  "immediate mental health support",
  "someone to talk to about mental health",
  "mental health emergency support",
],

  authors: [
    {
      name: "Puthal",
    },
  ],

  creator: "Puthal",
  publisher: "Puthal",

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
    siteName: "Puthal",

    title: "Puthal | Mental Wellness & Professional Support",

    description:
      "Connect with trusted mental health professionals and discover supportive resources to help you manage anxiety, stress, and your mental well-being.",

    url: "https://puthal.com",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Puthal - Mental Wellness & Professional Support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Puthal | Mental Wellness & Professional Support",

    description:
      "Connect with trusted mental health professionals and find supportive resources for your mental well-being.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://puthal.com",
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
