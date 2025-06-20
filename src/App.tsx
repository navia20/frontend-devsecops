import { useState } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

interface Note {
  id: number
  texto: string
}

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState<string | null>(null)
  const [notas, setNotas] = useState<Note[]>([])

  const handleAddNote = (texto: string) => {
    setNotas(prev => [
      { id: Date.now(), texto },
      ...prev
    ])
  }

  const handleDeleteNote = (id: number) => {
    setNotas(prev => prev.filter(nota => nota.id !== id))
  }

  const handleLogout = () => {
    setUsuarioLogueado(null)
    setNotas([])
  }

  if (!usuarioLogueado) {
    return <Login onLogin={setUsuarioLogueado} />
  }

  return (
    <Home
      usuario={usuarioLogueado}
      notas={notas}
      onAddNote={handleAddNote}
      onDeleteNote={handleDeleteNote}
      onLogout={handleLogout}
    />
  )
}

export default App
