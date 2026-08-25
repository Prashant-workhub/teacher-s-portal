import "./index.css";
import { RouterProvider, StrictMode, ThemeProvider, createRoot, router } from "./components/imports";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
