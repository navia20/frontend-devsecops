import { useState } from 'react'
import { loginApi } from '../api/auth'

interface LoginProps {
  onLogin?: (usuario: string, userId: number) => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const res = await loginApi({ usuario, contrasena })
    setLoading(false)
    if (res.success) {
      if (onLogin) onLogin(res.user.username, res.user.id)
    } else {
      setError(res.error || 'Error desconocido')
    }
  }

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="usuario"
            placeholder="Usuario"
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            required
            className="login-input"
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={e => setContrasena(e.target.value)}
            required
            className="login-input"
            disabled={loading}
          />
        </div>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
      <p><small>Usuario: admin, Contraseña: 123456</small></p>
      <p><small>Usuario: test, Contraseña: 1234</small></p>
    </div>
  )
}

export default Login
