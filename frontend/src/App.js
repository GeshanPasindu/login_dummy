
import './App.css';
import Registration from './pages/Registration';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sellers from './pages/Sellers';
import Buyers from './pages/Buyers';
import Delivery from './pages/Delivery';
import Commission from './pages/Commission';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Registration/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Sellers' element={<Sellers/>}/>
        <Route path='/Buyers' element={<Buyers/>}/>
        <Route path='/Delivery' element={<Delivery/>}/>
        <Route path='/Commission' element={<Commission/>}/>
        </Routes>
        
      
        
      
    </div>
  );
}

export default App;
