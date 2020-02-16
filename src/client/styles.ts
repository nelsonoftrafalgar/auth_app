import styled, { css } from "styled-components"

import { Link } from 'react-router-dom'

const neuMorphOuter = () => css`
  background: #e0e5ec;
  border-radius: 5px;
  box-shadow: 8px 8px 12px rgb(163,177,198,0.6), -8px -8px 12px rgba(255,255,255, 0.5);
`

const neuMorphInner = () => css`
  background: #e0e5ec;
  border-radius: 5px;
  box-shadow: inset -3px -3px 2px rgba(255,255,255,0.5),inset 3px 3px 2px rgb(163,177,198,0.6);
`

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e0e5ec;
`

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const FormContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WelcomeContainer = styled(FormContainer)`
  min-height: calc(100vh - 100px);
`

export const Input = styled.input<{hasError: boolean}>`
  width: 100%;
  padding: 15px;
  ${neuMorphInner}
  color: #787f8a;
  ${({hasError}) => `border: 1px solid ${hasError ? 'red' : 'transparent'};`}
`

export const Button = styled.button`
  font-size: 20px;
  padding: 15px 30px;
  color: #787f8a;
  ${neuMorphOuter}
  margin: auto auto 0;
  cursor: pointer;
`

export const NavButton = styled(Link)`
  font-size: 20px;
  padding: 15px 30px;
  color: #787f8a;
  ${neuMorphOuter}
  margin: 0 20px 0 0;
  cursor: pointer;
  text-decoration: none;
`

export const Welcome = styled.div`
  font-family: sans-serif;
  font-size: 40px;
  color: #787f8a;
`

export const FormWrapper = styled.form`
  padding: 30px;
  width: 300px;
  height: 300px;
  ${neuMorphOuter}
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ErrorMessage = styled.span`
  color: red;
  font-family: sans-serif;
  height: 18px;
  margin: 5px 0 20px 0;
  width: 100%;
  font-size: 14px;
`