"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Star } from "lucide-react"

export default function UrgencyCounter() {
  const [remainingSlots, setRemainingSlots] = useState(10)
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Calcular 30 dias a partir de hoje
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Quando acabar, reinicia para 30 dias
        const newEndDate = new Date()
        newEndDate.setDate(newEndDate.getDate() + 30)
        endDate.setTime(newEndDate.getTime())
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="border-2 border-red-300 bg-gradient-to-r from-red-50 to-pink-50 relative overflow-hidden">
      <CardContent className="p-6 text-center relative z-10">
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>

        <div className="flex items-center justify-center mb-4">
          <Clock className="w-6 h-6 text-red-600 mr-2 animate-pulse" />
          <span className="text-red-600 font-bold text-lg tracking-wider">OFERTA LIMITADA</span>
          <Star className="w-5 h-5 text-yellow-500 ml-2 animate-spin" />
        </div>

        <div className="mb-4">
          <p className="text-mystical-purple font-light text-lg mb-2">
            Restam apenas <strong className="text-red-600 text-xl">{remainingSlots} vagas</strong> para o kit
            personalizado por
          </p>
          <div className="text-center">
            <span className="text-2xl text-mystical-purple/60 line-through mr-2">R$ 140</span>
            <span className="text-4xl font-bold text-red-600">R$ 70</span>
          </div>
        </div>

        <div className="bg-white/70 rounded-lg p-4 mb-4">
          <p className="text-mystical-purple font-medium mb-3">⏰ Tempo restante da promoção:</p>
          <div className="flex justify-center space-x-2">
            <div className="bg-red-600 text-white rounded-lg p-3 min-w-[70px] shadow-lg">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs uppercase tracking-wide">Dias</div>
            </div>
            <div className="bg-red-600 text-white rounded-lg p-3 min-w-[70px] shadow-lg">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs uppercase tracking-wide">Hrs</div>
            </div>
            <div className="bg-red-600 text-white rounded-lg p-3 min-w-[70px] shadow-lg">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs uppercase tracking-wide">Min</div>
            </div>
            <div className="bg-red-600 text-white rounded-lg p-3 min-w-[70px] shadow-lg">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs uppercase tracking-wide">Seg</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3">
          <p className="text-yellow-800 text-sm font-medium">
            🔥 <strong>50% OFF</strong> - Economia de R$ 70,00 por tempo limitado!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
