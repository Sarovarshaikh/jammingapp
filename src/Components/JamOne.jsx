import styled from "styled-components";
import ked from '../assets/ked3j1.jpg'

const Container = styled.div`
  width: 100%;
  height: 75vh;
  margin: 20px 0;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  width: 78%;
  height: 100%;
  display: flex;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: #000000;

`;
const JamOne = () => {
  return (
    <Container>
      <Wrapper>
        <img src={ked} alt="" />
      </Wrapper>
    </Container>
  );
};

export default JamOne;
