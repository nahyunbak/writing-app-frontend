import React from 'react';
import { AnswerInput, AnswerWrapper, Ask, AuthFormWrapper, BeforeLinkName,  FormWrapper, IconFaArrowLeft, IconFaArrowRight,  NextLinkName, SurveyWrapper } from './NameElements';

const AskAuth = ({askAuth, askAuthPage, askAuthForm}) => {
    const beforePage= `/survey/${askAuthPage-1}`
    const afterPage= `/survey/${askAuthPage+1}`
    return (
        <FormWrapper>
        
        <BeforeLinkName to={beforePage}>
                <IconFaArrowLeft/>
            </BeforeLinkName>
            <AuthFormWrapper>
                <Ask>{askAuth}</Ask>
                <AnswerWrapper>
                <AnswerInput placeholder={askAuthForm}></AnswerInput>
                </AnswerWrapper>
            </AuthFormWrapper>
            <NextLinkName to={afterPage}>
                <IconFaArrowRight/>
            </NextLinkName>
        </FormWrapper>
    );
};

export default AskAuth;