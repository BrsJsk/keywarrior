import { AuthType } from '../../domain/types/auth'

export interface AuthProps {
  onAuthenticate: (type: AuthType) => void
}

export const Auth = ({ onAuthenticate }: AuthProps) => {
  return (
    <div>
      <button onClick={() => onAuthenticate('logged')}>Login</button>
      <button>Register</button>
      <button onClick={() => onAuthenticate('guest')}>Guest</button>
    </div>
  )
}
