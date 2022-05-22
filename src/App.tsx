import {useMemo, useState} from 'react';
import Button from "./components/common/Button";
import Typography from "./components/common/Typography";
import Row from "./components/Row";
import { theme } from "./theme";
import Accordion from '@mui/material/Accordion';
import AccordionSalt from "./components/AccordionSalt";
import fakeData from './fakeData.json';
import Request from './components/Tabs/Request';
import Response from './components/Tabs/Response';
import Breadcrumbs from './components/Breadcrumbs';
import HeadersApi from './components/HeadersApi';

const App = ({}) => {

    const {method,path,api,request,response} = useMemo(() => fakeData,[]);
    const [indexTab,setIndexTab] = useState(0);

    return <>
        <HeadersApi method={method} path={path}/>
        <Breadcrumbs api={api} path={path} />
        <div></div>
        <div>
            <div onClick={() => setIndexTab(0)}>Request</div>
            <div onClick={() => setIndexTab(1)}>Response</div>
        </div>
        <div style={{backgroundColor:theme.foreground}}>
            <div>
                <div>
                    <input type="search" />
                </div>
                <div></div>
                <div>
                    <Button color="primary" type="full" text="Apply"/>
                </div>
            </div>
            <div style={{backgroundColor:theme.background}}>
                <div>
                    <div>Name</div>
                    <div>PII</div>
                    <div>Masking</div>
                    <div>Type</div>
                </div>
                <div>
                    {indexTab === 0 ? <Request data={request}/> : <Response data={response}/>}
                </div>
            </div>
        </div>
    </>
}

export default App;