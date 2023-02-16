import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import Items from '../pages/Items';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';
import Signin from '../pages/Signin'
import Signup from '../pages/Signup';
import ProtectedRoute from './ProtectedRoute';


const Router = () => {
  return  <Routes>
    <Route path='/' element={<Navigate to='home'/>}/>
    <Route path='home' element={<Home/>}/> 
    <Route path='items' element={<Items/>}/> 
    <Route path='productdetails/:id'element={<ProductDetail/>}/> 
    <Route path='cart' element={<Cart/>}/> 
    <Route path='checkout' element={ <ProtectedRoute>
    <Checkout/>
    </ProtectedRoute>}/> 
    <Route path='signin' element={<Signin/>}/> 
    <Route path='signup' element={<Signup/>}/> 

  </Routes>
}

export default Router