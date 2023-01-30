import moment from 'moment'
import styles from './Entry.module.scss'

interface Props {
  _id: string
  jobTitle: string
  rating: string
  companyName: string
  basePay: string
  startDate: string
  endDate: string
  current: string
  location: string
  yearsOfExperience: string
  toggleDelete: boolean
  handleDeleteEntry: (_id: string) => void
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
  _id,
  toggleDelete,
  handleDeleteEntry,
}: Props) {
  // * Date * //
  const startingDate = moment(startDate)
  const endingDate = moment(endDate)
  const currentDate = moment(new Date())
  const formattedStartDate = startingDate.format('MMMM YYYY')
  const formattedEndDate = endingDate.format('MMMM YYYY')

  /**
   * @function getDuration
   * @description get duration from active dates 
   * @returns string
   */

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
      <div className={styles.left}>
        <div className={styles.header}>
          <div className={styles.jobTitle}>
            <span>{jobTitle}</span>
          </div>
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
        <div className={styles.footer}>
          <span className={styles.yearsOfExperience}>
            Aquired with{' '}
            {Number(yearsOfExperience) === 1
              ? `${yearsOfExperience} year`
              : `${yearsOfExperience} years`}{' '}
            of experience.
          </span>
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.rating}>Rating: {renderStars(rating)}</span>
        {toggleDelete && (
          <button
            className={styles.delete}
            onClick={() => handleDeleteEntry(_id)}
          >
            Delete Experience
          </button>
        )}
      </div>
    </div>
  )
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
