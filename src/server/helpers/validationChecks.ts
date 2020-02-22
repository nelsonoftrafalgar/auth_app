import { check } from "express-validator"

export const validationChecks = [
  check('email').exists().isEmail(),
  check('password').exists().isLength({min: 8}).matches(/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/)
]