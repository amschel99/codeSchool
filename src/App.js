import React from 'react'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Player from './components/Player'
const App = () => {
  return (
    <BrowserRouter>
   
    <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/player/:id' element={<Player/>}/>
    </Routes>
     </BrowserRouter>
  )
}

export default App