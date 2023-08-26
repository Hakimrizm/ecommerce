import { Routes, Route, Router } from "react-router-dom"
import Home from "./Home"
import Login from "./login/Login"
import Register from "./register/register"
import Dashboard from "./dashboard/Dashboard"
import ProductDashboard from "./dashboard/ProductDashboard"
import PageNotFound from "./PageNotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/register" element={<Register />}/>

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/product" element={<ProductDashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App
