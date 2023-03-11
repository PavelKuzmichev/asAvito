import styled, { css } from 'styled-components'

export const AuthForm = styled.form`
position: relative;
width: 366px;
background: #FFFFFF;
border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 47px 47px 41px;
  box-sizing: border-box;
`
export const FormButton = styled.button`
cursor: pointer;
width: 278px;
min-height: 52px;
border: none;
background: #009EE4;
border-radius: 6px;
  color: #ffffff;
  &:hover {
    background: #0080C1;
  }
  $:active {
    background: #271a58;
  }
`
export const FormButtonRegister = styled(FormButton)`
  color: black;
  margin-top: 20px;
  background: transparent;
  border: 1px solid #d0cece;
  &:hover {
    background: #f4f5f6;
  }
  $:active {
    background: #d9d9d9;
  }
`
export const PopupArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FormInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-right: 3px;
  margin-top: 0px;
`
export const FormInputFirst = styled(FormInput)`
  margin-top: 38px;
`
export const FormSpan = styled.span`
  color: red;
  width: 100%;
  min-height: 20px;
  margin-bottom: 20px;
  font-size: 10px;
  border-top: 1px solid red;
  ${(props) =>
    !props.$IsValid &&
    css`
      border-top: 1px solid grey;
    `}
`
export const FormSpanSubmit = styled(FormSpan)`
  margin-bottom: 0;
  text-align: center;
  border-top: 1px solid transparent;
`
