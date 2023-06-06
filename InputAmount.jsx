import React, { useContext } from 'react'
import {Grid, InputAdornment, TextField} from '@mui/material';
import { CurrencyContext } from './CurrencyContext';


const InputAmount = () => {
  const {FirstAmount, setFirstAmount} = useContext(CurrencyContext);
  return (
    <div>
     <Grid item >
        <TextField 
        value = {FirstAmount}
        onChange={e => setFirstAmount(e.target.value)}
        sx ={{padding :'2opx',margin:'20px',width:'100px'}}
         label ='Amount'
         fullWidth 
         InputProps={{
            type:'number',
            startAdornment :<InputAdornment position='start'> $</InputAdornment>
         }}
         />
     </Grid>
    </div>
  )
}

export default InputAmount
