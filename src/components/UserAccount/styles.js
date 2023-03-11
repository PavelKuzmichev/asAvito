import styled from 'styled-components'

export const SideBar = styled.div`
  width: 250px;
  height: 70px;
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  padding-bottom: 14px;
  align-items: center;
`
export const SideBarName = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ location }) => (location === '/' ? 'white' : 'black')};
`
export const SideBarAvatar = styled.img`
  width: 43px;
  height: 43px;
  background-color: #313131;
  border-radius: 50%;
`
