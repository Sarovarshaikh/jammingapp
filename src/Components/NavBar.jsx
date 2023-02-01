import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: grid;
  place-items: center;
  background-color: #222831;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 2.5rem;
  justify-content: space-around;
  align-items: center;
`;
const Left = styled.div`
  h1 {
    font-weight: 800;
    color: #f99417;
  }
`;
const Center = styled.div`
  h2 {
    color: white;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .dropdown {
    width: 100px;
    padding: 10px;
    border: 0.2px solid #9ea1d4;
    background-color: #404258;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
  }
  .invite {
    color: #f99417;
    border: 0.2px solid #9ea1d4;
    background-color: #404258;
    padding: 10px;
    border-radius: 5px;
    width: 100px;
    cursor: pointer;
  }
`;

const NavBar = ({setJamImage}) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <h1>Choira</h1>
        </Left>
        <Center>
          <h2>Friday Night Jam</h2>
        </Center>
        <Right>
          <BoxContainer>
            <select className="dropdown" onChange={(e) =>setJamImage(e.target.value) }>
              <option value="select" selected>
                select
              </option>
              <option value="user1">1</option>
              <option value="user2">2</option>
              <option value="user3">3</option>
              <option value="user4">4</option>
            </select>
            <button className="invite">
              <i
                style={{ marginRight: "5px" }}
                class="fa-solid fa-square-plus"
              ></i>
              <span>Invite</span>
            </button>
          </BoxContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
