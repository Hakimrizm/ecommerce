import { Route, Routes } from "react-router-dom"
import Cta from "./components/front/Cta"
import Navbar from "./components/front/Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      { children }
    </>
  )
}
