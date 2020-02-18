import { HandleRequestError, HandleRequestSuccess, IRequestBody } from '../types'

import axios from 'axios'

export const sendRequest = (
  url: string,
  requestBody: IRequestBody,
  handleError: HandleRequestError,
  handleSuccess: HandleRequestSuccess
) => {
  axios.post(url, requestBody)
    .then((response) => {
      handleSuccess(response)
    })
    .catch((error) => {
      handleError(error)
    })
}
