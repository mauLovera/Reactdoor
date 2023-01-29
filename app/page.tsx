"use client"
import React, { useState, createContext } from 'react'
import ExperienceContainer from '@/components/experience/ExperienceContainer'
import FormContainer from '@/components/form/FormContainer'
import styles from '@/styles/pages/root.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <FormContainer />
      <ExperienceContainer />
    </main>
  )
}
