import styled, {
  css
} from 'styled-components'
import {
  greenButton
} from '../Button/styles'
/* import cardYoga from './images/card-yoga.png'
import cardStrech from './images/'
import cardStep from './images/card-step.png'
import cardDance from './images/card-dance.png'
import cardBody from './images/card-body.png' */

export const Card = styled.div `
  cursor: pointer;
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 4px;
width: 270px;
text-decoration: none;
height: 441px;
  &:hover {
    scale: 1.01;
  }
  @media (max-width: 330px) {
    padding: 0px 0px 20px;
    gap: 10px;
    width: 137px;
    height: 293px;
    background: #FFFFFF;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`
export const CardTitle = styled.h3 `
width: 259px;
height: 52px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 120%;
color: #009EE4;
margin-bottom: 6px;
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 330px) {
    width: 115px;
    height: 51px;
    font-size: 14px;
  }
`
export const CardImage = styled.div `
width: 270px;
height: 270px;
background: #F0F0F0;
background-image: url(${(props) => props.image ? `http://localhost:8090/${props.image}` : ''});
background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
margin-bottom: 16px;
@media (max-width: 330px) {
  width: 137px;
  height: 132px;
  background: #D9D9D9;
  background-image: url(${(props) => props.image ? `http://localhost:8090/${props.image}` : ''});
  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    margin-bottom: 0;
}
`
export const CardCity = styled.p `
height: 21px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: #5F5F5F;
display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  @media (max-width: 330px) {
    width: 117px;
height: 16px;
font-size: 12px;


  }
`
export const CardPrice = styled.p `

height: 33px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 150%;
color: #000000;
margin-bottom: 6px;
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-widht: 100%;
  @media (max-width: 330px) {
    font-size: 16px;
heigth: 24px;

  }
`
export const CardCreateDate = styled.p `
width: 119px;
height: 21px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 130%;
color: #5F5F5F;
@media (max-width: 330px) {
  font-size: 12px;
heigth: 16px;

}
`

export const ForwardCardGreenBtn = styled(greenButton)
`
  position: absolute;
  left: 30px;
  bottom: 27px;
`