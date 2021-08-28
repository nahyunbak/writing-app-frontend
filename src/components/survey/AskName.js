import React from 'react';
import { AnswerInput, AnswerWrapper, Ask, FormWrapper, IconFaArrowRight,  NextLinkName, SurveyWrapper } from './NameElements';

const AskName = () => {
    return (
        <FormWrapper>
            <SurveyWrapper>
                <Ask>당신의 이름은 무엇인가요?</Ask>
                <AnswerWrapper>
                <AnswerInput placeholder="이름을 입력하세요"></AnswerInput>
                </AnswerWrapper>
            </SurveyWrapper>
            <NextLinkName to="/survey/2">
                <IconFaArrowRight/>
            </NextLinkName>
        </FormWrapper>
    );
};

export default AskName;