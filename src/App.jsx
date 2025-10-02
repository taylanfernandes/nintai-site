import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube,
  MessageCircle,
  Upload,
  Users,
  Trophy,
  Target,
  Heart,
  Star
} from 'lucide-react'
import GoogleMap from './components/GoogleMap.jsx'
import SocialMedia from './components/SocialMedia.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import './App.css'

// Importar as imagens geradas
import bannerImage from './assets/nintai_banner.png'
import karateTraining from './assets/nintai_karate_training.png'
import kickboxingTraining from './assets/nintai_kickboxing_training.png'
import championshipImage from './assets/nintai_championship.png'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [uploadFiles, setUploadFiles] = useState([])

  const navigation = [
    { name: 'Início', href: 'home' },
    { name: 'Sobre', href: 'about' },
    { name: 'Galeria', href: 'gallery' },
    { name: 'Como Chegar', href: 'location' },
    { name: 'Modalidades', href: 'modalidades' },
    //{ name: 'Enviar Imagens', href: 'upload' },
  ]

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    setUploadFiles(prev => [...prev, ...files])
  }

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            NINTAI
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Academia de Artes Marciais - Karatê e Kickboxing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
   
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" 
              onClick={() => window.open('https://wa.me/5545999321184?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20na%20Academia%20Nintai.', '_blank')}>
              Agende sua Aula Experimental
            </Button>

            <Button size="lg" className="bg-black text-white hover:bg-black-100">
              Conheça Nossa Academia
            </Button>
          </div>
        </div>
      </section>

      {/* Modalidades Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nossas Modalidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${karateTraining})` }} />
              <CardHeader>
                <CardTitle className="text-2xl">Karatê</CardTitle>
                <CardDescription>
                  Desenvolva disciplina, concentração e técnicas tradicionais do Karatê. 
                  Aulas para todas as idades e níveis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Tradicional</Badge>
                  <Badge variant="secondary">Disciplina</Badge>
                  <Badge variant="secondary">Autodefesa</Badge>
                </div>
                <Button className="w-full">Saiba Mais</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${kickboxingTraining})` }} />
              <CardHeader>
                <CardTitle className="text-2xl">Kickboxing</CardTitle>
                <CardDescription>
                  Treinamento intensivo que combina técnicas de boxe e chutes. 
                  Ideal para condicionamento físico e autodefesa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Cardio</Badge>
                  <Badge variant="secondary">Força</Badge>
                  <Badge variant="secondary">Técnica</Badge>
                </div>
                <Button className="w-full">Saiba Mais</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Por que Escolher a Nintai?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professores Qualificados</h3>
              <p className="text-muted-foreground">
                Equipe experiente com certificações internacionais e anos de experiência.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Campeonatos</h3>
              <p className="text-muted-foreground">
                Participação regular em competições regionais e nacionais.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ambiente Familiar</h3>
              <p className="text-muted-foreground">
                Atmosfera acolhedora e respeitosa para toda a família.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

  const AboutPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Sobre a Academia Nintai</h1>
        
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed mb-6">
            A Academia Nintai foi fundada com o propósito de promover as artes marciais como uma 
            ferramenta de desenvolvimento pessoal, físico e mental. Nosso nome, "Nintai", significa 
            "perseverança" em japonês, refletindo nossa filosofia de superação e dedicação.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Especializados em Karatê e Kickboxing, oferecemos treinamento de alta qualidade para 
            todas as idades e níveis de experiência. Nossa metodologia combina técnicas tradicionais 
            com abordagens modernas de ensino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Nossa Filosofia</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Desenvolvimento integral do praticante</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Respeito e disciplina como base</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Superação de limites pessoais</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>Formação de caráter e valores</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Modalidades</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Karatê Tradicional</CardTitle>
                  <CardDescription>
                    Ensino baseado nos fundamentos do Karatê Shotokan, com foco em kata, 
                    kumite e autodefesa.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kickboxing</CardTitle>
                  <CardDescription>
                    Treinamento intensivo combinando técnicas de boxe e chutes, 
                    ideal para condicionamento físico.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Nossa Equipe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sensei Principal</h3>
              <p className="text-muted-foreground mb-2">Faixa Preta 5º Dan</p>
              <p className="text-sm">
                Mais de 20 anos de experiência em artes marciais, 
                com participação em competições nacionais e internacionais.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instrutor de Kickboxing</h3>
              <p className="text-muted-foreground mb-2">Especialista em Condicionamento</p>
              <p className="text-sm">
                Formação em Educação Física e especialização em artes marciais, 
                com foco em preparação física e técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const GalleryPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Galeria</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Trophy className="w-6 h-6 text-primary" />
                Campeonatos
              </CardTitle>
              <CardDescription>
                Momentos especiais de nossas participações em competições
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-cover bg-center rounded-lg" 
                     style={{ backgroundImage: `url(${championshipImage})` }} />
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Star className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
              <Button className="w-full mt-4">Ver Todas as Fotos</Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Treinos
              </CardTitle>
              <CardDescription>
                Registro das nossas aulas e atividades diárias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-cover bg-center rounded-lg" 
                     style={{ backgroundImage: `url(${karateTraining})` }} />
                <div className="aspect-square bg-cover bg-center rounded-lg" 
                     style={{ backgroundImage: `url(${kickboxingTraining})` }} />
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <Target className="w-8 h-8 text-muted-foreground" />
                </div>
              </div>
              <Button className="w-full mt-4">Ver Todas as Fotos</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Vídeos em Destaque</CardTitle>
            <CardDescription>
              Confira alguns dos nossos melhores momentos em vídeo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Youtube className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Youtube className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Youtube className="w-12 h-12 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const LocationPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Como Chegar</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Endereço
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">Academia Nintai</p>
                <p className="text-muted-foreground">
                  Rua Pernambuco, 344<br />
                  Bairro Centro<br />
                  Cascavel - PR<br />
                  CEP: 
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contato@nintai.com.br</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horários de Funcionamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Segunda a Sexta</span>
                  <span className="font-semibold">06:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-semibold">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="font-semibold">08:00 - 12:00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">De Carro:</h3>
                <p className="text-muted-foreground">
                  Estacionamento gratuito disponível em frente à academia. 
                  Acesso fácil pela Avenida Principal.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Referência:</h3>
                <p className="text-muted-foreground">
                  Anexo a Academia Energize.
                  Em frente ao colégio adventista
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const UploadPage = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Enviar Imagens</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compartilhe Seus Momentos</CardTitle>
            <CardDescription>
              Pais e responsáveis podem enviar fotos e vídeos dos campeonatos e treinos. 
              Suas imagens podem ser publicadas em nossa galeria!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome do Responsável</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Nome do Aluno</label>
                <Input placeholder="Nome do aluno" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Categoria</label>
                <select className="w-full p-2 border border-input rounded-md">
                  <option value="">Selecione uma categoria</option>
                  <option value="campeonato">Campeonato</option>
                  <option value="treino">Treino</option>
                  <option value="evento">Evento Especial</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Descrição (opcional)</label>
                <Textarea 
                  placeholder="Conte-nos sobre o momento capturado na foto/vídeo..."
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Arquivos</label>
                <div className="border-2 border-dashed border-input rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Arraste e solte seus arquivos aqui ou clique para selecionar
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => document.getElementById('file-upload').click()}
                  >
                    Selecionar Arquivos
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Formatos aceitos: JPG, PNG, MP4, MOV (máx. 10MB por arquivo)
                  </p>
                </div>
                
                {uploadFiles.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Arquivos selecionados:</h4>
                    <div className="space-y-2">
                      {uploadFiles.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                          <span className="text-sm">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setUploadFiles(prev => prev.filter((_, i) => i !== index))}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-start gap-2">
                <input type="checkbox" id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  Autorizo o uso das imagens/vídeos enviados para divulgação da academia 
                  em redes sociais e materiais promocionais.
                </label>
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Enviar Arquivos
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Dicas para Melhores Fotos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Qualidade da Imagem</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use boa iluminação</li>
                  <li>• Evite fotos tremidas</li>
                  <li>• Prefira resolução alta</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Momentos Ideais</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Técnicas sendo executadas</li>
                  <li>• Momentos de vitória</li>
                  <li>• Interação entre alunos</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const ModalidadesPages = () => (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Modalidades</h1>
        <div href='./pages/Modalidades.jsf'></div>

         <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Karatê</CardTitle>
              <CardDescription>
                Pais e responsáveis podem enviar fotos e vídeos dos campeonatos e treinos. 
                Suas imagens podem ser publicadas em nossa galeria!
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Kickboxing</CardTitle>
              <CardDescription>
                Pais e responsáveis podem enviar fotos e vídeos dos campeonatos e treinos. 
                Suas imagens podem ser publicadas em nossa galeria!
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />
      case 'about': return <AboutPage />
      case 'gallery': return <GalleryPage />
      case 'location': return <LocationPage />
      case 'modalidades': return <ModalidadesPages />
      case 'upload': return <UploadPage />
      default: return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">NINTAI</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setCurrentPage(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    currentPage === item.href ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            {/* WhatsApp Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                size="sm" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://wa.me/5545999321184', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setCurrentPage(item.href)
                    setMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.href 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                size="sm" 
                className="w-full bg-green-600 hover:bg-green-700 mt-4"
                onClick={() => window.open('https://wa.me/5545999321184', '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NINTAI</h3>
              <p className="text-muted-foreground text-sm">
                Academia de Artes Marciais especializada em Karatê e Kickboxing. 
                Desenvolvendo disciplina, força e caráter.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@nintai.com.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Rua Pernambuco, 344</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Horários</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Seg-Sex: 06:00 - 22:00</p>
                <p>Sábado: 08:00 - 18:00</p>
                <p>Domingo: 08:00 - 12:00</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <SocialMedia size="sm" />
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Academia Nintai. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  )
}

export default App
