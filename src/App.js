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
  const [filter, setFilter] = useState(null);
  
  function deleteItem(id){
    const data1 = dataJson.filter(item => item.id === id);
    const data2 = data1[0];
    const index = dataJson.indexOf(data2);
    if(index !== -1){
        dataJson.splice(index,1);
        setDataJson(dataJson);
    }
}

  function darkMode() {
    if(dark === false){
      setDark(true)
    }
    else{
      setDark(false)
    }
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
            <Main dataJson={dataJson}/>
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
