import React from 'react';
import Header from '../components/common/Header/index';
import AskAuth from '../components/survey/AskAuth';

import AskInterest from '../components/survey/AskInterest';
import AskName from '../components/survey/AskName';
import AskWho from '../components/survey/AskWho';
import FinishForm from '../components/survey/FinishForm';


/*
        {step==='5'? <AskPassword/>: null}
        {step==='6'? <AskPasswordCheck/>: null}
        {step==='7'? <ConfirmSignIn/>: null}
        */

// 컨테이너에서 step 값에 따라서 보여줄 페이지가 달라진다. 

// step 7 에서 이름 동적으로 바꾸기 -- 
const SurveyPage = ({match}) => {
    const {step}= match.params; 
    return (
        <>
        <Header/>
        {step==='1'? <AskName/>: null}
  {step==='2'? <AskWho/>: null}
  {step==='3'? <AskInterest/>: null}
  {step==='4'? <AskAuth  askAuth="아이디를 입력하세요" askAuthForm="아이디를 입력하세요" askAuthPage={parseInt(step)}/>: null}
  {step==='5'? <AskAuth  askAuth="비밀번호를 입력하세요" askAuthForm="비밀번호를 입력하세요" askAuthPage={parseInt(step)}/>: null}
  {step==='6'? <AskAuth  askAuth="비밀번호를 확인하세요" askAuthForm="비밀번호를 입력하세요" askAuthPage={parseInt(step)}/>: null}
  {step==='7'? <FinishForm name="박나현"/>: null}
        </>
    );
};

export default SurveyPage;


