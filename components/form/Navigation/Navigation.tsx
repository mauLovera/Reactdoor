import { useContext } from 'react'

// * context * //
import { FormContext } from '../FormContainer'

// * utils & types * //
import { FormContextType } from '../types'

import styles from './Navigation.module.scss'

export default function Navigation() {
  const { isStart, back, isSubmitted } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      {isStart || isSubmitted ? (
        <span className={styles.inactive}>Back</span>
      ) : (
        <button type="button" onClick={back}>
          Back
        </button>
      )}
      <span className={styles.required}>required*</span>
    </div>
  )
}
