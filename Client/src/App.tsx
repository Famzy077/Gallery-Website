import React from 'react'
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.tsx'
import Gallery from './components/Gallery.tsx'
import ErrorPage from './components/ErrorPage.tsx'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/gallery',
      element: <Gallery/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App