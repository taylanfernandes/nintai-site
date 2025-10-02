import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const SocialMedia = ({ size = "default", showLabels = false }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/academianintai',
      color: 'hover:bg-pink-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/academianintai',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@academianintai',
      color: 'hover:bg-red-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/5545999321184',
      color: 'hover:bg-green-600'
    }
  ]

  const iconSize = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"
  const buttonSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "default"

  return (
    <div className={`flex ${showLabels ? 'flex-col space-y-2' : 'flex-row space-x-2'}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        
        return (
          <Button
            key={social.name}
            variant="ghost"
            size={buttonSize}
            className={`transition-colors ${social.color} ${showLabels ? 'justify-start' : 'p-2'}`}
            onClick={() => window.open(social.url, '_blank')}
            title={`Seguir no ${social.name}`}
          >
            <IconComponent className={iconSize} />
            {showLabels && <span className="ml-2">{social.name}</span>}
          </Button>
        )
      })}
    </div>
  )
}

export default SocialMedia
