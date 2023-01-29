import styles from '@/styles/pages/root.module.scss'

import FormContainer from '@/components/form/FormContainer'

import Experience from '@/components/experience/Experience'

export default function Home() {
  return (
    <main className={styles.container}>
      <FormContainer />
      <Experience />
    </main>
  )
}
