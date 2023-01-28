import { FormDataType, FormErrorsType } from './types'

// * Date String * //
const today = new Date()
const year = String(today.getFullYear())
const month = String(today.getMonth()) + 1
const day = String(today.getDate())
export const currentDate = `${year}-${month}-${day}`

export const INITIAL_FORM_DATA = {
  data: {
    jobTitle: 'Software Developer',
    location: 'Miami, Florida',
    companyName: 'Glassdoor',
    startDate: '2023-01-01',
    endDate: '2021-01-01',
    current: 'true',
    basePay: '80000',
    yearsOfExperience: '1',
    rating: '5',
  },
  errors: {
    jobTitle: '',
    location: '',
    companyName: '',
    startDate: '',
    endDate: '',
    current: '',
    basePay: '',
    yearsOfExperience: '',
    rating: '',
  },
}

export const formLabels = {
  jobTitle: 'Job Title*',
  location: 'Location*',
  companyName: 'Company or Employer Name*',
  startDate: 'Start Date*',
  current: 'I am currently working here:',
  endDate: 'End Date*',
  basePay: 'Base Pay (Yearly: $)*',
  yearsOfExperience: 'Years of Experience*',
  rating: 'Rating (1-5)*',
}

export const formConfirmLabels = {
  jobTitle: 'Job Title',
  location: 'Location',
  companyName: 'Company or Employer Name',
  startDate: 'Dates',
  basePay: 'Base Pay (Yearly: $)',
  yearsOfExperience: 'Years of Experience',
  rating: 'Rating (1-5)',
}



export function renderError(
  type: string,
  name: string,
  data: FormDataType,
  errors: FormErrorsType
) {
  switch (type) {
    case 'password':
      return errors[name as keyof FormErrorsType]
    case 'number':
      return errors[name as keyof FormErrorsType]
    case 'checkbox':
      return
    default:
      if (data[name as keyof FormDataType]?.trim() === '') {
        return errors[name as keyof FormErrorsType]
      }
  }
}
