import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const featuredWork = [
  {
    label: "Summer Lovin'",
    type: "EnSueñitos · Dance mix",
    href: "https://soundcloud.com/carnicle/ensuenitos-summer-lovin-dance-mix?si=596b2e9c18f9404ea8f6715b09629f9f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    label: "Sueños Soulection Pt. 8",
    type: "DJ EnSueño · Mix",
    href: "https://soundcloud.com/carnicle/suenos-soulection-pt-8?si=f771ea54a0e54397aefe2abb6737dab7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    label: "EnSueño",
    type: "Spotify · Selected album",
    href: "https://open.spotify.com/album/7CLG8DmMOwGyFs5Pzok79e?si=95wDUbnVTD-34i0V6xFzSA",
  },
]

export function GalleryGrid() {
  const images = [
    { src: "/images/dj-redroom.jpeg", alt: "DJ EnSueño performing at The Redroom" },
    { src: "/images/dj-larimer-lounge.jpeg", alt: "DJ EnSueño at Larimer Lounge Main Room" },
    { src: "/images/dj-roller-rink-group.jpeg", alt: "DJ EnSueño at a themed roller rink event with large group" },
    {
      src: "/images/dj-graffiti-venue.jpeg",
      alt: "DJ EnSueño performing at an intimate venue with vibrant street art",
    },
    { src: "/images/dj-pioneer-bw.jpeg", alt: "DJ EnSueño performing at brunch" },
    { src: "/images/dj-closeup-bw.jpeg", alt: "DJ EnSueño perfoming at The Treehouse" },
    { src: "/images/dj-closeup-color.jpeg", alt: "DJ EnSueño perfoming at The Treehouse" },
    { src: "/images/dj-colorful.jpeg", alt: "DJ EnSueño perfoming on Halloween" },
  ]

  return (
    <div>
      <div className="mb-10 grid gap-4 md:grid-cols-3">
        {featuredWork.map((work) => (
          <a
            key={work.href}
            href={work.href}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-32 flex-col justify-between border border-border bg-secondary p-5 text-secondary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs uppercase tracking-[0.2em] text-current/60">Listen now</span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <div>
              <p className="font-serif text-2xl leading-none">{work.label}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-current/60">{work.type}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="px-4 text-center font-medium text-white">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
