"use client";
import Coin from "@/util/types/Coin";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

export const CurrencyData = createContext<any>(null);

async function getCurrentData(coinName:string, currencyCode:any){

  try{
       const currencyData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}?localization=false`)
       return {
         name:currencyData.data.name,
         symbol:currencyData.data.symbol,
         image:currencyData.data.image.small,
         rank:currencyData.data.market_cap_rank,
         price:currencyData.data.market_data.current_price[currencyCode].toFixed(2),
         changePerc:currencyData.data.market_data.price_change_percentage_24h.toFixed(2)
       }
       
     }
  catch(err){
    console.log(err);
  }
}

async function getAllCoins(currencyCode: string) {

  const temp: Array<any> = [];
  try {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    data.data.coins.map((coin:any) => {
      temp.push({
        name:coin.item.name,
        symbol: coin.item.symbol,
        image: coin.item.large,
        changePerc:coin.item.data.price_change_percentage_24h[currencyCode].toFixed(2),
        sparkline: coin.item.data.sparkline,
        price: coin.item.data.price,
      });
    });
    return temp;

  } catch (err) {
    console.log(err);
  }
}

function CurrencyDataProvider ({ children }:any) {
  
  const [coinData, setCoinData] = useState({
    name: "",
    symbol: "",
    image: "",
    rank: "",
    price: "",
    changePerc: 0,
  } as Coin);
  
  const [trendingCoinsList, setTrendingCoinsList] = useState([] as Coin[]);
  const [currencyCode, setCurrencyCode] = useState("usd");

  const pathName = usePathname().split("/")[1];

  useEffect(() => {

    getCurrentData(pathName, currencyCode.toLowerCase()).then((data?: Coin) => setCoinData(data!)).catch(err => console.log(err));
    getAllCoins(currencyCode).then((trending?: Array<Coin>) => setTrendingCoinsList(trending!)).catch(err => console.log(err));
    
  }, [currencyCode]);
  
  return (<CurrencyData.Provider value={{ coinData, currencyCode, trendingCoinsList}}>{children}</CurrencyData.Provider>);

};

export default CurrencyDataProvider;

export function useCurrencyData() {
  return useContext(CurrencyData);
}
