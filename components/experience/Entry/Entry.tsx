import React from 'react'
import styles from './Entry.module.scss'

export default function Entry() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Software Developer
        <span className={styles.rating}>Rating: ⭐⭐⭐⭐⭐</span>
      </div>
      <span className={styles.companyName}>Glassdoor | $80000 (Yearly)</span>
      <span className={styles.dates}>May 2022 - Present | 8 mos</span>
      <span className={styles.location}>Miami, Florida</span>
      <span className={styles.yearsOfExperience}>
        Aquired with 5 years of experience. 
      </span>
    </div>
  )
}
