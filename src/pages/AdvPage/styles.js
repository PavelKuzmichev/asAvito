import styled from 'styled-components'
import { mainButton } from '../../components/Button/styles'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding: 34px 141px 117px 139px;
`

export const AdvData = styled.div`
  display: flex;
  gap: 59px;

`
export const AdvImageArea = styled.div`
display: flex;
flex-direction: column;
gap: 30px`

export const AdvImageAreaBigImage = styled.div`
width: 480px;
height: 480px;
background: #F0F0F0;
background-image: url(${(props) => props.image ? `http://localhost:8090/${props.image}`: ''});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
`
export const AdvImageAreaBlockSmallImages = styled.div`
display: flex;
gap: 10px;`

export const AdvImageAreaSmallImage = styled.div`
box-sizing: border-box;
width: 88px;
height: 88px;
background: #F0F0F0;
background-image: url(${(props) => props.image ? `http://localhost:8090/${props.image}`: ''});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
border: 2px solid #009EE4;
`
export const AdvTextArea = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
`
export const AdvTextAreaTitle = styled.h1`
width: 621px;
height: 90px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 140%;
margin-bottom: 6px;
color: #000000;
`
export const AdvTextAreaCreateDate = styled.p`
width: 119px;
height: 21px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: #5F5F5F;
`
export const AdvTextAreaCity = styled.p`
width: 126px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: #5F5F5F;

`
export const AdvTextAreaReviews = styled.p`
width: 79px;
height: 21px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
margin-bottom: 30px;
color: #009EE4;`
export const AdvTextAreaButtonsBlock = styled.div`
display: flex;
gap: 10px;
padding-bottom: 47px;`
export const AdvTextAreaButton = styled.button`
border: none;
padding: 13px 37px;
gap: 10px;
max-width: 225px;
height: 50px;
background: #009EE4;
border-radius: 6px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;
`
export const AdvTextAreaPrice = styled.p`


font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 140%;
color: #000000;
margin-bottom: 16px;
`
export const AdvTextAreaShowPhoneBtn = styled.button`
display: flex;
font-family: 'Roboto';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 140%;
text-align: center;
color: #FFFFFF;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px 37px;
gap: 10px;
width: 214px;
height: 62px;
margin-bottom: 30px;
background: #009EE4;
border: none;
border-radius: 6px;`
export const AdvTextAreaSellerBlock = styled.div`
display: flex;
gap: 12px;
`
export const AdvTextAreaSellerAvatar = styled.div`
width: 40px;
height: 40px;
border-radius: 50px;
background: #F0F0F0;
background-image: url(${(props) => props.image ? `http://localhost:8090/${props.image}`: ''});
background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const AdvTextAreaSellerDescription = styled.div`
display: flex;
flex-direction: column;
`
export const AdvTextAreaSellerName = styled.p`
width: 79px;
height: 26px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 130%;
color: #009EE4;
`
export const AdvTextAreaSellerCreateDate = styled.p`
width: 243px;
height: 32px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 200%;
color: #5F5F5F;
`
export const AdvDescription = styled.div`
display: flex;
flex-direction: column;
gap:20px;`
export const AdvDescriptionTitle = styled.h2`
width: 259px;
height: 70px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 220%;
color: #000000;
`
export const AdvDescriptionText = styled.p`
width: 792px;
height: 120px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #000000;
`
export const Title = styled.h1`
  font-size: 64px;
  font-weight: 400;
`

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
`

export const FitForYouWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: space-between;
  column-gap: 87px;
`

export const FitTitle = styled(SectionTitle)`
  margin-bottom: 40px;
`

export const FitForYouItem = styled.div`
  display: -webkit-box;
`
export const FitForYouItemIndex = styled.div`
  display: flex;
  font-size: 32px;
  justify-content: center;
  align-items: center;
  width: 67px;
  height: 67px;
  background-color: #c7e957;
  border-radius: 50%;
  margin-right: 24px;
`
export const FitForYouItemText = styled.p`
  font-size: 24px;
  max-width: 244px;
`

export const DirectionTitle = styled(SectionTitle)`
  margin-bottom: 22px;
`

export const DirectionsList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  grid-auto-flow: column;
  list-style-position: inside;
  column-gap: 20px;
`

export const DirectionItem = styled.li`
  font-size: 24px;
  margin-left: 10px;
`

export const WorkoutDescription = styled.p`
  font-size: 24px;
`

export const TrialWorkoutBlock = styled.div`
  padding: 46px 285px 48px 52px;
  background: #f9ebff;
  border-radius: 30px;
  position: relative;
`

export const TrialWorkoutDescription = styled.p`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 34px;
`
export const TrialButton = styled(mainButton)`
  font-size: 18px;
`

export const TrialPhoneImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`
