import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Cart from './assets/context/Cart.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Cart>
    <App />
    </Cart>
    
  </StrictMode>,
)
