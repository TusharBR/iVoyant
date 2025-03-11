import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Dndcontext from './components/Context/Dndcontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dndcontext>
    <App />
    </Dndcontext>
  </StrictMode>,
)