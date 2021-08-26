import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import { FirstTextStyle, SecondTextStyle, StartButton, TextWrapper, Wrapper } from "./LandingElememts";


const Landing = () => {
  return (
      <Wrapper>
        <TextWrapper>
          <FirstTextStyle>글쓰기는 </FirstTextStyle>
          <Typical
            loop={Infinity}
            wrapper={SecondTextStyle}
            steps={[
              "사랑입니다",
              2000,
              "절대 계획대로 되지 않습니다",
              2000,
              "내 자신입니다",
              2000,
              "생계수단입니다",
              2000,
              "자의식의 표현입니다",
              1200,
              "나를 행복하게 만들어요",
              1200,
              "뻔뻔하게 지르고 보는 겁니다",
              1200,
              "엉덩이로 쓰는 겁니다",
              1200,
              "마라톤입니다",
              1200,
              "거창하면 안 됩니다",
              1200,
              "습관입니다",
              1200,
              "독자의 취향을 파악하는 겁니다",
              11200,
              "고쳐쓰는 겁니다",
              1200,
              "취미입니다",
              1200,
            ]}
          />
          <Link to="/main">
          <StartButton>글쓰기 시작하기</StartButton>
          </Link>
        </TextWrapper>
      </Wrapper>
  );
};

export default Landing;
