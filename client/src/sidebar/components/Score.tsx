import { useScore } from '../hooks/useScore'

export const Score = () => {
  const { score } = useScore()
  return <div className="score-wrapper">Score: {score}</div>
}
