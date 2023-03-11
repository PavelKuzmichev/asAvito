import styled from 'styled-components'
import { greenButton } from '../../components/Button/styles'

export const SellerPage = styled.section`
padding: 0 143px 66px 139px;
`
export const SellerPageTitle = styled.h1`
width: 362px;
height: 88px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 220%;
color: #000000;
`
export const SellerPageData = styled.div`
display: flex;
gap: 50px;
margin-top: 10px;
margin-bottom: 44px;

`
export const SellerPageAvatar = styled.div`
width: 170px;
height: 170px;
border-radius: 100px;
background: #F0F0F0;
background-image: url(${(props) => props.image ? `http://localhost:8090/${props.image}`: ''});

background-position: center;
background-size: contain;
`
export const SellerPageTextArea = styled.div`
display: flex;
flex-direction: column;
`
export const SellerPageName = styled.p`
width: 172px;
height: 40px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 200%;
color: #000000;
`
export const SellerPageCity = styled.p`
width: 132px;
height: 32px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 200%;
color: #5F5F5F;
`
export const SellerPageCreateDate = styled.p`
width: 243px;
height: 32px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 200%;
color: #5F5F5F;
`
export const SellerPageShowPhoneBtn = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 37px;
gap: 10px;
width: 214px;
height: 62px;
margin-top: 40px;
background: #009EE4;
border-radius: 6px;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 140%;
text-align: center;
color: #FFFFFF;
border: none;
`
export const SellerPageBloockCardsTitle = styled.h2`
width: 268px;
height: 70px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 220%;
display: flex;
align-items: center;
color: #000000;
`
export const SellerPageCardsBlock = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 40px 26px;
margin-bottom: 34px;
`
export const MyprofileBlock = styled.section`
  display: flex;
  flex-direction: column;
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
  gap: 40px;
  flex-wrap: wrap;
`

export const MyprofileCards = styled.section`
  display: flex;

  flex-direction: row;
  position: relative;
`
