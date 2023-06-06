import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Unio from './Pages/Unio.tsx'
import './index.css'
import Error from './Pages/Error.tsx'
import Fraggen from './Pages/Fraggen.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/unio',
    element: <Unio />,
  },
  {
    path: '/fraggen',
    element: <Fraggen />,
  },
  {
    path: '/venderavon',
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
