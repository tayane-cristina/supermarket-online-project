import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import useFetch from './hooks/useFetch'
import Home from './pages/Home';
import Mercearia from './pages/Mercearia';
import Navbar from './components/Navbar';

function App() {

  const url = "http://localhost:3000/products"

  const { data: produtos} = useFetch(url)
  

  return (
    <div className="App">

      <BrowserRouter>
        <h1>Super Market Online</h1>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home produtos={produtos}/>}></Route>
          <Route path='/mercearia' element={<Mercearia produtos={produtos}/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
