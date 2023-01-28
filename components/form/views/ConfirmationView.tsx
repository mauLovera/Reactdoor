import { useContext } from 'react'
import ConfirmField from '../ConfirmField/ConfirmField'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import { formConfirmLabels } from '../utils'
import styles from './FormView.module.scss'

export default function ConfirmationView() {
  const {
    activeFormData: { data },
  } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h4 className={styles.header}>Please confirm your answers.</h4>
        <p className={styles.subHeader}>Your submission details are below.</p>
      </div>
      <div className={styles.section}>
        <ConfirmField name="jobTitle" />
        <ConfirmField name="location" />
        <ConfirmField name="companyName" />
        <ConfirmField name="startDate" />
      </div>
      <div className={styles.section}>
        <ConfirmField name="basePay" />
        <ConfirmField name="yearsOfExperience" />
        <ConfirmField name="rating" />
      </div>
    </div>
  )
}
