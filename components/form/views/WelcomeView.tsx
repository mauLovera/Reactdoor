import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import { currentDate, formLabels } from '../utils'
import Field from '../Field/Field'
import styles from './FormView.module.scss'

interface Props {
  name: string
  type: string
  label: string
  placeholder: string
  autoFocus?: boolean
}

export default function WelcomeView() {
  const {
    activeFormData: { data },
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
