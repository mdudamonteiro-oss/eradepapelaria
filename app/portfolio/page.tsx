import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, ArrowLeft, Sparkles, Calendar, Camera, Tag, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Casamento Eduarda & Emmanuel",
      style: "Noite Estrelada",
      category: "Casamento",
      image: "/images/convite-noite-estrelada.png",
      description: "Design celestial com fundo azul marinho, estrelas douradas e tipografia elegante",
      items: ["Convite Principal", "Save the Date", "Lista de Presentes", "Cardápio", "Timeline"],
      colors: ["#191970", "#FFD700", "#4169E1"],
    },
    {
      id: 2,
      title: "Casamento Maria & Thiago",
      style: "Botânico Natural",
      category: "Casamento",
      image: "/images/convite-botanico-maria.png",
      description: "Folhagens em aquarela, flores delicadas e ícones interativos verdes",
      items: ["Convite Principal", "Save the Date", "Plaquinhas", "Tags", "Menu Digital"],
      colors: ["#228B22", "#90EE90", "#F0FFF0"],
    },
    {
      id: 3,
      title: "Casamento Franciele & Hugo",
      style: "Minimalista Botânico",
      category: "Casamento",
      image: "/images/convite-botanico-franciele.png",
      description: "Eucalipto em tons suaves, tipografia moderna e design clean",
      items: ["Convite Principal", "Save the Date", "Lista de Presentes", "Certificado"],
      colors: ["#8FBC8F", "#F5F5DC", "#DEB887"],
    },
  ]

  const kitStyles = [
    {
      name: "Noite Estrelada",
      description: "Azul marinho e dourado com brilho poético",
      gradient: "from-blue-900 to-blue-700",
      icon: "✨",
    },
    {
      name: "Botânico Natural",
      description: "Tons naturais e design orgânico",
      gradient: "from-green-700 to-green-500",
      icon: "🌿",
    },
    {
      name: "Minimalista Botânico",
      description: "Minimalismo com suavidade natural",
      gradient: "from-green-300 to-green-100",
      icon: "🍃",
    },
    {
      name: "Romântico Clássico",
      description: "Rosa suave e elegância atemporal",
      gradient: "from-pink-400 to-pink-200",
      icon: "💕",
    },
    {
      name: "Moderno Elegante",
      description: "Sofisticação contemporânea",
      gradient: "from-gray-600 to-gray-400",
      icon: "💎",
    },
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
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-script text-mystical-purple mb-6">Nosso Portfólio</h1>
          <div className="flex justify-center space-x-2 mb-8">
            <Star className="w-5 h-5 text-romantic-pink/60" />
            <Heart className="w-5 h-5 text-romantic-pink/60" />
            <Star className="w-5 h-5 text-romantic-pink/60" />
          </div>
          <p className="text-lg md:text-xl text-mystical-purple font-light max-w-2xl mx-auto">
            Cada convite conta uma história única. Explore nossos trabalhos e inspire-se para criar o seu momento
            especial.
          </p>
        </div>
      </section>

      {/* Trabalhos Realizados */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">Trabalhos Realizados</h2>
            <p className="text-mystical-purple font-light">Projetos reais criados com amor e dedicação</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-frame-blue/20"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={500}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      crossOrigin="anonymous"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-mystical-purple/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-xs font-light">{item.style}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-script text-mystical-purple text-lg">{item.title}</h3>
                      <span className="text-xs bg-romantic-pink/20 text-mystical-purple px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>

                    <p className="text-sm text-mystical-purple/70 mb-4">{item.description}</p>

                    {/* Paleta de cores */}
                    <div className="flex space-x-2 mb-4">
                      {item.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>

                    {/* Itens incluídos */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-mystical-purple mb-2">✓ Itens incluídos:</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.items.map((itemName, index) => (
                          <span
                            key={index}
                            className="text-xs bg-soft-blue/20 text-mystical-purple px-2 py-1 rounded-full"
                          >
                            {itemName}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/#formulario">
                      <Button
                        size="sm"
                        className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full font-light"
                      >
                        Quero um assim
                        <Heart className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estilos Disponíveis */}
      <section className="py-16 px-4 bg-soft-blue/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">Estilos Disponíveis</h2>
            <p className="text-mystical-purple font-light">Escolha o estilo que mais combina com seu evento</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {kitStyles.map((style, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-frame-blue/20">
                <CardContent className="p-0">
                  <div className={`h-32 bg-gradient-to-br ${style.gradient} rounded-t-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">{style.icon}</span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-script text-mystical-purple text-lg mb-2">{style.name}</h3>
                    <p className="text-sm text-mystical-purple/70 mb-4">{style.description}</p>
                    <Link href="/#formulario">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent rounded-full"
                      >
                        Escolher Este Estilo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Disponíveis */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-script text-mystical-purple mb-4">Extras Disponíveis</h2>
            <p className="text-mystical-purple font-light">Complemente seu kit com itens especiais</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Save the Date", price: "R$ 25", icon: Calendar, desc: "Anuncie a data com antecedência" },
              { name: "Plaquinhas", price: "R$ 20", icon: Camera, desc: "Para decoração e fotos" },
              { name: "Tags Personalizadas", price: "R$ 18", icon: Tag, desc: "Para lembrancinhas" },
              { name: "Menu Digital", price: "R$ 35", icon: FileText, desc: "Cardápio elegante" },
            ].map((extra, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-frame-blue/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-mystical-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <extra.icon className="w-8 h-8 text-mystical-purple" />
                  </div>
                  <h3 className="font-script text-mystical-purple text-lg mb-2">{extra.name}</h3>
                  <p className="text-2xl font-bold text-mystical-purple mb-2">{extra.price}</p>
                  <p className="text-sm text-mystical-purple/70 mb-4">{extra.desc}</p>
                  <Link href="/extras">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent rounded-full"
                    >
                      Ver Detalhes
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/extras">
              <Button className="bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full px-8 py-3">
                <Sparkles className="mr-2 w-5 h-5" />
                Ver Todos os Extras
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-b from-romantic-pink/10 to-mystical-purple/10">
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
                className="bg-mystical-purple hover:bg-mystical-purple/90 text-white px-8 py-4 rounded-full text-lg font-light shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
                Falar Conosco
                <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
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
