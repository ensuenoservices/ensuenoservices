import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Calendar, Check, Instagram, Mail, Music, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GalleryGrid } from "@/components/gallery-grid"
import { ContactForm } from "@/components/contact-form"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { MobileMenu } from "@/components/mobile-menu"

const services = [
  { number: "01", title: "Weddings", copy: "A considered soundtrack for every chapter of the day—from the first toast to the last dance." },
  { number: "02", title: "Corporate events", copy: "Polished production and effortless energy for launches, galas, retreats, and brand celebrations." },
  { number: "03", title: "Elevated nightlife", copy: "Curated sets for rooftops, pool decks, private clubs, and the rooms people remember." },
]

const promises = ["Thoughtfully curated music", "Seamless, discreet production", "A calm, experienced presence"]

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-foreground/85 text-background backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="font-serif text-2xl tracking-tight">EnSueño <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-background/60">Services</span></Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#experience" className="nav-link">The experience</Link>
            <Link href="#work" className="nav-link">Selected work</Link>
            <Link href="#contact" className="nav-link">Inquire</Link>
          </nav>
          <Link href="#contact" className="hidden items-center gap-2 border border-accent px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-foreground md:flex">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
          <MobileMenu />
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-foreground pb-16 pt-32 text-background lg:min-h-screen lg:pb-24">
        <Image src="/images/hero-performance.webp" alt="EnSueño DJ performing at an elegant event" fill priority className="object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent"><span className="h-px w-10 bg-accent" /> Colorado & beyond</div>
          <h1 className="max-w-5xl font-serif text-6xl leading-[.9] tracking-[-0.04em] sm:text-8xl lg:text-[9.5rem]">The soundtrack<br /><em className="text-accent">to a feeling.</em></h1>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-background/30 pt-6 sm:flex-row sm:items-end">
            <p className="max-w-md text-base leading-relaxed text-background/75">Luxury DJ and event experiences for weddings, corporate celebrations, and the places where a great night begins.</p>
            <Link href="#contact" className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-accent">Plan your event <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent transition group-hover:bg-accent group-hover:text-foreground"><ArrowDown className="h-4 w-4" /></span></Link>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><p className="eyebrow">The experience</p><h2 className="mt-5 max-w-md font-serif text-5xl leading-none tracking-tight lg:text-7xl">Every detail, <em className="text-accent">in rhythm.</em></h2></div>
          <div><p className="max-w-2xl text-xl leading-relaxed text-muted-foreground lg:text-2xl">EnSueño brings a refined point of view to the dance floor. Music, atmosphere, and production work together to make your event feel entirely its own.</p><div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">{services.map((service) => <article key={service.number} className="group"><span className="text-xs text-accent">{service.number}</span><h3 className="mt-8 font-serif text-3xl">{service.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.copy}</p><ArrowUpRight className="mt-8 h-5 w-5 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></article>)}</div></div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-28"><div className="relative min-h-[420px]"><Image src="/images/dj-pioneer-bw.jpeg" alt="DJ EnSueño preparing a set" fill className="object-cover grayscale" /></div><div className="flex flex-col justify-center"><p className="eyebrow">A higher standard</p><h2 className="mt-5 font-serif text-5xl leading-none lg:text-6xl">Your guests will feel the difference.</h2><p className="mt-8 max-w-lg leading-relaxed text-secondary-foreground/70">From a perfectly paced cocktail hour to a dance floor that never loses its pulse, every set is built around your people, your space, and your moment.</p><ul className="mt-8 space-y-4 border-t border-secondary-foreground/20 pt-6">{promises.map((promise) => <li key={promise} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-accent" />{promise}</li>)}</ul><Link href="#contact" className="mt-10 inline-flex items-center gap-2 self-start border-b border-accent pb-2 text-sm uppercase tracking-[0.2em] text-accent">Tell us what you&apos;re planning <ArrowUpRight className="h-4 w-4" /></Link></div></div></section>

      <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="mb-12 flex items-end justify-between"><div><p className="eyebrow">Selected work</p><h2 className="mt-4 font-serif text-5xl lg:text-7xl">Good nights, <em className="text-accent">well made.</em></h2></div><Sparkles className="hidden h-8 w-8 text-accent sm:block" /></div><GalleryGrid /></section>

      <section className="border-y border-border bg-muted/40 px-6 py-24 lg:px-10"><div className="mx-auto max-w-4xl text-center"><p className="eyebrow">Kind words</p><div className="mt-8"><TestimonialCarousel /></div></div></section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-36"><div><p className="eyebrow">Let&apos;s make it memorable</p><h2 className="mt-5 font-serif text-5xl leading-none lg:text-7xl">Your night starts <em className="text-accent">here.</em></h2><p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">Share a few details and we&apos;ll be in touch with a thoughtful recommendation for your celebration.</p><div className="mt-10 space-y-4 text-sm text-muted-foreground"><p className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> Joey.Carnicle@gmail.com</p><p className="text-xs uppercase tracking-[0.16em]">Denver · Colorado Springs · Boulder · beyond</p></div></div><ContactForm /></section>

      <footer className="bg-foreground px-6 py-12 text-background lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><Link href="/" className="font-serif text-3xl">EnSueño</Link><p className="mt-2 text-sm text-background/50">Curated sound for exceptional gatherings.</p></div><div className="flex gap-5 text-background/60"><Link href="https://www.instagram.com/dj_ensueno/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-accent" /></Link><Link href="https://soundcloud.com/carnicle" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud"><Music className="h-5 w-5 hover:text-accent" /></Link></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-background/15 pt-5 text-xs text-background/40">© {new Date().getFullYear()} EnSueño Services. All rights reserved.</div></footer>
    </main>
  )
}

// Keep the booking link available for clients who prefer a calendar-first inquiry.
export const bookingUrl = "https://calendar.app.google/WyxuVRdpq7LYDG3Y9"
