import { useContext } from 'react'
import Field from '../Field/Field'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import styles from './FormView.module.scss'

interface Props {
  name: string
  type: string
  label: string
  placeholder: string
  autoFocus?: boolean
}

export default function WelcomeView() {
  const { activeFormData } = useContext(FormContext) as FormContextType
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
      <Field name="startDate" type="date" label="Start Date*" placeholder="" />
      <Field
        name="current"
        type="checkbox"
        label="I am currently working here: "
        placeholder=""
        defaultChecked
      />
      {!activeFormData.data.current && (
        <Field
          name="endDate"
          type="date"
          label="End Date*"
          placeholder=""
        />
      )}
    </div>
  )
}
