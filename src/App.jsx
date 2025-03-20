import Header from "./components/Header"
import DefaultLayout from "./layouts/DefaultLayout"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import GlobalContext from "./contexts/GlobalContext"
import { useState } from "react"
function App() {
 
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
    <BrowserRouter>
    <Routes>
      <Route Component={ DefaultLayout }>
      <Route path="/" Component={ HomePage } />
      <Route path="/movies/:id" Component={ MoviesPage } />       
      </Route>
    </Routes>   
    </BrowserRouter>
    </GlobalContext.Provider>
    
    </>
  )
}

export default App
