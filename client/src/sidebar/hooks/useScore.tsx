import { useEffect, useState } from 'react'
import { getScore$ } from '../../game/score'

export interface ScoreValue {
  score: number
}

export const useScore = (): ScoreValue => {
  const [score, setScore] = useState(0)

  useEffect(() => {
    const newScore = getScore$

    newScore.subscribe((newScore) => {
      setScore(newScore)
    })

    return () => {
      newScore.unsubscribe()
      newScore.complete()
    }
  }, [])

  return {
    score,
  }
}
