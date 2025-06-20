// Simulación de API para notas personales
let notas: { id: number; texto: string }[] = []

export async function crearNotaApi(texto: string) {
  return new Promise<{ id: number; texto: string }>((resolve) => {
    setTimeout(() => {
      const nueva = { id: Date.now(), texto }
      notas.unshift(nueva)
      resolve(nueva)
    }, 300)
  })
}

export async function eliminarNotaApi(id: number) {
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      notas = notas.filter(nota => nota.id !== id)
      resolve({ success: true })
    }, 300)
  })
}

export async function listarNotasApi() {
  return new Promise<{ id: number; texto: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([...notas])
    }, 200)
  })
}
