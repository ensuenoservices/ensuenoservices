"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-palette-cream hover:bg-palette-teal/20"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-slate-800 border-l border-palette-teal/20 shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-palette-teal/20">
              <Link
                href="/"
                className="text-xl font-bold text-palette-cream font-dancing text-shadow-elegant"
                onClick={closeMenu}
              >
                EnSueño Services
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="text-palette-cream hover:bg-palette-teal/20"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href="#about"
                className="text-palette-cream hover:text-palette-blue transition-colors py-2 text-lg"
                onClick={closeMenu}
              >
                ABOUT
              </Link>
              <Link
                href="#testimonials"
                className="text-palette-cream hover:text-palette-blue transition-colors py-2 text-lg"
                onClick={closeMenu}
              >
                TESTIMONIALS
              </Link>
              <Link
                href="#gallery"
                className="text-palette-cream hover:text-palette-blue transition-colors py-2 text-lg"
                onClick={closeMenu}
              >
                GALLERY
              </Link>
              <Link
                href="#contact"
                className="text-palette-cream hover:text-palette-blue transition-colors py-2 text-lg"
                onClick={closeMenu}
              >
                CONTACT
              </Link>

              <div className="pt-4 border-t border-palette-teal/20">
                <Link href="#contact" onClick={closeMenu}>
                  <Button className="w-full bg-palette-pink hover:bg-palette-pink-hover text-white font-semibold">
                    BOOK NOW
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
