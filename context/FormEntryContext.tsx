'use client'

import React, { useState, createContext } from 'react'
import { FormEntryContextType, FromEntryType } from '@/utils/types'

export const FormEntryContext = createContext<FormEntryContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function FormEntryContextComponent({ children }: Props) {
  const [formEntries, setFormEntries] = useState<FromEntryType[] | []>([])

  function handleAddEntry(newFormEntry: FromEntryType) {
    setFormEntries((previousEntries) => [...previousEntries, newFormEntry])
    console.log(formEntries)
  }

  function handleDeleteEntry(id: string) {
    setFormEntries(formEntries.filter((entry) => entry._id !== id))
  }

  const values = {
    handleAddEntry,
    handleDeleteEntry,
    formEntries,
  }

  return (
    <FormEntryContext.Provider value={values}>
      {children}
    </FormEntryContext.Provider>
  )
}
