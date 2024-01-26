import { SongName, Author } from "./styles/Song.styled";
import Button from "./Button";
import Wrapper from "./styles/Wrapper.styled";

function SongItem({
  songname,
  artist,
  setIsModelOpen,
  modelType,
  setModelType,
}) {
  return (
    <>
      <Wrapper>
        <div>
          <SongName>{songname}</SongName>
          <Author>{artist}</Author>
        </div>
        <div>
          <Button
            type={"edit"}
            setIsModelOpen={setIsModelOpen}
            modelType={modelType}
            setModelType={setModelType}
          >
            <p>Edit</p>
          </Button>
          <Button type={"delete"}>
            <p>Delete</p>
          </Button>
        </div>
      </Wrapper>
      <hr />
    </>
  );
}

export default SongItem;
