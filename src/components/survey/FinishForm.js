import React from 'react';
import { Cheer, FormWrapper, Greeting, GreetingBox, GreetingWrapper, IconFaArrowLeft, IconFaArrowRight, LinkWrapper, NameCalling, NextLink} from './NameElements';

const FinishForm = ({name}) => {
    return (
        <FormWrapper>
        <GreetingBox>
            <GreetingWrapper>
            <NameCalling>{name} 님</NameCalling>
            <Greeting>글쓰기 공작소에 오신 것을 환영합니다</Greeting>
            <Cheer>이제부터 글쓰기를 즐겨보세요!</Cheer>
            </GreetingWrapper>
            <LinkWrapper to = "/main">시작</LinkWrapper>
            
            </GreetingBox>
        </FormWrapper>
    );
};

export default FinishForm;


