"use client"

import { useState } from 'react'
import useMultiViewForm from 'hooks/useMultiViewForm'

import Form from './Form'

export default function FormContainer() {
  const [activeFormData, setActiveFormData] = useState({})

  return (
    <Form />
  )
}
