import { useState } from 'react'

interface Note {
  id: number
  texto: string
}

interface NotesListProps {
  notas: Note[]
  onDelete: (id: number) => void
}

const NotesList: React.FC<NotesListProps> = ({ notas, onDelete }) => {
  const [notaSeleccionada, setNotaSeleccionada] = useState<Note | null>(null)

  return (
    <div className="notes-list">
      <h2>Mis Notas</h2>
      {notas.length === 0 && <p>No hay notas aún.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notas.map(nota => (
          <li key={nota.id} className="note-item" style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{nota.texto}</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => setNotaSeleccionada(nota)} className="view-btn">Ver</button>
              <button onClick={() => onDelete(nota.id)} className="delete-btn">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      {notaSeleccionada && (
        <div className="modal-nota" style={{ background: '#222', color: '#fff', padding: 20, borderRadius: 8, marginTop: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', textAlign: 'left' }}>
          <h3>Nota seleccionada</h3>
          <p style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{notaSeleccionada.texto}</p>
          <button onClick={() => setNotaSeleccionada(null)} className="close-btn" style={{ marginTop: 12 }}>Cerrar</button>
        </div>
      )}
    </div>
  )
}

export default NotesList
