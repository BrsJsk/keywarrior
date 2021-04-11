import { useEffect, useState } from 'react'
import { initializeEngine, stopEngine } from '../../game'

export const PlayingStatus = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      initializeEngine()
    } else {
      stopEngine()
    }
  }, [isPlaying])
  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  )
}
