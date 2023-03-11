import styled from 'styled-components'

export const FormWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 36px 42px 44px;

  max-width: 444px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

export const ProgressForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-right: 3px;
  margin-bottom: 30px;
  margin-top: 0px;
`
