import styles from './ProgressBar.module.scss'

interface Props {
  progress: string
}

export default function ProgressBar({ progress }: Props) {
  return <div className={styles.container} style={{ width: `${progress}%` }} />
}
