import styled from 'styled-components'

export const mainButton = styled.button`
width: 278px;
height: 52px;
border-radius: 6px;
  cursor: pointer;
  background: ${({ transparent }) => (transparent ? 'transparent' : '#009EE4')};
  border: ${({ transparent }) => (transparent ? '1px solid #d0cece' : 'none')};
  box-sizing: border-box;
  color: ${({ transparent }) => (transparent ? 'black' : 'white')};
  transition: 0.3s;
  &:hover {
    background: ${({ transparent }) => (transparent ? '#f4f5f6' : '#3f007d')};
  }
  &:active {
    background: ${({ transparent }) => (transparent ? '#d9d9d9' : '#271a58')};
  }
`
export const greenButton = styled.button`
  cursor: pointer;
  width: 147px;
  height: 48px;
  background: #c7e957;
  border-radius: 46px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.1px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #000000;
  align-self: center;
  border: none;
  transition: 0.3s;
  &:hover {
    background: #daf289;
  }
  &:active {
    background: #ebffab;
  }
`

export const headerButton = styled.button`
  display: ${({ visible }) => (!visible ? 'none' : 'block')};
  padding: 5px 16px 5px;
  width: 77px;
  height: 36px;
  background: #140d40;
  border-radius: 46px;
  border: none;
  font-family: 'StratosSkyeng';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #2d1f79;
  }
  &:active {
    background: #3b29a1;
  }
`
