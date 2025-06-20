// Simulación de API para login
export async function loginApi({ usuario, contrasena }: { usuario: string; contrasena: string }) {
  // Aquí iría la llamada real a fetch/axios, etc.
  // Por ahora, simulamos una respuesta del backend
  return new Promise<{ success: boolean; error?: string }>((resolve) => {
    setTimeout(() => {
      if (usuario === 'admin' && contrasena === '123456') {
        resolve({ success: true })
      } else {
        resolve({ success: false, error: 'Usuario o contraseña incorrectos.' })
      }
    }, 700)
  })
}
