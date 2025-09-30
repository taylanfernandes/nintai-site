import { useState } from 'react'
import { MapPin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const GoogleMap = ({ address = "Rua das Artes Marciais, 123, São Paulo - SP" }) => {
  const [mapLoaded, setMapLoaded] = useState(false)
  
  // Encode the address for Google Maps URL
  const encodedAddress = encodeURIComponent(address)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedAddress}`
  
  const handleOpenMaps = () => {
    window.open(googleMapsUrl, '_blank')
  }
  
  return (
    <div className="w-full">
      <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
        {!mapLoaded ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <MapPin className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Academia Nintai</h3>
            <p className="text-muted-foreground mb-4">{address}</p>
            <Button onClick={handleOpenMaps} className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Abrir no Google Maps
            </Button>
          </div>
        ) : (
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Academia Nintai"
          />
        )}
      </div>
      
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <Button 
          onClick={handleOpenMaps}
          className="flex items-center gap-2 flex-1"
        >
          <ExternalLink className="w-4 h-4" />
          Ver no Google Maps
        </Button>
        <Button 
          variant="outline"
          onClick={() => navigator.share && navigator.share({
            title: 'Academia Nintai',
            text: 'Localização da Academia Nintai',
            url: googleMapsUrl
          })}
          className="flex items-center gap-2 flex-1"
        >
          <MapPin className="w-4 h-4" />
          Compartilhar Localização
        </Button>
      </div>
    </div>
  )
}

export default GoogleMap
