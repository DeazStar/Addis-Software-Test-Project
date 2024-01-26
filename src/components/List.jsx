import SongItem from "./SongItem";

function List({ songs }) {
  return (
    <div>
      <hr />
      {songs.map((song) => (
        <SongItem songname={song.songname} artist={song.artist} />
      ))}
    </div>
  );
}

export default List;
