import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InvoiceDetails from './components/InvoiceDetails';
import NotFound from "./NotFound";
import {useEffect, useState } from 'react';
import Data from "./data.json";

function App() {
  const [dataJson, setDataJson] = useState(Data);
  const [dark, setDark] = useState(false);
  const [inputs, setInputs] = useState({});
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = Math.random().toString(9).substring(2,6).toUpperCase();

  const generateString = () => {
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < 2; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
          result +=numbers;
      return result;
  }

  const deleteItem = (id) => {
    const data1 = dataJson.filter(item => item.id === id);
    const data2 = data1[0];
    const index = dataJson.indexOf(data2);
    if(index !== -1){
        dataJson.splice(index,1);
        setDataJson(dataJson);
    }
}

  const darkMode = () => {
    if(dark === false){
      setDark(true)
    }
    else{
      setDark(false)
    }
  }

  const handleChangeSenderAddress = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,senderAddress: {...values.senderAddress,[name]: value}}))
  }

  const handleChangeClientAddress = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,clientAddress: {...values.clientAddress,[name]: value}}))
  }

  const handleChangeItems = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,items: {...values.items,[name]: value}}))
    console.log(inputs);
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]: value}))
  }

  const handleSubmit = (event) => {
    inputs.id = generateString();
    inputs.status = "pending";
    event.preventDefault();
    setDataJson([...dataJson,inputs]);
    console.log(dataJson);
  }

  return (
    <Router>
    <div className={dark ? "dark" : "App"}> 
      <div>
        <Header darkMode={darkMode}/>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Main handleSubmit={handleSubmit} handleChange={handleChange} handleChangeItems={handleChangeItems} handleChangeClientAddress={handleChangeClientAddress} handleChangeSenderAddress={handleChangeSenderAddress} dataJson={dataJson}/>
          </Route>
          <Route path="/invoice-:id">
            <InvoiceDetails deleteItem={deleteItem} dataJson={dataJson}></InvoiceDetails>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
