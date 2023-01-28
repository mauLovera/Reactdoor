import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import styles from './RadioField.module.scss'

interface Props {
  name: string
  type: string
  label: string
  min: string
  max: string
  step: string
}

export default function RadioField({
  name,
  type,
  label,
  min,
  max,
  step,
}: Props) {
  const {
    handleInputChange,
    activeFormData: { data, errors },
    setActiveFormData,
  } = useContext(FormContext) as FormContextType

  return (
    <div className={styles.container}>
      <label htmlFor={`${name}-input`}>{label}</label>
      <div>
        <input
          type="radio"
          name={name}
          id={name}
          value={'1'}
          onChange={handleInputChange}
          defaultChecked={true}
        />
        <input
          type="radio"
          name={name}
          id={name}
          value={'2'}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name={name}
          id={name}
          value={'3'}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name={name}
          id={name}
          value={'4'}
          onChange={handleInputChange}
        />
        <input
          type="radio"
          name={name}
          id={name}
          value={'5'}
          onChange={handleInputChange}
        />
      </div>
    </div>
  )
}
