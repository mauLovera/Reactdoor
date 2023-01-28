import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'

import NumberField from '../NumberField/NumberField'
import RadioField from '../RadioField/RadioField'

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
      <NumberField
        label="Base Pay ($)*"
        name={'basePay'}
        placeholder="0.00"
        min={'0'}
      />
      <NumberField
        label="Years of Experience*"
        name={'yearsOfExperience'}
        placeholder="e.g. 3"
        min={'0'}
      />
      <RadioField
        label="Rating (1-5)*"
        name={'rating'}
        max={5}
      />
    </div>
  )
}
