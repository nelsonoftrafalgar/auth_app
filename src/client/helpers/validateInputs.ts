export const validateInputs = (email: string, password: string) => {
  const emailPattern = /\S+@\S+\.\S+/
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
  const isEmailValid = emailPattern.test(email)
  const isPasswordValid = passwordPattern.test(password)

  return {isEmailValid, isPasswordValid}
}