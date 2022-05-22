import AccordionSalt from "../AccordionSalt";
import Row from "../Row";

const Request = ({data} : any) => {

    const DisplayRequest = Object.entries(data).map(([key,value] : [string,any]) => <AccordionSalt headerText={key}>
        {value.map((el:any) => <Row {...el}/>)}
    </AccordionSalt>)

    return <>
        Request
        {DisplayRequest}
    </>;
}

export default Request;