import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, Music, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GalleryGrid } from "@/components/gallery-grid"
import { ContactForm } from "@/components/contact-form"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800 text-palette-cream">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-800/90 backdrop-blur-sm border-b border-palette-teal/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-palette-cream font-dancing text-shadow-soft"
            >
              EnSueño Services
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-sm hover:text-palette-blue transition-colors">
                ABOUT
              </Link>
              <Link href="#testimonials" className="text-sm hover:text-palette-blue transition-colors">
                TESTIMONIALS
              </Link>
              <Link href="#gallery" className="text-sm hover:text-palette-blue transition-colors">
                GALLERY
              </Link>
              <Link href="#contact" className="text-sm hover:text-palette-blue transition-colors">
                CONTACT
              </Link>
            </nav>
            <Link href="https://calendar.app.google/WyxuVRdpq7LYDG3Y9" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="hidden md:flex items-center gap-2 border-palette-pink hover:bg-palette-pink/20 bg-transparent text-palette-pink hover:text-white transition-all duration-300 font-semibold"
              >
                <Calendar className="h-4 w-4" />
                SCHEDULE
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-performance.webp"
            alt="DJ EnSueño performing with dramatic red lighting and EnSueño branding displayed"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-800/80 via-slate-800/60 to-slate-800"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold mb-6 tracking-tighter text-palette-cream font-dancing text-shadow-hero leading-none">
            EnSueño
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto text-palette-cream/80 px-4">
            Professional Wedding DJ & Event Entertainment Services. Translating to "In a Dream", EnSueño turns your
            special night into an unforgettable experience.
          </p>
          <div className="flex justify-center">
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-palette-pink hover:bg-palette-pink-hover text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-palette-pink/30 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Link href="#about" className="text-palette-cream/70 hover:text-palette-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/images/dj-pioneer-bw.jpeg"
                  alt="DJ EnSueño portrait"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-[500px]"
                />
                <div className="absolute inset-0 rounded-lg border-2 border-palette-teal/30"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter text-palette-cream">
                WEDDING DJ & EVENT SPECIALIST
              </h2>
              <p className="text-palette-cream/80 mb-6">
                Specializing in wedding DJ services and event entertainment, DJ EnSueño brings the golden era of groove
                into modern celebrations. Known for blending disco, soul, funk and latin grooves into electrifying
                wedding receptions and corporate events that get bodies moving and spirits lifted. With a deep love for
                crate-digging classics and an ear for timeless rhythms, DJ EnSueño crafts wedding dancefloor experiences
                that feel both nostalgic and fresh.
              </p>
              <p className="text-palette-cream/80 mb-6">
                Whether providing wedding DJ services, spinning at corporate events, or creating the perfect atmosphere
                for private celebrations, his sets are a celebration of good vibes, deep grooves, and irresistible
                energy. Each wedding reception mix is a journey—from romantic dinner music and cocktail hour vibes to
                infectious four-on-the-floor beats for dancing—all delivered with an undeniable passion for making your
                special day unforgettable. Let the rhythm take over. This is wedding entertainment with heart and
                history.
              </p>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/dj_ensueno/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-palette-teal/20 text-palette-blue hover:text-palette-cream"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="https://soundcloud.com/carnicle" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-palette-teal/20 text-palette-blue hover:text-palette-cream"
                  >
                    <Music className="h-5 w-5" />
                    <span className="sr-only">SoundCloud</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tighter text-palette-cream">
            WHAT CLIENTS SAY
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tighter text-palette-cream">
            GALLERY
          </h2>
          <GalleryGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tighter text-palette-cream">
            BOOK YOUR WEDDING OR EVENT DJ
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-palette-cream">WEDDING DJ BOOKING</h3>
              <div className="space-y-4 text-palette-cream/80">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 mr-3 mt-1 text-palette-red" />
                  <div>
                    <p className="font-medium text-palette-cream">Wedding DJ Services</p>
                    <p>Joey.Carnicle@gmail.com</p>
                    <p className="text-sm mt-1">
                      Serving Denver, Colorado Springs, Boulder, Fort Collins & surrounding areas
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="https://calendar.app.google/WyxuVRdpq7LYDG3Y9" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-palette-blue hover:bg-palette-blue/80 text-white font-semibold">
                      SCHEDULE A CONSULTATION
                    </Button>
                  </Link>
                  <p className="text-xs text-palette-cream/60 text-center mt-2">
                    Book a free consultation to discuss your special day
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-800 border-t border-palette-teal/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link
                href="/"
                className="text-2xl font-bold text-palette-cream tracking-tighter font-dancing text-shadow-glow"
              >
                EnSueño Services
              </Link>
              <p className="mt-2 text-palette-cream/60">Set the Vibe.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 hover:text-palette-blue transition-colors text-palette-cream/60" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
                <Music className="h-5 w-5 hover:text-palette-blue transition-colors text-palette-cream/60" />
                <span className="sr-only">SoundCloud</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-palette-teal/20 flex flex-col md:flex-row justify-between items-center">
            <p className="text-palette-cream/60">
              &copy; {new Date().getFullYear()} EnSueño Services. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="hover:text-palette-blue transition-colors text-palette-cream/60">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-palette-blue transition-colors text-palette-cream/60">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
