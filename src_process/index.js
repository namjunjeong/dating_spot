import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import Process from './Process';
import Error from './Error';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/process" element={<Process/>}/>
            <Route path="/error" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
