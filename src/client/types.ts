export interface IRequestBody {
  email: string
  password: string
}

export interface IFormError extends IRequestBody {}

export interface IContext {
  handleEmail: (e: React.FormEvent<HTMLInputElement>) => void
  handlePassword: (e: React.FormEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  error: IFormError
}