import React from 'react'
import {Autocomplete, Grid, TextField} from '@mui/material'
const SelectCurrency = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Autocomplete sx ={{padding :'2opx',margin:'20px',width:'100%'}}
       
        options = {['optional','optional']}
        renderInput={(params) => <TextField {...params} label = 'from'/>}
        />
      </Grid>
    </div>
  )
}

export default SelectCurrency
