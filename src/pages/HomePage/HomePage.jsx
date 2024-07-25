import React from 'react'
import Header from '../../components/Header/Header'
import Faculty from '../Faculty/Faculty'
import Principle from '../../components/Priciple/Principle'
import Type from '../../components/Type/Type'
import Achivments from '../../components/Achivments/Achivments'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Principle/>
      <Type/>
      <Achivments/>
      
    </div>
  )
}

export default HomePage
