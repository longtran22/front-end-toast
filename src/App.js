import logo from './logo.svg';
import './App.css';
import Main  from './components/introduce/Main_intro.js'
import {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
        <div className="App" >
<Routes>
                <Route path="/" element={<Main />} /> {/* Trang chính */}

            </Routes>
    </div>


  );
}
export default App;
