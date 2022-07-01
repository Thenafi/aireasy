import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SimilarProperty from './component/SimilerProduct/SimilarProperty.js';
import { AuthProvider } from './Context/AuthContext';
import { SimulationProvider } from './Context/ProfitSimulationContext';
import Home from './Home.js';
import Signup from './component/Authentication/Signup';
import Login from './component/Authentication/Login'
import { CoordinateProvider } from "./Context/MapRelatedContext";
import Purchase from './Purchase.js';
import StartPage from './StartPage';


function App() {
  return (
    <>
    <CoordinateProvider>
      <SimulationProvider>
        <AuthProvider>
          <Router>
            <Routes>
                 <Route  path='/'  element={ <StartPage/> }   />
                    <Route  path='/dashboard'  element={ <Home/> }   />
                    <Route path='/similarproperties' element={<SimilarProperty/>} /> 
                    <Route path='/signup' element={<Signup/>} /> 
                    <Route path='/login' element={<Login/>} /> 
                    <Route path='/purchase' element={<Purchase/>} /> 
            </Routes>
          </Router>
        </AuthProvider>
      </SimulationProvider>
    </CoordinateProvider>
    </>
  );
}

export default App;
