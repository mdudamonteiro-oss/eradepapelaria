"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, Copy, ExternalLink } from "lucide-react"

export default function FormSetupGuide() {
  const steps = [
    {
      title: "1. Abra seu Google Forms",
      description: "Acesse o formulário que você já criou no Google Forms",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe-W8xjvfPKe1DaL4REku8Xuhwfp7SUFsXu2ApKUvV-PG24LA/edit",
    },
    {
      title: "2. Inspecione cada campo",
      description: "Clique com botão direito em cada campo → 'Inspecionar elemento'",
    },
    {
      title: "3. Encontre os IDs",
      description: "Procure por 'entry.XXXXXXXX' no código HTML de cada campo",
    },
    {
      title: "4. Substitua no código",
      description: "Substitua os IDs no arquivo wizard-form.tsx",
    },
  ]

  const currentIds = {
    nome: "entry.2005620554",
    email: "entry.1045781291",
    telefone: "entry.1166974658",
    tipoEvento: "entry.839337160",
    dataEvento: "entry.1677686268",
    numeroConvidados: "entry.1065046570",
    tipoKit: "entry.1357633062",
    estiloPreferido: "entry.1404100235",
    observacoes: "entry.1166109665",
  }

  return (
    <Card className="border-orange-200 bg-orange-50">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <AlertCircle className="w-5 h-5 text-orange-600 mr-2" />
          <h3 className="text-lg font-semibold text-orange-800">Configuração Necessária</h3>
        </div>

        <p className="text-orange-700 mb-4">
          Para conectar o formulário wizard ao Google Forms, você precisa substituir os IDs dos campos:
        </p>

        <div className="space-y-3 mb-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h4 className="font-medium text-orange-800">{step.title}</h4>
                <p className="text-sm text-orange-700">{step.description}</p>
                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-800 text-sm flex items-center mt-1"
                  >
                    Abrir formulário <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4">
          <h4 className="font-medium text-orange-800 mb-2">IDs atuais (substitua pelos corretos):</h4>
          <div className="space-y-1 text-sm font-mono">
            {Object.entries(currentIds).map(([field, id]) => (
              <div key={field} className="flex justify-between items-center">
                <span className="text-orange-700">{field}:</span>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600">{id}</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(id)}
                    className="text-orange-600 hover:text-orange-800"
                  >
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 p-3 bg-orange-100 rounded-lg">
          <p className="text-xs text-orange-700">
            💡 <strong>Dica:</strong> Após substituir os IDs, teste o formulário para garantir que os dados estão
            chegando corretamente no Google Sheets.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
