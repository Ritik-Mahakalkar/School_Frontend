import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nevbar from './components/Nevbar/Nevbar'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import Contact from './components/Contact/Contact'
import Gallary from './components/Gallary/Gallary'
import Faculty from './pages/Faculty/Faculty'
import About from './pages/About/About'
import Admission from './pages/Admission/Admission'
import Principle from './components/Priciple/Principle'
import Type from './components/Type/Type'
import Acadamics from './pages/Acadamics/Acadamics'
import Student from './pages/Student/Student'
import Achivments from './components/Achivments/Achivments'
import Footer from './components/Footer/Footer'
import { Route,  Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Nevbar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallary' element={<Gallary/>}/>
      <Route path='/faculty' element={<Faculty/>}/>
      <Route path='/acadamics' element={<Acadamics/>} />
      <Route path='/student' element={<Student/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/admission' element={<Admission/>}/>
     </Routes>
     <Footer/>
     
    
    
     
      
    </>
  )
}

export default App
