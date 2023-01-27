import {
  FormDataType,
  FormErrorsType,
  FormType,
  SetActiveFormDataType,
} from '@/components/form/types'

const errorMessages = {
  emptyField: {
    jobTitle: 'Please enter a job title.',
    location: 'Please enter a city or metro area.',
    companyName: 'Please enter a company or employer name.',
    startDate: 'Please enter a start date.',
    endDate: 'Please enter an end date.',
  },
}

let isValidForm = true

export function validateForm(
  data: FormDataType,
  errors: FormErrorsType,
  setActiveFormData: SetActiveFormDataType
) {
  resetErrorFields(errors, setActiveFormData)
  validateEmptyFields(data, setActiveFormData)

  return isValidForm
}

function resetErrorFields(
  errors: FormErrorsType,
  setActiveFormData: SetActiveFormDataType
) {
  for (const key in errors) {
    setActiveFormData((previousFormData) => ({
      data: { ...previousFormData.data },
      errors: { ...previousFormData.errors, [key]: '' },
    }))
  }
}

function validateEmptyFields(
  data: FormDataType,
  setActiveFormData: SetActiveFormDataType
) {
  const { emptyField } = errorMessages

  /**
   * Iterate over each field in empty field and set error message if
   * the field is empty.
   *
   * If the current key is endDate and data.current is truthy meaning
   * they currently work there -- skip iteration and dont check for
   * empty field
   *
   */

  for (const key in emptyField) {
    if (key === 'endDate' && data['current']) continue
    if (data[key as keyof typeof emptyField].trim() === '') {
      setActiveFormData((previousFormData) => ({
        data: { ...previousFormData.data },
        errors: {
          ...previousFormData.errors,
          [key]: emptyField[key as keyof typeof emptyField],
        },
      }))
      console.log(isValidForm)
      isValidForm = false
    }
  }
}
