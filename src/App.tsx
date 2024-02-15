import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import AppSpaceFlight from "./components/AppSpaceFlight"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SingleArticle from "./components/SingleArticle"

function App() {
  
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route element={<AppSpaceFlight/>} path="/"/>
      <Route element={<h1>404-not found</h1>}path="*"/>
      <Route path="/articles/:id" element={<SingleArticle/>} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
