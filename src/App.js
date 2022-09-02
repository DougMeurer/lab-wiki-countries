import './App.css'
import NavigationBar from './components/NavigationBar'
import { Routes, Route } from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import CountriesList from './pages/CountriesList'
import CountriesDetails from './pages/CountriesDetails'


function App() {


  return (
    <div className="App">
    <NavigationBar />
    <CountriesList />
    <Routes>
      <Route path='/:alpha3code' element={<CountriesDetails />}/>
      <Route path='*' element={<ErrorPage />}/>
    </Routes>
    </div>
  );
}

export default App;
