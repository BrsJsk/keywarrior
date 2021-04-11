import { AuthType } from '../../domain/auth'

export interface AuthProps {
  onAuthenticate: (type: AuthType) => void
}

export const Auth = ({ onAuthenticate }: AuthProps) => {
  return (
    <div className="auth-options">
      <button onClick={() => onAuthenticate('logged')}>Login</button>
      <button>Register</button>
      <button onClick={() => onAuthenticate('guest')}>Guest</button>
    </div>
  )
}
