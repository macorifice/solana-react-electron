import React from 'react';
import {HashRouter,Route,Routes} from "react-router-dom";
import Balance from './Balance';
import HomePage from './HomePage';
import Login from './Login';
import SplashScreen from './SplashScreen';
    
const App = ()=> {
 
  return (
    <HashRouter>
      {/* <div className="menu pt-10">
        <Link to="/"><h2>SplashScreen</h2></Link>
        <Link to="/home"><h2>HomePage</h2></Link>
      </div> */}
      <Routes>
        <Route path="/" element={<SplashScreen/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/balance" element={<Balance/>}/>
      </Routes>     
    </HashRouter>    
  );
}

export default App;