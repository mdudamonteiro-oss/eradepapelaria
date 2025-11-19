"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  quote: string
  author: string
  event: string
  rating: number
  image: string
  category: string
  details: string
}

export default function TestimonialsVaried() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Chorei só de abrir o PDF. Cada detalhe estava perfeito, exatamente como sonhei!",
      author: "Juliana & Beto",
      event: "Casamento Digital",
      rating: 5,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop&crop=face",
      category: "casamento",
      details: "Kit personalizado estilo Noite Estrelada com 8 itens personalizados",
    },
    {
      id: 2,
      quote: "Os arquivos ficaram lindos, qualidade excepcional. Compartilhei no WhatsApp e todos elogiaram!",
      author: "Clara",
      event: "Chá de Bebê Digital",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=100&h=100&fit=crop&crop=face",
      category: "cha-bebe",
      details: "Kit pronto com extras personalizados e plaquinhas temáticas",
    },
    {
      id: 3,
      quote: "Pedi o kit personalizado, valeu cada centavo. Atendimento impecável do início ao fim.",
      author: "Mariana & Léo",
      event: "Noivado Digital",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      category: "noivado",
      details: "Save the date animado + convite interativo + álbum digital",
    },
    {
      id: 4,
      quote: "Superou todas as expectativas! O Jornal dos Noivos foi um sucesso no casamento.",
      author: "Amanda & Ricardo",
      event: "Casamento + Jornal",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      category: "casamento",
      details: "Kit completo + Jornal dos Noivos personalizado de 6 páginas",
    },
    {
      id: 5,
      quote: "Qualidade incrível para impressão! Ficou perfeito na gráfica que escolhemos.",
      author: "Patricia",
      event: "Aniversário 30 Anos",
      rating: 5,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
      category: "aniversario",
      details: "Kit personalizado estilo Poético + menu digital + cronograma",
    },
    {
      id: 6,
      quote: "Processo super fácil e rápido. Em 2 dias eu já tinha meu convite pronto!",
      author: "Fernanda",
      event: "Chá de Panela",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      category: "cha-panela",
      details: "Kit pronto estilo Botânico + lista de presentes + tags personalizadas",
    },
    {
      id: 7,
      quote: "As 3 revisões incluídas fizeram toda diferença. Ajustaram tudo até ficar perfeito!",
      author: "Gabriela & Felipe",
      event: "Casamento Minimalista",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      category: "casamento",
      details: "Kit personalizado neutro + combo comunicação completo",
    },
    {
      id: 8,
      quote: "Adorei poder usar minha inspiração do Pinterest! Ficou igual eu imaginava.",
      author: "Larissa",
      event: "Formatura de Medicina",
      rating: 5,
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
      category: "formatura",
      details: "Kit personalizado elegante + certificado decorativo + timeline",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      {/* Testemunho Principal */}
      <Card className="border-2 border-frame-blue/30 bg-white/90 hover:shadow-2xl transition-all duration-300 relative overflow-hidden max-w-4xl mx-auto">
        <div className="absolute top-4 left-4">
          <Quote className="w-8 h-8 text-romantic-pink/30" />
        </div>
        <CardContent className="p-12 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-8 border-4 border-romantic-pink/30">
            <Image
              src={currentTestimonial.image || "/placeholder.svg"}
              alt={currentTestimonial.author}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>

          <div className="flex justify-center mb-6">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>

          <blockquote className="text-2xl font-light text-mystical-purple mb-8 italic leading-relaxed max-w-2xl mx-auto">
            "{currentTestimonial.quote}"
          </blockquote>

          <div className="mb-6">
            <p className="text-xl text-mystical-purple font-script mb-2">– {currentTestimonial.author}</p>
            <p className="text-mystical-purple/70 mb-4">{currentTestimonial.event}</p>
            <div className="bg-romantic-pink/10 rounded-lg p-3 max-w-md mx-auto">
              <p className="text-sm text-mystical-purple/80">{currentTestimonial.details}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Controles de navegação */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent rounded-full p-3"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-mystical-purple" : "bg-mystical-purple/30"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent rounded-full p-3"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Grid de Testemunhos Menores */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <Card key={testimonial.id} className="border-frame-blue/20 bg-white/70 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-romantic-pink/30"
                  crossOrigin="anonymous"
                />
                <div className="ml-3">
                  <p className="font-script text-mystical-purple">{testimonial.author}</p>
                  <p className="text-sm text-mystical-purple/70">{testimonial.event}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-mystical-purple font-light text-sm italic leading-relaxed">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
