
import React from 'react';
import { Answer, AnswerBox, AnswerBoxWho, AnswerWrapper, Ask, BeforeLink, FormWrapper, IconFaArrowLeft, IconFaArrowRight, IconFaChalkboardTeacher, IconIoStorefront, IconMdComputer, IconRiBook3Fill, IconRiBook3Line, NextLink, SurveyWrapper } from './NameElements';


const AskWho = () => {
    
    return (
        <FormWrapper>
        <BeforeLink to ="/survey/1">
        <IconFaArrowLeft/>
        </BeforeLink>
            <SurveyWrapper>
           
                <Ask>당신은 누구인가요?</Ask>
                <AnswerWrapper>
                <AnswerBox>
                <IconRiBook3Line/>
                <Answer>작가 지망생</Answer>
                </AnswerBox>
                
                <AnswerBox checked="true">
                <IconRiBook3Fill/>
                <Answer>기성 작가</Answer>
                </AnswerBox>
             
                <AnswerBox>
                <IconFaChalkboardTeacher/>
                <Answer>글쓰기 강사</Answer>
                </AnswerBox>

                <AnswerBoxWho>
                <IconMdComputer/>
                <Answer>출판사 관계자</Answer>
                </AnswerBoxWho>

                <AnswerBoxWho>
                <IconIoStorefront/>
                <Answer>플랫폼 관계자</Answer>
                </AnswerBoxWho>
                </AnswerWrapper>
                
            </SurveyWrapper>
            <NextLink to="/survey/3">
                <IconFaArrowRight/>
            </NextLink>
        
        </FormWrapper>
    );
};

export default AskWho;


