import styled from "styled-components";
import Footer from "./Footer";
import HomeDefaultContent from "./HomeDefaultContent";
import JamTwo from "./JamTwo";
import JamOne from "./JamOne";
import NavBar from "./NavBar";
import JamThree from "./JamThree";
import { useState } from "react";


const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: grid;
  place-items: center;
  background-color: black;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 105vh;
  background-color: #222831;
  border-radius: 10px;
  overflow: hidden;
`;

const Home = () => {
  const [jamImage, setJamImage] = useState(false);
  return (
    <Container>
      <Wrapper>
        <NavBar setJamImage={setJamImage} />
        {jamImage ? (
          <>
            {jamImage === "select" && <HomeDefaultContent />}
            {jamImage === "user1" && <JamOne />}
            {jamImage === "user2" && <JamTwo />}
            {jamImage === "user3" && <JamThree />}
            {jamImage === "user4" && <HomeDefaultContent />}
          </>
        ) : (
          <HomeDefaultContent />
        )}
      
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Home;
