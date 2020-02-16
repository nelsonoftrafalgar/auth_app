import axios, { AxiosResponse } from 'axios'

import { IRequestBody } from '../types'

export const sendRequest = (
  url: string,
  requestBody: IRequestBody,
  handleError: (response: AxiosResponse) => void,
  handleSuccess: (response: AxiosResponse) => void
) => {
  axios.post(url, requestBody)
    .then((response) => {
      handleSuccess(response)
    })
    .catch((error) => {
      handleError(error)
    })
}
