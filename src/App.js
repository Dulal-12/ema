import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Error from'./components/Error/Error';
import Productdetail from './components/productdetail/Productdetail';




function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        
        
               
          <Route  path="/shop" component={Shop}/>
              
          <Route  path="/review" component={Review}/>
                 
          <Route  path="/manage" component={Inventory}/>
          <Route exact path="/" component={Shop}/>
          <Route path='/product/:productkey' component={Productdetail}></Route>
        
               
          
            
        
      </Router>
      
     
    </div>
  );
}

export default App;
