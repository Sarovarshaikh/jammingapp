import styled from "styled-components";
import imagSnip from "../assets/snip1.png";
// import UseRefPalyer from "./UseRefPalyer";
import {Link, useNavigate} from 'react-router-dom'
const Container = styled.div`
  width: 100%;
  height: 90px;
  display: grid;
  place-items: center;
  background-color: #222831;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 8.5rem;
  justify-content: space-around;
  align-items: center;
`;
const Left = styled.div`
  img {
    width: 34%;
  }
`;

const Right = styled.div`
  width: 33%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  div{
    cursor: pointer;
    font-size: 1.5rem;
  }
  div button{
    background-color: #D61355;
    color: white;
    border: none;
    width: 100px;
    height: 40px;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
  }
  div i {
    color:white;
  }
`;

const Footer = () => {
 

  return (
    <Container>
      <Wrapper>
        <Left>
          <img src={imagSnip} alt="" className="footHed" />
        </Left>
        <Right>
          <div>
            <button className="endJam">End Jam</button>
          </div>
          <div className="speaker">
            <i class="fa-solid fa-volume-high"></i>
          </div>
          <div className="video">
            {/* <a href="/useref">
            <i class="fa-solid fa-video"></i>
            </a> */}
            {/* <button onClick={goToVideo}>
            <i class="fa-solid fa-video"></i>
            </button> */}
            <Link to="video" ><i class="fa-solid fa-video"></i></Link>
          </div>
          <div className="mic">
            <i class="fa-solid fa-microphone-slash"></i>
          </div>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;
