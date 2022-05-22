import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div(() => ({
    display:"flex",
    columnGap:"0.2rem",
    fontWeight:"bold",
    marginBottom:"0.2rem",
    marginLeft:"0.5rem"
}));

const PreBreadcrumbsStyled = styled.span(() => ({
    color:theme.primary,
}));

const AfterBreadcrumbsStyled = styled.span(() => ({
    color:theme.lightPrimary,
}));

export {
    PreBreadcrumbsStyled,
    AfterBreadcrumbsStyled,
    Container
};