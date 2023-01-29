'use client'

import styles from '@/styles/pages/root.module.scss'
import FormContainer from '@/components/form/FormContainer'
import Experience from '@/components/experience/Experience'
import { useState } from 'react'
import { FormEntryType } from '@/utils/types'

export default function Home() {
  // * state * //
  const [formEntries, setFormEntries] = useState<FormEntryType[] | []>([])

  // * handle functions * //
  function handleAddEntry(newFormEntry: FormEntryType) {
    setFormEntries((previousEntries) => [...previousEntries, newFormEntry])
    console.log(formEntries)
  }

  function handleDeleteEntry(id: string) {
    setFormEntries(formEntries.filter((entry) => entry._id !== id))
  }

  return (
    <main className={styles.container}>
      <FormContainer handleAddEntry={handleAddEntry} />
      {formEntries.length ? (
        <Experience
          formEntries={formEntries}
          handleDeleteEntry={handleDeleteEntry}
        />
      ) : (
        ''
      )}
    </main>
  )
}
