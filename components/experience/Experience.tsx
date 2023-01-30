import React, { useState } from 'react'

// * components * //
import Entry from './Entry/Entry'

// * utils & types * //
import { FormEntryType } from '@/utils/types'

import styles from './Experience.module.scss'

interface Props {
  formEntries: FormEntryType[]
  handleDeleteEntry: (id: string) => void
  isLoading: boolean
}

export default function Experience({
  formEntries,
  handleDeleteEntry,
  isLoading,
}: Props) {
  const [toggleDelete, setToggleDelete] = useState<boolean>(false)
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Experience</h3>
        {formEntries.length ? (
          <button type="button" onClick={() => setToggleDelete(!toggleDelete)}>
            <span>{toggleDelete ? 'Stop Editing' : 'Edit'}</span>
          </button>
        ) : (
          ''
        )}
      </div>
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
            handleDeleteEntry={handleDeleteEntry}
            toggleDelete={toggleDelete}
            _id={entry._id as string}
          />
        ))
      ) : (
        <p>{isLoading ? '' : 'No entries found.'}</p>
      )}
    </div>
  )
}
