import { useState } from "react";
import StyledButton from "./index.styled";

const Button = ({text,...props}) => {
    const [isClicked,setIsClicked] = useState(false); 

    return <StyledButton {...props} isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        {text}
    </StyledButton>;
}

export default Button;