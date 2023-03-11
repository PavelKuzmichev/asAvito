import styled from 'styled-components'

export const PopAreaForTrainings = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  z-index: 1;
`

export const PopupAreaMenu = styled.div`
  height: 626px;
  width: 444px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
`
export const Title = styled.h1`
  height: 40px;
  left: 53px;
  top: 36px;
  display: flex;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 40px;
`
export const TrainingBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 278px;
  left: 83px;
  margin-bottom: 12px;
  top: 0px;
  border: ${(props) =>
    props.active ? '1px solid #06b16e' : '1px solid #000000'};
  border-radius: 26px;
  color: ${(props) => (props.active ? '#06b16e' : '#000000')};
  position: relative;
  & svg {
    position: absolute;
    top: 12px;
    right: 12px;
  }
`

export const BtnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const BtnTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  letter-spacing: -0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  margin-top: 11px;
  margin-bottom: 6px;
`

export const BtnSubtitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.5px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  margin-bottom: 17px;
`
