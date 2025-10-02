import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card.jsx"
import { Users, Target, Heart } from "lucide-react"

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-12 text-primary animate-fade-in">Sobre a Academia Nintai</h1>

      <section className="mb-16 animate-fade-in animate-delay-100">
        <Card className="p-8 shadow-lg">
          <CardContent className="text-lg leading-relaxed">
            <p className="mb-6">
              A Academia Nintai foi fundada com o propósito de promover as artes marciais como uma ferramenta de
              desenvolvimento pessoal, físico e mental. Nosso nome, <strong className="text-primary">"Nintai"</strong>, significa <strong className="text-primary">"perseverança"</strong> em japonês,
              refletindo nossa filosofia de superação e dedicação.
            </p>
            <p>
              Especializados em Karatê e Kickboxing, oferecemos treinamento de alta qualidade para todas as idades e
              níveis de experiência. Nossa metodologia combina técnicas tradicionais com abordagens modernas de
              ensino.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="animate-fade-in animate-delay-200">
          <h2 className="text-3xl font-bold mb-6 text-primary">Nossa Filosofia</h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Desenvolvimento integral do praticante
            </li>
            <li className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              Respeito e disciplina como base
            </li>
            <li className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Superação de limites pessoais
            </li>
            <li className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              Formação de caráter e valores
            </li>
          </ul>
        </div>

        <div className="animate-fade-in animate-delay-300">
          <h2 className="text-3xl font-bold mb-6 text-primary">Modalidades</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Karatê Tradicional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ensino baseado nos fundamentos do Karatê Shotokan, com foco em kata, kumite e autodefesa.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Kickboxing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Treinamento intensivo combinando técnicas de boxe e chutes, ideal para condicionamento físico e autodefesa.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-16 animate-fade-in animate-delay-400">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Nossa Equipe</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="text-center p-6">
            <CardHeader>
              <Users className="w-20 h-20 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Sensei Principal</CardTitle>
              <CardDescription className="text-lg">Faixa Preta 5º Dan</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mais de 20 anos de experiência em artes marciais, com participação em competições nacionais e internacionais.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardHeader>
              <Users className="w-20 h-20 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Instrutor de Kickboxing</CardTitle>
              <CardDescription className="text-lg">Especialista em Condicionamento</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Formação em Educação Física e especialização em artes marciais, com foco em preparação física e técnica.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default About
