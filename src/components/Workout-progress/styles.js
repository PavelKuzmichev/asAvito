import styled from 'styled-components'

export const ProgressWrapper = styled.div`
  background-color: #f2f2f2;
  border-radius: 30px;
  padding: 36px 55px 32px 44px;
  max-width: 638px;
`

export const ProgressTitle = styled.h3`
  text-align: center;
`

export const ProgressList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 27px;
`

export const ProgressListItem = styled.li`
  display: flex;
  column-gap: 34px;
  justify-content: space-between;
`

export const ProgressBar = styled.div`
  max-width: 278px;
  min-width: 278px;
  height: 36px;
  border-radius: 22px;
  border: 2px solid ${({ borderColor }) => borderColor};
  background-color: ${({ bgc }) => bgc};
`

export const ProgressBarInner = styled.div`
  max-width: 278px;
  width: ${({ width }) => `${width}%`};
  height: 100%;
  border-radius: inherit;
  background-color: ${({ bgc }) => bgc};
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
  transition: width 1s ease-in-out;
`

export const ProgressNumber = styled.span`
  color: white;
`
