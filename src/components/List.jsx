import SongItem from "./SongItem";

function List({ songs, setIsModelOpen, modelType, setModelType }) {
  return (
    <div>
      <hr />
      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          setIsModelOpen={setIsModelOpen}
          modelType={modelType}
          setModelType={setModelType}
        />
      ))}
    </div>
  );
}

export default List;
