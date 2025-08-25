import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wedding DJ Services Denver | EnSueño Services | Professional Event Entertainment",
  description:
    "Professional Wedding DJ services in Denver, Colorado Springs, Boulder and Fort Collins. DJ EnSueño specializes in wedding receptions, corporate events, and private celebrations. Book your dream wedding DJ today!",
  keywords:
    "wedding dj denver, wedding dj colorado springs, wedding dj fort collins, wedding dj boulder, denver wedding dj, colorado wedding dj services, wedding reception dj, corporate event dj, private party dj, professional wedding entertainment",
  authors: [{ name: "EnSueño Services" }],
  creator: "EnSueño Services",
  publisher: "EnSueño Services",
  robots: "index, follow",
  openGraph: {
    title: "Wedding DJ Services Denver | EnSueño Services",
    description:
      "Professional Wedding DJ services in Denver & Colorado Springs. Specializing in wedding receptions, corporate events, and unforgettable celebrations.",
    url: "https://www.ensuenoservices.com",
    siteName: "EnSueño Services",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding DJ Services Denver | EnSueño Services",
    description: "Professional Wedding DJ services in Denver & Colorado Springs. Book your dream wedding DJ today!",
    creator: "@dj_ensueno",
  },
  alternates: {
    canonical: "https://www.ensuenoservices.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "EnSueño Services",
              alternateName: "DJ EnSueño",
              description:
                "Professional Wedding DJ services in Denver and Colorado Springs specializing in wedding receptions, corporate events, and private celebrations.",
              url: "https://www.ensuenoservices.com",
              telephone: "+1-XXX-XXX-XXXX",
              email: "Joey.Carnicle@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Denver",
                addressRegion: "CO",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "39.7392",
                longitude: "-104.9903",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Denver",
                  addressRegion: "CO",
                },
                {
                  "@type": "City",
                  name: "Colorado Springs",
                  addressRegion: "CO",
                },
              ],
              serviceType: [
                "Wedding DJ Services",
                "Corporate Event DJ",
                "Private Party Entertainment",
                "Wedding Reception Music",
                "Event DJ Services",
              ],
              priceRange: "$$",
              sameAs: ["https://www.instagram.com/dj_ensueno/", "https://soundcloud.com/carnicle"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
