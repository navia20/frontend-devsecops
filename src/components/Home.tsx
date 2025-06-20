import NoteForm from './NoteForm'
import NotesList from './NotesList'
import React from 'react'

interface Note {
  id: number
  texto: string
}

interface HomeProps {
  usuario: string
  notas: Note[]
  onAddNote: (nota: { id: number; texto: string }) => void
  onDeleteNote: (id: number) => void
  onLogout: () => void
  userId: number // Nuevo: para pasar el id de usuario
}

const Home: React.FC<HomeProps> = ({ usuario, notas, onAddNote, onDeleteNote, onLogout, userId }) => (
  <div className="main-container">
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 16 }}>
      <h1 style={{ margin: 0, fontSize: '2.5em' }}>Bienvenido, {usuario}!</h1>
      <button
        onClick={onLogout}
        className="logout-btn"
        style={{ height: 36, padding: '0 16px', borderRadius: 6, background: '#444', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}
      >
        Cerrar sesión
      </button>
    </div>
    <NoteForm onAdd={onAddNote} userId={userId} />
    <NotesList notas={notas} onDelete={onDeleteNote} />
  </div>
)

export default Home
