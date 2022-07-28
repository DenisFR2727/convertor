import React,{useEffect,useState} from "react";
import Calc from "../Calc/Calc";
import "./Rate.css"
function Rate(props) {
const [date] = useState(new Date().toLocaleDateString())
const [currencyRate,setCurrencyRate] = useState({})
const [currencyRateTwo,setCurrencyRateTwo] = useState({})

let currency = ["USD","UAH","EUR"]
 const getRate = ()=>{
   // к грн
     fetch('https://v6.exchangerate-api.com/v6/ab65048f560023f3f461e2f2/latest/UAH')
          .then(data =>{
             return data.json()
          })
          .then(data => {
             console.log(data);
            let result ={};
            for(let i=0; i<currency.length; i++){
                result[currency[i]] = data.conversion_rates[currency[i]]
            }
            console.log(result)
            setCurrencyRate(result)
          })
         
  }
  useEffect(() => {
      getRate();
      getRateTwo();
  }, []);
  const getRateTwo = ()=>{
    // к USD
    fetch('https://v6.exchangerate-api.com/v6/ab65048f560023f3f461e2f2/latest/USD')
         .then(data =>{
            return data.json()
         })
         .then(data => {
           let result ={};
           for(let i=0; i<currency.length; i++){
               result[currency[i]] = data.conversion_rates[currency[i]]
           }
           setCurrencyRateTwo(result)
         })
 }
  return (
    <div className="rate">
      <h3> Курс валют на: {date}</h3>
      <div className="flex-container">
        {Object.keys(currencyRate).map((keyName,i)=>(
            <div className="block flex-item" key={keyName}>
            <div className="currency-name">{keyName}</div>
            <div className="currency-in">{currencyRate[keyName].toFixed(4)}</div>
            <p>* Можно купить за 1  UAH</p>
          </div>
        ))}
      </div>
      <Calc rate={currencyRate} rateTwo={currencyRateTwo}/>
    </div>
  );
}
export default Rate;
