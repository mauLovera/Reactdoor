import { useContext } from 'react'
import Field from '../Field/Field'
import { FormContext } from '../FormContainer'
import RadioField from '../RadioField/RadioField'
import { FormContextType } from '../types'
import styles from './FormView.module.scss'

export default function SalaryView() {
  const {
    activeFormData: { data },
  } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>
        What was your experience like as a{' '}
        <span className={styles.bold}>{data.jobTitle}</span> at{' '}
        <span className={styles.bold}>{data.companyName}</span>?
      </h4>
      <p className={styles.subHeader}></p>
      <Field
        label="Base Pay ($)*"
        name={'basePay'}
        type={'number'}
        placeholder="0.00"
        min={'0'}
      />
      <Field
        label="Years of Experience*"
        name={'yearsOfExperience'}
        type={'number'}
        placeholder="e.g. 3"
        min={'0'}
      />
      <RadioField
        label="Rating (1-5)*"
        name={'rating'}
        type={'select'}
        min={'1'}
        max={'5'}
        step={'1'}
      />
    </div>
  )
}
