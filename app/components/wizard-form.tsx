"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Heart, Star, Send, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"

interface FormData {
  // Etapa 1 - Informações Pessoais
  nome: string
  email: string
  telefone: string

  // Etapa 2 - Evento
  tipoEvento: string
  dataEvento: string
  numeroConvidados: string

  // Etapa 3 - Preferências
  tipoKit: string
  estiloPreferido: string
  observacoes: string
}

export default function WizardForm() {
  const [currentStep, setCurrentStep] = useState(1)
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

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  // URL do seu Google Forms - SUBSTITUA PELA URL CORRETA
  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSe-W8xjvfPKe1DaL4REku8Xuhwfp7SUFsXu2ApKUvV-PG24LA/formResponse"

  // IDs dos campos - ESTES PRECISAM SER ATUALIZADOS COM OS IDs REAIS
  const FIELD_IDS = {
    nome: "entry.1807598051",
    email: "entry.407367102",
    telefone: "entry.2141215020",
    tipoEvento: "entry.893938160",
    dataEvento: "entry.898329420", // Para data completa
    numeroConvidados: "entry.72005595",
    tipoKit: "entry.XXXXXXXX", // Ainda precisa encontrar este
    estiloPreferido: "entry.XXXXXXXX", // Ainda precisa encontrar este
    observacoes: "entry.XXXXXXXX", // Ainda precisa encontrar este
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {}

    if (step === 1) {
      if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório"
      if (!formData.email.trim()) newErrors.email = "Email é obrigatório"
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido"
      if (!formData.telefone.trim()) newErrors.telefone = "Telefone é obrigatório"
    } else if (step === 2) {
      if (!formData.tipoEvento) newErrors.tipoEvento = "Tipo de evento é obrigatório"
      if (!formData.dataEvento) newErrors.dataEvento = "Data do evento é obrigatória"
    } else if (step === 3) {
      if (!formData.tipoKit) newErrors.tipoKit = "Selecione o tipo de kit"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const submitToGoogleForms = async (data: FormData): Promise<boolean> => {
    try {
      const formDataToSend = new FormData()

      // Mapear os dados para os IDs do Google Forms
      formDataToSend.append(FIELD_IDS.nome, data.nome)
      formDataToSend.append(FIELD_IDS.email, data.email)
      formDataToSend.append(FIELD_IDS.telefone, data.telefone)
      formDataToSend.append(FIELD_IDS.tipoEvento, data.tipoEvento)
      formDataToSend.append(FIELD_IDS.numeroConvidados, data.numeroConvidados)

      // Para data, usar o formato completo
      if (data.dataEvento) {
        const date = new Date(data.dataEvento)
        formDataToSend.append("entry.898329420_year", date.getFullYear().toString())
        formDataToSend.append("entry.898329420_month", (date.getMonth() + 1).toString())
        formDataToSend.append("entry.898329420_day", date.getDate().toString())
      }

      // Campos opcionais (se existirem)
      if (FIELD_IDS.tipoKit !== "entry.XXXXXXXX") {
        formDataToSend.append(FIELD_IDS.tipoKit, data.tipoKit)
      }
      if (FIELD_IDS.estiloPreferido !== "entry.XXXXXXXX") {
        formDataToSend.append(FIELD_IDS.estiloPreferido, data.estiloPreferido)
      }
      if (FIELD_IDS.observacoes !== "entry.XXXXXXXX") {
        formDataToSend.append(FIELD_IDS.observacoes, data.observacoes)
      }

      // Enviar para o Google Forms
      const response = await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      })

      return true
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      return false
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)

    try {
      const success = await submitToGoogleForms(formData)

      if (success) {
        setIsSubmitted(true)

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setCurrentStep(1)
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
        }, 5000)
      } else {
        alert("Erro ao enviar formulário. Tente novamente.")
      }
    } catch (error) {
      console.error("Erro:", error)
      alert("Erro ao enviar formulário. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
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
          <div className="bg-romantic-pink/10 rounded-lg p-4 mb-6">
            <p className="text-mystical-purple font-light text-sm">
              📧 Você receberá um email de confirmação em breve
              <br />📱 Também entraremos em contato pelo WhatsApp informado
            </p>
          </div>
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
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-mystical-purple font-light">
              Etapa {currentStep} de {totalSteps}
            </span>
            <span className="text-sm text-mystical-purple font-light">{Math.round(progress)}% completo</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step 1: Informações Pessoais */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-script text-mystical-purple flex items-center justify-center">
                <Heart className="w-6 h-6 mr-2 text-romantic-pink/60" />
                Suas Informações
              </h3>
              <p className="text-mystical-purple/70 font-light mt-2">
                Vamos nos conhecer melhor para criar algo especial
              </p>
            </div>

            <div className="space-y-4">
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
          </div>
        )}

        {/* Step 2: Informações do Evento */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-script text-mystical-purple flex items-center justify-center">
                <Star className="w-6 h-6 mr-2 text-romantic-pink/60" />
                Sobre o Evento
              </h3>
              <p className="text-mystical-purple/70 font-light mt-2">Conte-nos sobre seu momento especial</p>
            </div>

            <div className="space-y-4">
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
                    <SelectItem value="Casamento">Casamento</SelectItem>
                    <SelectItem value="Aniversário">Aniversário</SelectItem>
                    <SelectItem value="Noivado">Noivado</SelectItem>
                    <SelectItem value="Chá de Bebê">Chá de Bebê</SelectItem>
                    <SelectItem value="Chá de Panela">Chá de Panela</SelectItem>
                    <SelectItem value="Formatura">Formatura</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
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
                    <SelectItem value="Até 50 pessoas">Até 50 pessoas</SelectItem>
                    <SelectItem value="51 a 100 pessoas">51 a 100 pessoas</SelectItem>
                    <SelectItem value="101 a 200 pessoas">101 a 200 pessoas</SelectItem>
                    <SelectItem value="Mais de 200 pessoas">Mais de 200 pessoas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Preferências */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-script text-mystical-purple flex items-center justify-center">
                <Star className="w-6 h-6 mr-2 text-romantic-pink/60" />
                Suas Preferências
              </h3>
              <p className="text-mystical-purple/70 font-light mt-2">Vamos personalizar seu kit dos sonhos</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="text-mystical-purple font-light">Tipo de Kit *</Label>
                <RadioGroup
                  value={formData.tipoKit}
                  onValueChange={(value) => handleInputChange("tipoKit", value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-2 p-4 border border-mystical-purple/20 rounded-lg hover:bg-romantic-pink/10 transition-colors">
                    <RadioGroupItem value="Kit Pronto - R$ 70" id="pronto" className="text-mystical-purple" />
                    <Label htmlFor="pronto" className="flex-1 cursor-pointer">
                      <div className="font-script text-mystical-purple text-lg">Kit Pronto - R$ 70</div>
                      <div className="text-sm text-mystical-purple/70 font-light">Arte criada, rápida e prática</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-mystical-purple/20 rounded-lg hover:bg-romantic-pink/10 transition-colors">
                    <RadioGroupItem
                      value="Kit Personalizado - R$ 70 (PROMOÇÃO)"
                      id="personalizado"
                      className="text-mystical-purple"
                    />
                    <Label htmlFor="personalizado" className="flex-1 cursor-pointer">
                      <div className="font-script text-mystical-purple text-lg">
                        Kit Personalizado - R$ 70 (PROMOÇÃO)
                      </div>
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
                    <SelectItem value="Noite Estrelada">Noite Estrelada</SelectItem>
                    <SelectItem value="Verde & Folhagens">Verde & Folhagens</SelectItem>
                    <SelectItem value="Neutro Puro">Neutro Puro</SelectItem>
                    <SelectItem value="Poético">Poético</SelectItem>
                    <SelectItem value="Surpreenda-me!">Surpreenda-me!</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="observacoes" className="text-mystical-purple font-light">
                  Conte-nos mais sobre seu sonho
                </Label>
                <Textarea
                  id="observacoes"
                  value={formData.observacoes}
                  onChange={(e) => handleInputChange("observacoes", e.target.value)}
                  className="border-mystical-purple/30 focus:border-mystical-purple min-h-[100px]"
                  placeholder="Compartilhe suas ideias, inspirações, cores favoritas, ou qualquer detalhe especial..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          {currentStep < totalSteps ? (
            <Button onClick={nextStep} className="bg-mystical-purple hover:bg-mystical-purple/90 text-white">
              Próximo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-mystical-purple hover:bg-mystical-purple/90 text-white"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Pedido
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          )}
        </div>

        {/* Informação sobre onde os dados vão */}
        <div className="mt-6 p-4 bg-soft-blue/10 rounded-lg">
          <p className="text-xs text-mystical-purple/70 text-center">
            🔒 Seus dados são enviados com segurança e utilizados apenas para criar seu convite personalizado
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
