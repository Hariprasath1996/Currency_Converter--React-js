import { useState } from "react";

const App = () => {


  const[amount,setAmount]=useState(1);
  const [fromCurrency,setFromCurrency]=useState("");
  const [toCurrency,setToCurrency]=useState("");
  const [convertedAmount,setConvertedAmount]=(null);

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
          <input value={amount} type="text" id="amount" />
        </div>
        <div className="input-container-one">
          <label className="currency-from" htmlFor="currency-from">From Currency :</label>
          <select id="currency-from" value={fromCurrency}>
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
          <select id="currency-to" value={toCurrency}>
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
        <p className="converted-Amount">{amount}{fromCurrency} Equals To {convertedAmount}{toCurrency}</p>
      </div>
    </div>
  </>);
}

export default App;