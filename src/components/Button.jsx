import StyledButton from "./styles/StyledButton";

function Button({ children, type, setIsModelOpen, setModelType }) {
  if (type === "add")
    return (
      <StyledButton
        $backgroundColor={"#006fD0"}
        onClick={
          setIsModelOpen
            ? () => {
                setModelType(type);
                setIsModelOpen(true);
              }
            : undefined
        }
      >
        {children}
      </StyledButton>
    );

  if (type === "delete")
    return <StyledButton $backgroundColor={"red"}>{children}</StyledButton>;

  if (type === "edit")
    return (
      <StyledButton
        $backgroundColor={"green"}
        $margin={"20px"}
        onClick={
          setIsModelOpen
            ? () => {
                setModelType(type);
                setIsModelOpen(true);
              }
            : undefined
        }
      >
        {children}
      </StyledButton>
    );
}

export default Button;
