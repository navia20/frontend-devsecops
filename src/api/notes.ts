// Simulación de API para notas personales
export async function crearNotaApi(texto: string, userId: number) {
  const res = await fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ texto, userId })
  });
  const data = await res.json();
  return data;
}

export async function eliminarNotaApi(id: number) {
  const res = await fetch(`http://localhost:3000/notes?id=${id}`, {
    method: 'DELETE',
  })
  const data = await res.json()
  return data
}

export async function listarNotasApi(userId: number) {
  const res = await fetch(`http://localhost:3000/notes?userId=${userId}`)
  const data = await res.json()
  return data
}
