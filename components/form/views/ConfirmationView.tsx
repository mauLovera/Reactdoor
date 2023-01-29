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
      <Banner />
      <div className={styles.section}>
        <ConfirmField name="jobTitle" viewIndex={0} />
        <ConfirmField name="location" viewIndex={0} />
        <ConfirmField name="companyName" viewIndex={0} />
        <ConfirmField name="startDate" viewIndex={0} />
      </div>
      <div className={styles.section}>
        <ConfirmField name="basePay" viewIndex={1} />
        <ConfirmField name="yearsOfExperience" viewIndex={1} />
        <ConfirmField name="rating" viewIndex={1} />
      </div>
    </div>
  )
}

function Banner() {
  const { isSubmitted } = useContext(FormContext) as FormContextType
  return (
    <>
      <div
        className={`${styles.banner} ${isSubmitted ? styles.submitted : ''}`}
      >
        <h4 className={styles.header}>
          {isSubmitted
            ? 'Thanks! Your answers have been submitted.'
            : 'Please confirm your answers.'}
        </h4>
        <p className={styles.subHeader}>
          Your submission details are below.
        </p>
      </div>
    </>
  )
}
