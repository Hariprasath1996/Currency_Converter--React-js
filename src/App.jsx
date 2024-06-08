const App = () => {
  return (<>
    <div className="currency-convertor">
      <div className="section-1">
        <img src="./src/assets/currency-img.png" alt="" />
      </div>
      <div className="section-2">
        <div className="title">
          <h1>Currency_convertor</h1>
        </div>
        <div className="input-container">
          <label className="amount" htmlFor="amount" >Amount :</label>
          <input type="text" id="amount" />
        </div>
        <div className="input-container-one">
          <label className="currency-from" htmlFor="currency-from">From Currency :</label>
          <select id="currency-from">
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
          <select id="currency-to">
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
        <p>1-INR Equals To 82.25-US</p>
      </div>
    </div>
  </>);
}

export default App;