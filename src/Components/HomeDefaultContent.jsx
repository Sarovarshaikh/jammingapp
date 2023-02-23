import styled from "styled-components";
import ked from '../assets/ked3j1.jpg'
import kedImg from '../assets/Female-performer-songs-in-audio-recording-studioNomad_Souls.webp'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

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
  display: grid;
  gap: 20px;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;
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

const HomeDefaultContent = () => {
  return (
    <Container>
      <Wrapper>
        <BoxContainer>
          <Boxes>
          <img src={ked} alt="" />
         
          </Boxes>
          <Boxes>
          <img src={kedImg} alt="" />
          </Boxes>
          <Boxes>
          <img src={img3} alt="" />
          </Boxes>

          <Boxes>
          <img src={img4} alt="" />
          </Boxes>
        </BoxContainer>
      </Wrapper>
    </Container>
  );
};

export default HomeDefaultContent;
