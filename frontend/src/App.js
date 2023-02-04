
import './App.css';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sellers from './pages/Sellers';
import Buyers from './pages/Buyers';
import Delivery from './pages/Delivery';
import Commission from './pages/Commission';

import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        </Routes>
        
      <Sidebar>
        <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Sellers' element={<Sellers/>}/>
        <Route path='/Buyers' element={<Buyers/>}/>
        <Route path='/Delivery' element={<Delivery/>}/>
        <Route path='/Commission' element={<Commission/>}/>
      </Routes>
       </Sidebar>
        
      
    </div>
  );
}

export default App;
