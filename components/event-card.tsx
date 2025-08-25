import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

interface EventCardProps {
  date: string
  title: string
  location: string
  image: string
}

export function EventCard({ date, title, location, image }: EventCardProps) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-primary mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-300 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        <Button className="w-full">GET TICKETS</Button>
      </div>
    </div>
  )
}
