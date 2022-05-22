import React from 'react';
import styled from 'styled-components';
import {theme} from './../../../theme/index';
import { IButton } from './index.interface';

const StyledButton = styled.div(({color = "primary",type="outline",textColor,clickable,isClicked} : any) => ({
    padding:"0.05rem",
    border: `0.1rem solid ${theme[color]}`,
    width:"100%",
    textAlign:"center",
    textTransform:"uppercase",
    fontWeight:"bold",
    cursor:clickable ? "pointer" : "default",
    ...((type === "outline" || type === "full" && isClicked) && {
        color:theme[color]
    }),
    ...((type === "full" || type === "outline" && isClicked) && {
        color:theme.white,
        backgroundColor:theme[color]
    }),
    ...(color === "tertiary" && {
        color:theme.darkTertiary,
        backgroundColor:theme.tertiary
    }),
    ...(textColor && {
        color:textColor
    })
}));

export default StyledButton;