import { PlayingStatus } from '../components/PlayingStatus'
import { Score } from '../components/Score'

export const Guest = () => {
  return (
    <div>
      <h1 className="auth-status">Guest</h1>
      <PlayingStatus />
      <br />
      <Score />
    </div>
  )
}
