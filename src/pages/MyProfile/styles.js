import styled from 'styled-components'
import { greenButton } from '../../components/Button/styles'

export const MyprofileBlock = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 141px 79px 139px;
`
export const MyprofileBlockTitle = styled.h2`
width: 405px;
height: 88px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 220%;
color: #000000;
`
export const MyprofileBlockSettingsTitle = styled.h3`
width: 304px;
height: 70px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 220%;
color: #000000;
`
export const MyprofileBlockSettings = styled.div`
margin-top: 20px;
display: flex;
gap: 50px;
`
export const MyprofileBlockAvatarArea = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`
export const MyProfileBlockAvatarImg = styled.div`
width: 170px;
height: 170px;
border-radius: 100px;
background: #F0F0F0;
background-image: url(${(props) => props.image ? `http://localhost:8090/${props.image}`: ''});
background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const MyprofileBlockAvatarBtn = styled.button`
border: none;
width: 74px;
height: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #009EE4;
background: transparent;

`
export const MyprofileBlockAvatarInput = styled.input`
border: none;
width: 74px;
height: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
opacity: 0;
background: transparent;
color: transparent;

`
export const MyProfileSettingsFormBtn = styled.button`
width: 154px;
height: 50px;
border: none;
background: #009EE4;
border-radius: 6px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;
`
export const MyProfileInputAreaLong = styled.div`
box-sizing: border-box;
width: 614px;
height: 78px;
display: flex;
flex-direction: column;
gap: 4px;
`
export const MyProfileCardsBlockTitle = styled.h2`
width: 186px;
height: 70px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 220%;

color: #000000;
`
export const MyProfileSettingsForm = styled.form`
display: flex;
flex-wrap: wrap;
align-items: flex-start;
padding: 0px;
gap: 20px 14px;
width: 614px;
height: 354px;
`
export const MyProfileInputArea = styled.div`
width: 300px;
height: 78px;
display: flex;
flex-direction: column;
gap: 4px;
`
export const MyProfileLable = styled.label`
width: 33px;
height: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 150%;
color: #009EE4;
`
export const MyProfileInput = styled.input`
box-sizing: border-box;

height: 50px;
background: #FFFFFF;
border: 1px solid #009EE4;
border-radius: 6px;
`
export const MyprofileHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 36px;
`

export const MyprofileUserInfo = styled.section`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 286px;
  margin-bottom: 75px;
`

export const Button = styled.button`
  width: 278px;
  height: 52px;
  cursor: pointer;
  background: #580ea2;
  border-radius: 46px;
  margin-left: 4px;
  border: none;
  margin-bottom: 14px;
  box-sizing: border-box;
  color: #ffffff;
  &:hover {
    background: #3f007d;
  }
  :active {
    background: #271a58;
  }
`

export const MyprofileUserChangeButtons = styled.div`
  gap: 14px;
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 60px;
  margin-top: 61px;
`

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  margin-bottom: 20px;
`

export const ForwardCardGreenBtn = styled(greenButton)`
  position: absolute;
  left: 30px;
  bottom: 27px;
`

export const MyProfileCardsBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  flex-wrap: wrap;
`

export const MyprofileCards = styled.section`
  display: flex;

  flex-direction: row;
  position: relative;
`
