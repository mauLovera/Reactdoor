export type FormDataType = {
  _id?: string
  jobTitle: string
  location: string
  startDate: string
  endDate: string
  current: string
  basePay: string
  rating: string
  yearsOfExperience: string
  username: string
  password: string
  passwordConfirmation: string
}

export type FormErrorType = {
  jobTitle: string
  location: string
  startDate: string
  endDate: string
  current: string
  basePay: string
  rating: string
  yearsOfExperience: string
  username: string
  password: string
  passwordConfirmation: string
}

export type FormType = {
  data: FormDataType
  errors: FormErrorType
}
