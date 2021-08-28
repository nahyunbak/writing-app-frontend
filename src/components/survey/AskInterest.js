import React from 'react';
import { Answer, AnswerBox, AnswerWrapper, Ask, BeforeLink, FormWrapper, IconBsPersonCheckFill, IconFaArrowLeft, IconFaArrowRight, IconFaPencilAlt, IconFaRegHandshake, IconFiRefreshCcw, IconGiBookshelf, IconGiReceiveMoney, IconGoKeyboard, NextLink, NextLinkName, SurveyWrapper } from './NameElements';


const AskInterest = () => {
    
    return (
        <FormWrapper>
        <BeforeLink to="/survey/2">
        <IconFaArrowLeft/>
        </BeforeLink>
            <SurveyWrapper>
           
                <Ask>관심 분야는 무엇인가요?</Ask>
                <AnswerWrapper>
                <AnswerBox>
                <IconGiBookshelf/>
                <Answer>어휘력 향상</Answer>
                </AnswerBox>
                
                <AnswerBox checked="true">
                <IconFaPencilAlt/>
                <Answer>필력 향상</Answer>
                </AnswerBox>
             
                <AnswerBox>
                <IconFaRegHandshake/>
                <Answer>출간</Answer>
                </AnswerBox>

                <AnswerBox>
                <IconFiRefreshCcw/>
                <Answer>글쓰기 습관</Answer>
                </AnswerBox>

                <AnswerBox>
                <IconBsPersonCheckFill/>
                <Answer>작가 컨택</Answer>
                </AnswerBox>

                <AnswerBox>
                <IconGiReceiveMoney/>
                <Answer>높은 인세</Answer>
                </AnswerBox>

            

                </AnswerWrapper>
                
            </SurveyWrapper>
            
            <NextLink to="/survey/4">
                <IconFaArrowRight/>
            </NextLink>
        </FormWrapper>
    );
};

export default AskInterest;






