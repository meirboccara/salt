import { IBreadcrumbs } from "./index.interface";
import { AfterBreadcrumbsStyled, Container, PreBreadcrumbsStyled } from "./index.styled";

const Breadcrumbs = ({api,path} : IBreadcrumbs) => {
    return <Container>
        <PreBreadcrumbsStyled>{`All APIs > ${api} >`}</PreBreadcrumbsStyled>
        <AfterBreadcrumbsStyled>{path}</AfterBreadcrumbsStyled>
    </Container>;
}

export default Breadcrumbs;