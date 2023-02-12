import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import ProductWithId from './pages/ProductWithId'
import ProfilePage from './pages/ProfilePage'
import NotFound from './pages/NotFound'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {


  const isAuthenticated = false;

  return (
    <div className='App'>
      <h1>React-Router</h1>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductPage />} />
          {/* <Route path='/products/:id' element={<ProductWithId />} /> */}
          <Route path='/products/:productId' element={<ProductWithId />} />
          <Route path='/profile' element={isAuthenticated ? <ProfilePage  />: <Navigate to='/' />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App