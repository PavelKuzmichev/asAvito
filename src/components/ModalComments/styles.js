import styled from 'styled-components'

export const StyledChangePassword = styled.div``

export const AuthForm = styled.form`
position: relative;
width: 600px;
height: 800px;
background: #FFFFFF;
border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px 50px 42px;
  box-sizing: border-box;
`
export const MyProfileInputArea = styled.div`
width: 500px;
height: 78px;
display: flex;
flex-direction: column;
gap: 4px;
`
export const MyProfileInputAreaText = styled.div`
width: 500px;
display: flex;
flex-direction: column;
gap: 4px;
`

export const CommentItem = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;

gap: 12px;
min-width: 100%;
height: 124px;
`
export const CommentAvatar = styled.div`
width: 40px;
height: 40px;
border-radius: 50px;
background: #F0F0F0;
background-image: url(${(props) => props.image ? `http://localhost:8090/${props.image}`: ''});
background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const CommentHeader = styled.div`
display: flex;
gap: 10px;
`
export const CommentAuthor = styled.h2`

height: 32px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 200%;
color: #000000;
`
export const CommentDate = styled.p`
height: 32px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 200%;
color: #5F5F5F;
`
export const CommentTextArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0px;

height: 80px;
`
export const CommentTitle = styled.h2`
width: 116px;
height: 32px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 200%;
color: #000000;
`
export const CommentsArea = styled.div`
display: flex;
margin-top: 30px;
gap: 30px;
flex-direction: column;
min-width: 100%;
overflow-y: scroll;
`
export const CommentText = styled.p`

height: 48px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #000000;
`
export const MyProfileInput = styled.input`
box-sizing: border-box;
height: 50px;
background: #FFFFFF;
border: 1px solid #009EE4;
border-radius: 6px;
`
export const MyProfileTextArea = styled.textarea`
box-sizing: border-box;
width: 500px;
min-height: 200px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 6px;
`
export const PopupTitle = styled.h1`
width: 285px;
height: 70px;
left: 50px;
top: 20px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 220%;
color: #000000;
`
export const MyProfileLable = styled.label`
height: 24px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #000000;
`
export const FormButton = styled.button`
padding: 13px 37px;
width: 181px;
height: 50px;
margin-top: 14px;
background: #009EE4;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;
border: none;
border-radius: 6px;
  &:hover {
    background: #3f007d;
  }
  $:active {
    background: #271a58;
  }
`

export const PopupArea = styled.div`
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

export const FormInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-right: 3px;
  margin-bottom: 30px;
  margin-top: 38px;
`
export const FormInputFirst = styled(FormInput)`
  margin-top: 0px;
`
export const FormSpan = styled.span``
