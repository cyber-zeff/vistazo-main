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
  metadataBase: new URL("https://www.vistazo.studio/"),
  title: "Vistazo Studio",
  description: "Helping you build a personal brand that actually stands out. From web design and development to copywriting and SEO optimization, Vistazo's got you. Let’s make your brand iconic !",
  
  keywords: [
    "personal branding",
    "web design",
    "web development",
    "copywriting services",
    "SEO optimization",
    "branding studio",
    "Vistazo Studio",
    "seo",
    "designing",
    "UI/UX",
  ],

  openGraph: {
    title: "Vistazo Studio",
    description:
      "Helping you build a personal brand that actually stands out. From web design and development to copywriting and SEO optimization, Vistazo's got you. Let’s make your brand iconic!",
    url: "https://www.vistazo.studio/",
    siteName: "Vistazo Studio",
    images: [
      {
        url: "/li-banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vistazo Studio",
    description:
      "Helping you build a personal brand that actually stands out...",
    images: ["/li-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
