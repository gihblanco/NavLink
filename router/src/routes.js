import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Componentes/Pagina/Home/index.js';
import './App.css';
import Menu from './Componentes/Menu/index.js';
import Contato from './Componentes/Pagina/Contatos/index.js';
import Layout from './Componentes/Layout/index.js';

function AppRoutes() {
  
  return (
    <BrowserRouter>
            <Menu/>
            <Routes>
              <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/contatos' element={<Contato/>}/>
              </Route>
              <Route path='*' element={<div>Página não encontrada :\</div>}/>
            </Routes>
    
    </BrowserRouter>
  );
}

export default AppRoutes;
