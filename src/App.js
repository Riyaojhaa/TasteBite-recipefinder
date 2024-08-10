// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home';
import Setbtn from './components/Allfoodpages/Setbtn';
import Setbtn2 from './components/PopularCategories/Setbtn2';
import Setbtn3 from './components/SweetToothpages/Setbtn3';
import { Routes, Route , Navigate } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails'
import PizzaApi from './components/PopularCategories/PizzaApi'
import PastaApi from './components/PopularCategories/PastaApi'
import VeganApi from './components/PopularCategories/VeganApi'
import BreakfastApi from './components/PopularCategories/BreakfastApi'
import DessertsApi from './components/PopularCategories/DessertsApi'
import SmoothiesApi from './components/PopularCategories/SmoothiesApi'
import Vegetarian from './components/Recipes/Vegetarian'
import NonVegetarian from './components/Recipes/Nonvegetarian'
import SearchResultPage from './components/SearchResultPage'

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route exact  path="/" element={<Home />} />      
        <Route exact path="/DeliciousFood" element = {<Setbtn />} />
        <Route exact path="/PopularCategories" element = {<Setbtn2 />} />
        <Route exact path="/SweetTooth" element = {<Setbtn3 />} />
        <Route exact path="/PopularCategories/Pizza" element = {<PizzaApi />} />
        <Route exact path="/PopularCategories/Pasta" element = {<PastaApi />} />
        <Route exact path="/PopularCategories/Vegan" element = {<VeganApi />} />
        <Route exact path="/PopularCategories/Smoothies" element = {<SmoothiesApi />} />
        <Route exact path="/PopularCategories/Breakfast" element = {<BreakfastApi />} />
        <Route exact path="/PopularCategories/Desserts" element = {<DessertsApi />} />
        <Route exact path='/Recipes/VegetarianRecipes' element = {<Vegetarian />} />
        <Route exact path='/Recipes/NonVegetarianRecipes' element = {<NonVegetarian />} />
        <Route exact path="*" element={<Navigate to="/" />} />
        <Route path="/recipe/:uri" element={<RecipeDetails />} />
        <Route path="/search/:query" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
