import { BrowserRouter, Routes, Route, } from "react-router-dom"
import NavbarApp from "./components/NavbarApp"
import Home from "../src/views/HomeScreen"
import LoginScreen from "./views/LoginScreen"
import AboutScreen from "./views/AboutScreen"
import ContactScreen from "./views/ContactScreen"
import ProductsScreen from "./views/ProductsScreen"
import ErrorScreen from "./views/ErrorScreen"
import RouteTwo from "../src/routes/RouteTwo"


function App() {
 

  return (
    <BrowserRouter>
    <div className="w-100">
<Routes>
  <Route path="/*" element={<RouteTwo/>}/>
  <Route path="/login" element={<LoginScreen/>}/>
</Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
