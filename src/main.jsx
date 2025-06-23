import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import "./index.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoogleOAuthProvider clientId="1046791269108-f2v696or6lumqgrbilntsmmol9jro5hq.apps.googleusercontent.com">
      <App />
   </GoogleOAuthProvider>
      
  
  </StrictMode>,
)
