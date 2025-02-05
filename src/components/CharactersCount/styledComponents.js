import styled from 'styled-components'

export const AppContainer = styled.div`height:100vh;
display:flex;
padding:40px;
`

export const CharacetersDisplayContainer = styled.div`width:50%;
    background-color: #ffc533;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-top-left-radius:30px;
    border-bottom-left-radius:30px;

     `
export const CharacetersDisplayContainerHeadingContainer = styled.div`
background-color: #ffbf1f;
height:20vh;
width:100%;
padding:20px;
border-top-left-radius:30px;
`
export const CharacetersDisplayContainerHeading = styled.h1`color:#0f172a;`

export const Image = styled.img`height:50%;
    width:100%;
    margin:50px;`

export const CountContainer = styled.div`width:50%;
    background-color:#0f172a;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-top-right-radius:30px;
    border-bottom-right-radius:30px;
    padding:20px;`

export const CountContainerHeading = styled.h1`color:#ffc533;`

export const InputContainer = styled.form`display:flex;
justify-content:center;

width:100%;
    `

export const Input = styled.input`
    border:none;
    outline:none;
    height:40px;
    color:#272c47;
    font-weight:bold;
    border-radius:6px;
    width:80%;
    padding:10px;`

export const Button = styled.button`background-color:#ffc533;
    color:#334155;
    font-weight:bold;
    height:40px;
    border:none;
    border-radius:10px;
    outline:none;
    cursor:pointer;
    width:80px;
    margin-left:10px;
    `

export const CharactersContainer = styled.ul`list-style-type:none;
align-self:flex-start;`

export const ListItem = styled.li`

margin-top:15px;`

export const WordLength = styled.p`
color:#0f172a;
font-size:22px;
font-weight:bold;
`
