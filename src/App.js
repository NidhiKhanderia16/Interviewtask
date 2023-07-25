import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Product from './components/Product';

function App() {
  return (
    <div className="App">

<Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/home/:id' element={<Product/>}></Route>



  </Routes>    
    </div>
  );
}

export default App;
