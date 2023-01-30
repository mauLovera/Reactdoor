import { useContext } from 'react'

// * context * //
import { FormContext } from '../FormContainer'

// * components * //
import Field from '../Field/Field'

// * utils & types * //
import { FormContextType } from '../types'
import { currentDate, formLabels } from '../utils'

import styles from './FormView.module.scss'

export default function WelcomeView() {
  const {
    activeFormData: { data }
  } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>Welcome to Reactdoor!</h4>
      <p className={styles.subHeader}>
        Please tell us a little more about your employment history.
      </p>
      <Field
        name="jobTitle"
        type="text"
        label={formLabels.jobTitle}
        placeholder="Job Title"
      />
      <Field
        name="location"
        type="text"
        label={formLabels.location}
        placeholder="City or Metro Area"
      />
      <Field
        name="companyName"
        type="text"
        label={formLabels.companyName}
        placeholder="Company or Employer Name"
      />
      <Field
        name="startDate"
        type="date"
        label={formLabels.startDate}
        placeholder=""
        max={data.endDate ? data.endDate : currentDate}
      />
      <Field
        name="current"
        type="checkbox"
        label={formLabels.current}
        placeholder=""
      />
      {!data.current && (
        <Field
          name="endDate"
          type="date"
          label={formLabels.endDate}
          placeholder=""
          max={currentDate}
        />
      )}
    </div>
  )
}
