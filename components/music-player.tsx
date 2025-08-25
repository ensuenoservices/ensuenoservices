"use client"

import { useState } from "react"
import Image from "next/image"
import { Pause, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface MusicPlayerProps {
  title: string
  coverImage: string
  duration: string
}

export function MusicPlayer({ title, coverImage, duration }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="bg-zinc-800 rounded-lg p-4 flex items-center gap-4">
      <div className="relative min-w-[80px] h-20">
        <Image
          src={coverImage || "/placeholder.svg"}
          alt={title}
          width={80}
          height={80}
          className="rounded object-cover h-full w-full"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-400">DJ EnSueño</p>
        <div className="mt-2 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <div className="flex-1">
            <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
          </div>
          <span className="text-xs text-gray-400 min-w-[40px]">{duration}</span>
        </div>
      </div>
    </div>
  )
}
