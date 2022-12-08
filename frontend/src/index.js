import React from 'react';
import ReactDOM from 'react-dom/client';
import Start from './start/Start'
import SelectCategory from './selectcategory/src/App'
import {BrowserRouter,Routes,Route} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('content'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Start/>}/>
            <Route path="/selectcategory" element={<SelectCategory/>}/>
        </Routes>
    </BrowserRouter>
);