import React, { useContext } from 'react'
import Entry from './Entry/Entry'
import styles from './Experience.module.scss'
import { FormEntryType } from '@/utils/types'

interface Props {
  formEntries: FormEntryType[]
  handleDeleteEntry: (id: string) => void
}

export default function Experience({ formEntries, handleDeleteEntry }: Props) {
  return (
    <div className={styles.container}>
      <h3>Experience</h3>
      {formEntries.length ? (
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
        ))
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  )
}
