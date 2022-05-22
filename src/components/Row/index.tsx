import Button from "../common/Button";
import { IRow } from "./index.interface";
import {StyledRow, StyledTwoButtons} from "./index.styled";

const Row = ({name,type,pii,masked} : IRow) => {
    return <StyledRow>
        <div>{name}</div>
        <StyledTwoButtons>
            <Button text="PII" color="secondary" type={pii === true ? "full" : "outline"} clickable/>
            <Button text="Masked" color="primary" type={masked === true ? "full" : "outline"} clickable/>
        </StyledTwoButtons>
        <div>
            <Button text={type} color="tertiary" />
        </div>
    </StyledRow>
}

export default Row;