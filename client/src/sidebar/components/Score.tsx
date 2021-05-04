import { useScore } from '../hooks/useScore'
import Chip from '@material-ui/core/Chip'

export const Score = () => {
  const { score } = useScore()

  return (
    <Chip
      label={`Score: ${score}`}
      color="primary"
      variant="outlined"
      style={{ width: '100%' }}
    />
  )
}
