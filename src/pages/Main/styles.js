import styled from 'styled-components'


export const Main = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 0 60px;
  background: #ffffff;
  padding: 0 143px 37px 139px;
  @media (max-width: 330px) {
   padding: 30px 18px;
  }

`
export const MainTitle = styled.h1`
width: 233px;
height: 88px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 220%;
display: flex;
align-items: center;
color: #000000;
margin-bottom: 10px;
@media (max-width: 330px) {
  width: 278px;
height: 29px;
  font-size: 24px;
line-height: 120%;
}
`
export const MainSubTitle = styled.h3`
  width: 363px;
  height: 23px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  letter-spacing: -0.05px;
  color: #ffffff;
  opacity: 0.5;
`
export const MainCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px 26px;
  margin-bottom: 34px;
  @media (max-width: 330px) {
   gap:10px;
  }
`
