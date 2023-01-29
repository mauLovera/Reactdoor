import React from 'react'
import styles from './Entry.module.scss'
import moment from 'moment'

interface Props {
  jobTitle: string
  rating: string
  companyName: string
  basePay: string
  startDate: string
  endDate: string
  current: string
  location: string
  yearsOfExperience: string
}

export default function Entry({
  jobTitle,
  rating,
  companyName,
  basePay,
  startDate,
  endDate,
  current,
  location,
  yearsOfExperience,
}: Props) {
  // * Date * //
  const startingDate = moment(startDate)
  const endingDate = moment(endDate)
  const currentDate = moment(new Date())
  const formattedStartDate = startingDate.format('MMMM YYYY')
  const formattedEndDate = endingDate.format('MMMM YYYY')

  function getDuration() {
    let duration
    if (current) {
      duration = currentDate.diff(startingDate, 'months')
    } else {
      duration = endingDate.diff(startingDate, 'months')
    }
    return `${duration} mos`
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {jobTitle}
        <span className={styles.rating}>Rating: {renderStars(rating)}</span>
      </div>
      <span className={styles.companyName}>
        {companyName} · ${basePay} (Yearly)
      </span>
      <span className={styles.dates}>
        <span>{formattedStartDate}</span>
        {' - '}
        <span>{current ? 'Present' : formattedEndDate}</span>
        {' · '}
        <span>{getDuration()}</span>
      </span>
      <span className={styles.location}>{location}</span>
      <span className={styles.yearsOfExperience}>
        Aquired with {yearsOfExperience} years of experience.
      </span>
    </div>
  )
}

Entry.defaultProps = {
  rating: '3',
  current: '',
  startDate: '2021-01-01',
  endDate: '2023-01-01',
}

function renderStars(rating: string) {
  return [...Array(5)].map((_, index) => (
    <span
      className={index > Number(rating) - 1 ? styles.deactiveStar : ''}
      key={index}
    >
      ⭐
    </span>
  ))
}
