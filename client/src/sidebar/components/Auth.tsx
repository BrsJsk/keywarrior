import { AuthType } from '../../domain/auth'
import { Button } from '@material-ui/core';

export interface AuthProps {
  onAuthenticate: (type: AuthType) => void
}

export const Auth = ({ onAuthenticate }: AuthProps) => {
  return (
    <div className="auth-options">
      <Button color="primary" onClick={() => onAuthenticate('logged')}>Login</Button>
      <Button color="primary">Register</Button>
      <Button color="primary" onClick={() => onAuthenticate('guest')}>Guest</Button>
    </div>
  )
}
