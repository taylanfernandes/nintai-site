import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Trophy, Users, Heart } from 'lucide-react'

import bannerImage from '../assets/nintai_banner.png'
import karateTrainingImage from '../assets/nintai_karate_training.png'
import kickboxingTrainingImage from '../assets/nintai_kickboxing_training.png'

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center text-white hero-background"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-6xl font-bold mb-4 hero-title animate-fade-in">NINTAI</h1>
          <p className="text-2xl mb-8 hero-subtitle animate-fade-in animate-delay-200">Academia de Artes Marciais - Karatê e Kickboxing</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-400">
            <Button size="lg" className="btn-gradient-orange">Agende sua Aula Experimental</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">Conheça Nossa Academia</Button>
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section className="py-16 px-4 bg-gray-100 section-alternate">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary animate-fade-in">Nossas Modalidades</h2>
          <div className="grid md:grid-cols-2 gap-8 card-grid">
            <Card className="card-hover animate-slide-in-right">
              <CardHeader>
                <img src={karateTrainingImage} alt="Karatê Training" className="rounded-md mb-4 object-cover h-48 w-full" />
                <CardTitle className="text-2xl">Karatê</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Desenvolva disciplina, concentração e técnicas tradicionais do Karatê. Aulas para todas as idades e níveis.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <Badge variant="outline" className="badge-custom">Tradicional</Badge>
                  <Badge variant="outline" className="badge-custom">Disciplina</Badge>
                  <Badge variant="outline" className="badge-custom">Autodefesa</Badge>
                </div>
                <Button className="btn-gradient-orange">Saiba Mais</Button>
              </CardContent>
            </Card>
            <Card className="card-hover animate-slide-in-right animate-delay-100">
              <CardHeader>
                <img src={kickboxingTrainingImage} alt="Kickboxing Training" className="rounded-md mb-4 object-cover h-48 w-full" />
                <CardTitle className="text-2xl">Kickboxing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Treinamento intensivo que combina técnicas de boxe e chutes. Ideal para condicionamento físico e autodefesa.
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  <Badge variant="outline" className="badge-custom">Cardio</Badge>
                  <Badge variant="outline" className="badge-custom">Força</Badge>
                  <Badge variant="outline" className="badge-custom">Técnica</Badge>
                </div>
                <Button className="btn-gradient-orange">Saiba Mais</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Nintai Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-primary animate-fade-in">Por que Escolher a Nintai?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in animate-delay-200">
              <div className="feature-icon">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professores Qualificados</h3>
              <p className="text-muted-foreground">Equipe experiente com certificações internacionais e anos de experiência.</p>
            </div>
            <div className="animate-fade-in animate-delay-300">
              <div className="feature-icon">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ambiente Familiar</h3>
              <p className="text-muted-foreground">Atmosfera acolhedora e respeitosa para toda a família.</p>
            </div>
            <div className="animate-fade-in animate-delay-400">
              <div className="feature-icon">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento Completo</h3>
              <p className="text-muted-foreground">Foco não apenas na técnica, mas também em disciplina, respeito e valores.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
