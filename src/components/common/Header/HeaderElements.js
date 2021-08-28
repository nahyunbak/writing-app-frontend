import { Link } from "react-router-dom"
import styled, {css} from "styled-components"


export const HeaderWrapper = styled.div`
    margin: 0px auto;
    height: 10vh;
    margin-bottom: 150px;

`

export const InsideHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    height: 10vh;
    
    align-items: center;
    margin: 20px;
    
`


export const AuthStatus= styled.div`
    width: 200px;
    height: 10vh;
    padding: 20px 0px;
    text-align: right;

`


const LinkStyle = css`
    color: #696969;
    &:hover{
        color: #696969;
    }
`

export const HomeLink = styled(Link)`
    margin-top: 20px;
    ${LinkStyle}
    
 `

export const LoginLink = styled(Link)`
    ${LinkStyle}
    color: #696969;
    margin: 10px;
    
    
 `

export const LogoutLink = styled(Link)`
   ${LinkStyle}
   color: #696969;   
`

export const RegisterLink = styled(Link)`
   ${LinkStyle}
   color: #696969;
`

export const Logo = styled.img`
    width: 80px;
    height: 80px;
    margin-top: -35px;
`



