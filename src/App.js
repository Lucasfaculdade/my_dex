import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagedex from './Pagedex';

function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Pagedex />} />
                    <Route path="/PkInfo" element={<PkInfo/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;