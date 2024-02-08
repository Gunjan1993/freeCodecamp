import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <GoogleOAuthProvider clientId="609961620095-0ujsk9iqjjcgkhd0blqnsk82me1cnlht.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
