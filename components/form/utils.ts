import { FormDataType, FormErrorsType } from "./types"

// * Date String * //
const today = new Date()
const year = String(today.getFullYear())
const month = String(today.getMonth()) + 1
const day = String(today.getDate())
export const currentDate = `${year}-${month}-${day}`

export const INITIAL_FORM_DATA = {
  data: {
    jobTitle: '',
    location: '',
    companyName: '',
    startDate: '',
    endDate: '',
    current: 'true',
    basePay: '',
    yearsOfExperience: '',
    rating: '',
    username: '',
    password: '',
    passwordConfirmation: '',
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
    username: '',
    password: '',
    passwordConfirmation: '',
  },
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
    default:
      if (data[name as keyof FormDataType]?.trim() === '') {
        return errors[name as keyof FormErrorsType]
      }
  }
}
