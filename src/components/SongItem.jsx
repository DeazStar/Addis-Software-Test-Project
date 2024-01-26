import { SongName, Author } from "./styles/Song.styled";
import Button from "./Button";
import Wrapper from "./styles/Wrapper.styled";

function SongItem({ songname, artist }) {
  return (
    <>
      <Wrapper>
        <div>
          <SongName>{songname}</SongName>
          <Author>{artist}</Author>
        </div>
        <div>
          <Button type={"edit"}>
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
