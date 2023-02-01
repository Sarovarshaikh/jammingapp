import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 75vh;
  margin: 20px 0;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222831;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Boxes = styled.div`
  width: 32vw;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  background-color: aliceblue;

  img {
    width: 32vw;
    height: 250px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const Left = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  grid-template-rows: auto auto;
`;
const Box = styled.div`
  width: 32vw;
  height: 520px;
  border-radius: 20px;
  overflow: hidden;
  background-color: aliceblue;

  img {
    width: 32vw;
    height: 520px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const Right = styled.div``;
const JamThree = () => {
  return (
    <Container>
      <Wrapper>
        <BoxContainer>
          <Left>
            <Boxes>
              <img
                src="https://img.freepik.com/free-photo/cute-young-woman-playing-guitar-indoors_23-2149140612.jpg?w=2000"
                alt="cover"
              />
            </Boxes>
            <Boxes>
              <img
                src="https://media.istockphoto.com/id/1149030677/photo/student-playing-drums-while-listening-music-at-class.jpg?s=612x612&w=0&k=20&c=JV-7fK4m4UidZzd25MlIbjK1qNJ3URobTrDI9EOnxHQ="
                alt="cover"
              />
            </Boxes>
          </Left>
          <Right>
            <Box>
              <img
                src="https://assets.cntraveller.in/photos/626aa5af3c1dc6cdeba390f1/master/w_1600%2Cc_limit/Entre%2520nos%2520live%2520at%2520the%2520Heritage%2520Home%2520Concert.jpg"
                alt="cover"
              />
            </Box>
          </Right>
        </BoxContainer>
      </Wrapper>
    </Container>
  );
};

export default JamThree;
