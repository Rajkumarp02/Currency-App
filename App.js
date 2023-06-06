import InputAmount from "./components/InputAmount";
import {Grid, Container, Box, Typography} from '@mui/material'
import SwitchCurrency from "./components/SwitchCurrency";
import SelectCountry from "./components/SelectCountry";
import SelectCurrency from "./components/SelectCurrency";
import { useContext, useEffect, useState } from "react";
import { CurrencyContext } from "./components/CurrencyContext";
import axios from "axios";
function App() {
  
const {
  from,
  setFrom,
  to,
  setTo,
  FirstAmount,
  setFirstAmount
} = useContext(CurrencyContext)

const [resultCur,setResultCur] = useState(0);
const codeFrom = from.split(" ")[1];
const codeTo = to.split(" ")[1];
console.log(resultCur)
useEffect (() => {
 if(FirstAmount) {
   axios("https://api.freecurrencyapi.com/v1/latest", {
    params: {
      apikey : "TC5gKHsecy1KlS9TbVgMYEe0FLXhVAKYk6Cds99J",
      base_currency : codeFrom,
      currencies:codeTo
      
    }

   })
   .then(res => setResultCur(res.data.data[codeTo]) )
   .catch(err => console.log(err))
 }
}, [FirstAmount,from,to])

  const box = {
    width:'750px',
    height:'180px',
    textAlign :'center',
    display:'flex',
    alignItem:'center',
    marginTop:'300px',
    padding : '30px ',
   boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    background:'white',
   



  }
  return (
    <div className="App">
<Container sx={box}
        
      >
      <Grid container spacing={2}>
      <InputAmount/>
      <SelectCountry  value ={from}  setValue ={setFrom} label='from'/>
      <SwitchCurrency/>
      <SelectCountry  value={to} setValue={setTo} label = 'to'/>
     
      {FirstAmount ? (
     <Box sx ={{backgroundColor:'#34eb9e',fontSize:'bold'}}> 
<Typography>
  {FirstAmount} {from} = 
</Typography>
<Typography>
  {resultCur*FirstAmount} {to} 
</Typography>

     </Box>
) : ''}
 </Grid>

</Container>

    </div>
  );
}

export default App;
