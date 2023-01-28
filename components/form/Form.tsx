import { useContext } from 'react'
import { FormContext } from './FormContainer'
import { FormContextType } from './types'

import ProgressBar from './ProgressBar/ProgressBar'
import Navigation from './Navigation/Navigation'
import Submit from './Submit/Submit'

import styles from './Form.module.scss'

export default function Form() {
  const { handleFormSubmit, currentView } = useContext(
    FormContext
  ) as FormContextType
  return (
    <form
      className={styles.container}
      onSubmit={handleFormSubmit}
      noValidate
      autoComplete="off"
    >
      <ProgressBar />
      <Navigation />
      {currentView}
      <Submit />
    </form>
  )
}
