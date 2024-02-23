import { StyledButton } from "./Button.style";

//import {  } from "./Button.style.js";
const Button = ({radius="32", disabled=false,bgColor, children}) => {
  return (
    <StyledButton disabled={disabled} bgColor = {bgColor} radius={radius}>
      {children}
    </StyledButton>
  );
};

export default Button;
