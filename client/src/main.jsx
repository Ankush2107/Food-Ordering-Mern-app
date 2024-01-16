import './index.css'

import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import AuthProvider from './contexts/AuthProvider.jsx'
import router from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
