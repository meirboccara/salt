import { IHeadersApi } from "./index.interface";
import { Container, Method, Path } from "./index.styled";

const HeadersApi = ({method,path} : IHeadersApi) => {
    return <Container>
        <Method>{method.toUpperCase()}</Method> <Path>{path}</Path>
    </Container>;
};

export default HeadersApi;