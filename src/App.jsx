import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ListEmployeeComponents from './coponents/ListEmployeeComponents'
import HeaderComponent from './coponents/HeaderComponent'
import FooterComponent from './coponents/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent/>
      <ListEmployeeComponents/>
      <FooterComponent/>
      
    </>
  )
}

export default App
