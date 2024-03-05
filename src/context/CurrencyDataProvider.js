'use client';

import getCurrentPrice from '@/helpers/getCurrentPrice';
import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react'


const currencyData = createContext(null);

const CurrencyDataProvider = ({children}) => {

const [coinPrice,setCoinPrice] = useState(null);
const pathName = usePathname().split('/')[1];



useEffect( ()=>{

               // const price = getCurrentPrice(pathName);
               console.log("price");

},[])


  return (
     <currencyData.Provider value={coinPrice}>
        {children}
     </currencyData.Provider>
  )
}

export default CurrencyDataProvider

export const useCurrencyData = ()=>{
   return useContext(currencyData);
}