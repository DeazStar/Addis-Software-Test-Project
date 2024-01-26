import StyledModel from "./styles/Model.styled";
import Button from "./Button";
import CloseButton from "./styles/CloseButton.styled";

function Model({ setIsModelOpen, modelType, setModelType }) {
  return (
    <StyledModel>
      <CloseButton onClick={() => setIsModelOpen(false)}>X</CloseButton>
      {modelType === "add" && <h3>Add Song</h3>}
      {modelType === "edit" && <h3>Edit Song</h3>}
      <form>
        <div>
          <label htmlFor="song">Song</label>
          <input type="text" name="song" id="song" />
          <br />
          <label htmlFor="artist">Artist</label>
          <input type="text" name="artist" id="artist" />
        </div>
        <div className="btn-container">
          {modelType === "add" && (
            <Button type={"add"} setModelType={setModelType}>
              <p>Add</p>
            </Button>
          )}

          {modelType === "edit" && (
            <Button type={"edit"} setModelType={setModelType}>
              <p>Edit</p>
            </Button>
          )}
        </div>
      </form>
    </StyledModel>
  );
}

export default Model;
