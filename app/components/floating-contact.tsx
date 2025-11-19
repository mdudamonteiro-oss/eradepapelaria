"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, Mail, X } from "lucide-react"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-lg shadow-lg p-4 border border-mystical-purple/20">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-script text-mystical-purple">Fale conosco</h3>
            <button onClick={() => setIsOpen(false)} className="text-mystical-purple/60">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os kits de papelaria digital."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-mystical-purple hover:text-mystical-purple/80 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/eradepapelaria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-mystical-purple hover:text-mystical-purple/80 text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:era.de.papelaria@gmail.com"
              className="flex items-center space-x-2 text-mystical-purple hover:text-mystical-purple/80 text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>E-mail</span>
            </a>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full w-14 h-14 shadow-lg"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
