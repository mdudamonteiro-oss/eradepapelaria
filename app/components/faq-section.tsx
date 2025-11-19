"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Quanto tempo leva para receber meu convite?",
    answer:
      "Você recebe a prévia do seu convite em até 2 dias úteis após o pedido. Após sua aprovação, os arquivos finais são enviados no mesmo dia.",
  },
  {
    question: "Posso fazer alterações depois de aprovar?",
    answer:
      "Após a aprovação final, não é possível fazer alterações. Por isso, revisamos tudo com você antes da aprovação para garantir que esteja perfeito!",
  },
  {
    question: "Em quais formatos recebo os arquivos?",
    answer:
      "Você recebe os arquivos em PDF de alta resolução para impressão e PNG para compartilhamento digital. Outros formatos podem ser solicitados.",
  },
  {
    question: "A promoção dos 10 primeiros é real?",
    answer:
      "Sim! É nossa forma de celebrar o lançamento. As vagas são limitadas e por ordem de chegada dos pedidos confirmados.",
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Claro! Os arquivos são seus para sempre. Você pode imprimir quantas cópias precisar, onde quiser.",
  },
  {
    question: "Vocês fazem outros tipos de papelaria?",
    answer:
      "Sim! Além de convites, criamos save the dates, cardápios, listas de presentes, tags, adesivos e muito mais.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Aceitamos PIX, cartão de crédito e débito. O pagamento é feito após a aprovação da prévia, garantindo sua total satisfação.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Queremos que você fique completamente satisfeita! Por isso, incluímos revisões no processo para ajustarmos tudo até ficar do seu jeito antes da aprovação final.",
  },
  {
    question: "Como funciona o processo de criação?",
    answer:
      "Após receber seu pedido, criamos um briefing detalhado com você. Em seguida, desenvolvemos a primeira versão do design e enviamos para sua aprovação. Você pode solicitar até 3 revisões para ajustes. Só finalizamos quando você estiver 100% satisfeita com o resultado!",
  },
  {
    question: "Os arquivos servem para impressão?",
    answer:
      "Sim! Todos os nossos arquivos são criados em alta resolução (300 DPI) e são perfeitos para impressão em qualquer gráfica. Você recebe orientações sobre papel e tamanhos recomendados.",
  },
  {
    question: "Como funcionam os extras digitais?",
    answer:
      "Os extras digitais são itens complementares que você pode adicionar ao seu kit principal. Incluem save the date, plaquinhas para fotos, tags personalizadas, cardápios e muito mais. Cada item custa entre R$ 15 e R$ 30 e segue o mesmo padrão visual do seu kit principal.",
  },
  {
    question: "Posso pedir apenas os extras, sem o kit principal?",
    answer:
      "Sim! Você pode solicitar apenas os extras digitais se já tiver um convite ou quiser complementar um trabalho existente. Os preços permanecem os mesmos e mantemos a qualidade e atenção aos detalhes.",
  },
  {
    question: "O que é o Jornal dos Noivos?",
    answer:
      "O Jornal dos Noivos é um produto exclusivo que conta a história de amor do casal em formato de jornal personalizado. Inclui a história de como se conheceram, linha do tempo, fotos, depoimentos de amigos e família, curiosidades e programação do casamento. É uma lembrança única e emocionante!",
  },
  {
    question: "Quanto tempo leva para criar o Jornal dos Noivos?",
    answer:
      "O Jornal dos Noivos tem prazo de entrega de até 5 dias úteis, pois é um trabalho mais elaborado. Você recebe a primeira versão para aprovação e pode solicitar até 3 revisões para ajustes.",
  },
  {
    question: "Preciso fornecer as fotos e textos para o Jornal?",
    answer:
      "Sim! Para criar o Jornal dos Noivos, você nos fornece as fotos do casal, informações sobre a história de vocês, depoimentos de familiares e amigos, e outros detalhes que queira incluir. Nós organizamos tudo de forma criativa e harmoniosa.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-cream to-soft-blue/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-6 h-6 text-mystical-purple/40 mr-3" />
            <h2 className="text-4xl md:text-5xl font-script text-mystical-purple">Dúvidas Frequentes</h2>
            <HelpCircle className="w-6 h-6 text-mystical-purple/40 ml-3" />
          </div>
          <p className="text-lg text-mystical-purple font-light">
            Esclarecemos as principais dúvidas para você se sentir segura
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-frame-blue/20 bg-white/70">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-romantic-pink/5 transition-colors"
                >
                  <h3 className="font-script text-mystical-purple text-lg pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-mystical-purple flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-mystical-purple flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-mystical-purple font-light leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-mystical-purple font-light mb-4">Não encontrou sua dúvida? Fale conosco!</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/5511999999999?text=Olá! Tenho uma dúvida sobre os kits de papelaria digital."
              target="_blank"
              rel="noopener noreferrer"
              className="text-mystical-purple hover:text-mystical-purple/80 font-light underline"
            >
              WhatsApp
            </a>
            <span className="text-mystical-purple/40">•</span>
            <a
              href="mailto:era.de.papelaria@gmail.com"
              className="text-mystical-purple hover:text-mystical-purple/80 font-light underline"
            >
              E-mail
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
