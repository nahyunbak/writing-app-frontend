import styled from "styled-components"

export const AuthWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const AuthForm = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 400px;
    border: 1px solid #c7c7c7;
    border-radius: 10px;


`

export const AuthTitle = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    opacity: 0.8;

`
export const AuthInput = styled.input`
    width: 270px;
    height: 50px;
    border: none;
    border-bottom: 1px solid #696969;
    &:focus {
        outline: none;
    }


`

export const AuthButton = styled.div`
width: 270px;
height: 50px;
border: 1px solid #faf2eb;
color: #696969;
margin-bottom: 20px;
background-color: #faf2eb;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
`
