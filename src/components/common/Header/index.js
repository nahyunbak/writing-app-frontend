import React from 'react';
import logo from '../../../image/3.png'
import { AuthStatus, HeaderWrapper, HomeLink, InsideHeaderWrapper, LoginLink, Logo, RegisterLink } from './HeaderElements';
const Header = ({username}) => {
  return (
    <HeaderWrapper>
      <InsideHeaderWrapper>
          <HomeLink to="/main">
          <Logo src={logo}/>
          </HomeLink>
          <AuthStatus> 
          {username ? <LoginLink to ="/auth/logout">로그아웃</LoginLink>: 
          <>
          <LoginLink to = "/auth/login">로그인</LoginLink>
          <RegisterLink to ="/survey/1">회원가입</RegisterLink>
        </>}
          </AuthStatus>
      </InsideHeaderWrapper>
    </HeaderWrapper>
  );
};

export default Header;