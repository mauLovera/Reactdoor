import React, { createContext } from 'react'
import Experience from './Experience'

const ExperienceContext = createContext(null)

export default function ExperienceContainer() {
  return (
    <ExperienceContext.Provider value={null}>
      <Experience />
    </ExperienceContext.Provider>
  )
}
