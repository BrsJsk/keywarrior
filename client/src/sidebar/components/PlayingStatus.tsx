import { useEffect, useState } from 'react'
import { initializeEngine, stopEngine } from '../../game'
import { Button } from '@material-ui/core';

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
       <Button color="primary" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Stop' : 'Play'}
      </Button>
    </div>
  )
}
