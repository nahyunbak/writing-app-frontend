import styled from "styled-components";




export const Wrapper = styled.div`
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  width: 100vw;
  overflow: hidden;
  transition: background-color 2s ease-in-out;
  font-family: 'Nanum Myeongjo', serif;

  
  
  
  
`;

export const TextWrapper = styled.div`
  width: 80vw;
  margin: auto;
  color: black;
  transition: opacity 2s ease-in-out;
  transition: transform 2s ease-in-out;
  &:hover {
    opacity: 1;
    transform: scale(1.007);
  }
  position: absolute;
  left: 10vw;
  top: 20vh;

  


`;


export const ButtonWrapper = styled.div`
position: absolute;
left: 10vw;
margin: auto;
top: 40vh;


`
export const RegisterButton = styled.div`
  border: 1px solid black;
  padding: 12px  48px;
  margin-top: 100px;
  width: 400px;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 5px;
  transition: all 0.6s ease-in-out;
  color: black;
  &:hover {
    background-color: #f2f2f2;
    color: black;
  }
  @media screen and (max-width: 963px) {
    width:340px;
 
  } ;
  @media screen and (max-width: 444px) {
    width:80vw;
    font-size: 4vw;
    margin: auto;
    margin-top: 20vh;
  } ;
`

export const LoginButton = styled.div`
  border: 1px solid black;
  padding: 12px  48px;
  margin-top: 20px;
  width: 400px;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 5px;
  transition: all 0.6s ease-in-out;
  color: black;
 
  &:hover {
    background-color: #f2f2f2;
    color: black;
  }
  @media screen and (max-width: 963px) {
    width:340px;

  } ;
  @media screen and (max-width: 444px) {
    width:80vw;
    font-size: 4vw;
    margin: auto;
    margin-top: 5vh;

  } ;
`
export const FirstTextStyle = styled.span`
  font-size: 3.5rem;
  @media screen and (max-width: 963px) {
    font-size: 3rem;
  } ;

`;
export const SecondTextStyle = styled.span`
  color: #54493d;
  font-size: 3.5rem;

  @media screen and (max-width: 963px) {
    font-size: 3rem;
  } ;
`;
