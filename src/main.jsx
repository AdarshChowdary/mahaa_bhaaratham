import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Mahaabhaaratham from './components/Mahaabhaaratham.jsx'
import TodayStory from './components/TodayStory.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mahaabhaaratham', element:<Mahaabhaaratham/>,
  },
  { path: '/todaystory', element: <TodayStory />, }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
