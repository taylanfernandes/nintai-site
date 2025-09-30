import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  
  const whatsappNumber = "5511999999999"
  const message = "Olá! Gostaria de saber mais sobre as aulas na Academia Nintai."
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    setShowTooltip(false)
  }
  
  const handleCloseTooltip = () => {
    setShowTooltip(false)
  }
  
  if (!isVisible) return null
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip Card */}
      {showTooltip && (
        <Card className="absolute bottom-16 right-0 w-80 mb-2 shadow-lg animate-fade-in">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-600" />
                Academia Nintai
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={handleCloseTooltip}
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-xs">
              Olá! 👋 Tem alguma dúvida sobre nossas aulas de Karatê e Kickboxing? 
              Estamos aqui para ajudar!
            </CardDescription>
            <Button 
              size="sm" 
              className="w-full mt-3 bg-green-600 hover:bg-green-700"
              onClick={handleWhatsAppClick}
            >
              Iniciar Conversa
            </Button>
          </CardContent>
        </Card>
      )}
      
      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        onClick={handleWhatsAppClick}
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}

export default WhatsAppFloat
