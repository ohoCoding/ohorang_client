import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';
import main from '../main.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <img src={main} className="App-logo" alt="logo" />
        <ButtonDiv>
          <StyledButton onClick={() => navigate("/application")}>소개</StyledButton>
          <StyledButton onClick={() => navigate("/application")}>소개</StyledButton>
          <StyledButton onClick={() => navigate("/application")}>소개</StyledButton>
          <StyledButton onClick={() => navigate("/application")}>소개</StyledButton>
        </ButtonDiv>
      </header>
    </div >
  )
}

const StyledButton = styled.button`
  border-radius: 20px;
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color:#66aaff; 
  :hover{color: #fff};
  cursor: pointer;
  margin: 10px;
`;

const ButtonDiv = styled.div`
  display: flex;
  padding-left: 20px;
  flex-direction: column;
`
export default Home;