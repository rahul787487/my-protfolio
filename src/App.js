

import React from 'react'
import NavBar from './componets/NavBar'
import Home from './componets/Home'
import SocialLinks from './componets/SocialLinks'
import About from './componets/About'
import Protfolio from './componets/Protfolio'
import Experience from './componets/Experience'
import Contect from './componets/Contact'
import Footer from './componets/Footer'

const App = () => {
  return (
    <div>
     <NavBar />
     <Home/>
     <About/>
     <Protfolio/>
     <Experience/>
     <SocialLinks/>
     <Contect/>
     <Footer/>
    </div>
  )
}

export default App

