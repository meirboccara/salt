import styled from "styled-components";
import { theme } from "../../theme";

const Container = styled.div(() => ({
    display:"flex",
    columnGap:"0.5rem",
    alignItems:"center",
    marginBottom:"0.3rem",
    marginLeft:"0.5rem",
    fontWeight:"bold"
}));

const Method = styled.div(() => ({
    color:theme.lightPrimary,
    fontSize:"0.8rem",
}));

const Path = styled.div(() => ({
    color:theme.primary,
}))

export {
    Container,
    Method,
    Path
}