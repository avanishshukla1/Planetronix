import {lazy} from 'react'
import {BrowserRouter , Routes,Route} from "react-router-dom"
import "./assets/style.css"
import Auth from './components/Auth/Auth'


const SqlEditor=lazy(()=>import("./components/SqlEditor"))

const App = () => {
  return (
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<SqlEditor/>}/>
      <Route path='/Login' element={<Auth/>}/>
      <Route path='/Register' element={<Auth />}/>
     </Routes>
   </BrowserRouter>
  )  
}

export default App