import { useContext, useEffect, useState } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType, FormDataType, FormErrorsType } from '../types'
import styles from './Field.module.scss'

interface Props {
  name: string
  type: string
  label: string
  placeholder: string
  autoFocus?: boolean
  defaultChecked?: boolean
  min?: string
  max?: string
}

export default function Field({
  name,
  type,
  label,
  placeholder,
  autoFocus,
  defaultChecked,
  min,
  max,
}: Props) {
  const {
    handleInputChange,
    activeFormData: { data, errors },
    setActiveFormData,
  } = useContext(FormContext) as FormContextType

  function renderError(type: string) {
    switch (type) {
      case 'text':
        if (data[name as keyof FormDataType]?.trim() === '') {
          return errors[name as keyof FormErrorsType]
        }
        return ''
      case 'password':
        return errors[name as keyof FormErrorsType]
      default:
        return
    }
  }

  useEffect(() => {
    if (new Date(data.startDate) > new Date(data.endDate)) {
      setActiveFormData((previousFormData) => ({
        data: {
          ...previousFormData.data,
          startDate: previousFormData.data.endDate,
        },
        errors: { ...previousFormData.errors },
      }))
    }
  }, [data.endDate, data.startDate, setActiveFormData])

  return (
    <div
      className={
        type !== 'checkbox' ? styles.container : styles.inlineContainer
      }
    >
      <label htmlFor={`${name}-input`}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={data[name as keyof FormDataType]}
        autoFocus={autoFocus}
        id={name}
        onChange={handleInputChange}
        defaultChecked={defaultChecked}
        min={min ? min : ''}
        max={max ? max : ''}
      />
      <p className={styles.errorMessage}>{renderError(type)}</p>
    </div>
  )
}
