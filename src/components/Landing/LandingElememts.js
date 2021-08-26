import styled from "styled-components";




export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  width: 100vw;
  overflow: hidden;
  transition: background-color 2s ease-in-out;
  
`;

export const TextWrapper = styled.div`
  width: 1300px;

  color: black;
  transition: opacity 2s ease-in-out;
  transition: transform 2s ease-in-out;
  &:hover {
    opacity: 1;
    transform: scale(1.007);
  }
`;

export const StartButton = styled.div`
  border: 1px solid black;
  padding: 14px  48px;
  margin-top: 100px;
  width: 400px;
  text-align: center;
  font-size: 30px;
  letter-spacing: 5px;
  transition: all 0.6s ease-in-out;
  color: black;
  &:hover {
    background-color: #f2f2f2;
    color: black;
  }
  
`
export const FirstTextStyle = styled.span`
  font-size: 4rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  } ;
`;
export const SecondTextStyle = styled.span`
  color: #54493d;

  font-size: 4rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  } ;
`;
