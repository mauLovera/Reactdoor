import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import styles from './Navigation.module.scss'

export default function Navigation() {
  const { isStart, back } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      {isStart ? (
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
