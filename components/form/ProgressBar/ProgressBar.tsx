import { useContext } from 'react'

// * context * //
import { FormContext } from '../FormContainer'

// * utils & context * //
import { FormContextType } from '../types'
import styles from './ProgressBar.module.scss'

export default function ProgressBar() {
  const { getProgress } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container} style={{ width: `${getProgress()}%` }} />
  )
}
