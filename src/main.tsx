import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {router} from './App.tsx'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/theme/ThemeProvider'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
