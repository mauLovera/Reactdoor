import styles from './ProgressBar.module.scss'
import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'

export default function ProgressBar() {
  const { getProgress } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container} style={{ width: `${getProgress()}%` }} />
  )
}
