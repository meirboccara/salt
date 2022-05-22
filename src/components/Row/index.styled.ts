import styled from "styled-components";

const StyledRow = styled.div(() => ({
    display:'grid',
    gridTemplateColumns:"20% 60% 20%",
    padding:"1.2rem",
    border:"1px outset",
    boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
}));

const StyledTwoButtons = styled.div(() => ({
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    width:"15%",
    columnGap:"1rem"
}));

export {
    StyledRow,
    StyledTwoButtons
}