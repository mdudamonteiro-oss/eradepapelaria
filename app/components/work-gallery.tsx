"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const mockups = [
  {
    id: 1,
    title: "Casamento Eduarda & Emmanuel",
    style: "Noite Estrelada",
    description: "Design celestial com fundo azul marinho, estrelas douradas e tipografia elegante",
    image: "/images/convite-noite-estrelada.png",
    category: "casamento",
  },
  {
    id: 2,
    title: "Casamento Maria & Thiago",
    style: "Botânico Natural",
    description: "Folhagens em aquarela, flores delicadas e ícones interativos verdes",
    image: "/images/convite-botanico-maria.png",
    category: "casamento",
  },
  {
    id: 3,
    title: "Casamento Franciele & Hugo",
    style: "Minimalista Botânico",
    description: "Eucalipto em tons suaves, tipografia moderna e design clean",
    image: "/images/convite-botanico-franciele.png",
    category: "casamento",
  },
  {
    id: 4,
    title: "Chá de Bebê Delicado",
    style: "Botânico Natural",
    description: "Design suave com elementos naturais para celebrar a chegada do bebê",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=500&fit=crop&crop=center",
    category: "cha-bebe",
  },
  {
    id: 5,
    title: "Aniversário Clara",
    style: "Noite Estrelada",
    description: "30 anos de elegância com tema celestial",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=500&fit=crop&crop=center",
    category: "aniversario",
  },
  {
    id: 6,
    title: "Noivado Júlia & Pedro",
    style: "Minimalista Botânico",
    description: "Minimalismo sofisticado com toques naturais",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop&crop=center",
    category: "noivado",
  },
  {
    id: 7,
    title: "Casamento Lara & Bruno",
    style: "Romântico Clássico",
    description: "Romance em cada detalhe com elementos clássicos",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=500&fit=crop&crop=center",
    category: "casamento",
  },
  {
    id: 8,
    title: "Chá de Panela Fernanda",
    style: "Botânico Natural",
    description: "Aconchego entre amigas com elementos naturais",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&h=500&fit=crop&crop=center",
    category: "cha-panela",
  },
  {
    id: 9,
    title: "Aniversário 15 anos Isabela",
    style: "Noite Estrelada",
    description: "Festa dos sonhos com brilho e magia celestial",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=500&fit=crop&crop=center",
    category: "aniversario",
  },
]

export default function WorkGallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedWork, setSelectedWork] = useState<(typeof mockups)[0] | null>(null)

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "casamento", name: "Casamentos" },
    { id: "cha-bebe", name: "Chá de Bebê" },
    { id: "noivado", name: "Noivados" },
    { id: "aniversario", name: "Aniversários" },
    { id: "cha-panela", name: "Chá de Panela" },
  ]

  const filteredWorks =
    selectedCategory === "todos" ? mockups : mockups.filter((work) => work.category === selectedCategory)

  return (
    <>
      <div className="text-center mb-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full ${
                selectedCategory === category.id
                  ? "bg-mystical-purple text-white"
                  : "border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWorks.map((work, index) => (
          <Card
            key={work.id}
            className="group hover:shadow-xl transition-all duration-300 border-frame-blue/20 cursor-pointer"
            onClick={() => setSelectedWork(work)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={work.image || "/placeholder.svg"}
                  alt={work.title}
                  width={400}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-light">Clique para ver detalhes</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                {/* Badge do estilo */}
                <div className="absolute top-4 left-4">
                  <div className="bg-mystical-purple/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-light">{work.style}</span>
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

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-mystical-purple" />
              </button>
              <Image
                src={selectedWork.image || "/placeholder.svg"}
                alt={selectedWork.title}
                width={600}
                height={800}
                className="w-full h-96 object-cover rounded-t-lg"
                crossOrigin="anonymous"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-script text-mystical-purple mb-2">{selectedWork.title}</h3>
              <p className="text-romantic-pink mb-4">Estilo: {selectedWork.style}</p>
              <p className="text-mystical-purple font-light mb-6">{selectedWork.description}</p>

              <div className="bg-romantic-pink/10 rounded-lg p-4 mb-6">
                <h4 className="font-script text-mystical-purple mb-2">O que incluiu:</h4>
                <ul className="text-sm text-mystical-purple space-y-1">
                  <li>• Convite principal personalizado</li>
                  <li>• Save the date digital</li>
                  <li>• Lista de presentes</li>
                  <li>• Cardápio do evento</li>
                  <li>• Arquivos em alta resolução</li>
                </ul>
              </div>

              <Link href="/#formulario">
                <Button
                  className="w-full bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full"
                  onClick={() => setSelectedWork(null)}
                >
                  Quero um assim
                  <Heart className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
