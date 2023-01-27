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
    rating: '',
    yearsOfExperience: '',
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
    rating: '',
    yearsOfExperience: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  },
}
