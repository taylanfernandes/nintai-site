import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Button } from "@/components/ui/button.jsx"
import { Trophy, Users } from "lucide-react"

const Modalidades = () => {
  return (
    <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Karatê</CardTitle>
              <CardDescription>
                Karatê ...
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Kickboxing</CardTitle>
              <CardDescription>
                Kickboxing ...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
    </div>
  )
}

export default Modalidades
