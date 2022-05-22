import AccordionSalt from "../AccordionSalt";
import Row from "../Row";

const Response = ({data} : any) => {
    const DisplayResponse = Object.entries(data).map(([key,value] : [string,any]) => <AccordionSalt headerText={key}>
        {value.map((el:any) => <Row {...el}/>)}
    </AccordionSalt>)

    return <>
        Response
        {DisplayResponse}
    </>;
}

export default Response;