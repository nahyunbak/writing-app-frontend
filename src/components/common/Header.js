import React from 'react';
import styled, {css} from 'styled-components';
import logo from '../../image/9.png'
import MediaQuery from 'react-responsive'

// 모바일형은 사이드바로 
const NavWrapperPC = styled.div`
display: flex;
justify-content: space-around;
position: fixed;
align-items: center;
width: 100vw;
height: 10vh;
background-color: black;
`

const Logo = styled.div`
background-image: url(${logo});
width: 10vw;
height: 33vh;
z-index:3;
background-repeat: no-repeat;
align-items: center;
background-size: 100%;
font-size: 2rem;
position: absolute;
top: 3vh;
`


const NavItemMobile = css`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
position: absolute;
top: 3vh;
color: white;
`

const NavItemPC = css`
display: flex;
justify-content: center;
align-items: center;
font-size: 3vw;
position: absolute;
top: 3vh;
color: white;
`



const NavItem1 = styled.div`


${NavItemPC}
left: 20vw;
`

const NavItem2 = styled.div`
${NavItemPC}
left: 30vw;
`


const NavItem3 = styled.div`
${NavItemPC}
left: 40vw;
`

const NavItem4 = styled.div`
${NavItemPC}
left: 50vw;
`

const NavItem5 = styled.div`
${NavItemPC}
left: 60vw;
`

const Header = () => {
  
  return (
    <NavWrapperPC>
    <Logo/>

    <NavItem1>안녕</NavItem1>
    <NavItem2>대박</NavItem2>
    <NavItem3>우와</NavItem3>
    <NavItem4>왕</NavItem4>
    <NavItem5>어휴</NavItem5>
    </NavWrapperPC>

  );
};

export default Header;