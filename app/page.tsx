'use client'

import styles from '@/styles/pages/root.module.scss'
import FormContainer from '@/components/form/FormContainer'
import Experience from '@/components/experience/Experience'
import { useState } from 'react'
import { FormEntryType } from '@/utils/types'

export default function Home() {
  // * state * //
  const [formEntries, setFormEntries] = useState<FormEntryType[] | []>([
    {
      jobTitle: 'Software Engineering Fellow',
      location: 'Miami, Florida',
      companyName: 'General Assembly',
      startDate: '2022-05-01',
      endDate: '',
      current: 'true',
      basePay: '80000',
      yearsOfExperience: '5',
      rating: '5',
      _id: '0698e18',
    },
    {
      jobTitle: 'Bank Teller - Bilingual',
      location: 'Miami, Florida',
      companyName: 'Wells Fargo',
      startDate: '2021-08-08',
      endDate: '2022-11-11',
      current: '',
      basePay: '80000',
      yearsOfExperience: '5',
      rating: '5',
      _id: '0698e18',
    },
    {
      jobTitle: 'Verizon',
      location: 'Miami, Florida',
      companyName: 'Verizon',
      startDate: '2020-06-06',
      endDate: '2021-08-08',
      current: '',
      basePay: '80000',
      yearsOfExperience: '5',
      rating: '5',
      _id: '0698e18',
    },
    {
      jobTitle: 'Future Job',
      location: 'Miami, Florida',
      companyName: 'Verizon',
      startDate: '2023-06-06',
      endDate: '',
      current: 'true',
      basePay: '80000',
      yearsOfExperience: '5',
      rating: '5',
      _id: '0698e18',
    },
  ])

  // * handle functions * //
  function handleAddEntry(newFormEntry: FormEntryType) {
    const sortedEntriesArray = [...formEntries, newFormEntry].sort((a, b) => {
      /*
        Reverse chronological order would be the youngest (or greatest) at the top.
    
        1	sort a then b
        -1 sort b then a
        === 0	keep original order of a and b 
      
        */

      // If they are both current positions...
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
