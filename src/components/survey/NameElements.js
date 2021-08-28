import styled, {css} from "styled-components";
import { GoKeyboard } from "react-icons/go";
import { GiBookshelf, GiReceiveMoney  } from "react-icons/gi";
import { FaRegHandshake, FaPencilAlt, FaArrowLeft, FaArrowRight, FaChalkboardTeacher } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
import { BsPersonCheckFill } from "react-icons/bs";
import { IoStorefront } from "react-icons/io5";
import { RiBook3Line, RiBook3Fill } from "react-icons/ri";

import { MdComputer } from "react-icons/md";

import { Link } from "react-router-dom";
//1단계면 Name을 보여주고, 2단계면 .. 

export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const SurveyWrapper = styled.div`
    width: 900px;
    height: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`


export const AuthFormWrapper= styled.div`
   width: 800px;
   margin-top: -150px;

`
export const Ask = styled.div`
    width: 550px;
    height: 50px;
    text-align: center;
    font-size: 3rem;
    margin: 80px auto;
`


export const AnswerWrapper = styled.div`
    width: 700px;
    height: 500px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`

export const AnswerBox = styled.div`
    width: 160px;
    height: 160px;
    border: 2px solid black;
    color: #696969;

    border-radius: 10px;
    font-size: 1.5rem;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
    border-radius: 20px;
    transition: all 0.2s ease-in;
    background-color: ${({checked})=>(checked ? '#faf2eb': 'white')};
    transform: ${({checked})=>(checked ? 'scale(1.05)': 'null')};
    color: ${({checked})=>(checked ? 'black': 'null')};
    &:hover {
        transform: scale(1.05);
        color: black;
        background-color: #faf2eb;

    }
    
`

export const Answer = styled.span`
font-size: 1.5rem;
text-align: center;
`

export const AnswerBoxWho = styled(AnswerBox)`
padding-left: 3px;
padding-right: 3px;

`

export const AnswerInput = styled.input`
    width: 600px;
    height: 60px;
    font-size: 2rem;
    

    border: 1px solid #696969;
    margin-top: 150px;
    margin-left: 100px;
    color: #696969;
    
    
    

    
`

//링크버튼 

export const BeforeLink = styled(Link)`
    width: 50px;
    height: 50px;
    margin-top: 240px;
    margin-right: 21px;
    color: #696969;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: black;
    }
`

export const NextLink = styled(Link)`
    width: 50px;
    height: 50px;
    margin-top: 240px;
    color: #696969;
    margin-left: -33px;
    transition: all 0.2s ease-in-out;
    &:hover {
        color: black;
    }
`

export const BeforeLinkName = styled(NextLink)`
    margin-top: -100px;
    margin-left: -60px;
`
export const NextLinkName = styled(NextLink)`
    margin-top: -100px;
`


// 환영 


export const GreetingWrapper = styled.div`
color: #696969;
&:hover {
        color: #696969;
    }
` 

export const GreetingBox  = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;

justify-content: space-between;
`

export const NameCalling = styled.div`
font-size: 3rem;
margin-top: 40px;

animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
};
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
};
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
};
@-o-keyframes fadein { /* Opera */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
};
`

export const Greeting = styled.div`
font-size: 3rem;
margin-top: 20px;
animation: fadein 4s;
  -moz-animation: fadein 4s; /* Firefox */
  -webkit-animation: fadein 4s; /* Safari and Chrome */
  -o-animation: fadein 4s; /* Opera */

@keyframes fadein {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-moz-keyframes fadein { /* Firefox */
    0% {
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-webkit-keyframes fadein { /* Safari and Chrome */
    0% {
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-o-keyframes fadein { /* Opera */
    0% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
};
`


export const Cheer = styled.div`
font-size: 3rem;
margin-top: 20px;
animation: fadein 6s;
  -moz-animation: fadein 6s; /* Firefox */
  -webkit-animation: fadein 6s; /* Safari and Chrome */
  -o-animation: fadein 6s; /* Opera */

@keyframes fadein {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-moz-keyframes fadein { /* Firefox */
    0% {
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-webkit-keyframes fadein { /* Safari and Chrome */
    0% {
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-o-keyframes fadein { /* Opera */
    0% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
};
`


export const LinkWrapper = styled(Link)`
    width: 100px;
    height: 50px;
    border: 1px solid #696969;
    font-size: 1.7rem;
    text-align: center;
    margin-top: 100px;
    margin-right: 10px;
    color: #696969;
    transition: all 0.5s ease-in-out;
    animation: fadein 8s;
  -moz-animation: fadein 8s; /* Firefox */
  -webkit-animation: fadein 8s; /* Safari and Chrome */
  -o-animation: fadein 8s; /* Opera */

@keyframes fadein {
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-moz-keyframes fadein { /* Firefox */
    0% {
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-webkit-keyframes fadein { /* Safari and Chrome */
    0% {
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
};
@-o-keyframes fadein { /* Opera */
    0% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
};

    &:hover {
        background-color: #faf2eb;
        color: #696969;
     
    }
`

export const CheckImg = styled.img`
width: 150px;
height: 150px;
`
// 아이콘 

const IconStyle = css`
font-size: 5rem;
`

export const IconGoKeyboard = styled(GoKeyboard)`
    ${IconStyle}
`

export const IconGiBookshelf = styled(GiBookshelf)`
    ${IconStyle}
`

export const IconFaRegHandshake = styled(FaRegHandshake)`
    ${IconStyle}
`

export const IconFiRefreshCcw = styled(FiRefreshCcw)`
    ${IconStyle}
`

export const IconFaPencilAlt = styled(FaPencilAlt)`
    ${IconStyle}
`

// 
export const IconGiReceiveMoney = styled(GiReceiveMoney)`
    ${IconStyle}
`

// 작가 컨택
export const IconBsPersonCheckFill = styled(BsPersonCheckFill)`
    ${IconStyle}
`

//글쓰기 강사 

export const IconFaChalkboardTeacher = styled(FaChalkboardTeacher)`
    ${IconStyle}
`

// 플랫폼관계자 

export const IconIoStorefront = styled(IoStorefront)`
    ${IconStyle}
`

//작가 지망생 
export const IconRiBook3Line = styled(RiBook3Line)`
    ${IconStyle}
`

//기성작가 
export const IconRiBook3Fill = styled(RiBook3Fill)`
    ${IconStyle}
`

//출판사 관계자 

export const IconMdComputer = styled(MdComputer)`
    ${IconStyle}
`

//좌우 버튼 
export const IconFaArrowLeft = styled(FaArrowLeft)`
    ${IconStyle}
`

export const IconFaArrowRight = styled(FaArrowRight)`
    ${IconStyle}
`