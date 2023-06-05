
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './contenedores/Login';
import Podcast from './contenedores/Podcast';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header></Header>
      <div className='space'></div>
      <div className='app'>
      <Routes>
        <Route>  
        <Route path="/login" element={<Login />}></Route>
        <Route path="/podcast" element={<Podcast />}></Route>
        </Route>
      </Routes>
      </div>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
