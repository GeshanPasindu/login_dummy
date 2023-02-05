
import './App.css';
import Registration from './pages/Registration';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Registration/>}/>
        </Routes>
        
      
        
      
    </div>
  );
}

export default App;
