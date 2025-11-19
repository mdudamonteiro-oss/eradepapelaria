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
  Printer,
  Package,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FixedHeader from "./components/fixed-header"
import FloatingContact from "./components/floating-contact"
import UrgencyCounter from "./components/urgency-counter"
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
              "Onde cada convite conta uma história única"
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
              Um ateliê completo onde cada convite carrega a magia de um novo começo. Criamos papelaria personalizada
              tanto digital quanto impressa para tornar seus momentos especiais ainda mais memoráveis. Traduzimos
              sentimentos com arte, poesia e significado.
            </p>
          </div>

          {/* Stats melhorados */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
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
              <h3 className="font-script text-mystical-purple text-2xl mb-3">Digital Premium</h3>
              <p className="text-mystical-purple font-light">Alta resolução para impressão</p>
              <p className="text-sm text-mystical-purple/60 mt-2">Formatos PDF, PNG e JPEG</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Printer className="w-10 h-10 text-mystical-purple" />
              </div>
              <h3 className="font-script text-mystical-purple text-2xl mb-3">Impressão Artesanal</h3>
              <p className="text-mystical-purple font-light">Papéis especiais e acabamentos</p>
              <p className="text-sm text-mystical-purple/60 mt-2">Lacres de cera e detalhes únicos</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Package className="w-10 h-10 text-mystical-purple" />
              </div>
              <h3 className="font-script text-mystical-purple text-2xl mb-3">Entrega Nacional</h3>
              <p className="text-mystical-purple font-light">Enviamos para todo Brasil</p>
              <p className="text-sm text-mystical-purple/60 mt-2">Embalagem especial incluída</p>
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
                Digital ou impresso. Sempre com alma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preços Melhorados */}
      <section id="valores" className="py-24 px-4 bg-gradient-to-b from-romantic-pink/10 to-soft-blue/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-script text-mystical-purple mb-6">Encante-se com nossos Kits</h2>
          <p className="text-xl md:text-2xl text-mystical-purple font-light max-w-4xl mx-auto mb-16">
            Escolha entre arte digital para brilhar nas telas ou papelaria afetiva para tocar com as mãos. Cada detalhe
            foi feito pra guardar eternamente.
          </p>

          {/* Urgency Counter */}
          <div className="mb-20">
            <UrgencyCounter />
          </div>

          {/* Kits Digitais Melhorados */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">📦 Kits Digitais</h3>
              <div className="flex justify-center mb-4">
                <Download className="w-8 h-8 text-mystical-purple/40" />
              </div>
              <p className="text-mystical-purple font-light">
                Perfeitos para quem quer praticidade sem perder o charme
              </p>
            </div>

            <div className="bg-gradient-to-r from-cream to-romantic-pink/10 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-frame-blue/30 bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Star className="w-10 h-10 text-mystical-purple" />
                    </div>
                    <h4 className="text-2xl font-script text-mystical-purple mb-4">🎨 Kit Pronto</h4>
                    <p className="text-mystical-purple font-light mb-4">
                      Arte pronta para personalização leve (nomes e datas).
                    </p>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-mystical-purple">R$ 70</p>
                      <p className="text-sm text-mystical-purple/60">Entrega em 24h</p>
                    </div>
                    <div className="text-xs text-mystical-purple/80 space-y-2">
                      <p>✓ Convite principal</p>
                      <p>✓ Save the date</p>
                      <p>✓ Arquivos HD</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-mystical-purple bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-mystical-purple text-white px-4 py-2 rounded-full text-sm font-medium">
                      MAIS POPULAR
                    </div>
                  </div>
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-mystical-purple/30 to-romantic-pink/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Heart className="w-10 h-10 text-mystical-purple" />
                    </div>
                    <h4 className="text-2xl font-script text-mystical-purple mb-4">🖌️ Kit Personalizado</h4>
                    <p className="text-mystical-purple font-light mb-4">Design exclusivo, feito sob medida.</p>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-mystical-purple">R$ 140 - R$ 200</p>
                      <p className="text-sm text-mystical-purple/60">Entrega em 2-3 dias</p>
                    </div>
                    <div className="text-xs text-mystical-purple/80 space-y-2">
                      <p>✓ Design exclusivo</p>
                      <p>✓ 3 revisões incluídas</p>
                      <p>✓ Kit completo</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-frame-blue/30 bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-10 h-10 text-mystical-purple" />
                    </div>
                    <h4 className="text-2xl font-script text-mystical-purple mb-4">📄 Extras Digitais</h4>
                    <p className="text-mystical-purple font-light mb-4">Save the date, plaquinhas, etc.</p>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-mystical-purple">R$ 15 - R$ 30</p>
                      <p className="text-sm text-mystical-purple/60">cada item</p>
                    </div>
                    <div className="text-xs text-mystical-purple/80 space-y-2">
                      <p>✓ Plaquinhas</p>
                      <p>✓ Tags personalizadas</p>
                      <p>✓ Cardápios</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-soft-blue/20 rounded-xl p-6">
              <p className="text-mystical-purple font-light text-lg">
                🌸 Todos os kits digitais acompanham instruções detalhadas e estão prontos para emocionar em qualquer
                formato.
              </p>
            </div>
          </div>

          {/* Kits Físicos Melhorados */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">💌 Kits Físicos</h3>
              <div className="flex justify-center mb-4">
                <Package className="w-8 h-8 text-mystical-purple/40" />
              </div>
              <p className="text-mystical-purple font-light">Para quem quer tocar, sentir e guardar para sempre</p>
            </div>

            <div className="bg-gradient-to-r from-romantic-pink/15 to-soft-blue/15 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-2 border-frame-blue/30 bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-mystical-purple" />
                    </div>
                    <h4 className="text-lg font-script text-mystical-purple mb-3">💌 Kit Pronto</h4>
                    <p className="text-xs text-mystical-purple font-light mb-3">
                      Arte padrão + impressão + montagem artesanal (min. 20 unidades)
                    </p>
                    <p className="text-xl font-bold text-mystical-purple">R$ 8 - R$ 12</p>
                    <p className="text-xs text-mystical-purple/70">por unidade</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-mystical-purple bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-mystical-purple/30 to-romantic-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-mystical-purple" />
                    </div>
                    <h4 className="text-lg font-script text-mystical-purple mb-3">🌟 Kit Personalizado</h4>
                    <p className="text-xs text-mystical-purple font-light mb-3">
                      Design exclusivo + papelaria montada com requinte (min. 15 unidades)
                    </p>
                    <p className="text-xl font-bold text-mystical-purple">R$ 18 - R$ 28</p>
                    <p className="text-xs text-mystical-purple/70">por unidade</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-frame-blue/30 bg-white/90 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-romantic-pink/30 to-mystical-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-mystical-purple" />
                    </div>
                    <h4 className="text-lg font-script text-mystical-purple mb-3">📝 Votos Impressos</h4>
                    <p className="text-xs text-mystical-purple font-light mb-3">
                      Para emocionar no altar ou no coração.
                    </p>
                    <p className="text-xl font-bold text-mystical-purple">R$ 25 - R$ 35</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-white hover:shadow-2xl transition-all duration-300 hover:scale-105 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">COMBO</div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-mystical-purple" />
                    </div>
                    <h4 className="text-lg font-script text-mystical-purple mb-3">🎁 Combo Completo</h4>
                    <p className="text-xs text-mystical-purple font-light mb-3">
                      Kit digital + 15 convites físicos prontos
                    </p>
                    <p className="text-xl font-bold text-mystical-purple">R$ 280 - R$ 380</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-soft-blue/20 rounded-xl p-6">
              <div className="text-mystical-purple font-light space-y-3">
                <p className="text-lg">
                  🚚 <strong>Frete calculado após o pedido</strong> - Entrega em todo Brasil
                </p>
                <p className="text-lg">
                  🕊️ <strong>Acabamentos especiais:</strong> lacres de cera, envelopes artesanais e papel texturizado
                  disponíveis sob encomenda.
                </p>
              </div>
            </div>
          </div>

          {/* Ofertas de Lançamento Melhoradas */}
          <div className="bg-gradient-to-r from-romantic-pink/30 to-mystical-purple/20 rounded-2xl p-10 mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-romantic-pink/10 to-mystical-purple/10 animate-pulse"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-script text-mystical-purple mb-8">🎀 Ofertas de Lançamento</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/90 rounded-xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-script text-mystical-purple text-2xl mb-4">✨ Primeira Compra Digital</h4>
                  <p className="text-mystical-purple font-light mb-4 text-lg">15% OFF em qualquer kit digital</p>
                  <p className="text-sm text-mystical-purple/70 bg-green-50 rounded-lg p-2">
                    Válido até o final do mês - Use o código: PRIMEIRA15
                  </p>
                </div>
                <div className="bg-white/90 rounded-xl p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-script text-mystical-purple text-2xl mb-4">💝 Combo Especial</h4>
                  <p className="text-mystical-purple font-light mb-4 text-lg">
                    Kit Personalizado Digital + 20 físicos por R$ 320
                  </p>
                  <p className="text-sm text-mystical-purple/70 bg-purple-50 rounded-lg p-2">
                    Economia de até R$ 100 - Oferta limitada!
                  </p>
                </div>
              </div>
            </div>
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
              Preencha nosso formulário com carinho e escolha entre digital, impresso ou ambos
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

      {/* Depoimentos Melhorados */}
      <section className="py-24 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-script text-mystical-purple mb-6">Palavras de Clientes</h2>
            <div className="flex justify-center mb-6">
              <Star className="w-6 h-6 text-romantic-pink/60 animate-pulse" />
            </div>
            <p className="text-xl text-mystical-purple font-light">
              Histórias reais de momentos especiais que ajudamos a criar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Chorei só de abrir o PDF. Cada detalhe estava perfeito, exatamente como sonhei!",
                author: "Juliana & Beto",
                event: "Casamento Digital",
                rating: 5,
                image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop&crop=face",
              },
              {
                quote: "Os convites impressos ficaram lindos, papel de qualidade excepcional. Todos elogiaram!",
                author: "Clara",
                event: "Chá de Bebê Impresso",
                rating: 5,
                image: "https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=100&h=100&fit=crop&crop=face",
              },
              {
                quote: "Pedi digital e impresso, valeu cada centavo. Atendimento impecável do início ao fim.",
                author: "Mariana & Léo",
                event: "Noivado Combo",
                rating: 5,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-frame-blue/30 bg-white/80 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 border-4 border-romantic-pink/30">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg font-light text-mystical-purple mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-lg text-mystical-purple font-script">– {testimonial.author}</p>
                  <p className="text-sm text-mystical-purple/70 mt-2">{testimonial.event}</p>
                </CardContent>
              </Card>
            ))}
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
            href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os kits de papelaria digital e impressa."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-6 rounded-full text-xl font-light shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Package className="mr-3 w-6 h-6" />
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
