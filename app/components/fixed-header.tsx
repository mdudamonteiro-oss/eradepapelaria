"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Star, Menu, X, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function FixedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Sobre", href: "/#sobre" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Extras", href: "/extras" },
    { name: "Valores", href: "/#valores" },
    { name: "Contato", href: "/#contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-final.png"
            alt="Era de Papelaria"
            width={120}
            height={90}
            className="h-12 w-auto hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <div key={item.name} className="flex items-center">
              {index > 0 && <Star className="w-3 h-3 text-romantic-pink/60 mx-3" />}
              <Link
                href={item.href}
                className="text-mystical-purple hover:text-mystical-purple/80 font-light transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os kits de papelaria digital."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-mystical-purple hover:text-mystical-purple/80 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
        </nav>

        {/* CTA Button */}
        <Link href="/#formulario">
          <Button className="bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full px-6 py-2 font-light">
            Peça seu kit
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-mystical-purple" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-mystical-purple/10">
          <nav className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-mystical-purple hover:text-mystical-purple/80 font-light py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
