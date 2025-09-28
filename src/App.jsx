import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ListEmployeeComponents from './coponents/ListEmployeeComponents'
import HeaderComponent from './coponents/HeaderComponent'
import FooterComponent from './coponents/FooterComponent'
import {BrowserRouter ,Routes ,Route} from 'react-router-dom'
import EmployeeComponent from './coponents/EmployeeComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<ListEmployeeComponents/>} >  </Route>
        <Route path='/employees' element={<ListEmployeeComponents/>} >  </Route>
          {/* http://localhost:3000/add-employee */}
        <Route path='/add-employee' element={<EmployeeComponent/>} >  </Route>
      </Routes>
      
      <FooterComponent/>

      </BrowserRouter>
      
    </>
  )
}

export default App
