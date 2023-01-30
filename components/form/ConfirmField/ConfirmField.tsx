import { useContext } from 'react'
import moment from 'moment'

// * context * //
import { FormContext } from '../FormContainer'

// * utils & types * //
import { FormContextType } from '../types'
import { formConfirmLabels } from '../utils'

import styles from './ConfirmField.module.scss'

interface Props {
  name: string
  viewIndex: number
}

export default function ConfirmField({ name, viewIndex }: Props) {
  const {
    activeFormData: { data },
    handleEditInput,
    isSubmitted,
  } = useContext(FormContext) as FormContextType

  const startDate = moment(data.startDate)
  const endDate = moment(data.endDate)
  const formattedStartDate = startDate.format('MMMM DD, YYYY')
  const formattedEndDate = endDate.format('MMMM DD, YYYY')
  const currentDate = moment(new Date())

  /**
   * @function getDuration
   * @description get duration from active dates
   * @returns string
   */

  function getDuration() {
    let duration
    if (data.current) {
      duration = currentDate.diff(startDate, 'months')
    } else {
      duration = endDate.diff(startDate, 'months')
    }
    return duration === 1 ? `${duration} Month` : `${duration} Months`
  }

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        <>
          <h4>{formConfirmLabels[name as keyof typeof formConfirmLabels]}:</h4>
          <p>
            {name === 'startDate' ? (
              <span>
                {formattedStartDate} -{' '}
                {data.current ? 'Present' : formattedEndDate}{' '}
                <span className={styles.grey}>({getDuration()})</span>
              </span>
            ) : (
              <>
                <span>{data[name as keyof typeof data]}</span>
              </>
            )}
            {!isSubmitted && (
              <button
                type="button"
                onClick={() => handleEditInput(name, viewIndex)}
              >
                [edit]
              </button>
            )}
          </p>
        </>
      </div>
    </div>
  )
}
