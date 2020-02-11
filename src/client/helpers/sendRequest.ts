import axios, { AxiosResponse } from 'axios'

import { IRequestBody } from '../types'

export const sendRequest = (
  url: string,
  requestBody: IRequestBody,
  handleError: (response: AxiosResponse) => void
) => {
  axios.post(url, requestBody)
    .then((response) => {
      console.log('response', response)
    })
    .catch((error) => {
      handleError(error.response)
      throw new Error(error)
    })
}
