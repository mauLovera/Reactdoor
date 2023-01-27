import { FormDataType, FormErrorsType } from '../types'

export function renderError(
  type: string,
  name: string,
  data: FormDataType,
  errors: FormErrorsType
) {
  switch (type) {
    case 'text':
      if (data[name as keyof FormDataType]?.trim() === '') {
        return errors[name as keyof FormErrorsType]
      }
      return ''
    case 'password':
      return errors[name as keyof FormErrorsType]
    default:
      return
  }
}
