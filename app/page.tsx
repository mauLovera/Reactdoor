'use client'
import { useState, useEffect } from 'react'

// * components * //
import FormContainer from '@/components/form/FormContainer'
import Experience from '@/components/experience/Experience'

// * utils & types * //
import { FormEntryType } from '@/utils/types'

import styles from '@/styles/pages/root.module.scss'

export default function Home() {
  // * state * //
  const [formEntries, setFormEntries] = useState<FormEntryType[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // * retrieve entries from local storage * //
  useEffect(() => {
    const data = window.localStorage.getItem('FORM_ENTRIES')
    if (data !== null) {
      const dataObject = JSON.parse(data)
      setFormEntries((prev) => [...prev, ...dataObject])
    }
    setIsLoading(false)
  }, [])

  // * set entries to local storage * //
  useEffect(() => {
    window.localStorage.setItem('FORM_ENTRIES', JSON.stringify(formEntries))
  }, [formEntries])

  // * handle functions * //

  /**
   * @function handleAddEntry
   * @description sort and add newFormEntry into formEntries array 
   * @params {newFormEntry}: FormEntryType
   */

  function handleAddEntry(newFormEntry: FormEntryType) {
    const sortedEntriesArray = [...formEntries, newFormEntry].sort((a, b) => {
      /*
        Reverse chronological order would be the youngest (or greatest) at the top.
        1	sort a then b
        -1 sort b then a
        === 0	keep original order of a and b 
      */
      if (a.current && b.current) {
        // If a.startDate is younger than b.startDate => sort b then a
        // 2023(a) > 2021(b) => [2021, 2023]
        if (new Date(a.startDate) > new Date(b.startDate)) {
          // b then a
          return -1
        } else {
          // a then b
          return 0
        }
      }
      if (new Date(a.startDate) > new Date(b.startDate)) {
        return -1
      }
      // if it is not current or younger then keep insertion order...
      // a then b
      return 0
    })
    setFormEntries(sortedEntriesArray)
  }

  /**
   * @function handleDeleteEntry
   * @description delete an entry from formEntries 
   * @params {id}: string
   */

  function handleDeleteEntry(id: string) {
    setFormEntries(formEntries.filter((entry) => entry._id !== id))
  }

  return (
    <main className={styles.container}>
      <FormContainer handleAddEntry={handleAddEntry} />
      <Experience
        formEntries={formEntries}
        handleDeleteEntry={handleDeleteEntry}
        isLoading={isLoading}
      />
    </main>
  )
}
