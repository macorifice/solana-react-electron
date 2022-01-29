import React from 'react';
import {HashRouter,Route,Routes} from "react-router-dom";
import Balance from './Balance';
import Charts from './Charts';
import History from './History';
import HomePage from './HomePage';
import Login from './Login';
import Profile from './Profile';
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
        <Route path="/charts" element={<Charts/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>     
    </HashRouter>    
  );
}

export default App;