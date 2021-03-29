import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from "./components/header";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GetList from './components/GetList';
import Hidebar from './Hidebar';
import Rows from './Rows';
import BottomNav from './BottomNav';



function App() {

  const [productList, setProductList] = useState([]);


  const [currencyVals, setcurrencyVals] = useState([]);
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(()=>{
    async function fetchProductList() {
      try {
        const requestUrl = 'https://apps.zamtel.co.zm/technical/products';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        setProductList(responseJSON);
      } catch {
        //
      }
    }
    fetchProductList();
  },[]);


  
  useEffect(() => {
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=GBP,JPY')
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${'https://api.exchangeratesapi.io/latest?'}?base=USD&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
  

  return (
    <div>
      
      
      
    <div className="App">
      <Router>
      <Hidebar>
      
      </Hidebar>
      <BottomNav>
      <Rows 
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={exchangeRate}/>
       </BottomNav>
      
      <GetList productList={productList} />
      <GetList currencyVals={currencyVals} />
      <Switch>
      <Route exact path = "/Product/:id" component={Header}/>
      </Switch>
      
      </Router>
    
    </div>
    </div>
  )
}

export default App;
