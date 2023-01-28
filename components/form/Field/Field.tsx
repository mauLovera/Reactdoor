import { useContext, useEffect } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType, FormDataType, FormErrorsType } from '../types'
import { renderError } from '../utils'
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
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        className={
          errors[name as keyof FormErrorsType] &&
          data[name as keyof FormDataType]?.trim() === ''
            ? styles.errorInput
            : ''
        }
        autoFocus={autoFocus ?? undefined}
        value={data[name as keyof FormDataType]}
        defaultChecked={defaultChecked ?? undefined}
        min={min ?? undefined}
        max={max ?? undefined}
      />
      <p className={styles.errorMessage}>
        {renderError(type, name, data, errors)}
      </p>
    </div>
  )
}
