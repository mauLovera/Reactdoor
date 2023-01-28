import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'

import NumberField from '../NumberField/NumberField'
import RadioField from '../RadioField/RadioField'

import styles from './FormView.module.scss'
import { formLabels } from '../utils'

export default function SalaryView() {
  const {
    activeFormData: { data },
  } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>
        How was your time as a{' '}
        <span className={styles.underline}>{data.jobTitle}</span> at{' '}
        <span className={styles.underline}>{data.companyName}</span>?
      </h4>
      <p className={styles.subHeader}></p>
      <NumberField
        name={'basePay'}
        label={formLabels.basePay}
        placeholder="0.00"
        min={'0'}
      />
      <NumberField
        name={'yearsOfExperience'}
        label={formLabels.yearsOfExperience}
        placeholder="e.g. 3"
        min={'0'}
      />
      <RadioField label={formLabels.rating} name={'rating'} max={5} />
    </div>
  )
}
