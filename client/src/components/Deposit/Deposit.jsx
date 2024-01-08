import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Identify from '../Identify/Identify';
import AccountMenu from '../AccountMenu/AccountMenu';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import './Deposit.css';
import Button from '@mui/material/Button';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   <div>
 <Identify />
    <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider', }} className='container-deposit'  >
        <Tabs value={value} onChange={handleChange} className='tabs-deposit' aria-label="basic tabs example">
          <Tab  label="Pagos online" {...a11yProps(0)} />
          <Tab  label="Transferencia bancaria" {...a11yProps(1)} />

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Input size="large" placeholder="Introduzca la cantidad del depósito" prefix={'USD'} type='num' />
      <Button variant="contained" sx={{marginTop: "2em"}} disableElevation>
      Continuar
    </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
       
       <h1 className='title-banca'>
       Depósito mediante transferencia bancaria
       </h1>
       <div className="data-container">

       <div className="data-bank">
        <div>
          Nombre del banco:
        </div>
        <div>
          
SEPAGA E.M.I. LIMITED
        </div>

       </div>
       <div className="data-bank">
        <div>
          Dirección del banco:
        </div>
        <div>
          
        29, STASIKRATOUS STREET, SAMICO HOUSE, 3RD FLOOR Location: 1065 NICOSIA (LEFKOSIA) CYPRUS
        </div>

       </div>

       <div className="data-bank">
        <div>
          Beneficiario: 
        </div>
        <div>
          
        SANUS FINANCIAL SERVICES
        </div>
       </div>


        <div className="data-bank">
        <div>
        Dirección Beneficiaria: 
        </div>
        <div>
          
        28 MOUNTAIN COLUMBIA STREET, MIDLANDS ESTATE, MIDSTREAM GAUTENG
        </div>

       </div>


       <div className="data-bank">
        <div>
        SWIFT: 
        </div>
        <div>
          
        SEPMCY2NXXX
        </div>

       </div>

       <div className="data-bank">
        <div>
        Nombre de cuenta de referencia: 
        </div>
        <div>
          
        20482, SFS (PTY) Ltd, South Africa, (client's country of residence), Internal transfer
        </div>

       </div>
       </div>

      </CustomTabPanel>

    </Box>
   </div>
  );
}