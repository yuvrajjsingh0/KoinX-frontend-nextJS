import axios from "axios";

export default async function getCurrentPrice(coinName){
 try{
      const data = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usc%2Cinr&include_24hr_change=true`)
      console.log(data);
    }
 catch(err){
console.log(err);
 }
}