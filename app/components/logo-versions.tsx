"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Palette } from "lucide-react"
import Image from "next/image"

export default function LogoVersions() {
  const logoVersions = [
    {
      name: "Logo Principal",
      description: "Versão completa colorida",
      image: "/images/logo-final.png",
      usage: "Website, materiais principais",
    },
    {
      name: "Logo Branco",
      description: "Para fundos escuros",
      image: "/placeholder.svg?height=150&width=200&text=Logo+Branco",
      usage: "Fundos escuros, redes sociais",
    },
    {
      name: "Logo Monocromático",
      description: "Uma cor apenas",
      image: "/placeholder.svg?height=150&width=200&text=Logo+Mono",
      usage: "Impressões simples, carimbos",
    },
    {
      name: "Ícone Isolado",
      description: "Símbolo sem texto",
      image: "/placeholder.svg?height=150&width=150&text=Icone",
      usage: "Favicon, botões, aplicativos",
    },
    {
      name: "Versão Horizontal",
      description: "Logo em orientação horizontal",
      image: "/placeholder.svg?height=100&width=300&text=Logo+Horizontal",
      usage: "Assinaturas, cabeçalhos",
    },
    {
      name: "Versão Vertical",
      description: "Logo empilhado",
      image: "/placeholder.svg?height=200&width=150&text=Logo+Vertical",
      usage: "Cartões, materiais estreitos",
    },
  ]

  return (
    <Card className="border-mystical-purple/20 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Palette className="w-6 h-6 text-mystical-purple mr-3" />
            <h3 className="text-2xl font-script text-mystical-purple">Versões do Logo</h3>
            <Palette className="w-6 h-6 text-mystical-purple ml-3" />
          </div>
          <p className="text-mystical-purple font-light">Diferentes versões para todas as aplicações</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logoVersions.map((version, index) => (
            <Card key={index} className="border-frame-blue/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-soft-blue/10 rounded-lg p-4 mb-4 min-h-[120px] flex items-center justify-center">
                    <Image
                      src={version.image || "/placeholder.svg"}
                      alt={version.name}
                      width={200}
                      height={150}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <h4 className="font-script text-mystical-purple text-lg mb-2">{version.name}</h4>

                  <p className="text-sm text-mystical-purple/70 mb-2">{version.description}</p>

                  <div className="bg-romantic-pink/10 rounded-lg p-2 mb-4">
                    <p className="text-xs text-mystical-purple">
                      <strong>Uso:</strong> {version.usage}
                    </p>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent w-full"
                  >
                    <Download className="w-3 h-3 mr-2" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guia de uso */}
        <div className="mt-8 p-6 bg-gradient-to-r from-romantic-pink/10 to-mystical-purple/10 rounded-lg">
          <h4 className="font-script text-mystical-purple text-lg mb-4">📋 Guia de Aplicação</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-mystical-purple">
            <div>
              <h5 className="font-medium mb-2">✓ Faça:</h5>
              <ul className="space-y-1 text-mystical-purple/80">
                <li>• Use versão colorida como preferencial</li>
                <li>• Mantenha proporções originais</li>
                <li>• Use fundo claro para logo colorido</li>
                <li>• Prefira versão branca em fundos escuros</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-2">✗ Evite:</h5>
              <ul className="space-y-1 text-mystical-purple/80">
                <li>• Distorcer as proporções</li>
                <li>• Alterar as cores originais</li>
                <li>• Usar em fundos com pouco contraste</li>
                <li>• Aplicar efeitos ou filtros</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
