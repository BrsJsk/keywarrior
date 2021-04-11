import { initializeEngine } from '../../game'
import { Score } from './Score'

export const Guest = () => {
  return (
    <div>
      <h1 className="auth-status">Guest</h1>
      <button onClick={initializeEngine}>Play!</button>
      <br />
      <Score />
    </div>
  )
}
