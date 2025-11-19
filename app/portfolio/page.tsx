import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Moon, Heart, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
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
            <Image
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
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-script text-mystical-purple mb-6">Nosso Portfólio</h1>
          <div className="flex justify-center space-x-2 mb-8">
            <Star className="w-5 h-5 text-romantic-pink/60" />
            <Heart className="w-5 h-5 text-romantic-pink/60" />
            <Star className="w-5 h-5 text-romantic-pink/60" />
          </div>
          <p className="text-lg md:text-xl text-mystical-purple font-light max-w-2xl mx-auto">
            Cada convite conta uma história única. Explore nossos kits e inspire-se para criar o seu momento especial.
          </p>
        </div>
      </section>

      {/* Kits Disponíveis */}
      <section className="py-16 px-4 bg-soft-blue/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">Nossos Kits</h2>
            <div className="flex justify-center">
              <Moon className="w-5 h-5 text-romantic-pink/60" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "Noite Estrelada",
                desc: "Azul marinho e dourado com brilho poético",
                color: "from-blue-900 to-blue-700",
                features: ["Convite principal", "Save the date", "Lista de presentes", "Cardápio"],
              },
              {
                name: "Verde & Folhagens",
                desc: "Tons naturais e design orgânico",
                color: "from-green-700 to-green-500",
                features: ["Convite principal", "Save the date", "Lista de presentes", "Cardápio"],
              },
              {
                name: "Neutro Puro",
                desc: "Minimalismo com suavidade",
                color: "from-gray-300 to-gray-100",
                features: ["Convite principal", "Save the date", "Lista de presentes", "Cardápio"],
              },
              {
                name: "Poético",
                desc: "Frases e texturas emocionais",
                color: "from-romantic-pink to-mystical-purple",
                features: ["Convite principal", "Save the date", "Lista de presentes", "Cardápio"],
              },
            ].map((kit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-frame-blue/20">
                <CardContent className="p-0">
                  <div className={`h-64 bg-gradient-to-br ${kit.color} rounded-t-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4">
                      <Star className="w-6 h-6 text-white/70" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="font-script text-mystical-purple text-lg mb-1">{kit.name}</h3>
                        <p className="text-sm text-mystical-purple">{kit.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-sm font-medium text-mystical-purple mb-3">Inclui:</h4>
                    <ul className="space-y-1 mb-4">
                      {kit.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-mystical-purple flex items-center">
                          <Star className="w-3 h-3 mr-2 text-romantic-pink/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white"
                    >
                      Escolher Este Kit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Trabalhos */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">Trabalhos Realizados</h2>
            <div className="flex justify-center space-x-2">
              <Star className="w-4 h-4 text-romantic-pink/60" />
              <Star className="w-4 h-4 text-romantic-pink/60" />
              <Star className="w-4 h-4 text-romantic-pink/60" />
            </div>
            <p className="text-mystical-purple font-light mt-4">
              Cada projeto é único e especial, criado com amor e atenção aos detalhes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Casamento Ana & João",
                style: "Noite Estrelada",
                color: "from-blue-900 to-blue-700",
                description: "Um convite que capturou a magia de uma noite sob as estrelas",
              },
              {
                title: "Chá de Bebê Marina",
                style: "Verde & Folhagens",
                color: "from-green-700 to-green-500",
                description: "Delicadeza natural para celebrar uma nova vida",
              },
              {
                title: "Aniversário 30 anos Clara",
                style: "Poético",
                color: "from-romantic-pink to-mystical-purple",
                description: "Elegância e poesia para uma data especial",
              },
              {
                title: "Noivado Júlia & Pedro",
                style: "Neutro Puro",
                color: "from-gray-300 to-gray-100",
                description: "Minimalismo sofisticado para um momento íntimo",
              },
              {
                title: "Casamento Lara & Bruno",
                style: "Poético",
                color: "from-romantic-pink to-mystical-purple",
                description: "Romance e delicadeza em cada detalhe",
              },
              {
                title: "Chá de Panela Fernanda",
                style: "Verde & Folhagens",
                color: "from-green-700 to-green-500",
                description: "Natureza e aconchego para reunir as amigas",
              },
            ].map((work, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-frame-blue/20">
                <CardContent className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${work.color} rounded-t-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Heart className="w-8 h-8 mx-auto mb-2 opacity-70" />
                        <p className="text-sm font-light opacity-90">Visualização em breve</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-script text-mystical-purple text-lg mb-1">{work.title}</h3>
                    <p className="text-sm text-romantic-pink mb-2">Estilo: {work.style}</p>
                    <p className="text-sm text-mystical-purple font-light">{work.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-b from-soft-blue/10 to-romantic-pink/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-6">Pronto para Criar o Seu?</h2>
          <p className="text-lg text-mystical-purple font-light mb-8 max-w-2xl mx-auto">
            Cada história merece ser contada de forma única. Vamos criar juntos o convite perfeito para o seu momento
            especial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#formulario">
              <Button
                size="lg"
                className="bg-mystical-purple hover:bg-mystical-purple/90 text-white px-8 py-4 rounded-full text-lg font-light"
              >
                Fazer Meu Pedido
                <Heart className="ml-2 w-5 h-5" />
              </Button>
            </Link>

            <Link href="/#contato">
              <Button
                variant="outline"
                size="lg"
                className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white px-8 py-4 rounded-full text-lg font-light"
              >
                Falar Conosco
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
          <Moon className="w-4 h-4 text-mystical-purple/40" />
          <Star className="w-4 h-4 text-mystical-purple/40" />
        </div>
        <p className="text-mystical-purple font-light italic">
          Era de Papelaria - Convites com alma, palavras com encanto.
        </p>
      </footer>
    </div>
  )
}
