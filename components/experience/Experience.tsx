import React from 'react'
import Entry from './Entry/Entry'
import styles from './Experience.module.scss'

export default function Experience() {
  return (
    <div className={styles.container}>
      <h3>Experience</h3>
      <Entry />
      <Entry />
      <Entry />
      <Entry />
    </div>
  )
}
