import {
  FormDataType,
  FormErrorsType,
  SetActiveFormDataType,
} from '@/components/form/types'

const errorMessages = {
  emptyField: {
    viewOne: {
      jobTitle: 'Please enter a job title.',
      location: 'Please enter a city or metro area.',
      companyName: 'Please enter a company or employer name.',
      startDate: 'Please enter a start date.',
      endDate: 'Please enter an end date.',
    },
    viewTwo: {
      basePay: 'Please enter a base pay.',
      yearsOfExperience: 'Please enter your years of experience.',
    },
  },
  invalidValue: {
    viewOne: {},
    viewTwo: {
      basePay: 'Please enter valid number.',
      yearsOfExperience: 'Please enter valid years of experience.',
    },
  },
}

/**
 * @function validateForm
 * @description validate from through reseting error fields and checking for valid inputs
 * @params {data} FormDataType, {errors} FormErrorsType, setActiveFormData: SetActiveFormDataType, currentIndex: number
 * @returns boolean
 */

export function validateForm(
  data: FormDataType,
  errors: FormErrorsType,
  setActiveFormData: SetActiveFormDataType,
  currentIndex: number
) {
  let isValidForm = true
  resetErrorFields(errors, setActiveFormData)
  return validateDataFields(data, setActiveFormData, currentIndex, isValidForm)
}

/**
 * @function resetErrorFields
 * @description iterate through and reset error fields
 * @params  {errors} FormErrorsType, setActiveFormData: SetActiveFormDataType
 */

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

/**
 * @function validateDataFields
 * @description iterate through and validate data fields
 * @params  {data} FormDataType, {setActiveFormData} SetActiveFormDataType, {currentIndex} number, {isValidForm} boolean
 */

function validateDataFields(
  data: FormDataType,
  setActiveFormData: SetActiveFormDataType,
  currentIndex: number,
  isValidForm: boolean
) {
  const { emptyField, invalidValue } = errorMessages

  /**
   * Iterate over each field in empty field and set
   * error message ifthe field is empty.
   *
   * If the current key is endDate and data.current is
   * truthy meaning they currently work there -- skip
   * iteration and dont check for empty field
   */

  if (currentIndex === 0) {
    for (const key in emptyField.viewOne) {
      if (key === 'endDate' && data['current']) continue
      if (data[key as keyof typeof emptyField.viewOne]?.trim() === '') {
        setActiveFormData((previousFormData) => ({
          data: { ...previousFormData.data },
          errors: {
            ...previousFormData.errors,
            [key]: emptyField.viewOne[key as keyof typeof emptyField.viewOne],
          },
        }))
        isValidForm = false
      }
    }
  }
  if (currentIndex === 1) {
    for (const key in emptyField.viewTwo) {
      if (data[key as keyof typeof emptyField.viewTwo].trim() === '') {
        setActiveFormData((previousFormData) => ({
          data: { ...previousFormData.data },
          errors: {
            ...previousFormData.errors,
            [key]: emptyField.viewTwo[key as keyof typeof emptyField.viewTwo],
          },
        }))
        isValidForm = false
      }
    }
    for (const key in invalidValue.viewTwo) {
      if (data[key as keyof typeof invalidValue.viewTwo].includes('-')) {
        setActiveFormData((previousFormData) => ({
          data: { ...previousFormData.data },
          errors: {
            ...previousFormData.errors,
            [key]:
              invalidValue.viewTwo[key as keyof typeof invalidValue.viewTwo],
          },
        }))
        isValidForm = false
      }
    }
  }
  return isValidForm
}
