import React from 'react'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import {BrowserRouter,Routes,Route} from "react-router-dom"
const App = () => {

  return (
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>

  )
}

export default App;