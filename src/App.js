import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import GetUsers from './Pages/GetUsers';
import Addtin from './Pages/Adddetails';
import Eduser from "./Pages/EditUser"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetUsers/>}/>
        <Route path='/add' element={<Addtin/>}/>
        <Route path='/edus/:id' element={<Eduser/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;