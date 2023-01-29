import { FormEntryContextType } from '@/utils/types'
import { FormEntryContext } from 'context/FormEntryContext'

import React, { useContext } from 'react'
import Entry from './Entry/Entry'
import styles from './Experience.module.scss'

export default function Experience() {
  return (
    <div className={styles.container}>
      <h3>Experience</h3>
      {/* {formEntries &&
        formEntries.map((entry, index) => (
          <Entry
            key={index}
            jobTitle={entry.jobTitle}
            companyName={entry.companyName}
            basePay={entry.basePay}
            location={entry.location}
            startDate={entry.startDate}
            current={entry.current}
            endDate={entry.endDate}
            rating={entry.rating}
            yearsOfExperience={entry.yearsOfExperience}
          />
        ))} */}
    </div>
  )
}
