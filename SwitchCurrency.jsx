import React, { useContext } from 'react'
import { Button, Grid} from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { CurrencyContext } from './CurrencyContext';
const SwitchCurrency = () => {
  const {
    from,
    setFrom,
    to,
    setTo
  } = useContext(CurrencyContext)

  const handleSwitch = () => {
   setFrom(to);
   setTo(from);
  }
  return (
    <div>
    <Grid item>
     <Button onClick={ handleSwitch} sx={{
      borderRadius:1,
      height:'100%',
      padding :'2opx',margin:'20px',width:'100%'
       
     }}>
      <CompareArrowsIcon/>
     </Button>
    </Grid>
    </div>
  )
}

export default SwitchCurrency
