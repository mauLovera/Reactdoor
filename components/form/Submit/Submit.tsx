import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import styles from './Submit.module.scss'

export default function Submit() {
  const { isEnd } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      <button type="submit">{isEnd ? 'Submit' : 'Continue'}</button>
    </div>
  )
}
