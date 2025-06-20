import { useState, useEffect } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import { listarNotasApi, eliminarNotaApi } from './api/notes'

interface Note {
  id: number
  texto: string
}

function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState<{ username: string, id: number } | null>(null)
  const [notas, setNotas] = useState<Note[]>([])

  // Cargar notas al loguearse
  useEffect(() => {
    if (usuarioLogueado) {
      listarNotasApi(usuarioLogueado.id).then(res => {
        if (res.success && res.notes) setNotas(res.notes)
      })
    }
  }, [usuarioLogueado])

  const handleAddNote = (nota: { id: number; texto: string }) => {
    setNotas(prev => [nota, ...prev])
  }

  const handleDeleteNote = async (id: number) => {
    const res = await eliminarNotaApi(id)
    if (res.success) {
      setNotas(prev => prev.filter(nota => nota.id !== id))
    }
  }

  const handleLogout = () => {
    setUsuarioLogueado(null)
    setNotas([])
  }

  if (!usuarioLogueado) {
    return <Login onLogin={(username, id) => setUsuarioLogueado({ username, id })} />
  }

  return (
    <Home
      usuario={usuarioLogueado.username}
      notas={notas}
      onAddNote={handleAddNote}
      onDeleteNote={handleDeleteNote}
      onLogout={handleLogout}
      userId={usuarioLogueado.id}
    />
  )
}

export default App
