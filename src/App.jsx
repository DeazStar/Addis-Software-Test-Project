import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSongsFetch } from "./features/songs/songSlice";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/styles/Main.styled";
import Button from "./components/Button";
import List from "./components/List";
import Container from "./components/styles/Container.styled";
import Model from "./components/Model";
import Loading from "./components/Loading";
import ShadowContainer from "./components/styles/ShadowContainer.styled";

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const songs = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  return (
    <>
      <NavBar />

      <Main>
        <Button type={"add"} setIsModelOpen={setIsModelOpen}>
          <p> + Add </p>
        </Button>

        <Container>
          {isLoading ? <Loading /> : <List songs={songs} />}
        </Container>

        {isModelOpen && (
          <ShadowContainer>
            <Model setIsModelOpen={setIsModelOpen} />
          </ShadowContainer>
        )}
      </Main>
    </>
  );
}

export default App;
