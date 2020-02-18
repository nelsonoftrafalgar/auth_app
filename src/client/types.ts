import { AxiosError, AxiosResponse } from "axios"

import { RouteComponentProps } from "react-router-dom"

export interface IRequestBody {
  email?: string
  password?: string
  token?: string
}

export interface IFormError extends IRequestBody {}

export type HandleRequestError = (response: AxiosError) => void
export type HandleRequestSuccess = (response: AxiosResponse) => void
export type IsAuthorizedCallback = (shouldRedirect: boolean) => void

export interface IFormProps {
  handleEmail: (e: React.FormEvent<HTMLInputElement>) => void
  handlePassword: (e: React.FormEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  error: IFormError
  type: string
  nav: JSX.Element
}

export interface IPrivateRouteProps {
  component: React.ComponentType<RouteComponentProps>
  path: string
}