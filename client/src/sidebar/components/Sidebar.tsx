import { useState } from 'react'
import { AuthType } from '../../domain/auth'
import { Auth } from './Auth'
import { useHistory } from 'react-router-dom'

export const Sidebar = (): JSX.Element => {
  const [isAuth, setAuth] = useState<AuthType>()
  const history = useHistory()

  if (isAuth === 'guest') {
    history.push('guest')
  }

  if (isAuth === 'logged') {
    return <div>WELCOME BACK</div>
  }

  return (
    <div>
      <Auth onAuthenticate={setAuth} />
    </div>
  )
}
