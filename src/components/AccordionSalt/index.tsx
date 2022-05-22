import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '../common/Typography';

const AccordionSalt = ({headerText,children}) => {
   return  <Accordion>
    <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    >
    <Typography>{headerText}</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <div>
            {children}
        </div>
    </AccordionDetails>
    </Accordion>
}

export default AccordionSalt;