import './App.css'
import MyNavbar from './Components/MyNavbar'
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'
import DrinkPage from './Components/DrinkPage/DrinkPage'
import ClubPage from './Components/ClubPage/Club'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPayment from './Components/PaymentPage/MyPayment'
import Contact from "./Components/ContactPage/Contact"


function App() {

  return (
    <>
    <Router>
      <MyNavbar/>

      <Routes>
      <Route path= '/' element={<HomePage />}></Route>
      <Route path= '/drink' element={<DrinkPage />}></Route>
      <Route path= '/club' element={<ClubPage />}></Route>
      <Route path= '/cart' element={<MyPayment />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer/>
       
 
   </Router>


 
 

    </>
  )
}

export default App
