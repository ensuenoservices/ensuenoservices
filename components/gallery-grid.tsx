import Image from "next/image"

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-center font-medium px-4">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
