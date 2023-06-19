import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import {Layout} from "./Layout";
import {Comments} from "./components";


function App() {

  return (
    <div className="width">
      <Routes>
          <Route path={'/'} element={<Layout/>}>
              <Route index element={<Comments/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
