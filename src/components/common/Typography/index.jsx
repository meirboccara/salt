import { StyledTypographyDiv, StyledTypographySpan } from "./index.styled";

const ComponentStyledTypography = {
    div:StyledTypographyDiv,
    span:StyledTypographySpan
}

const Typography = ({component="span",...props}) => {
    
    const Component = ComponentStyledTypography[component];

    return <Component component={component} {...props} />;
    
}

export default Typography;