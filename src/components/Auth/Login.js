import React from 'react';
import { AuthButton, AuthForm, AuthInput, AuthTitle, AuthWrapper } from './AuthElements';
import logo from '../../image/3.png'
const Login = () => {
    return (
        <AuthWrapper>

        <AuthForm>
        <AuthTitle src = {logo}/>
        <AuthInput placeholder="아이디를 입력하세요"/>
        <AuthInput placeholder="비밀번호를 입력하세요"/>
        <AuthButton>로그인하기</AuthButton>
        </AuthForm>
        </AuthWrapper>
    );
};

export default Login;