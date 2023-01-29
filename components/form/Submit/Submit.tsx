import Link from 'next/link'
import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import styles from './Submit.module.scss'

export default function Submit() {
  const { isEnd, isSubmitted } = useContext(FormContext) as FormContextType
  return (
    <div className={styles.container}>
      {!isSubmitted ? (
        <button type="submit">{isEnd ? 'Submit' : 'Continue'}</button>
      ) : (
        <button type="submit">Add more experience</button>
      )}
    </div>
  )
}
