import React from 'react'
import { Autocomplete, Grid, TextField} from '@mui/material'
import Axios from './Axios'
const SelectCountry = (props) => {
  const {value,setValue,label} = props;
 const [data] =  Axios('https://restcountries.com/v3.1/all');
 const dataFilter = data.filter(item => 'currencies' in item);
 console.log(dataFilter);
 const country = dataFilter.map(item => {
   return  `${item.flag} ${Object.keys(item.currencies)[0]} - ${item.name.common}`
  });
  console.log(country)
  return (
    <div>
      <Grid item xs={12}>
        <Autocomplete sx ={{padding :'2opx',margin:'20px',width:'100%'}}
        value={value}
        onChange={(e,newValue) => {
          setValue(newValue)
        }}
        options = {country}
        renderInput={(params) => <TextField {...params} label ={label}/>}
        />
      </Grid>
    </div>
  )
}

export default SelectCountry





