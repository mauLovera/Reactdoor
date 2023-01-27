import styles from './Form.module.scss'

import ProgressBar from './ProgressBar/ProgressBar'
import Navigation from './Navigation/Navigation'
import Fields from './Fields/Fields'
import Submit from './Submit/Submit'

export default function Form() {
  return (
    <form className={styles.container}>
      <ProgressBar />
      <Navigation />
      <Fields />
      <Submit />
    </form>
  )
}
