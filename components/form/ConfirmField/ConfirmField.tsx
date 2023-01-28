import { useContext } from 'react'
import { FormContext } from '../FormContainer'
import { FormContextType } from '../types'
import { formConfirmLabels } from '../utils'
import moment from 'moment'

import styles from './ConfirmField.module.scss'

interface Props {
  name: string
}

export default function ConfirmField({ name }: Props) {
  const {
    activeFormData: { data },
  } = useContext(FormContext) as FormContextType

  const startDate = moment(data.startDate)
  const endDate = moment(data.endDate)
  const currentDate = moment(new Date())

  const duration = startDate.diff(endDate, 'months')

  const formattedStartDate = startDate.format('MMMM DD, YYYY')
  const formattedEndDate = endDate.format('MMMM DD, YYYY')

  return (
    <div className={styles.container}>
      <div className={styles.field}>
        {name === 'startDate' ? (
          <>
            <h4>
              {formConfirmLabels[name as keyof typeof formConfirmLabels]}:
            </h4>
            <p>
              <span>
                {formattedStartDate} -{' '}
                {data.current ? 'Current' : formattedEndDate}{' '}
                <span className={styles.grey}>
                  (
                  {duration === 1
                    ? `${duration} Month`
                    : `${duration} Months`}
                  )
                </span>
              </span>
              <button type="button">[edit]</button>
            </p>
          </>
        ) : (
          <>
            <h4>
              {formConfirmLabels[name as keyof typeof formConfirmLabels]}:
            </h4>
            <p>
              <span>{data[name as keyof typeof data]}</span>
              <button type="button">[edit]</button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
