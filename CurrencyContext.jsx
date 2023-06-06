import { createContext} from 'react'
import  { useState } from 'react'
export const CurrencyContext = createContext();
const CurrencyProvider = ({children}) => {
    const [from,setFrom] = useState('🇰🇷 KRW - South Korea');
    const [to,setTo]  =useState('🇦🇺 AUD - Australia');
    const [FirstAmount,setFirstAmount] = useState(0);
   

const value = {
    from,
    setFrom,
    to,
    setTo,
    FirstAmount,
    setFirstAmount
};
  return (
    <>
      <CurrencyContext.Provider value = {value}>
        {children}
      </CurrencyContext.Provider>
    </>
  )
}

export default CurrencyProvider;
