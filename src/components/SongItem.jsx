import { SongName, Author } from "./styles/Song.styled";
import Button from "./Button";
import Wrapper from "./styles/Wrapper.styled";
import { useDispatch } from "react-redux";
import { deleteSongsCall } from "../features/songs/songSlice";

function SongItem({ song, setIsModelOpen, modelType, setModelType }) {
  const dispatch = useDispatch();

  function handleDeleteSong(id) {
    console.log("deleting");
    dispatch(deleteSongsCall(id));
  }

  return (
    <>
      <Wrapper>
        <div>
          <SongName>{song.songname}</SongName>
          <Author>{song.artist}</Author>
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
          <Button
            type={"delete"}
            handleDelete={() => handleDeleteSong(song.id)}
          >
            <p>Delete</p>
          </Button>
        </div>
      </Wrapper>
      <hr />
    </>
  );
}

export default SongItem;
