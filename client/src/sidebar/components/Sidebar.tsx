import { useState } from 'react'
import { AuthType } from '../../domain/types/auth'
import { Auth } from './Auth'

export const Sidebar = () => {
  const [isAuth, setAuth] = useState<AuthType>()

  if (!isAuth) {
    return (
      <div>
        <Auth onAuthenticate={setAuth} />
      </div>
    )
  }

  if (isAuth === 'guest') {
    return <div>GUESTT</div>
  }

  if (isAuth === 'logged') {
    return <div>WELCOME BACK</div>
  }
}
