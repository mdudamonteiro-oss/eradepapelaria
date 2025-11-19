import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Leaf,
  Moon,
  Heart,
  Instagram,
  Mail,
  ArrowRight,
  Clock,
  Download,
  Sparkles,
  Smartphone,
  Newspaper,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FixedHeader from "./components/fixed-header"
import FloatingContact from "./components/floating-contact"
import WorkGallery from "./components/work-gallery"
import FAQSection from "./components/faq-section"
import ProcessSteps from "./components/process-steps"

export default function Component() {
  return (
    <div className="min-h-screen bg-cream">
      <FixedHeader />
      <FloatingContact />

      {/* Header/Capa Melhorado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-romantic-pink/20 to-cream"></div>

        {/* Partículas flutuantes animadas */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-mystical-purple/20 animate-bounce">
            <Star className="w-4 h-4" />
          </div>
          <div className="absolute top-32 right-20 text-romantic-pink/30 float-animation">
            <Heart className="w-6 h-6" />
          </div>
          <div className="absolute bottom-40 left-20 text-mystical-purple/25 animate-pulse">
            <Leaf className="w-5 h-5" />
          </div>
          <div className="absolute top-72 right-10 text-romantic-pink/20 float-animation">
            <Star className="w-3 h-3" />
          </div>
          <div className="absolute bottom-60 right-32 text-mystical-purple/15 animate-bounce">
            <Moon className="w-7 h-7" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="mb-8">
            <Image
              src="/images/logo-final.png"
              alt="Era de Papelaria - Convites com alma, palavras com encanto"
              width={500}
              height={375}
              className="mx-auto max-w-md md:max-w-lg lg:max-w-xl hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          {/* Tagline melhorada */}
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-mystical-purple font-light italic mb-4">
              "Onde cada convite digital conta uma história única"
            </p>
            <div className="flex justify-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
              <Heart className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
              <Star className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white px-8 py-4 rounded-full text-lg font-light bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Ver Portfólio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/#formulario">
              <Button
                size="lg"
                className="bg-gradient-to-r from-mystical-purple to-mystical-purple/80 hover:from-mystical-purple/90 hover:to-mystical-purple text-white px-8 py-4 rounded-full text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Criar Meu Convite
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Efeito watercolor melhorado */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-romantic-pink/20 via-romantic-pink/10 to-transparent"></div>
      </section>

      {/* Sobre Melhorado */}
      <section id="sobre" className="py-24 px-4 bg-gradient-to-b from-cream to-soft-blue/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <Leaf className="w-6 h-6 text-mystical-purple/40 mr-3" />
              <h2 className="text-4xl md:text-6xl font-script text-mystical-purple">Sobre a Era</h2>
              <Leaf className="w-6 h-6 text-mystical-purple/40 ml-3 transform scale-x-[-1]" />
            </div>
            <p className="text-xl md:text-2xl text-mystical-purple leading-relaxed font-light max-w-4xl mx-auto mb-12">
              Somos um ateliê digital especializado em papelaria personalizada. Criamos convites únicos, save the dates,
              cardápios e toda papelaria digital para seus momentos especiais. Cada peça é pensada com carinho e
              desenvolvida em alta resolução, pronta para você compartilhar digitalmente ou imprimir onde preferir.
            </p>
          </div>

          {/* Stats melhorados */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-mystical-purple" />
              </div>
              <h3 className="font-script text-mystical-purple text-2xl mb-3">Entrega Rápida</h3>
              <p className="text-mystical-purple font-light">Prévia em até 2 dias úteis</p>
              <p className="text-sm text-mystical-purple/60 mt-2">Agilidade sem perder qualidade</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Download className="w-10 h-10 text-mystical-purple" />
              </div>
              <h3 className="font-script text-mystical-purple text-2xl mb-3">Alta Resolução</h3>
              <p className="text-mystical-purple font-light">Perfeito para impressão</p>
              <p className="text-sm text-mystical-purple/60 mt-2">Formatos PDF, PNG e JPEG</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Heart className="w-10 h-10 text-mystical-purple" />
              </div>
              <h3 className="font-script text-mystical-purple text-2xl mb-3">Feito com Amor</h3>
              <p className="text-mystical-purple font-light">Cada detalhe pensado com carinho</p>
              <p className="text-sm text-mystical-purple/60 mt-2">Personalização com carinho</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Trabalhos Melhorada */}
      <section className="py-24 px-4 bg-gradient-to-b from-soft-blue/5 to-romantic-pink/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-script text-mystical-purple mb-6">Nossos Trabalhos</h2>
            <div className="flex justify-center space-x-2 mb-6">
              <Star className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
              <Star className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
              <Star className="w-5 h-5 text-romantic-pink/60 animate-pulse" />
            </div>
            <p className="text-xl text-mystical-purple font-light max-w-2xl mx-auto">
              Cada projeto é único e especial, criado com amor e atenção aos detalhes que fazem a diferença
            </p>
          </div>

          <WorkGallery />
        </div>
      </section>

      {/* Processo Melhorado */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-script text-mystical-purple mb-6">Como Funciona?</h2>
            <div className="flex justify-center space-x-2 mb-6">
              <Star className="w-4 h-4 text-romantic-pink/60" />
              <Star className="w-4 h-4 text-romantic-pink/60" />
              <Star className="w-4 h-4 text-romantic-pink/60" />
            </div>
            <p className="text-xl text-mystical-purple font-light">
              Um processo simples e transparente para criar seu convite dos sonhos
            </p>
          </div>

          <ProcessSteps />

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-romantic-pink/20 to-mystical-purple/20 rounded-2xl p-8 mb-8">
              <p className="text-3xl md:text-5xl font-script text-mystical-purple italic bg-gradient-to-r from-mystical-purple to-romantic-pink bg-clip-text text-transparent">
                Tudo digital. Tudo com alma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preços Melhorados */}
      <section id="valores" className="py-24 px-4 bg-gradient-to-b from-romantic-pink/10 to-soft-blue/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-script text-mystical-purple mb-6">Nossos Valores</h2>
          <p className="text-xl md:text-2xl text-mystical-purple font-light max-w-4xl mx-auto mb-16">
            Nossos convites digitais foram criados para transformar o primeiro capítulo do seu grande dia em um gesto de
            beleza e afeto. Trabalhamos com duas formas de entrega, para que cada casal encontre a que mais combina com
            a sua história.
          </p>

          {/* Promoção de Lançamento */}
          <div className="mb-20">
            <Card className="border-2 border-romantic-pink bg-gradient-to-r from-romantic-pink/20 to-mystical-purple/20 relative overflow-hidden">
              <CardContent className="p-8 text-center relative z-10">
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>

                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-mystical-purple mr-2 animate-pulse" />
                  <span className="text-mystical-purple font-script text-2xl">🌸 Promoção de Lançamento 🌸</span>
                  <Sparkles className="w-6 h-6 text-mystical-purple ml-2 animate-pulse" />
                </div>

                <div className="mb-6">
                  <p className="text-mystical-purple font-light text-lg mb-4">
                    Os <strong className="text-mystical-purple text-xl">10 primeiros casais</strong> terão a chance de
                    levar o Kit Personalizado por apenas
                  </p>
                  <div className="text-center mb-4">
                    <span className="text-2xl text-mystical-purple/60 line-through mr-3">R$ 119,90</span>
                    <span className="text-4xl font-bold text-mystical-purple">R$ 79,90</span>
                  </div>
                </div>

                <div className="bg-white/70 rounded-lg p-6 mb-6">
                  <h4 className="font-script text-mystical-purple text-lg mb-4">✨ Vagas Limitadas por Estilo:</h4>
                  <div className="grid md:grid-cols-5 gap-2 text-sm">
                    <div className="bg-mystical-purple/10 rounded-lg p-3">
                      <div className="font-medium text-mystical-purple">Noite Estrelada</div>
                      <div className="text-xs text-mystical-purple/70">2 vagas</div>
                    </div>
                    <div className="bg-mystical-purple/10 rounded-lg p-3">
                      <div className="font-medium text-mystical-purple">Botânico Natural</div>
                      <div className="text-xs text-mystical-purple/70">2 vagas</div>
                    </div>
                    <div className="bg-mystical-purple/10 rounded-lg p-3">
                      <div className="font-medium text-mystical-purple">Romântico Clássico</div>
                      <div className="text-xs text-mystical-purple/70">2 vagas</div>
                    </div>
                    <div className="bg-mystical-purple/10 rounded-lg p-3">
                      <div className="font-medium text-mystical-purple">Moderno Elegante</div>
                      <div className="text-xs text-mystical-purple/70">2 vagas</div>
                    </div>
                    <div className="bg-mystical-purple/10 rounded-lg p-3">
                      <div className="font-medium text-mystical-purple">Minimalista Botânico</div>
                      <div className="text-xs text-mystical-purple/70">2 vagas</div>
                    </div>
                  </div>
                </div>

                <div className="bg-romantic-pink/20 rounded-lg p-4">
                  <p className="text-mystical-purple font-script text-lg italic">
                    Um presente da Era da Papelaria para quem deseja começar o amor já envolto em poesia. ✨
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <div className="bg-gradient-to-r from-cream to-romantic-pink/10 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <Card className="border-2 border-frame-blue/30 bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Heart className="w-10 h-10 text-mystical-purple" />
                    </div>
                    <h4 className="text-2xl font-script text-mystical-purple mb-4">💌 Kit Pronto</h4>
                    <p className="text-mystical-purple font-light mb-6">
                      Convite Digital + Save the Date + Arte para Impressão
                    </p>
                    <div className="mb-6">
                      <p className="text-4xl font-bold text-mystical-purple mb-2">R$ 59,90</p>
                    </div>
                    <div className="bg-soft-blue/20 rounded-lg p-4">
                      <p className="text-sm text-mystical-purple font-light">
                        Perfeito para quem busca praticidade sem abrir mão da delicadeza.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-mystical-purple bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-mystical-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                      MAIS PROCURADO
                    </div>
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-mystical-purple/30 to-romantic-pink/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Star className="w-10 h-10 text-mystical-purple" />
                    </div>
                    <h4 className="text-2xl font-script text-mystical-purple mb-4">💍 Kit Personalizado</h4>
                    <p className="text-mystical-purple font-light mb-6">
                      Convite Digital + Save the Date + Arte para Impressão
                    </p>
                    <div className="mb-6">
                      <p className="text-4xl font-bold text-mystical-purple mb-2">R$ 119,90</p>
                    </div>
                    <div className="bg-mystical-purple/10 rounded-lg p-4">
                      <p className="text-sm text-mystical-purple font-light">
                        Feito sob medida, com cada detalhe pensado para refletir a identidade dos noivos.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-soft-blue/20 rounded-xl p-6">
              <p className="text-mystical-purple font-light text-lg text-center">
                🌸 Todos os kits incluem arquivos em alta resolução e orientações para impressão.
              </p>
            </div>
          </div>

          {/* Jornal dos Noivos - NOVO */}
          <div className="mb-20">
            <Card className="border-2 border-mystical-purple bg-gradient-to-r from-mystical-purple/10 to-romantic-pink/10 hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-mystical-purple to-romantic-pink text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                  ✨ EXCLUSIVO ✨
                </div>
              </div>
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-mystical-purple/30 to-romantic-pink/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Newspaper className="w-12 h-12 text-mystical-purple" />
                </div>

                <h3 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">📰 Jornal dos Noivos</h3>
                <p className="text-lg text-mystical-purple font-light mb-6 max-w-2xl mx-auto">
                  Uma lembrança única e especial: um jornal personalizado contando a história de amor do casal
                </p>

                <div className="text-center mb-8">
                  <span className="text-5xl font-bold text-mystical-purple">R$ 89,90</span>
                  <p className="text-sm text-mystical-purple/70 mt-2">Produto exclusivo e personalizado</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white/70 rounded-lg p-6">
                    <h4 className="font-script text-mystical-purple text-lg mb-4">📖 O que inclui:</h4>
                    <ul className="text-sm text-mystical-purple space-y-2 text-left">
                      <li className="flex items-center">
                        <Heart className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        História de como se conheceram
                      </li>
                      <li className="flex items-center">
                        <Heart className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Linha do tempo do relacionamento
                      </li>
                      <li className="flex items-center">
                        <Heart className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Seção de fotos do casal
                      </li>
                      <li className="flex items-center">
                        <Heart className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Depoimentos de amigos e família
                      </li>
                      <li className="flex items-center">
                        <Heart className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Curiosidades sobre os noivos
                      </li>
                      <li className="flex items-center">
                        <Heart className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Programação do casamento
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/70 rounded-lg p-6">
                    <h4 className="font-script text-mystical-purple text-lg mb-4">✨ Características:</h4>
                    <ul className="text-sm text-mystical-purple space-y-2 text-left">
                      <li className="flex items-center">
                        <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        4-6 páginas personalizadas
                      </li>
                      <li className="flex items-center">
                        <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Design no estilo do seu convite
                      </li>
                      <li className="flex items-center">
                        <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Alta resolução para impressão
                      </li>
                      <li className="flex items-center">
                        <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Formato digital e para impressão
                      </li>
                      <li className="flex items-center">
                        <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Entrega em até 5 dias úteis
                      </li>
                      <li className="flex items-center">
                        <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                        Até 3 revisões incluídas
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-romantic-pink/20 rounded-lg p-6 mb-8">
                  <p className="text-mystical-purple font-script text-lg italic">
                    "Uma lembrança única que conta a história de amor de vocês de forma criativa e emocionante. Perfeito
                    para distribuir no casamento ou guardar como recordação eterna." 💕
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/#formulario">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-mystical-purple to-romantic-pink hover:from-mystical-purple/90 hover:to-romantic-pink/90 text-white px-8 py-4 rounded-full text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      <Newspaper className="mr-2 w-5 h-5" />
                      Criar Nosso Jornal
                      <Heart className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white px-8 py-4 rounded-full text-lg font-light bg-transparent"
                  >
                    Ver Exemplo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Extras Digitais */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">Extras Digitais</h3>
              <p className="text-lg text-mystical-purple font-light">
                Complemente seu kit com itens especiais para deixar seu evento ainda mais único
              </p>
            </div>

            <Card className="border-2 border-frame-blue/30 bg-white/90 hover:shadow-xl transition-all duration-300 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-mystical-purple" />
                  </div>
                  <h4 className="text-2xl font-script text-mystical-purple mb-2">📄 Extras Digitais</h4>
                  <p className="text-mystical-purple font-light mb-4">
                    Save the date, plaquinhas, cardápios e muito mais
                  </p>
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold text-mystical-purple">R$ 15 - R$ 30</span>
                    <p className="text-sm text-mystical-purple/70">cada item</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-romantic-pink/10 rounded-lg">
                    <div className="w-12 h-12 bg-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-mystical-purple" />
                    </div>
                    <h5 className="font-script text-mystical-purple mb-2">Plaquinhas</h5>
                    <p className="text-xs text-mystical-purple/70">Para decoração e fotos</p>
                  </div>

                  <div className="text-center p-4 bg-romantic-pink/10 rounded-lg">
                    <div className="w-12 h-12 bg-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-mystical-purple" />
                    </div>
                    <h5 className="font-script text-mystical-purple mb-2">Tags Personalizadas</h5>
                    <p className="text-xs text-mystical-purple/70">Para lembrancinhas</p>
                  </div>

                  <div className="text-center p-4 bg-romantic-pink/10 rounded-lg">
                    <div className="w-12 h-12 bg-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Leaf className="w-6 h-6 text-mystical-purple" />
                    </div>
                    <h5 className="font-script text-mystical-purple mb-2">Cardápios</h5>
                    <p className="text-xs text-mystical-purple/70">Design harmonioso</p>
                  </div>
                </div>

                <div className="bg-soft-blue/20 rounded-lg p-4 mb-6">
                  <h5 className="font-script text-mystical-purple mb-3">✓ Itens disponíveis:</h5>
                  <div className="grid md:grid-cols-2 gap-2 text-sm text-mystical-purple">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                      <span>Save the Date</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                      <span>Plaquinhas decorativas</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                      <span>Tags personalizadas</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                      <span>Cardápios digitais</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                      <span>Lista de presentes</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                      <span>Adesivos personalizados</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-mystical-purple/70 mb-4">
                    💡 Combine com qualquer kit para criar uma experiência completa
                  </p>
                  <Link href="/extras">
                    <Button
                      variant="outline"
                      className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent rounded-full px-6 py-2"
                    >
                      Ver Todos os Extras
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <Link href="/#formulario">
            <Button
              size="lg"
              className="bg-gradient-to-r from-mystical-purple to-mystical-purple/80 hover:from-mystical-purple/90 hover:to-mystical-purple text-white px-12 py-6 rounded-full text-xl font-light shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-3 w-6 h-6" />
              Escolha seu kit dos sonhos
              <Heart className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Melhorado */}
      <FAQSection />

      {/* Formulário */}
      <section id="formulario" className="py-24 px-4 bg-gradient-to-b from-soft-blue/10 to-romantic-pink/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center space-x-2 mb-6">
              <Star className="w-6 h-6 text-romantic-pink/60 animate-pulse" />
              <Heart className="w-6 h-6 text-romantic-pink/60 animate-pulse" />
              <Star className="w-6 h-6 text-romantic-pink/60 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-script text-mystical-purple mb-6">Peça Seu Kit dos Sonhos</h2>
            <p className="text-xl text-mystical-purple font-light italic max-w-2xl mx-auto">
              Preencha nosso formulário com carinho e vamos criar juntos sua papelaria digital para casamentos,
              aniversários, chá de bebê, formaturas, noivados e muito mais!
            </p>
          </div>

          {/* Google Forms Embed */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-frame-blue/30 overflow-hidden shadow-2xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe-W8xjvfPKe1DaL4REku8Xuhwfp7SUFsXu2ApKUvV-PG24LA/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Carregando…
            </iframe>
          </div>

          {/* Link alternativo */}
          <div className="text-center mt-8">
            <p className="text-mystical-purple/70 text-lg mb-6">Problemas para visualizar o formulário?</p>
            <a
              href="https://forms.gle/nsySeyXkx8ZJj9X78"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-mystical-purple hover:bg-mystical-purple/90 text-white px-8 py-4 rounded-full font-light transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="text-lg">Abrir formulário em nova aba</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contato Melhorado */}
      <section id="contato" className="py-24 px-4 bg-gradient-to-b from-soft-blue/10 to-romantic-pink/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-script text-mystical-purple mb-8">Vamos Conversar?</h2>
          <p className="text-xl text-mystical-purple mb-16 font-light">
            Estamos aqui para transformar seus sonhos em realidade. Fale conosco!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a
              href="https://instagram.com/eradepapelaria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 p-6 bg-white/70 rounded-2xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Instagram className="w-8 h-8 text-mystical-purple" />
              <div className="text-left">
                <p className="text-mystical-purple font-medium text-lg">Instagram</p>
                <p className="text-mystical-purple/70">@eradepapelaria</p>
              </div>
            </a>
            <a
              href="mailto:era.de.papelaria@gmail.com"
              className="flex items-center justify-center space-x-4 p-6 bg-white/70 rounded-2xl hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-8 h-8 text-mystical-purple" />
              <div className="text-left">
                <p className="text-mystical-purple font-medium text-lg">E-mail</p>
                <p className="text-mystical-purple/70">era.de.papelaria@gmail.com</p>
              </div>
            </a>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os kits de papelaria digital."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-6 rounded-full text-xl font-light shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Smartphone className="mr-3 w-6 h-6" />
              Falar no WhatsApp
              <Heart className="ml-3 w-6 h-6" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer Melhorado */}
      <footer className="py-16 px-4 bg-gradient-to-b from-mystical-purple/10 to-mystical-purple/20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8">
            <Star className="w-6 h-6 text-mystical-purple/40 animate-pulse" />
            <Moon className="w-6 h-6 text-mystical-purple/40 animate-pulse" />
            <Star className="w-6 h-6 text-mystical-purple/40 animate-pulse" />
          </div>
          <p className="text-2xl text-mystical-purple font-script italic mb-4">
            Era de Papelaria - Convites com alma, palavras com encanto.
          </p>
          <p className="text-mystical-purple/70 font-light">
            © 2024 Era de Papelaria. Todos os direitos reservados. Feito com ❤️ para momentos especiais.
          </p>
        </div>
      </footer>
    </div>
  )
}
