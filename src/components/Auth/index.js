import React from 'react';
import { AuthWrapper, BoxLine, BoxLink, BoxWrapper, ChoiceWrapper } from './AuthElements';
import {GiFeatherWound} from 'react-icons/gi'
const Auth = () => {
    return (
        <AuthWrapper>
            <ChoiceWrapper>
            <BoxLink to="/login" >
                <BoxWrapper>
                    <GiFeatherWound/>
                    <BoxLine></BoxLine>
                </BoxWrapper>
            </BoxLink>
            <BoxLink to="/register">
                <BoxWrapper>
                    <BoxLine>호</BoxLine>
                </BoxWrapper>
            </BoxLink>
            </ChoiceWrapper>
        </AuthWrapper>
    );
};

export default Auth;