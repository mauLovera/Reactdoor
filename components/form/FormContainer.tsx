'use client'

import Form from './Form'
import React, { useState, createContext } from 'react'
import { FormContextType, FormType } from './types'
import { INITIAL_FORM_DATA } from './utils'
import useMultiViewForm from 'hooks/useMultiViewForm'
import WelcomeView from './views/WelcomeView'

export const FormContext = createContext<FormContextType | null>(null)

export default function FormContainer() {
  // * state * //
  const [activeFormData, setActiveFormData] =
    useState<FormType>(INITIAL_FORM_DATA)

  // * useMultiFormView hook * //
  const {
    currentIndex,
    currentView,
    isStart,
    isEnd,
    next,
    back,
    goTo,
    getProgress,
  } = useMultiViewForm({
    views: [
      <WelcomeView key={'1'} />,
      <div key={'2'}>Hello</div>,
      <div key={'3'}>Hello</div>,
    ],
  })

  // * context values * //
  const values = {
    activeFormData,
    setActiveFormData,
    handleInputChange,
    handleFormSubmit,
    currentIndex,
    currentView,
    isStart,
    isEnd,
    next,
    back,
    goTo,
    getProgress,
  }

  // * handle functions * //
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target
    setActiveFormData((previousFormData) => ({
      data: {
        ...previousFormData.data,
        [name]: type === 'checkbox' ? checked : value,
      },
      errors: { ...previousFormData.errors },
    }))
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    next()
  }

  return (
    <FormContext.Provider value={values}>
      <Form />
    </FormContext.Provider>
  )
}
