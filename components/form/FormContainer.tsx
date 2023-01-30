'use client'
// * libraries * //
import React, { useState, createContext, useContext } from 'react'
import { v4 } from 'uuid'

// * hooks & context * //
import useMultiViewForm from 'hooks/useMultiViewForm'

// * utils  & types * //
import { INITIAL_FORM_DATA } from './utils'
import { validateForm } from '@/utils/validateForm'
import { FormContextType, FormType } from './types'
import { FormEntryType } from '@/utils/types'

// * components * //
import Form from './Form'
import WelcomeView from './views/WelcomeView'
import SalaryView from './views/SalaryView'
import ConfirmationView from './views/ConfirmationView'

export const FormContext = createContext<FormContextType | null>(null)

interface Props {
  handleAddEntry: (newFormEntry: FormEntryType) => void
}

export default function FormContainer({ handleAddEntry }: Props) {
  // * state * //
  const [activeFormData, setActiveFormData] =
    useState<FormType>(INITIAL_FORM_DATA)
  const [focusedField, setFocusedField] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

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
      <SalaryView key={'2'} />,
      <ConfirmationView key={'3'} />,
    ],
  })

  // * context values * //
  const values = {
    activeFormData,
    focusedField,
    isSubmitted,
    setActiveFormData,
    handleInputChange,
    handleFormSubmit,
    handleEditInput,
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

  /**
   * @function handleInputChange
   * @description update activeFormData to match input field
   * @params {e} input event
   */

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

  /**
   * @function handleEditInput
   * @description change current view to passed index and setFocusedField to passed field name
   * @params {name} string, {viewIndex} number
   */

  function handleEditInput(name: string, viewIndex: number) {
    goTo(viewIndex)
    setFocusedField(name)
  }

  
  /**
   * @function handleFormSubmit
   * @description validate form, change view index, and setSubmitted
   * @params {e} form event
   */

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    const { data, errors } = activeFormData
    e.preventDefault()
    if (validateForm(data, errors, setActiveFormData, currentIndex)) {
      next()
      if (isEnd && !isSubmitted) {
        setIsSubmitted(true)
        const newFormEntry = Object.assign({}, activeFormData.data)
        newFormEntry._id = v4().slice(0, 7)
        handleAddEntry(newFormEntry)
      } else if (isEnd && isSubmitted) {
        setIsSubmitted(false)
        setActiveFormData(INITIAL_FORM_DATA)
        goTo(0)
      }
    }
  }

  return (
    <FormContext.Provider value={values}>
      <Form />
    </FormContext.Provider>
  )
}
