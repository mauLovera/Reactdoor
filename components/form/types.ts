export type FormDataType = {
  _id?: string
  jobTitle: string
  location: string
  companyName: string
  startDate: string
  endDate: string
  current: string
  basePay: string
  yearsOfExperience: string
  rating: string
  username: string
  password: string
  passwordConfirmation: string
}

export type FormErrorsType = {
  jobTitle: string
  location: string
  companyName: string
  startDate: string
  endDate: string
  current: string
  basePay: string
  yearsOfExperience: string
  rating: string
  username: string
  password: string
  passwordConfirmation: string
}

export type FormType = {
  data: FormDataType
  errors: FormErrorsType
}

export type SetActiveFormDataType = React.Dispatch<
  React.SetStateAction<FormType>
>

export type FormContextType = {
  activeFormData: FormType
  setActiveFormData: SetActiveFormDataType
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  currentIndex: number
  currentView: React.ReactNode
  isStart: boolean
  isEnd: boolean
  next: () => void
  back: () => void
  goTo: (index: number) => void
  getProgress: () => number
}
