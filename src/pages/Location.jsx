import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card.jsx"
import { Phone, Mail } from "lucide-react"
import GoogleMap from "../components/GoogleMap.jsx"

const Location = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-12 text-primary animate-fade-in">Comoddd Chegar</h1>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="animate-fade-in animate-delay-100">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Endereço</CardTitle>
              <CardDescription>Visite-nos em nossa localização</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Academia Nintai</p>
              <p className="text-muted-foreground">Rua Pernambuco, 344</p>
              <p className="text-muted-foreground">Bairro Centro, Cascavel - PR</p>
              <p className="text-muted-foreground">CEP: 01234-567</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contato</CardTitle>
              <CardDescription>Fale conosco para mais informações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <p>(45) 99932-1184</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <p>contato@nintai.com.br</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="animate-fade-in animate-delay-200">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Localização no Mapa</CardTitle>
              <CardDescription>
                Encontre-nos facilmente usando o mapa abaixo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GoogleMap address="Rua Pernambuco, 344, Cascavel - PR" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instruções de Chegada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Estamos localizados em uma área de fácil acesso, próximo à estação de metrô "Luta Livre" (linha Laranja).
                Para quem vem de carro, há estacionamento conveniado a 50 metros da academia.
              </p>
              <p className="text-muted-foreground">
                Linhas de ônibus que passam próximo: 123-A, 456-B.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Location
