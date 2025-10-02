import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Button } from "@/components/ui/button.jsx"
import { Trophy, Users } from "lucide-react"

import championshipImage from "../assets/nintai_championship.png"
import karateTrainingImage from "../assets/nintai_karate_training.png"
import kickboxingTrainingImage from "../assets/nintai_kickboxing_training.png"

const Gallery = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-12 text-primary animate-fade-in">Nossa Galeria</h1>

      <section className="mb-16 animate-fade-in animate-delay-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Campeonatos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="gallery-item">
            <img src={championshipImage} alt="Campeonato de Karatê" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="gallery-overlay">
              <Trophy className="w-12 h-12" />
            </div>
            <CardContent className="p-4">
              <p className="font-semibold">Momentos de Glória</p>
            </CardContent>
          </Card>
          <Card className="gallery-item">
            <img src="https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Campeonato+2" alt="Campeonato de Kickboxing" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="gallery-overlay">
              <Trophy className="w-12 h-12" />
            </div>
            <CardContent className="p-4">
              <p className="font-semibold">Foco e Determinação</p>
            </CardContent>
          </Card>
          <Card className="gallery-item">
            <img src="https://via.placeholder.com/400x300/000000/FFFFFF?text=Campeonato+3" alt="Pódio" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="gallery-overlay">
              <Trophy className="w-12 h-12" />
            </div>
            <CardContent className="p-4">
              <p className="font-semibold">Vitória e Superação</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">Ver Todas as Fotos</Button>
        </div>
      </section>

      <section className="animate-fade-in animate-delay-200">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Treinos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="gallery-item">
            <img src={karateTrainingImage} alt="Treino de Karatê" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="gallery-overlay">
              <Users className="w-12 h-12" />
            </div>
            <CardContent className="p-4">
              <p className="font-semibold">Técnica e Disciplina</p>
            </CardContent>
          </Card>
          <Card className="gallery-item">
            <img src={kickboxingTrainingImage} alt="Treino de Kickboxing" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="gallery-overlay">
              <Users className="w-12 h-12" />
            </div>
            <CardContent className="p-4">
              <p className="font-semibold">Força e Agilidade</p>
            </CardContent>
          </Card>
          <Card className="gallery-item">
            <img src="https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=Treino+3" alt="Treino em Grupo" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="gallery-overlay">
              <Users className="w-12 h-12" />
            </div>
            <CardContent className="p-4">
              <p className="font-semibold">Companheirismo</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">Ver Todas as Fotos</Button>
        </div>
      </section>
    </div>
  )
}

export default Gallery
