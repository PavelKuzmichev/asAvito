import styled, { css } from 'styled-components'

export const Header = styled.header`
 
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 330px) {
  display: none;
  }
`
export const HeaderButtonsBlock = styled.div`
display: flex;
gap: 10px;
`
export const HeaderBlueHalf = styled.div`
background: #009EE4;
width: 100%;
display: flex;
justify-content: flex-end;
padding: 20px 141px 19px 114px;
`
export const HeaderWhiteHalf=styled.div`
display: flex;
align-items: center;
flex-direction: row;
width: 100%;
justify-content: space-between;
padding: 43px 168px 43px 114px;
background: #FFFFFF;
`
export const HeaderSearch = styled.input`
box-sizing: border-box;
width: 876px;
height: 50px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 6px;
margin-left: 60px;
::placeholder {
  padding-left: 16px;
}
@media (max-width: 330px) {
  width: 243px;
  height: 32px;
  border-radius: 30px;
  margin-left: auto;
}
`
export const HeaderSearchButton = styled.button`
box-sizing: border-box;
width: 158px;
height: 50px;
background: #009EE4;
border: 1px solid #009EE4;
border-radius: 6px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;
`
export const HeaderSearchArea = styled.div`
display: flex;
gap: 10px;
`
export const HeaderButton = styled.button`

box-sizing: border-box;
width: 224px;
height: 40px;
border: 1px solid #FFFFFF;
border-radius: 6px;
background: #009EE4;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;

  :hover {
    background: #2d1f79;
  }

  :active {
    background: #3b29a1;
  }

  ${(props) =>
    props.$IsUserLogged &&
    css`
      visibility: hidden;
    `}
`
export const HeaderMobile = styled.div`
display: none;
@media (max-width: 330px) {
display: flex;

height: 55px;
background: #009EE4;
box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
padding: 11px 18px 12px 17px;
}
`