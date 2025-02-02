// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './pages/home/home'
import Error from './pages/error/error'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App