import { useContext } from 'react'

// * context * //
import { FormContext } from '../FormContainer'

// * utils & types * //
import { FormContextType } from '../types'

import styles from './RadioField.module.scss'

interface Props {
  name: string
  label: string
}

export default function RadioField({ name, label }: Props) {
  const {
    handleInputChange,
    activeFormData: { data },
  } = useContext(FormContext) as FormContextType

  return (
    <div className={styles.container}>
      <label htmlFor={`${name}-input`}>{label}</label>
      <div>
        <input
          type="radio"
          name={name}
          value={'1'}
          onChange={handleInputChange}
          defaultChecked={data['rating'] === '1'}
        />
        <input
          type="radio"
          name={name}
          value={'2'}
          onChange={handleInputChange}
          defaultChecked={data['rating'] === '2'}
        />
        <input
          type="radio"
          name={name}
          value={'3'}
          onChange={handleInputChange}
          defaultChecked={data['rating'] === '3'}
        />
        <input
          type="radio"
          name={name}
          value={'4'}
          onChange={handleInputChange}
          defaultChecked={data['rating'] === '4'}
        />
        <input
          type="radio"
          name={name}
          value={'5'}
          onChange={handleInputChange}
          defaultChecked={data['rating'] === '5'}
        />
      </div>
    </div>
  )
}
