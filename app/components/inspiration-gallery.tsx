"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Upload, X, Eye, Download, Camera, Lightbulb } from "lucide-react"
import Image from "next/image"

interface Inspiration {
  id: number
  title: string
  category: string
  image: string
  colors: string[]
  style: string
  description: string
  tags: string[]
}

export default function InspirationGallery() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [selectedInspiration, setSelectedInspiration] = useState<Inspiration | null>(null)

  const inspirations: Inspiration[] = [
    {
      id: 1,
      title: "Casamento Boho Chic",
      category: "casamento",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      colors: ["#D4A574", "#8B7355", "#F5F5DC", "#CD853F"],
      style: "Boho",
      description: "Tons terrosos e naturais com toques dourados",
      tags: ["terroso", "natural", "boho", "dourado"],
    },
    {
      id: 2,
      title: "Elegância Minimalista",
      category: "casamento",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400&h=300&fit=crop",
      colors: ["#FFFFFF", "#F8F8FF", "#E6E6FA", "#D8BFD8"],
      style: "Minimalista",
      description: "Simplicidade sofisticada em tons neutros",
      tags: ["minimalista", "elegante", "clean", "sofisticado"],
    },
    {
      id: 3,
      title: "Jardim Secreto",
      category: "casamento",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c0a4?w=400&h=300&fit=crop",
      colors: ["#228B22", "#90EE90", "#F0FFF0", "#98FB98"],
      style: "Botânico",
      description: "Folhagens exuberantes e verdes naturais",
      tags: ["botanico", "verde", "natural", "folhagem"],
    },
    {
      id: 4,
      title: "Noite Estrelada",
      category: "casamento",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      colors: ["#191970", "#FFD700", "#4169E1", "#000080"],
      style: "Celestial",
      description: "Azul profundo com detalhes dourados brilhantes",
      tags: ["celestial", "azul", "dourado", "noturno"],
    },
    {
      id: 5,
      title: "Chá Delicado",
      category: "cha-bebe",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      colors: ["#FFB6C1", "#FFC0CB", "#FFF0F5", "#FFEFD5"],
      style: "Delicado",
      description: "Rosa suave e tons pastel reconfortantes",
      tags: ["delicado", "rosa", "pastel", "suave"],
    },
    {
      id: 6,
      title: "Tropical Vibrante",
      category: "aniversario",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      colors: ["#FF6B35", "#F7931E", "#FFD23F", "#06FFA5"],
      style: "Tropical",
      description: "Cores vibrantes inspiradas no verão tropical",
      tags: ["tropical", "vibrante", "verão", "colorido"],
    },
  ]

  const categories = [
    { id: "todos", name: "Todas", count: inspirations.length },
    { id: "casamento", name: "Casamentos", count: inspirations.filter((i) => i.category === "casamento").length },
    { id: "cha-bebe", name: "Chá de Bebê", count: inspirations.filter((i) => i.category === "cha-bebe").length },
    { id: "aniversario", name: "Aniversários", count: inspirations.filter((i) => i.category === "aniversario").length },
  ]

  const filteredInspirations =
    selectedCategory === "todos" ? inspirations : inspirations.filter((i) => i.category === selectedCategory)

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <Lightbulb className="w-6 h-6 text-mystical-purple/40 mr-3" />
          <h2 className="text-3xl md:text-4xl font-script text-mystical-purple">Galeria de Inspirações</h2>
          <Lightbulb className="w-6 h-6 text-mystical-purple/40 ml-3" />
        </div>
        <p className="text-lg text-mystical-purple font-light mb-8 max-w-2xl mx-auto">
          Encontre inspirações visuais e paletas de cores para seu projeto perfeito
        </p>

        {/* Upload button */}
        <Button
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full px-6 py-3 mb-8"
        >
          <Upload className="w-4 h-4 mr-2" />
          Enviar Inspiração
        </Button>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
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
            {category.name} ({category.count})
          </Button>
        ))}
      </div>

      {/* Grid de Inspirações */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredInspirations.map((inspiration) => (
          <Card
            key={inspiration.id}
            className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-frame-blue/20 cursor-pointer"
            onClick={() => setSelectedInspiration(inspiration)}
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={inspiration.image || "/placeholder.svg"}
                  alt={inspiration.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-light">Clique para ver detalhes</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-script text-mystical-purple text-lg">{inspiration.title}</h3>
                  <span className="text-xs bg-mystical-purple/10 text-mystical-purple px-2 py-1 rounded-full">
                    {inspiration.style}
                  </span>
                </div>

                <p className="text-sm text-mystical-purple/70 mb-4">{inspiration.description}</p>

                {/* Paleta de cores */}
                <div className="flex space-x-2 mb-4">
                  {inspiration.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {inspiration.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-romantic-pink/20 text-mystical-purple px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal de Upload */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-script text-mystical-purple">Enviar Inspiração</h3>
                <button
                  onClick={() => setIsUploadModalOpen(false)}
                  className="text-mystical-purple/60 hover:text-mystical-purple"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="inspiration-image" className="text-mystical-purple font-light">
                    Enviar Imagem
                  </Label>
                  <div className="mt-2 border-2 border-dashed border-mystical-purple/30 rounded-lg p-8 text-center">
                    <Camera className="w-8 h-8 text-mystical-purple/40 mx-auto mb-4" />
                    <p className="text-mystical-purple/70 text-sm">Arraste uma imagem aqui ou clique para selecionar</p>
                    <Input type="file" accept="image/*" className="hidden" id="inspiration-image" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="inspiration-description" className="text-mystical-purple font-light">
                    Descrição da Inspiração
                  </Label>
                  <Input
                    id="inspiration-description"
                    placeholder="Descreva o que mais te chama atenção nesta inspiração..."
                    className="border-mystical-purple/30 focus:border-mystical-purple mt-2"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={() => setIsUploadModalOpen(false)}
                    variant="outline"
                    className="flex-1 border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent"
                  >
                    Cancelar
                  </Button>
                  <Button className="flex-1 bg-mystical-purple hover:bg-mystical-purple/90 text-white">Enviar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Modal de Detalhes */}
      {selectedInspiration && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-0">
              <div className="relative">
                <button
                  onClick={() => setSelectedInspiration(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-mystical-purple" />
                </button>
                <Image
                  src={selectedInspiration.image || "/placeholder.svg"}
                  alt={selectedInspiration.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-script text-mystical-purple">{selectedInspiration.title}</h3>
                  <span className="bg-mystical-purple/10 text-mystical-purple px-3 py-1 rounded-full text-sm">
                    {selectedInspiration.style}
                  </span>
                </div>

                <p className="text-mystical-purple font-light mb-6">{selectedInspiration.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-script text-mystical-purple mb-2">🎨 Paleta de Cores:</h4>
                    <div className="flex space-x-3">
                      {selectedInspiration.colors.map((color, index) => (
                        <div key={index} className="text-center">
                          <div
                            className="w-12 h-12 rounded-lg border-2 border-white shadow-md mb-1"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-xs text-mystical-purple/70 font-mono">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-script text-mystical-purple mb-2">🏷️ Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedInspiration.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-romantic-pink/20 text-mystical-purple px-3 py-1 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="flex-1 border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Salvar Cores
                  </Button>
                  <Button
                    className="flex-1 bg-mystical-purple hover:bg-mystical-purple/90 text-white"
                    onClick={() => {
                      setSelectedInspiration(null)
                      // Redirecionar para formulário com esta inspiração
                    }}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Usar Esta Inspiração
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
