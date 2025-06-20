import { useState } from 'react'
import type { FormEvent } from 'react'
import { crearNotaApi } from '../api/notes'

interface NoteFormProps {
  onAdd: (nota: { id: number; texto: string }) => void
  userId: number
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd, userId }) => {
  const [texto, setTexto] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (texto.trim()) {
      const res = await crearNotaApi(texto, userId)
      if (res.success && res.note) {
        onAdd(res.note)
        setTexto('')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="note-form" style={{ marginBottom: 16 }}>
      <textarea
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Escribe una nota..."
        className="note-input"
        rows={5}
        style={{ width: '100%', resize: 'vertical', fontSize: '1.1em', marginBottom: 8 }}
      />
      <button type="submit" className="add-btn">Agregar</button>
    </form>
  )
}

export default NoteForm
