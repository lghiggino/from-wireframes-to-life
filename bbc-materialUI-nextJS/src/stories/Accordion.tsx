import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './accordion.css';

export interface ControlledAccordionsProps {
    onClick?: () => void;
  }

export const ControlledAccordions: React.FC<ControlledAccordionsProps> = () =>{

    const [expanded, setExpanded] = React.useState<string | false>(false);
  
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div className={"root"}>
         {/*<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} classes={{ expanded: "expanded" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={"heading"}>General settings</Typography>
            <Typography className={"secondaryHeading"}>I am an accordion</Typography>
          </AccordionSummary> */}
          <AccordionDetails>
            <Typography className={"heading"}>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        {/* </Accordion> */}
      </div>
    );
  }