import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/Home';
import Form from './Components/Form';
import Login from './Components/Login';


function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/form' exact element={<Form/>}/>
    <Route path='/login' exact element={<Login/>}/>
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
