import React,{useEffect} from 'react';
import {  Route, Routes, BrowserRouter} from 'react-router-dom';
import {Categorias, Inicio, Productos, Usuarios, Login} from './pages';

import store from './store';

import Navigation from './components/Navigation';
const RoutesComponent = () => {

  useEffect(() => {
    console.log(store.getState())
    
  }, []);
    return (
        <BrowserRouter>
        <Navigation/>  

        <Routes>
          <Route exact path="/" element={<Inicio/>}/>

          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/usuarios" element={<Usuarios/>}/>
          <Route exact path="/productos" element={<Productos/>}/>
          <Route exact path="/categorias" element={<Categorias/>}/>
    
        </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;