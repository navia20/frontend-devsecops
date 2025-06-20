// Llamada real al backend para login
export async function loginApi({ usuario, contrasena }: { usuario: string; contrasena: string }) {
  const res = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: usuario, password: contrasena })
  });
  const data = await res.json();
  return data;
}
