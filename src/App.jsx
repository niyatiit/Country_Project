import React from 'react'
import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Country from './Pages/Country'
import Contect from './Pages/Contect'
import Applayout from './components/Layout/Applayout'
import ErrorPages from './Pages/ErrorPages'
import CountryDetails from './components/Layout/CountryDetails'

const router = createBrowserRouter([
  {
    // this is one type of folder than store the all headers ans footers only 
    path : "/",
    element : <Applayout/>,
    errorElement : <ErrorPages/>,
    children : [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element : <About/>
      },
      {
        path : "/country",
        element : <Country/>
      },
      {
        path : "/country/:id",
        element : <CountryDetails/>
      },
      {
        path : "/contect",
        element : <Contect/>
      }
    ]
  }
 
])

function App() {
  
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App