import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 75vh;
  margin: 20px 0;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  width: 82%;
  height: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

const BoxContainer = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;
`;
const Boxes = styled.div`
  width: 32vw;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: aliceblue;

  img {
    width: 32vw;
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const JamTwo = () => {
  return (
    <Container>
      <Wrapper>
        <BoxContainer>
          <Boxes>
            <img
              src="https://img.freepik.com/free-photo/cute-young-woman-playing-guitar-indoors_23-2149140612.jpg?w=2000"
              alt="cover"
            />
          </Boxes>
          <Boxes>
            <img
              src="https://assets.cntraveller.in/photos/626aa5af3c1dc6cdeba390f1/master/w_1600%2Cc_limit/Entre%2520nos%2520live%2520at%2520the%2520Heritage%2520Home%2520Concert.jpg"
              alt="cover"
            />
          </Boxes>
        </BoxContainer>
      </Wrapper>
    </Container>
  );
};

export default JamTwo;
