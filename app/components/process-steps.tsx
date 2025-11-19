"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Clock, Download, ArrowRight } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      step: "1",
      title: "Escolha seu Estilo",
      desc: "Navegue pelos nossos kits digitais",
      icon: Heart,
      details: "Escolha entre kits prontos ou personalizados que mais combinam com seu evento",
      color: "from-romantic-pink/30 to-romantic-pink/10",
    },
    {
      step: "2",
      title: "Preencha o Formulário",
      desc: "Conte-nos sobre seu evento especial",
      icon: Star,
      details: "Informações sobre data, estilo e suas preferências para criarmos algo único",
      color: "from-mystical-purple/30 to-mystical-purple/10",
    },
    {
      step: "3",
      title: "Receba a Prévia",
      desc: "Em até 2 dias úteis no seu e-mail",
      icon: Clock,
      details: "Você pode solicitar até 3 revisões até ficar perfeito",
      color: "from-soft-blue/30 to-soft-blue/10",
    },
    {
      step: "4",
      title: "Download dos Arquivos",
      desc: "Receba seus arquivos em alta resolução",
      icon: Download,
      details: "Arquivos em PDF e PNG prontos para compartilhar ou imprimir onde quiser",
      color: "from-romantic-pink/30 to-mystical-purple/10",
    },
  ]

  return (
    <div className="relative">
      {/* Linha conectora */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-romantic-pink/30 via-mystical-purple/30 to-romantic-pink/30 transform -translate-y-1/2 z-0"></div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {steps.map((item, index) => (
          <div key={index} className="text-center group">
            <Card
              className={`border-2 border-frame-blue/30 bg-gradient-to-br ${item.color} hover:shadow-2xl transition-all duration-500 hover:scale-105 mb-6`}
            >
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <item.icon className="w-10 h-10 text-mystical-purple" />
                </div>
                <div className="bg-mystical-purple text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl font-script text-mystical-purple mb-3">{item.title}</h3>
                <p className="text-mystical-purple font-light mb-4">{item.desc}</p>
                <p className="text-sm text-mystical-purple/80 leading-relaxed">{item.details}</p>
              </CardContent>
            </Card>

            {/* Seta para mobile */}
            {index < steps.length - 1 && (
              <div className="lg:hidden flex justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-mystical-purple/40 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
