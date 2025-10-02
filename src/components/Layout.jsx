import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx'
import { Menu, Phone, Mail, MapPin } from 'lucide-react'
import SocialMedia from './SocialMedia.jsx'
import WhatsAppFloat from './WhatsAppFloat.jsx'

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Como Chegar', path: '/como-chegar' },
    { name: 'Enviar Imagens', path: '/enviar-imagens' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b navbar-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            NINTAI
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button key={item.name} variant="ghost" asChild>
                <Link to={item.path} className="text-lg hover:text-primary transition-colors">
                  {item.name}
                </Link>
              </Button>
            ))}
            <Button className="btn-gradient-orange ml-4" onClick={() => window.open('https://wa.me/5545999321184?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20na%20Academia%20Nintai.', '_blank')}>
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 pt-8">
                {navItems.map((item) => (
                  <Button key={item.name} variant="ghost" asChild onClick={() => setIsMobileMenuOpen(false)}>
                    <Link to={item.path} className="text-xl hover:text-primary transition-colors">
                      {item.name}
                    </Link>
                  </Button>
                ))}
                <Button className="btn-gradient-orange mt-4" onClick={() => {
                  window.open('https://wa.me/5545999321184?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20na%20Academia%20Nintai.', '_blank')
                  setIsMobileMenuOpen(false)
                }}>
                  WhatsApp
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 footer-gradient">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4">NINTAI</h4>
            <p className="text-sm text-muted-foreground">
              Academia de Artes Marciais especializada em Karatê e Kickboxing. Desenvolvendo
              disciplina, força e caráter.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-primary" />
              <p>(11) 9999-9999</p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-primary" />
              <p>contato@nintai.com.br</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <p>Rua Pernambuco, 344</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horários</h4>
            <p>Seg-Sex: 06:00 - 22:00</p>
            <p>Sábado: 08:00 - 18:00</p>
            <p>Domingo: 08:00 - 12:00</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <SocialMedia size="sm" />
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Academia Nintai. Todos os direitos reservados.</p>
        </div>
      </footer>
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  )
}

export default Layout
