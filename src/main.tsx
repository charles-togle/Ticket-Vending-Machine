import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./TVM/pages/Homepage";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
