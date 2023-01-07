import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import page1 from "../assets/images/page1.png";
import page2 from "../assets/images/page2.png";
import page3 from "../assets/images/page3.png";
import page4 from "../assets/images/page4.png";
import { ScrollTopButton } from "../components/ScrollToTop";
const Application = () => {
  const navigate = useNavigate();

  return (
    <Body>
      <StyledButton onClick={() => navigate(-1)}>뒤로 가기</StyledButton>
      <ScrollTopButton />
      <MainWrapper>
        <img src={page1} alt="page1" />
      </MainWrapper>
      <MainWrapper>
        <img src={page2} alt="page2" />
      </MainWrapper>
      <MainWrapper>
        <img src={page3} alt="page3" />
      </MainWrapper>
      <MainWrapper>
        <img src={page4} alt="page4" />
      </MainWrapper>
    </Body>
  )
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  margin-top: 100px;
  border-radius: 20px;
  width: 100px;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  background-color:#66aaff; 
  :hover{color: #fff};
  justify-content: center;
  cursor: pointer;
`
const MainWrapper = styled.div`
{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  & img {
       padding: 100px;
        width: 30%;
        height: 100%;
  }
}
`;

export default Application;