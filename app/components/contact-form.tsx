"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Star, Send, CheckCircle } from "lucide-react"

interface FormData {
  nome: string
  email: string
  telefone: string
  tipoEvento: string
  dataEvento: string
  numeroConvidados: string
  tipoKit: string
  estiloPreferido: string
  observacoes: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    tipoEvento: "",
    dataEvento: "",
    numeroConvidados: "",
    tipoKit: "",
    estiloPreferido: "",
    observacoes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório"
    if (!formData.email.trim()) newErrors.email = "Email é obrigatório"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido"
    if (!formData.telefone.trim()) newErrors.telefone = "Telefone é obrigatório"
    if (!formData.tipoEvento) newErrors.tipoEvento = "Tipo de evento é obrigatório"
    if (!formData.dataEvento) newErrors.dataEvento = "Data do evento é obrigatória"
    if (!formData.tipoKit) newErrors.tipoKit = "Selecione o tipo de kit"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        tipoEvento: "",
        dataEvento: "",
        numeroConvidados: "",
        tipoKit: "",
        estiloPreferido: "",
        observacoes: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Card className="border-frame-blue/20 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-script text-mystical-purple mb-4">Pedido Enviado! ✨</h3>
          <p className="text-mystical-purple/80 font-light mb-4">
            Recebemos seu pedido com muito carinho! Em breve entraremos em contato para dar vida ao seu convite dos
            sonhos.
          </p>
          <div className="flex justify-center space-x-2">
            <Star className="w-5 h-5 text-romantic-pink/60" />
            <Heart className="w-5 h-5 text-romantic-pink/60" />
            <Star className="w-5 h-5 text-romantic-pink/60" />
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-frame-blue/20 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações Pessoais */}
          <div className="space-y-4">
            <h3 className="text-xl font-script text-mystical-purple flex items-center">
              <Heart className="w-5 h-5 mr-2 text-romantic-pink/60" />
              Suas Informações
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-mystical-purple font-light">
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  className={`border-mystical-purple/30 focus:border-mystical-purple ${errors.nome ? "border-red-400" : ""}`}
                  placeholder="Seu nome completo"
                />
                {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-mystical-purple font-light">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`border-mystical-purple/30 focus:border-mystical-purple ${errors.email ? "border-red-400" : ""}`}
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-mystical-purple font-light">
                WhatsApp *
              </Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                className={`border-mystical-purple/30 focus:border-mystical-purple ${errors.telefone ? "border-red-400" : ""}`}
                placeholder="(11) 99999-9999"
              />
              {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}
            </div>
          </div>

          {/* Informações do Evento */}
          <div className="space-y-4">
            <h3 className="text-xl font-script text-mystical-purple flex items-center">
              <Star className="w-5 h-5 mr-2 text-romantic-pink/60" />
              Sobre o Evento
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tipoEvento" className="text-mystical-purple font-light">
                  Tipo de Evento *
                </Label>
                <Select value={formData.tipoEvento} onValueChange={(value) => handleInputChange("tipoEvento", value)}>
                  <SelectTrigger
                    className={`border-mystical-purple/30 focus:border-mystical-purple ${errors.tipoEvento ? "border-red-400" : ""}`}
                  >
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casamento">Casamento</SelectItem>
                    <SelectItem value="noivado">Noivado</SelectItem>
                    <SelectItem value="cha-de-bebe">Chá de Bebê</SelectItem>
                    <SelectItem value="cha-de-panela">Chá de Panela</SelectItem>
                    <SelectItem value="aniversario">Aniversário</SelectItem>
                    <SelectItem value="formatura">Formatura</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tipoEvento && <p className="text-red-500 text-sm">{errors.tipoEvento}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dataEvento" className="text-mystical-purple font-light">
                  Data do Evento *
                </Label>
                <Input
                  id="dataEvento"
                  type="date"
                  value={formData.dataEvento}
                  onChange={(e) => handleInputChange("dataEvento", e.target.value)}
                  className={`border-mystical-purple/30 focus:border-mystical-purple ${errors.dataEvento ? "border-red-400" : ""}`}
                />
                {errors.dataEvento && <p className="text-red-500 text-sm">{errors.dataEvento}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="numeroConvidados" className="text-mystical-purple font-light">
                Número de Convidados
              </Label>
              <Select
                value={formData.numeroConvidados}
                onValueChange={(value) => handleInputChange("numeroConvidados", value)}
              >
                <SelectTrigger className="border-mystical-purple/30 focus:border-mystical-purple">
                  <SelectValue placeholder="Quantos convidados?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ate-50">Até 50 pessoas</SelectItem>
                  <SelectItem value="51-100">51 a 100 pessoas</SelectItem>
                  <SelectItem value="101-200">101 a 200 pessoas</SelectItem>
                  <SelectItem value="mais-200">Mais de 200 pessoas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Preferências do Kit */}
          <div className="space-y-4">
            <h3 className="text-xl font-script text-mystical-purple flex items-center">
              <Star className="w-5 h-5 mr-2 text-romantic-pink/60" />
              Preferências
            </h3>

            <div className="space-y-4">
              <div className="space-y-3">
                <Label className="text-mystical-purple font-light">Tipo de Kit *</Label>
                <RadioGroup
                  value={formData.tipoKit}
                  onValueChange={(value) => handleInputChange("tipoKit", value)}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 p-4 border border-mystical-purple/20 rounded-lg hover:bg-romantic-pink/10 transition-colors">
                    <RadioGroupItem value="pronto" id="pronto" className="text-mystical-purple" />
                    <Label htmlFor="pronto" className="flex-1 cursor-pointer">
                      <div className="font-script text-mystical-purple">Kit Pronto - R$ 70</div>
                      <div className="text-sm text-mystical-purple/70 font-light">Arte criada, rápida e prática</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-mystical-purple/20 rounded-lg hover:bg-romantic-pink/10 transition-colors">
                    <RadioGroupItem value="personalizado" id="personalizado" className="text-mystical-purple" />
                    <Label htmlFor="personalizado" className="flex-1 cursor-pointer">
                      <div className="font-script text-mystical-purple">Kit Personalizado - R$ 140</div>
                      <div className="text-sm text-mystical-purple/70 font-light">Feito sob medida para você</div>
                    </Label>
                  </div>
                </RadioGroup>
                {errors.tipoKit && <p className="text-red-500 text-sm">{errors.tipoKit}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="estiloPreferido" className="text-mystical-purple font-light">
                  Estilo Preferido
                </Label>
                <Select
                  value={formData.estiloPreferido}
                  onValueChange={(value) => handleInputChange("estiloPreferido", value)}
                >
                  <SelectTrigger className="border-mystical-purple/30 focus:border-mystical-purple">
                    <SelectValue placeholder="Qual estilo te encanta?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="noite-estrelada">Noite Estrelada</SelectItem>
                    <SelectItem value="verde-folhagens">Verde & Folhagens</SelectItem>
                    <SelectItem value="neutro-puro">Neutro Puro</SelectItem>
                    <SelectItem value="poetico">Poético</SelectItem>
                    <SelectItem value="surprenda-me">Surprenda-me!</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <Label htmlFor="observacoes" className="text-mystical-purple font-light">
              Conte-nos mais sobre seu sonho
            </Label>
            <Textarea
              id="observacoes"
              value={formData.observacoes}
              onChange={(e) => handleInputChange("observacoes", e.target.value)}
              className="border-mystical-purple/30 focus:border-mystical-purple min-h-[100px]"
              placeholder="Compartilhe suas ideias, inspirações, cores favoritas, ou qualquer detalhe especial que torna seu evento único..."
            />
          </div>

          {/* Promoção Destaque */}
          <div className="bg-romantic-pink/20 rounded-lg p-4 text-center">
            <p className="text-mystical-purple font-script text-lg">
              ✨ Promoção: Os 10 primeiros clientes ganham o kit personalizado por R$ 70! ✨
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white py-4 rounded-full text-lg font-light disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Enviando com carinho...
              </>
            ) : (
              <>
                Quero meu kit dos sonhos
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
