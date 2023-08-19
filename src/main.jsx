import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { 
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements 
  } from "react-router-dom"
import NotFound from './pages/NotFound'
import Layout from './components/Layout.jsx'
import SimpleCard from './pages/SimpleCard.jsx'
import SimpleLandingPage from './pages/SimpleLandingPage.jsx'
import DataAnalytics from './pages/DataAnalytics.jsx'
import CarSales from './pages/CarSales.jsx'
import DroneSite from './pages/DroneSite.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<App />} />
    <Route path='/simple-card' element={<SimpleCard />} />
    <Route path='/simple-landing-page' element={<SimpleLandingPage />} />
    <Route path='/data-analytics' element={<DataAnalytics />} />
    <Route path='/car-sales' element={<CarSales />} />
    <Route path='/drone-site' element={<DroneSite />} />

    <Route path="*" element={<NotFound />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
