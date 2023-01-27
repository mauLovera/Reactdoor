import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import { currentDate } from '../utils'
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
      <h4 className={styles.header}>Welcome to Reactdoor</h4>
      <p className={styles.subHeader}>
        Please tell us a little more about your employment history.
      </p>
      <Field
        name="jobTitle"
        type="text"
        label="Job Title*"
        placeholder="Job Title"
      />
      <Field
        name="location"
        type="text"
        label="Location*"
        placeholder="City or Metro Area"
      />
      <Field
        name="companyName"
        type="text"
        label="Company or Employer Name*"
        placeholder="Company or Employer Name"
      />
      <Field
        name="startDate"
        type="date"
        label="Start Date*"
        placeholder=""
        max={data.endDate ? data.endDate : currentDate}
      />
      <Field
        name="current"
        type="checkbox"
        label="I am currently working here:"
        placeholder=""
        defaultChecked
      />
      {!data.current && (
        <Field
          name="endDate"
          type="date"
          label="End Date*"
          placeholder=""
          max={currentDate}
        />
      )}
    </div>
  )
}
