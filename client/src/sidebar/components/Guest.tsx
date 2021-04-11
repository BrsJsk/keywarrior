import { PlayingStatus } from './PlayingStatus'
import { Score } from './Score'

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
