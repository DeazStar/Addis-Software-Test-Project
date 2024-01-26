import StyledModel from "./styles/Model.styled";
import Button from "./Button";
import CloseButton from "./styles/CloseButton.styled";

function Model({ setIsModelOpen }) {
  return (
    <StyledModel>
      <CloseButton onClick={() => setIsModelOpen(false)}>X</CloseButton>
      <h3>Add Song</h3>
      <form>
        <div>
          <label htmlFor="song">Song</label>
          <input type="text" name="song" id="song" />
          <br />
          <label htmlFor="artist">Artist</label>
          <input type="text" name="artist" id="artist" />
        </div>
        <div className="btn-container">
          <Button type={"add"}>
            <p>Add</p>
          </Button>
        </div>
      </form>
    </StyledModel>
  );
}

export default Model;
