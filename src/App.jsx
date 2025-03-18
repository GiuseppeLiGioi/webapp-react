import Header from "./components/Header"
import DefaultLayout from "./layouts/DefaultLayout"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route Component={ DefaultLayout }>
      <Route path="/" Component={ HomePage } />
      <Route path="/movies/:id" Component={ MoviesPage } />

   

      </Route>
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
