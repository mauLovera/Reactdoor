'use client'

import Form from './Form'
import React, { useState, createContext } from 'react'
import { FormContextType, FormType } from './types'
import { INITIAL_FORM_DATA } from './utils'
import useMultiViewForm from 'hooks/useMultiViewForm'

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
      <div key={'1'}>Hello</div>,
      <div key={'2'}>Hello</div>,
      <div key={'3'}>Hello</div>,
    ],
  })

  // * context values * //
  const values = {
    activeFormData,
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
    setActiveFormData((prev) => ({
      data: { ...prev.data, [e.target.name]: e.target.value },
      errors: { ...prev.errors },
    }))
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <FormContext.Provider
      value={values}
    >
      <Form />
    </FormContext.Provider>
  )
}
