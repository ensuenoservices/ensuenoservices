import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  business: string
}

export function TestimonialCard({ quote, author, business }: TestimonialCardProps) {
  return (
    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 border border-palette-teal/20 hover:border-palette-teal/40 transition-all duration-300">
      <div className="flex items-start mb-4">
        <Quote className="h-6 w-6 text-palette-blue mr-3 mt-1 flex-shrink-0" />
        <p className="text-palette-cream/90 italic leading-relaxed">{quote}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-palette-cream">{author}</p>
        <p className="text-sm text-palette-blue">{business}</p>
      </div>
    </div>
  )
}
