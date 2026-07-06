'use client'

import { useEffect } from 'react'
import styles from './progression-challenge.module.scss';

const { pc } = styles;

export default function McTrackerLoader() {
  useEffect(() => {
    import('./McTracker')
    import('./components/McMilestone')
    import('./components/McAchievements')
    import('./components/ProgressBar')
  }, [])

  return (
    <main className={pc}>
      <mc-tracker></mc-tracker>
    </main>
  )
}