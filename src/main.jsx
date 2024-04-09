import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import UserAuth from './utils/authentication/UserAuth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuth>
      <RouterProvider router={Router}>
      </RouterProvider>
    </UserAuth>
  </React.StrictMode>,
)
