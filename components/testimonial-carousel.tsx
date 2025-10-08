"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  quote: string
  author: string
  business: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Joey DJ'd our son's wedding and did an outstanding job. He had all the guests on the floor dancing to the very end. There was great variety to the music, he was professional, and all round excellent. Excellent DJ. Our son's wedding was a success in large part to Joey and the way he ran the reception.",
    author: "Pam",
    business: "Wedding - Denver, CO",
  },
  {
    quote:
      "I work at a music venue in downtown Denver and have worked with EnSueño for about three years now. The first time he played our venue I had to have him back. We host A LOT of DJ's - so when one person stands out that brightly among the rest it's extremely noteworthy. He's fun, entertaining, extremely high vibes and energy, transitions are seamless and - above all - he can read the room. That's of utmost importance ESPECIALLY in an event/wedding setting. His sets have always been relevant to what people want to hear and he can pivot on a dime based on crowd reaction. Genuinely one of the best DJ's in Denver, I'm lucky to have him as a regularly booked DJ at our venue and I can't imagine a world in which he disappoints at your next wedding or event!",
    author: "Christie",
    business: "Larimer Lounge",
  },
  {
    quote:
      "Joey is an amazingly talented DJ. His passion for music and skill at reading the crowd made our wedding the best night of our lives! We found Joey through a mutual contact. It was his first time DJ'ing a wedding, but we thought his background with other events and playing clubs would be a great fit for what we wanted out of our night. For starters, we enjoy a diverse range of music, and our friends and family who would be coming reflected that. Second, we wanted to focus on dancing and keeping the crowd energy up, and weren't really interested in traditional wedding gimmicks like line dancing. I'll try to explain all the ways that Joey nailed it! In terms of wedding day logistics, Joey brought his own equipment up to the venue (an outdoor covered pavilion in the mountains). He was self-sufficient with his setup, but made sure that it would work with our coordinator. The venue provided a table/tablecloth but we appreciated that Joey brought backups! He did a great job with announcements and rolled with the punches for the whole night. Given that Elena and I weren't the greatest of planners, we made some gametime changes to the schedule that Joey seamlessly fit in. We added an event to the itinerary and moved up the speeches by about 45 minutes once we saw how fast the catering was, and he did a great job making sure it flowed together smoothly. The fade in's and out's for the first dance and parents dances were perfect and the announcements for the speeches beforehand helped get everyone's attention. One big challenge that Joey really helped us with was coming up with a game plan for how all our different musical tastes could come together to make an awesome night. We wanted a chance to play everything from John Denver to ODESZA in a way that would be fun for everyone and keep the hype going. Joey was great to chat with and helped us come up with ideas that fit that vision. After our first call to introduce ourselves and discuss the wedding, we exchanged some emails and spotify playlists to further clarify our ideas. We gave him a couple of 'keystone' songs or artists and he suggested how they could fit together and flow well. Additionally, he combed through a huge request catalog we provided from our guests RSVP's to fill out a fantastic playlist for our cocktail hour and dinner. About a week before the wedding day, we had another call to finalize the details. Joey was very attentive during this call and made sure he had all our details correct, like pronunciations, event order, and timing (even pointing out some things we had missed!). But, where we were both so thoroughly impressed, was how he got the party started after the last of the parent dances. Right off the bat, Thank God I'm Country Boy had the dancefloor packed and people moving tables to clear more space. From there the energy never fell flat, he livemixed transitions from one song to the next, even into songs that were requested on the fly. I'll never forget how my Dad seemed to get activated like a sleeper agent when he played One Step Beyond. What really impressed me, in comparison to just about every other wedding DJ I've seen, was how attentive he was to the crowd mood. When the crowd had the energy he would keep it going, but there was always a breather when needed. The night had some amazing cresciendos, including me being crowdsurfed! We didn't want it to end even after three plus hours of dancing. We had a perfect experience, 5/5 ⭐️⭐️⭐️⭐️⭐️!",
    author: "Ben & Elena",
    business: "Wedding - Estes Park, CO",
  },
  {
    quote:
      "I've had Joey DJ at my vintage shop the past few months and he brings a unique vibe every time. His sets flow effortlessly from disco to groove house to funk, with a good mix of crowd pleasers as well as unexpected tracks. His music has given my space a one of a kind atmosphere that customers always comment on. If you want a DJ who blends taste, skill, and good energy, Joey is a good choice.",
    author: "Alejandro",
    business: "AfterGlow Vintage",
  },
  {
    quote:
      "I have had the privilege of hiring DJ EnSueño on numerous silent disco events. His professionalism, reliability, and ability to engage a diverse crowd make him an invaluable partner. He demonstrates an exceptional talent for reading the room and creating seamless, energetic sets that keep guests entertained from start to finish. Our clients and attendees regularly share positive feedback about his performances, and we are confident in recommending him as a top-tier DJ for any event. He has become a trusted part of our team, and we look forward to continuing this successful collaboration.",
    author: "Jason",
    business: "CipherNoise Productions",
  },
  {
    quote:
      "DJ EnSueño knows how to set the perfect vibe. Their seamless mixes keep the crowd fully engaged from start to finish. Beyond their musical talent, they bring a high level of professionalism and reliability, making every event smooth and stress-free. Whether it's a high-energy party or a more laid-back setting, they deliver every time.",
    author: "Spencer",
    business: "Constellation Brands",
  },
  {
    quote:
      "DJ EnSueño played for our Disco Skating Rink takeover and hit the vibe perfectly. He mixed nostalgic millennial Hip Hop and R&B with classic Disco and Soul tracks, all interwoven with deep house and the energy was incredible. We can't recommend him enough for your next event!",
    author: "Madalyn",
    business: "Disco Skating Rink",
  },
  {
    quote:
      "DJ EnSueño is legit. My partner and I first saw him at the Santa Fe art walk and were immediately into his vibe and sound. We grabbed his info and ended up booking him for a pop-up for my clothing line—he totally made the event. The energy was on point all night, and a few of my friends (including a couple getting married) told me they would've switched to him in a second. We're now having him DJ a bachelorette party and recommending him to everyone we know. If you want someone who can bring the perfect vibe and keep the party flowing, he's your guy.",
    author: "Hink",
    business: "Keep Walkin LLC",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Testimonial Card */}
      <div className="relative bg-zinc-800/50 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-palette-teal/20 hover:border-palette-teal/40 transition-all duration-300 min-h-[400px] flex flex-col">
        <div className="flex-1">
          <div className="flex items-start mb-6">
            <Quote className="h-8 w-8 text-palette-blue mr-4 mt-1 flex-shrink-0" />
            <p className="text-palette-cream/90 italic leading-relaxed text-lg">{currentTestimonial.quote}</p>
          </div>
        </div>
        <div className="text-right mt-6 pt-6 border-t border-palette-teal/20">
          <p className="font-semibold text-palette-cream text-xl">{currentTestimonial.author}</p>
          <p className="text-palette-blue">{currentTestimonial.business}</p>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
          <Button
            onClick={previousTestimonial}
            variant="ghost"
            size="icon"
            className="pointer-events-auto h-12 w-12 rounded-full bg-palette-teal/20 hover:bg-palette-teal/40 text-palette-cream backdrop-blur-sm border border-palette-teal/30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={nextTestimonial}
            variant="ghost"
            size="icon"
            className="pointer-events-auto h-12 w-12 rounded-full bg-palette-teal/20 hover:bg-palette-teal/40 text-palette-cream backdrop-blur-sm border border-palette-teal/30"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-palette-pink w-12 h-3"
                : "bg-palette-cream/30 hover:bg-palette-cream/50 w-3 h-3"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-palette-cream/60 text-sm">
        {currentIndex + 1} / {testimonials.length}
      </div>
    </div>
  )
}
