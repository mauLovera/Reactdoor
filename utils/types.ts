export type FromEntryType = {
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
}

export type FormEntryContextType = {
  handleAddEntry: (newFormEntry: FromEntryType) => void
  handleDeleteEntry: (id: string) => void
  formEntries: [] | FromEntryType[]
}
