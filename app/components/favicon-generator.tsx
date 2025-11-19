"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Star } from "lucide-react"
import Image from "next/image"

export default function FaviconGenerator() {
  const faviconSizes = [
    { size: "16x16", name: "favicon-16x16.png" },
    { size: "32x32", name: "favicon-32x32.png" },
    { size: "48x48", name: "favicon-48x48.png" },
    { size: "64x64", name: "favicon-64x64.png" },
    { size: "128x128", name: "favicon-128x128.png" },
    { size: "192x192", name: "android-chrome-192x192.png" },
    { size: "512x512", name: "android-chrome-512x512.png" },
  ]

  return (
    <Card className="border-mystical-purple/20 bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-script text-mystical-purple mb-4">Favicon Personalizado</h3>
          <div className="flex justify-center space-x-2 mb-4">
            <Star className="w-4 h-4 text-romantic-pink/60" />
            <Star className="w-4 h-4 text-romantic-pink/60" />
            <Star className="w-4 h-4 text-romantic-pink/60" />
          </div>
        </div>

        {/* Preview do favicon */}
        <div className="bg-soft-blue/10 rounded-lg p-6 mb-6 text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Image
                src="/images/logo-final.png"
                alt="Logo Era de Papelaria"
                width={48}
                height={36}
                className="max-w-12 max-h-9"
              />
            </div>
            <div className="text-left">
              <p className="font-script text-mystical-purple text-lg">Era de Papelaria</p>
              <p className="text-sm text-mystical-purple/70">Favicon Preview</p>
            </div>
          </div>
          <p className="text-sm text-mystical-purple/70">Versão simplificada do logo otimizada para favicon</p>
        </div>

        {/* Lista de tamanhos */}
        <div className="space-y-4">
          <h4 className="font-script text-mystical-purple text-lg">Tamanhos necessários:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {faviconSizes.map((favicon, index) => (
              <div key={index} className="bg-romantic-pink/10 rounded-lg p-3 text-center">
                <div className="text-mystical-purple font-medium text-sm">{favicon.size}</div>
                <div className="text-xs text-mystical-purple/70 mt-1">{favicon.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Instruções */}
        <div className="mt-6 p-4 bg-mystical-purple/5 rounded-lg">
          <h5 className="font-medium text-mystical-purple mb-2">📋 Para implementar:</h5>
          <ol className="text-sm text-mystical-purple/80 space-y-1 list-decimal list-inside">
            <li>
              Salve cada tamanho na pasta <code className="bg-white/50 px-1 rounded">public/</code>
            </li>
            <li>Adicione as meta tags no layout.tsx</li>
            <li>Teste em diferentes navegadores</li>
            <li>Verifique a aparência em abas</li>
          </ol>
        </div>

        <div className="text-center mt-6">
          <Button
            variant="outline"
            className="border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent rounded-full"
          >
            <Download className="w-4 h-4 mr-2" />
            Gerar Favicons
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
