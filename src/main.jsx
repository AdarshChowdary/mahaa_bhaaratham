import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Mahaabharatham from './components/Mahaabharatham.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { path: '/', element: <Hero/>, },
  { path: '/mahaa_bhaaratham', element: <Mahaabharatham/>, },
  { path: '/today_story', element: <Story />, }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
