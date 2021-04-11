import { useState } from 'react'
import { AuthType } from '../../domain/types/auth'
import { Auth } from './Auth'
import { Guest } from './Guest'

export const Sidebar = (): JSX.Element => {
  const [isAuth, setAuth] = useState<AuthType>()

  if (isAuth === 'guest') {
    return <Guest />
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
