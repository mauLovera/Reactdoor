import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import styles from './FormView.module.scss'

export default function ConfirmationView() {
  const {
    activeFormData: { data },
  } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Please confirm your answers.</h4>
      <p className={styles.subHeader}>
        Your submission details are below.
      </p>
    </div>
  )
}
