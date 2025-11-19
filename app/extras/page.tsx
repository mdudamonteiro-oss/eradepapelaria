import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Heart,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Calendar,
  Camera,
  Tag,
  FileText,
  Gift,
  MapPin,
  Clock,
  Download,
  Palette,
  BookOpen,
  Newspaper,
  ImageIcon,
  Award,
  Smartphone,
} from "lucide-react"
import ImageComponent from "next/image"
import Link from "next/link"

export default function ExtrasPage() {
  const extras = [
    // Comunicação & Convites
    {
      id: 1,
      name: "Save the Date",
      price: "R$ 25",
      description: "Anuncie a data do seu evento com estilo e antecedência",
      icon: Calendar,
      features: [
        "Design harmonioso com seu convite",
        "Formato digital para WhatsApp",
        "Versão para impressão",
        "Até 2 revisões incluídas",
      ],
      category: "comunicacao",
      popular: true,
    },
    {
      id: 2,
      name: "Save the Date Animado",
      price: "R$ 35",
      description: "Versão animada e interativa do seu Save the Date",
      icon: Sparkles,
      features: [
        "Animação personalizada",
        "Formato GIF ou MP4",
        "Perfeito para redes sociais",
        "Mais impactante e memorável",
      ],
      category: "comunicacao",
      popular: true,
    },
    {
      id: 3,
      name: "Convites para Padrinhos",
      price: "R$ 30",
      description: "Convites especiais para pedir padrinhos e madrinhas",
      icon: Heart,
      features: [
        "Design diferenciado",
        "Texto personalizado",
        "Versões para padrinho e madrinha",
        "Formato digital e impressão",
      ],
      category: "comunicacao",
    },
    {
      id: 4,
      name: "Convites Chá de Panela/Despedida",
      price: "R$ 28",
      description: "Convites para eventos pré-casamento",
      icon: Gift,
      features: [
        "Design temático específico",
        "Informações do evento",
        "Lista de sugestões incluída",
        "Estilo harmonioso com o casamento",
      ],
      category: "comunicacao",
    },

    // Organização & Planejamento
    {
      id: 5,
      name: "Checklist da Noiva",
      price: "R$ 25",
      description: "Lista completa e organizada para não esquecer nada",
      icon: FileText,
      features: [
        "Timeline de 12 meses",
        "Tarefas organizadas por período",
        "Checkboxes interativos",
        "Dicas exclusivas incluídas",
      ],
      category: "planejamento",
      popular: true,
    },
    {
      id: 6,
      name: "Cronograma Visual do Dia",
      price: "R$ 30",
      description: "Timeline detalhada e elegante do grande dia",
      icon: Clock,
      features: ["Horários organizados", "Design visual atrativo", "Informações para equipe", "Fácil compartilhamento"],
      category: "planejamento",
    },
    {
      id: 7,
      name: "Caderno de Votos",
      price: "R$ 35",
      description: "Caderno personalizado para escrever os votos",
      icon: BookOpen,
      features: ["Design romântico", "Páginas temáticas", "Dicas para escrever votos", "Formato para impressão"],
      category: "planejamento",
    },

    // Decoração & Festa
    {
      id: 8,
      name: "Plaquinhas Decorativas",
      price: "R$ 20",
      description: "Kit com 6-8 plaquinhas personalizadas para fotos",
      icon: Camera,
      features: [
        "6-8 plaquinhas diferentes",
        "Frases personalizadas",
        "Design no estilo do evento",
        "Arquivo para impressão em alta resolução",
      ],
      category: "decoracao",
      popular: true,
    },
    {
      id: 9,
      name: "Tags para Lembrancinhas",
      price: "R$ 18",
      description: "Tags elegantes para lembranças e presentes",
      icon: Tag,
      features: [
        "Design personalizado",
        "Várias opções de formato",
        "Nome dos noivos incluído",
        "Perfeito para lembrancinhas",
      ],
      category: "decoracao",
    },
    {
      id: 10,
      name: "Menu Digital Personalizado",
      price: "R$ 35",
      description: "Menu interativo e elegante para o evento",
      icon: FileText,
      features: [
        "Layout profissional",
        "Categorias organizadas",
        "Opções vegetarianas destacadas",
        "QR Code para acesso digital",
      ],
      category: "comunicacao",
    },

    // Lembranças & Recordações
    {
      id: 11,
      name: "Jornal dos Noivos",
      price: "R$ 89",
      description: "Jornal personalizado contando a história do casal",
      icon: Newspaper,
      features: [
        "4-6 páginas personalizadas",
        "História do relacionamento",
        "Fotos e depoimentos",
        "Cronograma do casamento",
      ],
      category: "lembrancas",
      premium: true,
    },
    {
      id: 12,
      name: "Álbum Digital Interativo",
      price: "R$ 45",
      description: "Álbum digital para compartilhar fotos do evento",
      icon: ImageIcon,
      features: [
        "Interface interativa",
        "Upload de fotos pelos convidados",
        "QR Code de acesso",
        "Design personalizado",
      ],
      category: "lembrancas",
    },
    {
      id: 13,
      name: "Mapa de Mesas Personalizado",
      price: "R$ 32",
      description: "Organização elegante dos lugares dos convidados",
      icon: MapPin,
      features: ["Layout personalizado", "Nomes organizados", "Design harmonioso", "Versões digital e impressa"],
      category: "planejamento",
    },

    // Extras Especiais
    {
      id: 14,
      name: "Kit Redes Sociais",
      price: "R$ 40",
      description: "Templates para posts sobre o casamento",
      icon: ImageIcon,
      features: ["10+ templates diferentes", "Stories e posts", "Countdown animado", "Hashtag personalizada"],
      category: "comunicacao",
    },
    {
      id: 15,
      name: "Certificado de Casamento Decorativo",
      price: "R$ 28",
      description: "Certificado personalizado como lembrança",
      icon: Award,
      features: ["Design elegante", "Informações do casal", "Data e local do casamento", "Perfeito para quadro"],
      category: "lembrancas",
    },
    {
      id: 16,
      name: "Convite Digital Interativo",
      price: "R$ 55",
      description: "Convite com elementos interativos e animações",
      icon: Smartphone,
      features: ["Animações suaves", "Botões interativos", "Confirmação online", "Compartilhamento fácil"],
      category: "comunicacao",
      premium: true,
    },
  ]

  const categories = [
    { id: "todos", name: "Todos os Extras", count: extras.length },
    { id: "comunicacao", name: "Comunicação", count: extras.filter((e) => e.category === "comunicacao").length },
    { id: "decoracao", name: "Decoração", count: extras.filter((e) => e.category === "decoracao").length },
    { id: "planejamento", name: "Planejamento", count: extras.filter((e) => e.category === "planejamento").length },
    { id: "lembrancas", name: "Lembranças", count: extras.filter((e) => e.category === "lembrancas").length },
  ]

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="py-8 px-4 bg-gradient-to-b from-cream to-romantic-pink/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-mystical-purple hover:text-mystical-purple/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-light">Voltar</span>
          </Link>

          <div className="flex-1 flex justify-center">
            <ImageComponent
              src="/images/logo-final.png"
              alt="Era de Papelaria"
              width={200}
              height={150}
              className="max-w-[150px] md:max-w-[200px]"
            />
          </div>

          <Link href="/#formulario">
            <Button className="bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full font-light">
              Fazer Pedido
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-romantic-pink/10 to-soft-blue/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Sparkles className="w-8 h-8 text-mystical-purple/40 mr-4" />
            <h1 className="text-5xl md:text-6xl font-script text-mystical-purple">Extras Digitais</h1>
            <Sparkles className="w-8 h-8 text-mystical-purple/40 ml-4" />
          </div>

          <div className="flex justify-center space-x-2 mb-8">
            <Star className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
            <Heart className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
            <Star className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-mystical-purple font-light max-w-3xl mx-auto mb-8">
            Complemente seu kit principal com itens especiais que tornam seu evento ainda mais único e memorável
          </p>

          <div className="bg-white/70 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-mystical-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-8 h-8 text-mystical-purple" />
                </div>
                <h3 className="font-script text-mystical-purple mb-2">Design Harmonioso</h3>
                <p className="text-sm text-mystical-purple/70">Todos os extras seguem o estilo do seu kit principal</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-mystical-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Download className="w-8 h-8 text-mystical-purple" />
                </div>
                <h3 className="font-script text-mystical-purple mb-2">Alta Resolução</h3>
                <p className="text-sm text-mystical-purple/70">Perfeitos para impressão e compartilhamento digital</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-mystical-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-8 h-8 text-mystical-purple" />
                </div>
                <h3 className="font-script text-mystical-purple mb-2">Feito com Carinho</h3>
                <p className="text-sm text-mystical-purple/70">Cada detalhe pensado especialmente para você</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros por Categoria */}
      <section className="py-8 px-4 bg-soft-blue/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div key={category.id} className="text-center">
                <div className="bg-white/70 rounded-full px-6 py-3 border border-mystical-purple/20 hover:bg-mystical-purple/10 transition-colors">
                  <span className="text-mystical-purple font-light">{category.name}</span>
                  <span className="ml-2 text-sm text-mystical-purple/60">({category.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Extras */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {extras.map((extra) => (
              <Card
                key={extra.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 border-frame-blue/20 relative ${
                  extra.popular ? "border-2 border-mystical-purple" : ""
                }`}
              >
                {extra.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-mystical-purple text-white px-4 py-1 rounded-full text-xs font-medium">
                      POPULAR
                    </div>
                  </div>
                )}

                {extra.premium && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-mystical-purple text-white px-4 py-1 rounded-full text-xs font-medium">
                      PREMIUM
                    </div>
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <extra.icon className="w-10 h-10 text-mystical-purple" />
                    </div>
                    <h3 className="text-xl font-script text-mystical-purple mb-2">{extra.name}</h3>
                    <p className="text-2xl font-bold text-mystical-purple mb-2">{extra.price}</p>
                    <p className="text-sm text-mystical-purple/70 font-light">{extra.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-mystical-purple mb-3">✓ Inclui:</h4>
                    <ul className="space-y-1">
                      {extra.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-mystical-purple flex items-start">
                          <Star className="w-3 h-3 mr-2 text-romantic-pink/60 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/#formulario">
                    <Button
                      size="sm"
                      className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full font-light"
                    >
                      Adicionar ao Pedido
                      <Heart className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Combos e Pacotes */}
      <section className="py-20 px-4 bg-gradient-to-b from-soft-blue/5 to-romantic-pink/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">Combos Especiais</h2>
            <div className="flex justify-center space-x-2 mb-6">
              <Star className="w-4 h-4 text-romantic-pink/60" />
              <Star className="w-4 h-4 text-romantic-pink/60" />
              <Star className="w-4 h-4 text-romantic-pink/60" />
            </div>
            <p className="text-lg text-mystical-purple font-light">
              Economize combinando múltiplos extras em pacotes especiais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-mystical-purple/30 bg-white/90 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="w-8 h-8 text-mystical-purple" />
                </div>
                <h3 className="text-xl font-script text-mystical-purple mb-4">Combo Festa</h3>
                <div className="mb-4">
                  <span className="text-lg text-mystical-purple/60 line-through mr-2">R$ 65</span>
                  <span className="text-2xl font-bold text-mystical-purple">R$ 55</span>
                </div>
                <ul className="text-sm text-mystical-purple space-y-2 mb-6">
                  <li>• Plaquinhas Decorativas</li>
                  <li>• Timeline do Evento</li>
                  <li>• Tags Personalizadas</li>
                </ul>
                <p className="text-xs text-green-600 font-medium mb-4">Economia de R$ 10</p>
                <Link href="/#formulario">
                  <Button
                    size="sm"
                    className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full"
                  >
                    Escolher Combo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-mystical-purple/30 bg-white/90 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-mystical-purple" />
                </div>
                <h3 className="text-xl font-script text-mystical-purple mb-4">Combo Comunicação</h3>
                <div className="mb-4">
                  <span className="text-lg text-mystical-purple/60 line-through mr-2">R$ 75</span>
                  <span className="text-2xl font-bold text-mystical-purple">R$ 65</span>
                </div>
                <ul className="text-sm text-mystical-purple space-y-2 mb-6">
                  <li>• Save the Date</li>
                  <li>• Cardápio Digital</li>
                  <li>• Lista de Presentes</li>
                </ul>
                <p className="text-xs text-green-600 font-medium mb-4">Economia de R$ 10</p>
                <Link href="/#formulario">
                  <Button
                    size="sm"
                    className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full"
                  >
                    Escolher Combo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-mystical-purple bg-white/90 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-mystical-purple text-white px-4 py-1 rounded-full text-xs font-medium">
                  MAIS COMPLETO
                </div>
              </div>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-mystical-purple/30 to-romantic-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-mystical-purple" />
                </div>
                <h3 className="text-xl font-script text-mystical-purple mb-4">Combo Completo</h3>
                <div className="mb-4">
                  <span className="text-lg text-mystical-purple/60 line-through mr-2">R$ 140</span>
                  <span className="text-2xl font-bold text-mystical-purple">R$ 120</span>
                </div>
                <ul className="text-sm text-mystical-purple space-y-1 mb-6">
                  <li>• Todos os 8 extras incluídos</li>
                  <li>• Design harmonioso</li>
                  <li>• Revisões ilimitadas</li>
                </ul>
                <p className="text-xs text-green-600 font-medium mb-4">Economia de R$ 20</p>
                <Link href="/#formulario">
                  <Button
                    size="sm"
                    className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full"
                  >
                    Escolher Combo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-mystical-purple/30 bg-white/90 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-mystical-purple" />
                </div>
                <h3 className="text-xl font-script text-mystical-purple mb-4">Combo Noiva Organizada</h3>
                <div className="mb-4">
                  <span className="text-lg text-mystical-purple/60 line-through mr-2">R$ 120</span>
                  <span className="text-2xl font-bold text-mystical-purple">R$ 95</span>
                </div>
                <ul className="text-sm text-mystical-purple space-y-2 mb-6">
                  <li>• Checklist da Noiva</li>
                  <li>• Cronograma Visual</li>
                  <li>• Caderno de Votos</li>
                  <li>• Mapa de Mesas</li>
                </ul>
                <p className="text-xs text-green-600 font-medium mb-4">Economia de R$ 25</p>
                <Link href="/#formulario">
                  <Button
                    size="sm"
                    className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full"
                  >
                    Escolher Combo
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-mystical-purple/30 bg-white/90 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-mystical-purple" />
                </div>
                <h3 className="text-xl font-script text-mystical-purple mb-4">Combo Premium Digital</h3>
                <div className="mb-4">
                  <span className="text-lg text-mystical-purple/60 line-through mr-2">R$ 179</span>
                  <span className="text-2xl font-bold text-mystical-purple">R$ 149</span>
                </div>
                <ul className="text-sm text-mystical-purple space-y-1 mb-6">
                  <li>• Jornal dos Noivos</li>
                  <li>• Save the Date Animado</li>
                  <li>• Convite Digital Interativo</li>
                  <li>• Kit Redes Sociais</li>
                </ul>
                <p className="text-xs text-green-600 font-medium mb-4">Economia de R$ 30</p>
                <Link href="/#formulario">
                  <Button
                    size="sm"
                    className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full"
                  >
                    Escolher Combo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-6">Como Funciona?</h2>
            <p className="text-lg text-mystical-purple font-light">Processo simples e transparente para seus extras</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Escolha seus Extras",
                desc: "Selecione os itens que complementam seu evento",
                icon: Heart,
              },
              {
                step: "2",
                title: "Faça o Pedido",
                desc: "Preencha o formulário com suas preferências",
                icon: FileText,
              },
              {
                step: "3",
                title: "Receba a Prévia",
                desc: "Em até 2 dias úteis no seu e-mail",
                icon: Clock,
              },
              {
                step: "4",
                title: "Aprove e Baixe",
                desc: "Receba os arquivos finais em alta resolução",
                icon: Download,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform">
                  <item.icon className="w-10 h-10 text-mystical-purple" />
                </div>
                <div className="bg-mystical-purple text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-script text-mystical-purple mb-3">{item.title}</h3>
                <p className="text-sm text-mystical-purple font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ dos Extras */}
      <section className="py-20 px-4 bg-gradient-to-b from-soft-blue/5 to-romantic-pink/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">Dúvidas sobre Extras</h2>
            <p className="text-lg text-mystical-purple font-light">
              Respostas rápidas sobre nossos produtos complementares
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Posso pedir apenas extras, sem kit principal?",
                answer:
                  "Sim! Você pode solicitar apenas os extras se já tiver um convite ou quiser complementar um trabalho existente.",
              },
              {
                question: "Os extras seguem o mesmo estilo do meu kit?",
                answer:
                  "Absolutamente! Todos os extras são criados para harmonizar perfeitamente com o design do seu kit principal.",
              },
              {
                question: "Qual o prazo de entrega dos extras?",
                answer:
                  "Os extras têm prazo de 2 dias úteis, mesmo prazo dos kits principais. Combos podem levar 1 dia adicional.",
              },
              {
                question: "Posso fazer alterações nos extras?",
                answer: "Sim! Cada extra inclui até 2 revisões para ajustes. Combos incluem revisões ilimitadas.",
              },
              {
                question: "Os combos realmente compensam?",
                answer: "Sim! Os combos oferecem economia real e garantem harmonia visual entre todos os itens.",
              },
              {
                question: "Recebo os extras em que formatos?",
                answer:
                  "Todos os extras vêm em PDF para impressão e PNG para compartilhamento digital, em alta resolução.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-frame-blue/20 bg-white/70">
                <CardContent className="p-6">
                  <h3 className="font-script text-mystical-purple text-lg mb-3">{faq.question}</h3>
                  <p className="text-mystical-purple font-light text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 px-4 bg-gradient-to-b from-romantic-pink/10 to-mystical-purple/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-6">
            Pronto para Personalizar seu Evento?
          </h2>
          <p className="text-lg text-mystical-purple font-light mb-8 max-w-2xl mx-auto">
            Escolha os extras que mais combinam com seu estilo e torne seu evento ainda mais especial e memorável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#formulario">
              <Button
                size="lg"
                className="bg-gradient-to-r from-mystical-purple to-romantic-pink hover:from-mystical-purple/90 hover:to-romantic-pink/90 text-white px-8 py-4 rounded-full text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Fazer Meu Pedido
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link href="/#contato">
              <Button
                variant="outline"
                size="lg"
                className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white px-8 py-4 rounded-full text-lg font-light bg-transparent"
              >
                Tirar Dúvidas
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-mystical-purple/10 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Star className="w-4 h-4 text-mystical-purple/40" />
          <Heart className="w-4 h-4 text-mystical-purple/40" />
          <Star className="w-4 h-4 text-mystical-purple/40" />
        </div>
        <p className="text-mystical-purple font-light italic">
          Era de Papelaria - Convites com alma, palavras com encanto.
        </p>
      </footer>
    </div>
  )
}
