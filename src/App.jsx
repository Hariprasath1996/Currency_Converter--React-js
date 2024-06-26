import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {


  const[amount,setAmount]=useState(10);
  const [fromCurrency,setFromCurrency]=useState("USD");
  const [toCurrency,setToCurrency]=useState("INR");
  const [convertedAmount,setConvertedAmount]=useState(null);
  // create one more state variable for ,getting current exchange rate values from jason data from api url
  const [exchangeRate,setExchangeRate]=useState(null);

  // create a component 
useEffect(
  ()=>{
const convertRate = async ()=>{
  try {
    let url =`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    // use axios method instead of fetch 
    const res = await axios.get(url);
    // use console.log function for  how data's are fixed in api 
    // console.log(res);
    // set this value to setExchange variable for given value , Example - usd (fromCurrency)to inr (toCurrency)
    setExchangeRate(res.data.rates[toCurrency])
    
  } catch (error) {
    console.error ("Error Fetching Exchange Data :" , error)
  }
  
}
convertRate()
},[fromCurrency,toCurrency]);

// create another use Effect for user enter the amount and that time exchange rate value will be added ......exchangeRate from json data 

useEffect(()=>{
  if (exchangeRate !== null) {
    setConvertedAmount((amount*exchangeRate).toFixed(2))
  }
},[amount,exchangeRate])
// create new component for get  amount  value in their input 
const eventAmountHandler=(e)=>{
const value = parseFloat(e.target.value);
setAmount(isNaN (value) ? 0 : value)
}
// create to components here , one for fromCurrency another one toCurrency

const getFromCurrency=(e)=>{
  setFromCurrency(e.target.value)
}

const getToCurrency=(e)=>{
  setToCurrency(e.target.value)
}
  return (<>
    <div className="currency-convertor">
      <div className="section-1">
        <img src="./src/assets/currency-img.png" alt="" />
      </div>
      <div className="section-2">
        <div className="title">
          <h1>CURRENCY_CONVERTER</h1>
        </div>
        <div className="input-container">
          <label className="amount" htmlFor="amount" >Amount :</label>
          <input onChange={eventAmountHandler} value={amount} type="number" id="amount" />
        </div>
        <div className="input-container-one">
          <label className="currency-from" htmlFor="currency-from">From Currency :</label>
          <select onChange={getFromCurrency} id="currency-from" value={fromCurrency}>
            <option value="USD">USD-UNITED STATUS DOLLAR</option>
            <option value="EUR">EUR-EURO</option>
            <option value="GBP">GBP-BRITISH POUND STERLING</option>
            <option value="JPY">JPY-JAPANESE YEN</option>
            <option value="AUD">AUD-AUSTRALIAN DOLLAR</option>
            <option value="CAD">CAD-CANADIAN DOLLAR</option>
            <option value="CNY">CNY-CHINESE YUAN</option>
            <option value="INR">INR-INDIAN RUPEE</option>
            <option value="BRL">BRL-BRAZILIAN REAL</option>
            <option value="ZAR">ZAR-SOUTH AFRICAN RAND</option>
          </select>
        </div>
        <div className="input-container-two">
          <label className="currency-to" htmlFor="currency-to">To Currency :</label>
          <select onChange={getToCurrency} id="currency-to" value={toCurrency}>
            <option value="USD">USD-UNITED STATUS DOLLAR</option>
            <option value="EUR">EUR-EURO</option>
            <option value="GBP">GBP-BRITISH POUND STERLING</option>
            <option value="JPY">JPY-JAPANESE YEN</option>
            <option value="AUD">AUD-AUSTRALIAN DOLLAR</option>
            <option value="CAD">CAD-CANADIAN DOLLAR</option>
            <option value="CNY">CNY-CHINESE YUAN</option>
            <option value="INR">INR-INDIAN RUPEE</option>
            <option value="BRL">BRL-BRAZILIAN REAL</option>
            <option value="ZAR">ZAR-SOUTH AFRICAN RAND</option>
          </select>
        </div>
      </div>
      <div className="footer">
        <p className="converted-Amount"> <span>{amount} </span>{fromCurrency}  Equals To  <span>{convertedAmount} </span>  {toCurrency}</p>
      </div>
    </div>
  </>);
}

export default App;