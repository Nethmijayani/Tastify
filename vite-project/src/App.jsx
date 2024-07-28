
import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Header from './Components/Header'
import LatestRecipes from './Components/LatestRecipes'
import Navbar from './Components/Navbar'
import RecipeCategories from './Components/RecipeCategories'


function App() {
  

  return (
    <>
    <Navbar/>
    <Header/>
    <RecipeCategories/>
    <LatestRecipes/>
    <About/>
    <Footer/>
    
    </>
  )
}

export default App
