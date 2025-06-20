import { useState } from 'react'
import type { FormEvent } from 'react'

interface NoteFormProps {
  onAdd: (texto: string) => void
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [texto, setTexto] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (texto.trim()) {
      onAdd(texto)
      setTexto('')
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
