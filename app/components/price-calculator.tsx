"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, Sparkles } from "lucide-react"

interface ExtrasOption {
  id: string
  name: string
  price: number
  category: string
}

export default function PriceCalculator() {
  const [kitType, setKitType] = useState("")
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [selectedCombo, setSelectedCombo] = useState("")

  const kitPrices = {
    pronto: 59.9,
    personalizado: 119.9,
    "personalizado-promo": 79.9,
  }

  const extras: ExtrasOption[] = [
    { id: "save-date", name: "Save the Date", price: 25, category: "comunicacao" },
    { id: "save-date-animated", name: "Save the Date Animado", price: 35, category: "comunicacao" },
    { id: "plaquinhas", name: "Plaquinhas Decorativas", price: 20, category: "decoracao" },
    { id: "tags", name: "Tags Personalizadas", price: 18, category: "decoracao" },
    { id: "menu", name: "Menu Digital", price: 35, category: "comunicacao" },
    { id: "checklist", name: "Checklist da Noiva", price: 25, category: "planejamento" },
    { id: "timeline", name: "Timeline do Dia", price: 30, category: "planejamento" },
    { id: "jornal", name: "Jornal dos Noivos", price: 89, category: "premium" },
  ]

  const combos = [
    { id: "festa", name: "Combo Festa", price: 55, items: ["plaquinhas", "timeline", "tags"], savings: 10 },
    { id: "comunicacao", name: "Combo Comunicação", price: 65, items: ["save-date", "menu"], savings: 15 },
    {
      id: "completo",
      name: "Combo Completo",
      price: 120,
      items: ["save-date", "plaquinhas", "tags", "menu", "timeline", "checklist"],
      savings: 20,
    },
  ]

  const calculateTotal = () => {
    let total = 0

    // Kit principal
    if (kitType) {
      total += kitPrices[kitType as keyof typeof kitPrices]
    }

    // Combo selecionado
    if (selectedCombo) {
      const combo = combos.find((c) => c.id === selectedCombo)
      if (combo) {
        total += combo.price
        return total
      }
    }

    // Extras individuais
    selectedExtras.forEach((extraId) => {
      const extra = extras.find((e) => e.id === extraId)
      if (extra) {
        total += extra.price
      }
    })

    return total
  }

  const handleExtraToggle = (extraId: string) => {
    if (selectedCombo) return // Não permite selecionar extras individuais se combo estiver selecionado

    setSelectedExtras((prev) => (prev.includes(extraId) ? prev.filter((id) => id !== extraId) : [...prev, extraId]))
  }

  const handleComboSelect = (comboId: string) => {
    if (comboId === selectedCombo) {
      setSelectedCombo("")
      setSelectedExtras([])
    } else {
      setSelectedCombo(comboId)
      setSelectedExtras([])
    }
  }

  const getSavings = () => {
    if (selectedCombo) {
      const combo = combos.find((c) => c.id === selectedCombo)
      return combo?.savings || 0
    }
    return 0
  }

  return (
    <Card className="border-2 border-mystical-purple/20 bg-white/90 backdrop-blur-sm max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-6 h-6 text-mystical-purple mr-3" />
            <h3 className="text-2xl font-script text-mystical-purple">Calculadora de Preços</h3>
            <Calculator className="w-6 h-6 text-mystical-purple ml-3" />
          </div>
          <p className="text-mystical-purple font-light">
            Monte seu orçamento personalizado e veja quanto vai economizar
          </p>
        </div>

        <div className="space-y-6">
          {/* Seleção do Kit Principal */}
          <div>
            <label className="block text-mystical-purple font-light mb-3">1. Escolha seu kit principal: *</label>
            <Select value={kitType} onValueChange={setKitType}>
              <SelectTrigger className="border-mystical-purple/30 focus:border-mystical-purple">
                <SelectValue placeholder="Selecione o tipo de kit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pronto">Kit Pronto - R$ 59,90</SelectItem>
                <SelectItem value="personalizado-promo">
                  Kit Personalizado (PROMOÇÃO) - R$ 79,90
                  <span className="text-xs text-red-600 block">Era R$ 119,90</span>
                </SelectItem>
                <SelectItem value="personalizado">Kit Personalizado - R$ 119,90</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {kitType && (
            <>
              {/* Combos */}
              <div>
                <label className="block text-mystical-purple font-light mb-3">2. Ou escolha um combo (opcional):</label>
                <div className="space-y-3">
                  {combos.map((combo) => (
                    <div
                      key={combo.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedCombo === combo.id
                          ? "border-mystical-purple bg-mystical-purple/10"
                          : "border-mystical-purple/20 hover:bg-romantic-pink/10"
                      }`}
                      onClick={() => handleComboSelect(combo.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-script text-mystical-purple">{combo.name}</h4>
                          <p className="text-sm text-mystical-purple/70">{combo.items.length} itens incluídos</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-mystical-purple">R$ {combo.price.toFixed(2)}</p>
                          <p className="text-xs text-green-600">Economia: R$ {combo.savings}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras Individuais */}
              <div>
                <label className="block text-mystical-purple font-light mb-3">3. Ou adicione extras individuais:</label>
                {selectedCombo && (
                  <p className="text-sm text-mystical-purple/60 mb-3 italic">(Desativado - combo selecionado)</p>
                )}
                <div className="grid md:grid-cols-2 gap-3">
                  {extras.map((extra) => (
                    <div
                      key={extra.id}
                      className={`flex items-center space-x-3 p-3 border rounded-lg ${
                        selectedCombo ? "opacity-50 cursor-not-allowed" : "hover:bg-romantic-pink/10 cursor-pointer"
                      }`}
                    >
                      <Checkbox
                        checked={selectedExtras.includes(extra.id)}
                        onCheckedChange={() => handleExtraToggle(extra.id)}
                        disabled={!!selectedCombo}
                        className="data-[state=checked]:bg-mystical-purple"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-mystical-purple">{extra.name}</p>
                        <p className="text-xs text-mystical-purple/60">R$ {extra.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Resumo do Orçamento */}
        {kitType && (
          <div className="mt-8 p-6 bg-gradient-to-r from-romantic-pink/10 to-mystical-purple/10 rounded-lg">
            <h4 className="font-script text-mystical-purple text-lg mb-4 text-center">💰 Resumo do Orçamento</h4>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-mystical-purple">Kit Principal:</span>
                <span className="text-mystical-purple font-medium">
                  R$ {kitPrices[kitType as keyof typeof kitPrices].toFixed(2)}
                </span>
              </div>

              {selectedCombo && (
                <div className="flex justify-between">
                  <span className="text-mystical-purple">Combo Selecionado:</span>
                  <span className="text-mystical-purple font-medium">
                    R$ {combos.find((c) => c.id === selectedCombo)?.price.toFixed(2)}
                  </span>
                </div>
              )}

              {selectedExtras.length > 0 && !selectedCombo && (
                <div className="flex justify-between">
                  <span className="text-mystical-purple">Extras ({selectedExtras.length}):</span>
                  <span className="text-mystical-purple font-medium">
                    R${" "}
                    {selectedExtras
                      .reduce((sum, extraId) => {
                        const extra = extras.find((e) => e.id === extraId)
                        return sum + (extra?.price || 0)
                      }, 0)
                      .toFixed(2)}
                  </span>
                </div>
              )}

              {getSavings() > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Economia:</span>
                  <span className="font-medium">- R$ {getSavings().toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="border-t border-mystical-purple/20 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-script text-mystical-purple">Total:</span>
                <span className="text-3xl font-bold text-mystical-purple">R$ {calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1 bg-mystical-purple hover:bg-mystical-purple/90 text-white rounded-full"
                onClick={() => {
                  // Redirecionar para formulário com seleções preenchidas
                  window.location.href = "/#formulario"
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Fazer Pedido
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-mystical-purple text-mystical-purple hover:bg-mystical-purple hover:text-white bg-transparent rounded-full"
                onClick={() => {
                  // Limpar calculadora
                  setKitType("")
                  setSelectedExtras([])
                  setSelectedCombo("")
                }}
              >
                Recalcular
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
