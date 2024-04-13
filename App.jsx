import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Test from './Test'
function App() {
  return (
    <Routes>
    <Route exact path = '/' element={<Test/>}/>
    </Routes>
  );
}

export default App;
