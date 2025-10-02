import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card.jsx"
import { Input } from "@/components/ui/input.jsx"
import { Textarea } from "@/components/ui/textarea.jsx"
import { Button } from "@/components/ui/button.jsx"
import { Upload } from "lucide-react"

const UploadImages = () => {
  const [responsibleName, setResponsibleName] = useState('')
  const [email, setEmail] = useState('')
  const [studentName, setStudentName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState([])
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e) => {
    setFiles([...e.target.files])
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles([...e.dataTransfer.files])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de envio para um backend
    console.log({
      responsibleName,
      email,
      studentName,
      category,
      description,
      files
    })
    alert('Formulário enviado! (Funcionalidade de upload real requer backend)')
    // Reset form
    setResponsibleName('')
    setEmail('')
    setStudentName('')
    setCategory('')
    setDescription('')
    setFiles([])
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-center mb-12 text-primary animate-fade-in">Enviar Imagens</h1>

      <Card className="max-w-3xl mx-auto p-8 animate-fade-in animate-delay-100">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Compartilhe Seus Momentos</CardTitle>
          <CardDescription className="text-center">
            Pais e responsáveis podem enviar fotos e vídeos dos campeonatos e treinos. Suas imagens podem ser publicadas em nossa galeria!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="responsibleName" className="block text-sm font-medium text-gray-700 mb-1">Nome do Responsável</label>
                <Input
                  id="responsibleName"
                  type="text"
                  placeholder="Seu nome completo"
                  value={responsibleName}
                  onChange={(e) => setResponsibleName(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">Nome do Aluno</label>
              <Input
                id="studentName"
                type="text"
                placeholder="Nome do aluno"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 form-input"
              >
                <option value="">Selecione uma categoria</option>
                <option value="championship">Campeonato</option>
                <option value="training">Treino</option>
                <option value="special_event">Evento Especial</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descrição (opcional)</label>
              <Textarea
                id="description"
                placeholder="Conte-nos sobre o momento capturado na foto/vídeo..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-1">Arquivos</label>
              <div
                className={`mt-1 flex justify-center rounded-md border-2 border-dashed p-6 ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300'}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-medium text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                    >
                      <span>Arraste e solte seus arquivos aqui ou clique para selecionar</span>
                      <Input id="file-upload" name="file-upload" type="file" className="sr-only" multiple onChange={handleFileChange} />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF, MP4, MOV up to 10MB</p>
                  {files.length > 0 && (
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{files.length} arquivo(s) selecionado(s)</p>
                      <ul className="list-disc list-inside text-left">
                        {files.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full btn-gradient-orange">
              Enviar Imagens
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default UploadImages
