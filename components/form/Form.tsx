import styles from './Form.module.scss'

import ProgressBar from './ProgressBar/ProgressBar'
import Navigation from './Navigation/Navigation'
import Fields from './Fields/Fields'
import Submit from './Submit/Submit'

export default function Form() {
  return (
    <form className={styles.container}>
      {/* TODO: Change progress with dynamic value */}
      <ProgressBar progress={'100%'}/>
      <Navigation />
      <Fields />
      <Submit />
    </form>
  )
}
