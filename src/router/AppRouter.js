import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Error from '../components/Error'
import Details from '../pages/Details'
import Product from '../pages/Product'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Product/>}/> 
        <Route path='/details/:id' element={<Details/>}/> 
        <Route path='*' element={<Error/>}/> 
      </Routes>
    </Router>
  )
}

export default AppRouter
