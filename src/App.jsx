import './App.css'
import MyNavbar from './Components/MyNavbar'
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'
import DrinkPage from './Components/DrinkPage/DrinkPage'
import ClubPage from './Components/ClubPage/Club'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      <MyNavbar/>

      <Routes>
      <Route path= '/' element={<HomePage />}></Route>
      <Route path= '/drink' element={<DrinkPage />}></Route>
      <Route path= '/club' element={<ClubPage />}></Route>

      </Routes>
      <Footer/>
       
 
   </Router>


 
 

    </>
  )
}

export default App
