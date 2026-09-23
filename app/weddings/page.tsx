import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Check, Mail } from "lucide-react"

import { ContactForm } from "@/components/contact-form"

const weddingQuotes = [
  {
    quote: "His passion for music and skill at reading the crowd made our wedding the best night of our lives!",
    author: "Ben & Elena",
    detail: "Wedding · Estes Park, CO",
  },
  {
    quote: "He had all the guests on the floor dancing to the very end. Our son's wedding was a success in large part to Joey and the way he ran the reception.",
    author: "Pam",
    detail: "Wedding · Denver, CO",
  },
  {
    quote: "When one person stands out that brightly among the rest, it's extremely noteworthy. He can read the room and pivot on a dime based on crowd reaction.",
    author: "Christie",
    detail: "Larimer Lounge · Denver, CO",
  },
]

const details = ["Your must-plays and absolutely-nots", "A first dance that feels like yours", "A packed dance floor without the stock playlist"]

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-foreground/90 text-background backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link href="/" className="font-serif text-2xl tracking-tight">EnSueño <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-background/60">Weddings</span></Link>
          <nav className="hidden items-center gap-8 md:flex"><Link href="#approach" className="nav-link">The approach</Link><Link href="#kind-words" className="nav-link">Kind words</Link><Link href="#inquire" className="nav-link">Inquire</Link></nav>
          <Link href="#inquire" className="hidden items-center gap-2 border border-accent px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:bg-accent hover:text-foreground md:flex">Check your date <ArrowUpRight className="h-4 w-4" /></Link>
          <Link href="#inquire" className="text-xs uppercase tracking-[0.2em] text-accent md:hidden">Inquire</Link>
        </div>
      </header>

      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-foreground pb-16 pt-32 text-background lg:min-h-screen lg:pb-24">
        <Image src="/images/hero-performance.webp" alt="DJ EnSueño performing at a wedding reception" fill priority className="object-cover object-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-foreground/15" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent"><span className="h-px w-10 bg-accent" /> Weddings · Colorado & beyond</p>
          <h1 className="max-w-5xl font-serif text-6xl leading-[.9] tracking-[-0.04em] sm:text-8xl lg:text-[9.5rem]">Your people.<br /><em className="text-accent">Your songs.</em></h1>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-background/30 pt-6 sm:flex-row sm:items-end"><p className="max-w-xl text-base leading-relaxed text-background/75 lg:text-lg">Where years behind the decks meet your essential mix.</p><Link href="#approach" className="group flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-accent">Explore the experience <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent transition group-hover:bg-accent group-hover:text-foreground"><ArrowDown className="h-4 w-4" /></span></Link></div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="eyebrow">The EnSueño approach</p><h2 className="mt-5 max-w-md font-serif text-5xl leading-none tracking-tight lg:text-7xl">A soundtrack that feels <em className="text-accent">like you.</em></h2></div><div><p className="max-w-2xl text-xl leading-relaxed text-muted-foreground lg:text-2xl">DJ EnSueño blends a career of reading dance floors with the songs that mean everything to the two of you — your must-plays, your first dance, your absolutely-nots.</p><p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">Every set is built from scratch, never a recycled stock playlist, then run live from cocktail hour through your last song.</p><ul className="mt-12 grid gap-4 border-t border-border pt-7 sm:grid-cols-3">{details.map((detail) => <li key={detail} className="flex gap-3 text-sm leading-relaxed"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{detail}</li>)}</ul></div></div></section>

      <section className="bg-secondary text-secondary-foreground"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:py-28"><div className="relative min-h-[480px]"><Image src="/images/dj-pioneer-bw.jpeg" alt="DJ EnSueño preparing music for an event" fill className="object-cover grayscale" /></div><div><p className="eyebrow">The full arc of the day</p><h2 className="mt-5 font-serif text-5xl leading-none lg:text-6xl">From the first pour to the last song.</h2><p className="mt-8 max-w-lg leading-relaxed text-secondary-foreground/70">Thoughtful transitions, clean announcements, and a calm presence behind the scenes. The room should feel effortless — because the details have been considered long before guests arrive.</p><div className="mt-10 border-t border-secondary-foreground/20 pt-6 text-sm uppercase tracking-[0.16em] text-accent">Cocktail hour · Dinner · Dancing</div></div></div></section>

      <section id="kind-words" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36"><div className="mb-12 flex items-end justify-between"><div><p className="eyebrow">Kind words</p><h2 className="mt-4 max-w-3xl font-serif text-5xl leading-none lg:text-7xl">The best nights are <em className="text-accent">felt.</em></h2></div><span className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">01 — 03</span></div><div className="grid gap-px border border-border bg-border md:grid-cols-3">{weddingQuotes.map((item) => <figure key={item.author} className="bg-background p-8 lg:p-10"><blockquote className="font-serif text-2xl leading-tight">“{item.quote}”</blockquote><figcaption className="mt-12 border-t border-border pt-5"><p className="text-sm font-medium">{item.author}</p><p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.detail}</p></figcaption></figure>)}</div></section>

      <section id="inquire" className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:pb-36"><div><p className="eyebrow">Let&apos;s make it yours</p><h2 className="mt-5 font-serif text-5xl leading-none lg:text-7xl">Tell us about <em className="text-accent">the day.</em></h2><p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">Share your date, your venue, and the feeling you want your guests to leave with. We&apos;ll take it from there.</p><p className="mt-10 flex items-center gap-3 text-sm text-muted-foreground"><Mail className="h-4 w-4 text-accent" /> Joey.Carnicle@gmail.com</p></div><ContactForm /></section>

      <footer className="bg-foreground px-6 py-12 text-background lg:px-10"><div className="mx-auto flex max-w-7xl items-end justify-between gap-8"><div><Link href="/" className="font-serif text-3xl">EnSueño</Link><p className="mt-2 text-sm text-background/50">Wedding soundtracks, built from scratch.</p></div><Link href="#inquire" className="text-xs uppercase tracking-[0.2em] text-accent">Start a conversation <ArrowUpRight className="inline h-4 w-4" /></Link></div><div className="mx-auto mt-10 max-w-7xl border-t border-background/15 pt-5 text-xs text-background/40">© {new Date().getFullYear()} EnSueño Services. All rights reserved.</div></footer>
    </main>
  )
}
